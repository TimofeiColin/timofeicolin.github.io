import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import {
  CONTACTS,
  DOT_COUNT,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  NAME,
  SKILLS,
  SUMMARY,
  TITLE
} from './cv-data';

@Component({
  selector: 'app-root',
  imports: [MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly name = NAME;
  protected readonly title = TITLE;
  protected readonly summary = SUMMARY;
  protected readonly contacts = CONTACTS;
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
  protected readonly skills = SKILLS;
  protected readonly languages = LANGUAGES;

  /** [1..5], used to render the language proficiency dots. */
  protected readonly dots = Array.from({ length: DOT_COUNT }, (_, i) => i + 1);
}
