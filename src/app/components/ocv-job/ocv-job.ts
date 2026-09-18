import { Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { Job } from '@src/cv.model';
import { OcvProject } from '../ocv-project/ocv-project';

@Component({
  selector: 'ocv-job',
  imports: [MatExpansionModule, OcvProject],
  templateUrl: './ocv-job.html',
  styleUrl: './ocv-job.scss',
})
export class OcvJob {
  readonly job = input.required<Job>();
}
