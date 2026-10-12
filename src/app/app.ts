import { Component, DOCUMENT, DestroyRef, computed, effect, inject, signal } from '@angular/core';

import { CV } from '@src/cv-data';
import { LANGS, Lang } from '@src/cv.model';
import { localizeCv } from '@src/cv-localize';
import { OcvHeader } from './components/ocv-header/ocv-header';
import { OcvContact } from './components/ocv-contact/ocv-contact';
import { OcvSummary } from './components/ocv-summary/ocv-summary';
import { OcvJob } from './components/ocv-job/ocv-job';
import { OcvEducation } from './components/ocv-education/ocv-education';
import { OcvSectionTitle } from './components/ocv-section-title/ocv-section-title';
import { OcvSkillGroup } from './components/ocv-skill-group/ocv-skill-group';
import { OcvLanguage } from './components/ocv-language/ocv-language';
import { OcvHobby } from './components/ocv-hobby/ocv-hobby';
import { OcvButton } from './components/ocv-button/ocv-button';
import { OcvUpdated } from './components/ocv-updated/ocv-updated';

const LANG_PARAM = 'lang';
const DEFAULT_LANG: Lang = 'en';

const THEME_KEY = 'ocv-theme';
const THEMES = ['light', 'dark'] as const;
type Theme = (typeof THEMES)[number];

const DARK_QUERY = '(prefers-color-scheme: dark)';

function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as readonly string[]).includes(value);
}

function isTheme(value: string | null): value is Theme {
  return value !== null && (THEMES as readonly string[]).includes(value);
}

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
  protected readonly lang = signal(this.langFromUrl());
  protected readonly cv = computed(() => localizeCv(CV, this.lang()));
  protected readonly theme = signal(this.storedTheme() ?? this.systemTheme());

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
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';

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
    return this.darkQuery()?.matches ? 'dark' : 'light';
  }

  private followSystemTheme(): void {
    const query = this.darkQuery();

    if (!query) {
      return;
    }

    const onChange = (event: MediaQueryListEvent): void => {
      if (!this.storedTheme()) {
        this.theme.set(event.matches ? 'dark' : 'light');
      }
    };

    query.addEventListener('change', onChange);
    this.destroyRef.onDestroy(() => query.removeEventListener('change', onChange));
  }

  protected print(): void {
    this.document.defaultView?.print();
  }
}
