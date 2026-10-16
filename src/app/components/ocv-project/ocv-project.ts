import { Component, input } from '@angular/core';

import { Project } from '@src/app/cv';

@Component({
  selector: 'ocv-project',
  templateUrl: './ocv-project.html',
  styleUrl: './ocv-project.scss',
})
export class OcvProject {
  readonly project = input.required<Project>();
}
