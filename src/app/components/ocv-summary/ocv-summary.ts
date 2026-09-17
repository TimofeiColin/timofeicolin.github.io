import { Component, input } from '@angular/core';

@Component({
  selector: 'ocv-summary',
  templateUrl: './ocv-summary.html',
  styleUrl: './ocv-summary.scss'
})
export class OcvSummary {
  readonly text = input.required<string>();
}
