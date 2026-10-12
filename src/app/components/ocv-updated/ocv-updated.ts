import { Component, computed, input } from '@angular/core';

import { Lang } from '@src/cv.model';

const LOCALES: Record<Lang, string> = {
  ro: 'ro-RO',
  ru: 'ru-RU',
  en: 'en-GB',
};

@Component({
  selector: 'ocv-updated',
  templateUrl: './ocv-updated.html',
  styleUrl: './ocv-updated.scss',
})
export class OcvUpdated {
  readonly label = input.required<string>();
  readonly date = input.required<string>();
  readonly lang = input.required<Lang>();

  protected readonly formatted = computed(() =>
    new Intl.DateTimeFormat(LOCALES[this.lang()], {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(this.date())),
  );
}
