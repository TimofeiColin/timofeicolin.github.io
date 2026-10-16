export const LANGS = ['ro', 'ru', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export type LangString = string | Record<Lang, string>;
