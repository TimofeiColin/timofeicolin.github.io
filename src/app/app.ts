import { Component, computed, inject } from '@angular/core';

import { Lang, LangService } from '@common/lang';
import { DARK_THEME, LIGHT_THEME, Theme, ThemeService } from '@common/theme';
import { CV, localizeCv, pdfHref, pdfName } from '@cv';

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

const THEME_TOGGLE_ICONS: Record<Theme, string> = {
  [LIGHT_THEME]: 'dark_mode',
  [DARK_THEME]: 'light_mode',
};

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
  private readonly langService = inject(LangService);
  private readonly themeService = inject(ThemeService);

  protected readonly langs = this.langService.langs;
  protected readonly lang = this.langService.lang;
  protected readonly cv = computed(() => localizeCv(CV, this.lang()));
  protected readonly themeIcon = computed(() => THEME_TOGGLE_ICONS[this.themeService.theme()]);

  protected readonly pdfHref = computed(() => pdfHref(this.lang()));
  protected readonly pdfName = computed(() => pdfName(this.cv().name, this.lang()));

  protected setLang(lang: Lang): void {
    this.langService.set(lang);
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }
}
