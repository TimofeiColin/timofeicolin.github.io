import { THEMES, Theme } from './types';

export function isTheme(value: string | null): value is Theme {
  return value !== null && (THEMES as readonly string[]).includes(value);
}
