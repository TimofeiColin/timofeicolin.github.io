import { Cv, CvSource, LANGS, Lang } from './cv.model';

function isLangRecord(value: object): value is Record<Lang, string> {
  const keys = Object.keys(value);

  return keys.length > 0 && keys.every((key) => (LANGS as readonly string[]).includes(key));
}

function resolve(value: unknown, lang: Lang): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => resolve(item, lang));
  }

  if (typeof value === 'object' && value !== null) {
    if (isLangRecord(value)) {
      return value[lang];
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, resolve(item, lang)]),
    );
  }

  return value;
}

export function localizeCv(source: CvSource, lang: Lang): Cv {
  return resolve(source, lang) as Cv;
}
