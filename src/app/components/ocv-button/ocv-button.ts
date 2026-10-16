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
  readonly label = input<string>();
  readonly icon = input<string>();
  readonly active = input(false);
  /** Renders a link instead of a button. */
  readonly href = input<string>();
  /** File name to save the link target as; only used with `href`. */
  readonly download = input<string>();

  readonly action = output<void>();
}
