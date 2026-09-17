import { Component } from '@angular/core';

import { CV } from '../cv-data';
import { OcvHeader } from './components/ocv-header/ocv-header';
import { OcvContact } from './components/ocv-contact/ocv-contact';
import { OcvSummary } from './components/ocv-summary/ocv-summary';
import { OcvJob } from './components/ocv-job/ocv-job';
import { OcvEducation } from './components/ocv-education/ocv-education';
import { OcvSectionTitle } from './components/ocv-section-title/ocv-section-title';
import { OcvSkillGroup } from './components/ocv-skill-group/ocv-skill-group';
import { OcvLanguage } from './components/ocv-language/ocv-language';
import { OcvHobby } from './components/ocv-hobby/ocv-hobby';

@Component({
  selector: 'app-root',
  imports: [
    OcvHeader,
    OcvContact,
    OcvSummary,
    OcvJob,
    OcvEducation,
    OcvSectionTitle,
    OcvSkillGroup,
    OcvLanguage,
    OcvHobby
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly cv = CV;
}
