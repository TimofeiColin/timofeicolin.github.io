import { LOCALES, Lang } from '../lang';

export function formatDate(date: string, lang: Lang): string {
  return new Intl.DateTimeFormat(LOCALES[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}
