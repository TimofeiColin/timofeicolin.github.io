import { DOCUMENT, DestroyRef, Injectable, effect, inject, signal } from '@angular/core';

import { DARK_QUERY, DARK_THEME, LIGHT_THEME, THEME_KEY } from './consts';
import { isTheme } from './helpers';
import { Theme } from './types';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly current = signal(this.stored() ?? this.system());

  readonly theme = this.current.asReadonly();

  constructor() {
    effect(() => {
      this.document.documentElement.dataset['theme'] = this.current();
    });

    this.followSystem();
  }

  toggle(): void {
    const next: Theme = this.current() === DARK_THEME ? LIGHT_THEME : DARK_THEME;

    this.current.set(next);
    this.store(next);
  }

  private stored(): Theme | null {
    try {
      const value = this.document.defaultView?.localStorage.getItem(THEME_KEY) ?? null;

      return isTheme(value) ? value : null;
    } catch {
      return null;
    }
  }

  private store(theme: Theme): void {
    try {
      this.document.defaultView?.localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }

  private darkQuery(): MediaQueryList | null {
    const view = this.document.defaultView;

    return typeof view?.matchMedia === 'function' ? view.matchMedia(DARK_QUERY) : null;
  }

  private system(): Theme {
    return this.darkQuery()?.matches ? DARK_THEME : LIGHT_THEME;
  }

  private followSystem(): void {
    const query = this.darkQuery();

    if (!query) {
      return;
    }

    const onChange = (event: MediaQueryListEvent): void => {
      if (!this.stored()) {
        this.current.set(event.matches ? DARK_THEME : LIGHT_THEME);
      }
    };

    query.addEventListener('change', onChange);
    this.destroyRef.onDestroy(() => query.removeEventListener('change', onChange));
  }
}
