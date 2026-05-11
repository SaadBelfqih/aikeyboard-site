export const LOCALES = ['en', 'de', 'fr', 'es', 'pt', 'pt-br'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<Locale, {
  htmlLang: string;
  hreflang: string;
  appStoreCountry: string;
  label: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}> = {
  en:      { htmlLang: 'en',    hreflang: 'en-US', appStoreCountry: 'us', label: 'English',             flag: '🇺🇸', dir: 'ltr' },
  de:      { htmlLang: 'de',    hreflang: 'de-DE', appStoreCountry: 'de', label: 'Deutsch',             flag: '🇩🇪', dir: 'ltr' },
  fr:      { htmlLang: 'fr',    hreflang: 'fr-FR', appStoreCountry: 'fr', label: 'Français',            flag: '🇫🇷', dir: 'ltr' },
  es:      { htmlLang: 'es',    hreflang: 'es-ES', appStoreCountry: 'es', label: 'Español',             flag: '🇪🇸', dir: 'ltr' },
  pt:      { htmlLang: 'pt',    hreflang: 'pt-PT', appStoreCountry: 'pt', label: 'Português (Portugal)', flag: '🇵🇹', dir: 'ltr' },
  'pt-br': { htmlLang: 'pt-BR', hreflang: 'pt-BR', appStoreCountry: 'br', label: 'Português (Brasil)',  flag: '🇧🇷', dir: 'ltr' },
};

export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return 'en';
  const first = segments[0].toLowerCase();
  if (first === 'pt-br') return 'pt-br';
  if ((LOCALES as readonly string[]).includes(first)) return first as Locale;
  return 'en';
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return clean === '/' ? '/' : clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const locale = getLocaleFromUrl(pathname);
  if (locale === 'en') return pathname || '/';
  const stripped = pathname.replace(new RegExp(`^/${locale}`), '');
  return stripped || '/';
}
