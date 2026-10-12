import { CvSource } from './cv.model';

export const CV: CvSource = {
  name: 'Timofei Colin',

  position: 'Backend Engineer / Full-Stack Developer',

  summary: {
    en:
      'Backend engineer with 4+ years building production systems with TypeScript, Node.js, and ' +
      'NestJS. Experienced in backend architecture, PostgreSQL data modeling, REST APIs, real-time ' +
      'systems, background jobs, integrations, and AI-powered features. Owned backend services ' +
      'end to end, with additional frontend experience in Angular and React.',

    ro:
      'Inginer software specializat în dezvoltarea backend, cu peste 4 ani de experiență în dezvoltarea ' +
      'și menținerea sistemelor de producție folosind TypeScript, Node.js și NestJS. Am experiență în ' +
      'proiectarea arhitecturii backend, modelarea datelor în PostgreSQL, dezvoltarea de API-uri REST, ' +
      'sisteme în timp real, procese asincrone, integrări și funcționalități bazate pe inteligență artificială. ' +
      'Am gestionat servicii backend pe întregul ciclu de dezvoltare, având și experiență în dezvoltarea ' +
      'frontend cu Angular și React.',

    ru:
      'Backend-разработчик с опытом более 4 лет в создании и поддержке production-систем на ' +
      'TypeScript, Node.js и NestJS. Имею опыт проектирования backend-архитектуры, моделирования ' +
      'данных в PostgreSQL, разработки REST API, систем реального времени, фоновых задач, интеграций ' +
      'и функций на базе искусственного интеллекта. Отвечал за backend-сервисы на всех этапах ' +
      'разработки, а также имею опыт frontend-разработки на Angular и React.',
  },

  contacts: [
    { icon: 'mail', label: 'timofeicolin@gmail.com', href: 'mailto:timofeicolin@gmail.com' },
    {
      icon: 'location_on',
      label: { en: 'Chisinau, Moldova', ro: 'Chișinău, Moldova', ru: 'Кишинёв, Молдова' },
    },
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
            {
              en: 'Continued Hubble from Eligence as primary backend engineer: 95+ features, 280+ merged PRs',
              ro: 'Am continuat dezvoltarea proiectului Hubble la Eligence în calitate de principal responsabil de backend, contribuind la peste 95 de funcționalități și peste 280 de PR-uri integrate',
              ru: 'Продолжил разработку Hubble в компании Eligence в качестве основного backend-разработчика: реализовал более 95 функций и участвовал в слиянии более 280 PR',
            },
            {
              en: 'Designed PostgreSQL data models with Prisma, authoring 50+ production migrations',
              ro: 'Am proiectat modelele de date în PostgreSQL folosind Prisma și am creat peste 50 de migrări pentru mediul de producție',
              ru: 'Проектировал модели данных PostgreSQL с использованием Prisma и создал более 50 миграций для production-среды',
            },
            {
              en: 'Built real-time chat, token streaming, and live events with Socket.IO and Redis',
              ro: 'Am dezvoltat un chat în timp real, transmiterea tokenurilor în flux și evenimente live folosind Socket.IO și Redis',
              ru: 'Разработал чат с обменом сообщениями в реальном времени, потоковую передачу токенов и систему событий в реальном времени с использованием Socket.IO и Redis',
            },
            {
              en: 'Integrated LLM workflows with OpenAI and Langflow',
              ro: 'Am integrat fluxuri de lucru bazate pe modele lingvistice mari (LLM) folosind OpenAI și Langflow',
              ru: 'Интегрировал рабочие процессы на основе больших языковых моделей (LLM) с использованием OpenAI и Langflow',
            },
            {
              en: 'Created Google Workspace/ChromeOS integrations and knowledge-base ingestion with AWS S3 and Textract',
              ro: 'Am dezvoltat integrări cu Google Workspace și ChromeOS, precum și procese de colectare și prelucrare a datelor pentru baza de cunoștințe folosind AWS S3 și Textract',
              ru: 'Разработал интеграции с Google Workspace и ChromeOS, а также механизмы загрузки и обработки данных для базы знаний с использованием AWS S3 и Textract',
            },
            {
              en: 'Added multi-tenant authentication, BullMQ jobs, SendGrid emails, and Sentry/Prometheus monitoring',
              ro: 'Am implementat autentificarea multi-tenant, procesarea sarcinilor în fundal cu BullMQ, trimiterea de e-mailuri prin SendGrid și monitorizarea cu Sentry și Prometheus',
              ru: 'Реализовал многоарендную аутентификацию, фоновые задачи с BullMQ, отправку электронной почты через SendGrid и мониторинг с помощью Sentry и Prometheus',
            },
            {
              en: 'Contributed to the Chrome extension and website, including redesign and performance work',
              ro: 'Am contribuit la dezvoltarea extensiei Chrome și a site-ului web, inclusiv la reproiectarea interfeței și optimizarea performanței',
              ru: 'Участвовал в разработке расширения Chrome и веб-сайта, включая редизайн и оптимизацию производительности',
            },
          ],
        },
        {
          name: 'Yours Truly Project — Lead Backend Developer',
          bullets: [
            {
              en: 'Led backend development of the NestJS API, with ~50% of all commits and 60+ merged PRs',
              ro: 'Am condus dezvoltarea backend a API-ului NestJS, realizând aproximativ 50% din totalul commiturilor și peste 60 de PR-uri integrate',
              ru: 'Руководил backend-разработкой API на NestJS: выполнил около 50% всех коммитов и создал более 60 PR, прошедших слияние',
            },
            {
              en: 'Designed the PostgreSQL/Prisma data model: 25 domain models and 36 production migrations',
              ro: 'Am proiectat modelul de date PostgreSQL/Prisma, definind 25 de modele de domeniu și realizând 36 de migrări pentru mediul de producție',
              ru: 'Спроектировал модель данных PostgreSQL/Prisma: определил 25 доменных моделей и создал 36 миграций для production-среды',
            },
            {
              en: 'Built APIs for memory, event, knowledge and media with shared pagination, filtering, and access control',
              ro: 'Am dezvoltat API-uri pentru gestionarea amintirilor, evenimentelor, cunoștințelor și fișierelor media, cu funcționalități comune de paginare, filtrare și control al accesului',
              ru: 'Разработал API для работы с воспоминаниями, событиями, знаниями и медиафайлами, реализовав общие механизмы пагинации, фильтрации и контроля доступа',
            },
            {
              en: 'Added multi-user sharing, API-key authentication, AWS S3 media storage, and external ML integrations',
              ro: 'Am implementat partajarea conținutului între utilizatori, autentificarea prin chei API, stocarea fișierelor media în AWS S3 și integrări cu servicii externe de învățare automată',
              ru: 'Реализовал совместный доступ к данным между пользователями, аутентификацию по API-ключам, хранение медиафайлов в AWS S3 и интеграции с внешними сервисами машинного обучения',
            },
            {
              en: 'Set up worker queues, scheduled jobs, health checks, monitoring, and Swagger/OpenAPI docs',
              ro: 'Am configurat cozi de procesare, sarcini programate, verificări de stare, monitorizare și documentație Swagger/OpenAPI',
              ru: 'Настроил очереди фоновых задач, выполнение задач по расписанию, проверки работоспособности, мониторинг и документацию Swagger/OpenAPI',
            },
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
            {
              en: 'Rebuilt the backend from Ruby to NestJS/TypeScript, authoring the initial codebase',
              ro: 'Am rescris backend-ul de la Ruby la NestJS/TypeScript, dezvoltând baza inițială de cod',
              ru: 'Переписал backend с Ruby на NestJS/TypeScript, создав первоначальную кодовую базу',
            },
            {
              en: 'Delivered 215+ tickets and contributed to 500+ reviewed pull requests',
              ro: 'Am finalizat peste 215 de taskuri și am contribuit la peste 500 de pull request-uri supuse revizuirii',
              ru: 'Выполнил более 215 задач и принял участие в работе над более чем 500 pull request, прошедшими код-ревью',
            },
            {
              en: 'Architected the NestJS API with PostgreSQL and Prisma, authoring 80+ production migrations',
              ro: 'Am proiectat arhitectura API-ului NestJS cu PostgreSQL și Prisma și am creat peste 80 de migrări pentru mediul de producție',
              ru: 'Спроектировал архитектуру API на NestJS с PostgreSQL и Prisma, создав более 80 миграций для production-среды',
            },
            {
              en: 'Shipped Stripe subscription billing, Redis/Bull background jobs, and Socket.IO real-time features',
              ro: 'Am implementat sistemul de abonamente și plăți prin Stripe, procesarea sarcinilor în fundal cu Redis/Bull și funcționalități în timp real cu Socket.IO',
              ru: 'Реализовал систему подписок и платежей через Stripe, фоновые задачи с Redis/Bull и функции реального времени на Socket.IO',
            },
            {
              en: 'Built multi-tenant authentication (Google OAuth, JWT), company-scoped access control, and onboarding',
              ro: 'Am implementat autentificarea multi-tenant (Google OAuth, JWT), controlul accesului la nivel de companie și procesul de onboarding',
              ru: 'Реализовал multi-tenant-аутентификацию (Google OAuth, JWT), разграничение доступа на уровне компаний и процесс онбординга',
            },
            {
              en: 'Developed OpenAI-powered support, reporting/export, transactional emails, and Sentry/Swagger tooling',
              ro: 'Am dezvoltat funcționalități de asistență bazate pe OpenAI, generarea de rapoarte și exportul datelor, e-mailuri tranzacționale și instrumente de monitorizare și documentare cu Sentry și Swagger',
              ru: 'Разработал функции поддержки на базе OpenAI, формирование отчётов и экспорт данных, транзакционные электронные письма, а также инструменты мониторинга и документации с помощью Sentry и Swagger',
            },
          ],
        },
        {
          name: 'Apprentice Project — Full-Stack Developer',
          bullets: [
            {
              en: 'Developed and maintained web application features across frontend and backend components',
              ro: 'Am dezvoltat și întreținut funcționalități ale aplicației web, atât pe partea de frontend, cât și pe cea de backend',
              ru: 'Разрабатывал и поддерживал функциональность веб-приложения как на frontend, так и на backend',
            },
            {
              en: 'Contributed to the redesign and modernization of the mobile application',
              ro: 'Am contribuit la reproiectarea și modernizarea aplicației mobile',
              ru: 'Участвовал в редизайне и модернизации мобильного приложения',
            },
            {
              en: 'Implemented interactive demos and platform features based on product requirements',
              ro: 'Am implementat demonstrații interactive și funcționalități ale platformei în conformitate cu cerințele produsului',
              ru: 'Реализовывал интерактивные демонстрации и функциональность платформы в соответствии с требованиями продукта',
            },
            {
              en: 'Collaborated on application improvements, debugging, and feature delivery',
              ro: 'Am colaborat la îmbunătățirea aplicației, identificarea și remedierea erorilor și implementarea de noi funcționalități',
              ru: 'Участвовал в улучшении приложения, выявлении и исправлении ошибок, а также реализации новых функций',
            },
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
      school: {
        en: 'Moldova State University',
        ro: 'Universitatea de Stat din Moldova',
        ru: 'Государственный университет Молдовы',
      },
      degree: {
        en: 'Bachelor of Science, Applied Computing',
        ro: 'Licență, Informatică Aplicată',
        ru: 'Бакалавр, прикладные вычисления',
      },
      startDate: '09/2013',
      endDate: '06/2016',
      location: { en: 'Chisinau, Moldova', ro: 'Chișinău, Moldova', ru: 'Кишинёв, Молдова' },
    },
  ],

  hobbies: [
    {
      name: { en: 'Running', ro: 'Alergare', ru: 'Бег' },
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
      name: { en: 'Board Games', ro: 'Jocuri de societate', ru: 'Настольные игры' },
      items: [
        {
          en: 'Admin at CC151 Mafia Club since December 2025',
          ro: 'Administrator la CC151 Mafia Club din decembrie 2025',
          ru: 'Администратор CC151 Mafia Club с декабря 2025 года',
        },
      ],
    },
    {
      name: { en: 'Making Cakes', ro: 'Prepararea torturilor', ru: 'Приготовление тортов' },
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
        'REST API',
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
  ],

  languages: [
    { name: { en: 'Romanian', ro: 'Română', ru: 'Румынский' }, level: 5 },
    { name: { en: 'Russian', ro: 'Rusă', ru: 'Русский' }, level: 5 },
    { name: { en: 'English', ro: 'Engleză', ru: 'Английский' }, level: 4 },
  ],
};
