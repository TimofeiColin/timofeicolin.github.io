import { Component, DOCUMENT, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ocv-print-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './ocv-print-button.html',
  styleUrl: './ocv-print-button.scss',
})
export class OcvPrintButton {
  private readonly document = inject(DOCUMENT);

  protected print(): void {
    this.document.defaultView?.print();
  }
}
