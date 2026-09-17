import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'h2[ocv-section-title]',
  imports: [MatIconModule],
  templateUrl: './ocv-section-title.html',
  styleUrl: './ocv-section-title.scss'
})
export class OcvSectionTitle {
  readonly icon = input.required<string>();
}
