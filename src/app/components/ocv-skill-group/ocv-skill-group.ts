import { Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { SkillGroup } from '../../../cv.model';

@Component({
  selector: 'ocv-skill-group',
  imports: [MatExpansionModule],
  templateUrl: './ocv-skill-group.html',
  styleUrl: './ocv-skill-group.scss'
})
export class OcvSkillGroup {
  readonly group = input.required<SkillGroup>();
}
