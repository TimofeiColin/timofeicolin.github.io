import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Contact } from '../../../cv.model';

@Component({
  selector: 'li[ocv-contact]',
  imports: [MatIconModule],
  templateUrl: './ocv-contact.html',
  styleUrl: './ocv-contact.scss'
})
export class OcvContact {
  readonly contact = input.required<Contact>();
}
