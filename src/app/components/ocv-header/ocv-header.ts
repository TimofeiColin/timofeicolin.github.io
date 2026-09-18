import { Component, input } from '@angular/core';

@Component({
  selector: 'ocv-header',
  templateUrl: './ocv-header.html',
  styleUrl: './ocv-header.scss',
})
export class OcvHeader {
  readonly name = input.required<string>();
  readonly position = input.required<string>();
}
