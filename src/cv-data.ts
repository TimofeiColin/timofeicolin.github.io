import { Cv } from './cv.model';

export const CV: Cv = {
  name: 'Timofei Colin',

  position: 'Backend Engineer / Full-Stack Developer',

  summary:
  'Backend engineer with 4+ years building production systems with TypeScript, Node.js, and ' +
  'NestJS. Experienced in backend architecture, PostgreSQL data modeling, REST APIs, real-time ' +
  'systems, background jobs, integrations, and AI-powered features. Owned backend services ' +
  'end to end, with additional frontend experience in Angular and React.',

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
      role: 'Full-Stack Developer',
      expanded: true,
      startDate: '01/2025',
      endDate: '04/2026',
      projects: [
        {
          name: 'Hubble Project — Full-Stack Developer',
          bullets: [
            'Continued Hubble from Eligence as primary backend engineer: 95+ features, 280+ merged PRs',
            'Designed PostgreSQL data models with Prisma, authoring 50+ production migrations',
            'Built real-time chat, token streaming, and live events with Socket.IO and Redis',
            'Integrated LLM workflows with OpenAI and Langflow',
            'Created Google Workspace/ChromeOS integrations and knowledge-base ingestion with AWS S3 and Textract',
            'Added multi-tenant authentication, BullMQ jobs, SendGrid emails, and Sentry/Prometheus monitoring',
            'Contributed to the Chrome extension and website, including redesign and performance work',
          ],
        },
        {
          name: 'Yours Truly Project — Lead Backend Developer',
          bullets: [
            'Led backend development of the NestJS API, with ~50% of all commits and 60+ merged PRs',
            'Designed the PostgreSQL/Prisma data model: 25 domain models and 36 production migrations',
            'Built APIs for memory, event, knowledge and media with shared pagination, filtering, and access control',
            'Added multi-user sharing, API-key authentication, AWS S3 media storage, and external ML integrations',
            'Set up worker queues, scheduled jobs, health checks, monitoring, and Swagger/OpenAPI docs',
          ],
        },
      ],
    },
    {
      company: 'Eligence',
      role: 'Full-Stack Developer',
      expanded: true,
      startDate: '01/2022',
      endDate: '12/2024',
      projects: [
        {
          name: 'Hubble Project — Backend Developer',
          bullets: [
            'Rebuilt the backend from Ruby to NestJS/TypeScript, authoring the initial codebase',
            'Delivered 215+ tickets and contributed to 500+ reviewed pull requests',
            'Architected the NestJS API with PostgreSQL and Prisma, authoring 80+ production migrations',
            'Shipped Stripe subscription billing, Redis/Bull background jobs, and Socket.IO real-time features',
            'Built multi-tenant authentication (Google OAuth, JWT), company-scoped access control, and onboarding',
            'Developed OpenAI-powered support, reporting/export, transactional emails, and Sentry/Swagger tooling',
          ],
        },
        {
          name: 'Apprentice Project — Full-Stack Developer',
          bullets: [
            'Developed and maintained web application features across frontend and backend components',
            'Contributed to the redesign and modernization of the mobile application',
            'Implemented interactive demos and platform features based on product requirements',
            'Collaborated on application improvements, debugging, and feature delivery',
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
        'Socket.IO',
        'Swagger/OpenAPI',
        'JWT',
        'Google OAuth',
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
      skills: ['AWS', 'AWS S3', 'AWS Textract', 'Docker', 'Git', 'CI/CD'],
    },
    {
      name: 'Monitoring',
      expanded: true,
      skills: ['Sentry', 'Prometheus'],
    },
    {
      name: 'AI & Integrations',
      expanded: true,
      skills: ['OpenAI API', 'Langflow', 'Google APIs', 'Google Admin SDK', 'Stripe', 'SendGrid'],
    },
    {
      name: 'Frontend',
      expanded: true,
      skills: ['Angular', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      name: 'AI Development Tools',
      expanded: true,
      skills: ['Claude Code', 'ChatGPT', 'GitHub Copilot'],
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
