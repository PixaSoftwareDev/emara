import en from './en.json';
import es from './es.json';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: Lang = 'en';

export const ui = { en, es } as const;

export type Lang = keyof typeof ui;
export type Translations = (typeof ui)[Lang];

export function isLang(value: string | undefined): value is Lang {
  return value === 'en' || value === 'es';
}

export function getT(lang: Lang): Translations {
  return ui[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}
