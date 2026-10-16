import { Component, computed, input } from '@angular/core';

import { Lang } from '@common/lang';
import { formatDate } from '@common/time';

@Component({
  selector: 'ocv-updated',
  templateUrl: './ocv-updated.html',
  styleUrl: './ocv-updated.scss',
})
export class OcvUpdated {
  readonly label = input.required<string>();
  readonly date = input.required<string>();
  readonly lang = input.required<Lang>();

  protected readonly formatted = computed(() => formatDate(this.date(), this.lang()));
}
