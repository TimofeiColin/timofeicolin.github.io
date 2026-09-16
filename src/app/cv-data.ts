export interface Contact {
  /** Material Icons ligature, or 'linkedin' for the inline brand SVG. */
  icon: string;
  label: string;
  href: string;
}

export interface ProjectBlock {
  /** Omitted for roles that list responsibilities without a project heading. */
  name?: string;
  bullets: string[];
}

export interface Job {
  company: string;
  role: string;
  dates: string;
  projects: ProjectBlock[];
}

export interface Education {
  school: string;
  degree: string;
  dates: string;
  location: string;
}

export interface Language {
  name: string;
  /** Filled dots out of DOT_COUNT. */
  level: number;
}

export const DOT_COUNT = 5;

export const NAME = 'Timofei Colin';
export const TITLE = 'Full-Stack Developer / Backend Engineer';

export const SUMMARY =
  'Full-Stack Developer with 4+ years of experience building scalable web applications ' +
  'using TypeScript, NestJS, React, and Angular. Experienced in backend architecture, ' +
  'API integrations, performance optimization, and modern frontend development. ' +
  'Contributed to large production systems, backend migrations, and technical leadership ' +
  'across multiple commercial projects.';

export const CONTACTS: Contact[] = [
  { icon: 'mail', label: 'timofeicolin@gmail.com', href: 'mailto:timofeicolin@gmail.com' },
  { icon: 'location_on', label: 'Chisinau, Moldova', href: '' },
  { icon: 'call', label: '068920605', href: 'tel:068920605' },
  {
    icon: 'linkedin',
    label: 'linkedin.com/in/timofei-colin-2a490b53',
    href: 'https://linkedin.com/in/timofei-colin-2a490b53'
  }
];

export const EXPERIENCE: Job[] = [
  {
    company: 'GLOBAL WEB',
    role: 'Full Stack Developer',
    dates: '01/2025 – 04/2026',
    projects: [
      {
        name: 'Hubble Project — Full-Stack Developer',
        bullets: [
          'Maintained and expanded backend functionality',
          'Contributed to Chrome extension development',
          'Developed website features and pages',
          'Participated in website redesign and performance optimization'
        ]
      },
      {
        name: 'Yours Truly Project — Lead Backend Developer',
        bullets: [
          'Designed and developed backend logic',
          'Integrated APIs and third-party services',
          'Maintained scalable server-side architecture',
          'Optimized system performance and data workflows'
        ]
      }
    ]
  },
  {
    company: 'Eligence',
    role: 'Full Stack Developer',
    dates: '01/2022 – 12/2024',
    projects: [
      {
        name: 'Hubble Project — Backend Developer',
        bullets: [
          'Rewrote the application backend from Ruby to NestJS',
          'Integrated third-party APIs and services',
          'Improved backend scalability and maintainability',
          'Optimized application performance and system architecture'
        ]
      },
      {
        name: 'Apprentice Project — Full-Stack Developer',
        bullets: [
          'Participated in website development',
          'Contributed to mobile application redesign',
          'Created interactive demos and platform features',
          'Collaborated on frontend and backend improvements'
        ]
      }
    ]
  },
  {
    company: 'KIVORK',
    role: 'Customer Relations Supervisor',
    dates: '09/2016 – 09/2021',
    projects: [
      {
        bullets: [
          'Customer Relations Supervisor',
          'Airline Communication Specialist',
          'Payment Resolutions Supervisor'
        ]
      }
    ]
  },
  {
    company: 'Dyninno Moldova',
    role: 'Schedule Changes Specialist',
    dates: '07/2015 – 08/2016',
    projects: [
      {
        bullets: ['Schedule Changes Specialist', 'Customer Support Specialist']
      }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: 'Moldova State University',
    degree: 'Bachelor of Science, Applied Computing',
    dates: '09/2013 – 06/2016',
    location: 'Chisinau, Moldova'
  }
];

export const SKILLS: string[] = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'REST APIs',
  'BullMQ',
  'Redis',
  'MongoDB',
  'PostgreSQL',
  'Prisma ORM',
  'TypeORM',
  'JWT Authentication',
  'Swagger',
  'React',
  'Angular',
  'Tailwind CSS',
  'Docker',
  'Git',
  'CI/CD basics',
  'Third-party API integrations'
];

export const LANGUAGES: Language[] = [
  { name: 'Romanian', level: 5 },
  { name: 'Russian', level: 5 },
  { name: 'English', level: 4 }
];
