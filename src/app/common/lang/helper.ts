import { LANGS, Lang } from './types';

export function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as readonly string[]).includes(value);
}
