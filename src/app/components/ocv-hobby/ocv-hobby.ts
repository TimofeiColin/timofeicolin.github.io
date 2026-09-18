import { Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { Hobby } from '@src/cv.model';

@Component({
  selector: 'ocv-hobby',
  imports: [MatExpansionModule],
  templateUrl: './ocv-hobby.html',
  styleUrl: './ocv-hobby.scss',
})
export class OcvHobby {
  readonly hobby = input.required<Hobby>();
}
