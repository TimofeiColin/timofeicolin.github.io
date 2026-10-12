export const LANGS = ['ro', 'ru', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export type LangString = string | Record<Lang, string>;

export type TitledSection<T> = {
  title: string;
  content: T;
};

export type Localized<T> = T extends string
  ? LangString
  : T extends readonly (infer U)[]
    ? Localized<U>[]
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T;

interface ContactBase {
  label: string;
  href?: string;
}

interface IconContact extends ContactBase {
  icon: string;
  svg?: never;
}

interface SvgContact extends ContactBase {
  svg: string;
  icon?: never;
}

export type Contact = IconContact | SvgContact;

export interface Project {
  name?: string;
  bullets: string[];
}

export interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  expanded?: boolean;
  projects: Project[];
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
  items?: string[];
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
  jobs: TitledSection<Job[]>;
  education: TitledSection<Education[]>;
  skills: TitledSection<SkillGroup[]>;
  hobbies: TitledSection<Hobby[]>;
  languages: TitledSection<Language[]>;
  updated: TitledSection<string>;
}

export type CvSource = Localized<Cv>;
