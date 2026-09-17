import { Component, input } from '@angular/core';

import { Education } from '../../../cv.model';

@Component({
  selector: 'ocv-education',
  templateUrl: './ocv-education.html',
  styleUrl: './ocv-education.scss'
})
export class OcvEducation {
  readonly education = input.required<Education>();
}
