import { Cv } from './cv.model';

export const CV: Cv = {
  name: 'Timofei Colin',

  position: 'Backend Engineer / Full-Stack Developer',

  summary:
    'Full-Stack Developer with 4+ years of experience building scalable web applications ' +
    'using TypeScript, NestJS, React, and Angular. Experienced in backend architecture, ' +
    'API integrations, performance optimization, and modern frontend development. ' +
    'Contributed to large production systems, backend migrations, and technical leadership ' +
    'across multiple commercial projects.',

  contacts: [
    { icon: 'mail', label: 'timofeicolin@gmail.com', href: 'mailto:timofeicolin@gmail.com' },
    { icon: 'location_on', label: 'Chisinau, Moldova' },
    { icon: 'call', label: '068920605', href: 'tel:068920605' },
    {
      svg: 'svg/linkedin.svg',
      label: 'linkedin.com/in/timofei-colin-2a490b53',
      href: 'https://linkedin.com/in/timofei-colin-2a490b53',
    },
  ],

  jobs: [
    {
      company: 'GLOBAL WEB',
      role: 'Full Stack Developer',
      expanded: true,
      startDate: '01/2025',
      endDate: '04/2026',
      projects: [
        {
          name: 'Hubble Project — Full-Stack Developer',
          bullets: [
            'Maintained and expanded backend functionality',
            'Contributed to Chrome extension development',
            'Developed website features and pages',
            'Participated in website redesign and performance optimization',
          ],
        },
        {
          name: 'Yours Truly Project — Lead Backend Developer',
          bullets: [
            'Designed and developed backend logic',
            'Integrated APIs and third-party services',
            'Maintained scalable server-side architecture',
            'Optimized system performance and data workflows',
          ],
        },
      ],
    },
    {
      company: 'Eligence',
      role: 'Full Stack Developer',
      expanded: true,
      startDate: '01/2022',
      endDate: '12/2024',
      projects: [
        {
          name: 'Hubble Project — Backend Developer',
          bullets: [
            'Rewrote the application backend from Ruby to NestJS',
            'Integrated third-party APIs and services',
            'Improved backend scalability and maintainability',
            'Optimized application performance and system architecture',
          ],
        },
        {
          name: 'Apprentice Project — Full-Stack Developer',
          bullets: [
            'Participated in website development',
            'Contributed to mobile application redesign',
            'Created interactive demos and platform features',
            'Collaborated on frontend and backend improvements',
          ],
        },
      ],
    },
    {
      company: 'KIVORK',
      role: 'Customer Relations Supervisor',
      startDate: '09/2016',
      endDate: '09/2021',
      projects: [
        {
          bullets: [
            'Customer Relations Supervisor',
            'Airline Communication Specialist',
            'Payment Resolutions Supervisor',
          ],
        },
      ],
    },
    {
      company: 'Dyninno Moldova',
      role: 'Schedule Changes Specialist',
      startDate: '07/2015',
      endDate: '08/2016',
      projects: [
        {
          bullets: ['Schedule Changes Specialist', 'Customer Support Specialist'],
        },
      ],
    },
  ],

  education: [
    {
      school: 'Moldova State University',
      degree: 'Bachelor of Science, Applied Computing',
      startDate: '09/2013',
      endDate: '06/2016',
      location: 'Chisinau, Moldova',
    },
  ],

  hobbies: [
    {
      name: 'Running',
      items: [
        'Chisinau Marathon (2024)',
        'Rimini Marathon (2025)',
        'Volvo Ultra Race (2025)',
        'Chisinau Night Run (2025)',
        'Chisinau Marathon (2025)',
        'HalloWeRun (2025)',
        'Larnaka International Marathon (2025)',
        'Love Run (2026)',
        'OM Half Marathon (2026)',
        'Legal Half Marathon (2026)',
        'Volvo Ultra Race (2026)',
        'Purcari Night Run (2026)',
        'Colinele Mircesti Run (2026)',
        'Chisinau Marathon (2026)',
      ],
    },
    {
      name: 'Board Games',
      items: ['Admin at CC151 Mafia Club since December 2025'],
    },
    {
      name: 'Making Cakes',
      images: ['photos/cake.jpg'],
    },
  ],

  skills: [
    {
      name: 'Programming',
      expanded: true,
      skills: ['TypeScript', 'JavaScript'],
    },
    {
      name: 'Backend',
      expanded: true,
      skills: [
        'Node.js',
        'NestJS',
        'Express',
        'REST APIs',
        'WebSockets',
        'API Architecture',
        'Authentication & Authorization',
        'Third-party API Integrations',
        'Caching',
        'Background Jobs',
        'BullMQ',
      ],
    },
    {
      name: 'Databases & Data',
      expanded: true,
      skills: ['PostgreSQL', 'Prisma', 'TypeORM', 'MongoDB', 'Mongoose', 'Redis'],
    },
    {
      name: 'Cloud & Infrastructure',
      expanded: true,
      skills: ['AWS', 'Amazon S3', 'Docker', 'Git', 'CI/CD'],
    },
    {
      name: 'AI & Integrations',
      expanded: true,
      skills: ['OpenAI API', 'Langflow', 'Google APIs', 'Google Admin SDK', 'Stripe', 'SendGrid'],
    },
    {
      name: 'AI Development Tools',
      expanded: true,
      skills: ['Claude Code', 'ChatGPT', 'GitHub Copilot'],
    },
    {
      name: 'Frontend',
      expanded: true,
      skills: ['Angular', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      name: 'Currently Learning',
      expanded: true,
      skills: ['C#', '.NET'],
    },
  ],

  languages: [
    { name: 'Romanian', level: 5 },
    { name: 'Russian', level: 5 },
    { name: 'English', level: 4 },
  ],
};
