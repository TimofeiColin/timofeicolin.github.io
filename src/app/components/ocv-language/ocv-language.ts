import { Component, input } from '@angular/core';

import { Language } from '@src/cv.model';

const DOT_COUNT = 5;

@Component({
  selector: 'li[ocv-language]',
  templateUrl: './ocv-language.html',
  styleUrl: './ocv-language.scss',
})
export class OcvLanguage {
  readonly language = input.required<Language>();

  protected readonly dots = Array.from({ length: DOT_COUNT }, (_, i) => i + 1);
}
