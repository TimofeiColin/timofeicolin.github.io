import { Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

import { SkillGroup } from '@src/cv.model';

@Component({
  selector: 'ocv-skill-group',
  imports: [MatExpansionModule, MatChipsModule],
  templateUrl: './ocv-skill-group.html',
  styleUrl: './ocv-skill-group.scss',
})
export class OcvSkillGroup {
  readonly group = input.required<SkillGroup>();
}
