import { DARK_THEME, LIGHT_THEME } from './consts';

export const THEMES = [LIGHT_THEME, DARK_THEME] as const;

export type Theme = (typeof THEMES)[number];
