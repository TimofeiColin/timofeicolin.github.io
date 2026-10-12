import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ocv-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './ocv-button.html',
  styleUrl: './ocv-button.scss',
})
export class OcvButton {
  readonly label = input.required<string>();
  readonly icon = input<string>();
  readonly active = input(false);

  readonly action = output<void>();
}
