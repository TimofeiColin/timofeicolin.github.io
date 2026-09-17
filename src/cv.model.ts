export interface Contact {
  icon?: string;
  svg?: string;
  label: string;
  href: string;
}

export interface ProjectBlock {
  name?: string;
  bullets: string[];
}

export interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  expanded?: boolean;
  projects: ProjectBlock[];
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Hobby {
  name: string;
  elements?: string[];
  images?: string[];
  expanded?: boolean;
}

export interface SkillGroup {
  name: string;
  skills: string[];
  expanded?: boolean;
}

export interface Language {
  name: string;
  level: number;
}

export interface Cv {
  name: string;
  position: string;
  summary: string;
  contacts: Contact[];
  jobs: Job[];
  education: Education[];
  skills: SkillGroup[];
  hobbies: Hobby[];
  languages: Language[];
}
