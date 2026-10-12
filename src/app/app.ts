import { Component, DOCUMENT, computed, effect, inject, signal } from '@angular/core';

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

const LANG_PARAM = 'lang';

const DEFAULT_LANG: Lang = 'en';

function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as readonly string[]).includes(value);
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
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);

  protected readonly langs = LANGS;
  protected readonly lang = signal(this.langFromUrl());
  protected readonly cv = computed(() => localizeCv(CV, this.lang()));

  constructor() {
    effect(() => {
      const lang = this.lang();

      this.document.documentElement.lang = lang;
      this.writeLangToUrl(lang);
    });
  }

  protected setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  /** Reads `?lang=` so a given language can be linked to directly. */
  private langFromUrl(): Lang {
    const view = this.document.defaultView;

    if (!view) {
      return DEFAULT_LANG;
    }

    const value = new URLSearchParams(view.location.search).get(LANG_PARAM)?.toLowerCase() ?? null;

    return isLang(value) ? value : DEFAULT_LANG;
  }

  /** Keeps `?lang=` in step with the current language, without adding history entries. */
  private writeLangToUrl(lang: Lang): void {
    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    const url = new URL(view.location.href);
    url.searchParams.set(LANG_PARAM, lang);
    view.history.replaceState(null, '', url);
  }

  protected print(): void {
    this.document.defaultView?.print();
  }
}
