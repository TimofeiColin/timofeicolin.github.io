import { Component, DOCUMENT, DestroyRef, computed, effect, inject, signal } from '@angular/core';

import { CV, localizeCv } from '@src/app/cv';
import {
  OcvButton,
  OcvContact,
  OcvEducation,
  OcvHeader,
  OcvHobby,
  OcvJob,
  OcvLanguage,
  OcvSectionTitle,
  OcvSkillGroup,
  OcvSummary,
  OcvUpdated,
} from './components';
import { DEFAULT_LANG, LANGS, LANG_PARAM, Lang, isLang } from './common/lang';
import { DARK_QUERY, DARK_THEME, LIGHT_THEME, THEME_KEY, Theme, isTheme } from './common/theme';

@Component({
  selector: 'ocv-root',
  imports: [
    OcvHeader,
    OcvContact,
    OcvSummary,
    OcvJob,
    OcvEducation,
    OcvSectionTitle,
    OcvSkillGroup,
    OcvLanguage,
    OcvHobby,
    OcvButton,
    OcvUpdated,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly langs = LANGS;
  protected readonly darkTheme = DARK_THEME;
  protected readonly lang = signal(this.langFromUrl());
  protected readonly cv = computed(() => localizeCv(CV, this.lang()));
  protected readonly theme = signal(this.storedTheme() ?? this.systemTheme());
  
  protected readonly pdfHref = computed(() => `cv-${this.lang()}.pdf`);
  protected readonly pdfName = computed(
    () => `${this.cv().name.replaceAll(' ', '-')}-CV-${this.lang().toUpperCase()}.pdf`,
  );

  constructor() {
    effect(() => {
      const lang = this.lang();

      this.document.documentElement.lang = lang;
      this.writeLangToUrl(lang);
    });

    effect(() => {
      this.document.documentElement.dataset['theme'] = this.theme();
    });

    this.followSystemTheme();
  }

  protected setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  protected toggleTheme(): void {
    const next: Theme = this.theme() === DARK_THEME ? LIGHT_THEME : DARK_THEME;

    this.theme.set(next);
    this.writeStoredTheme(next);
  }

  private langFromUrl(): Lang {
    const view = this.document.defaultView;

    if (!view) {
      return DEFAULT_LANG;
    }

    const value = new URLSearchParams(view.location.search).get(LANG_PARAM)?.toLowerCase() ?? null;

    return isLang(value) ? value : DEFAULT_LANG;
  }

  private writeLangToUrl(lang: Lang): void {
    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    const url = new URL(view.location.href);
    url.searchParams.set(LANG_PARAM, lang);
    view.history.replaceState(null, '', url);
  }

  private storedTheme(): Theme | null {
    try {
      const value = this.document.defaultView?.localStorage.getItem(THEME_KEY) ?? null;

      return isTheme(value) ? value : null;
    } catch {
      return null;
    }
  }

  private writeStoredTheme(theme: Theme): void {
    try {
      this.document.defaultView?.localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }

  private darkQuery(): MediaQueryList | null {
    const view = this.document.defaultView;

    return typeof view?.matchMedia === 'function' ? view.matchMedia(DARK_QUERY) : null;
  }

  private systemTheme(): Theme {
    return this.darkQuery()?.matches ? DARK_THEME : LIGHT_THEME;
  }

  private followSystemTheme(): void {
    const query = this.darkQuery();

    if (!query) {
      return;
    }

    const onChange = (event: MediaQueryListEvent): void => {
      if (!this.storedTheme()) {
        this.theme.set(event.matches ? DARK_THEME : LIGHT_THEME);
      }
    };

    query.addEventListener('change', onChange);
    this.destroyRef.onDestroy(() => query.removeEventListener('change', onChange));
  }
}
