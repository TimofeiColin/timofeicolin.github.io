import { Lang } from '@common/lang';

export function pdfHref(lang: Lang): string {
  return `cv-${lang}.pdf`;
}

export function pdfName(name: string, lang: Lang): string {
  return `${name.replaceAll(' ', '-')}-CV-${lang.toUpperCase()}.pdf`;
}
