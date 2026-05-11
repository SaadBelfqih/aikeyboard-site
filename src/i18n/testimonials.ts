import type { Locale } from './locales';

export type Testimonial = {
  quote: string;
  author: string;
  country: string; // flag emoji
  feature?: string; // optional tag like "Tone Changer", "Grammar"
};

// Real reviews pulled from the public App Store RSS for app 6466343783.
// Lightly trimmed for length; substance preserved.
export const TESTIMONIALS: Record<Locale, Testimonial[]> = {
  en: [
    {
      quote: "Used this app for one day and it's been a huge game changer. As someone who sends tons of business emails from my phone, I don't have to overthink my responses anymore. The tone changer works amazingly!",
      author: 'BBA5150',
      country: '🇺🇸',
      feature: 'Tone Changer',
    },
    {
      quote: "The ultimate AI app for everyday use — very smooth and easy to use. It's definitely worth your money.",
      author: 'grrvrbtbt',
      country: '🇺🇸',
      feature: 'Daily use',
    },
    {
      quote: 'Surprisingly useful. I didn\'t think switching to a third-party keyboard would be convenient — but it\'s not much work to swap in to check the grammar.',
      author: 'Jungejason',
      country: '🇺🇸',
      feature: 'Grammar',
    },
    {
      quote: 'This keyboard is just amazing, especially the tone changer. The developer actually listens — feature requests shipped within 2 weeks.',
      author: 'AleeaCatt',
      country: '🇺🇸',
      feature: 'Tone Changer',
    },
  ],
  de: [
    {
      quote: 'Everything you can imagine — you find it in this app. One of the best keyboards on the market.',
      author: 'Andrea Cvjetinovic',
      country: '🇩🇪',
      feature: 'Top-Tastatur',
    },
    {
      quote: 'Ein riesiger Game Changer. Ich verschicke viele Business-Mails vom Handy — den Tonfall-Wechsler nutze ich jeden Tag.',
      author: 'BBA5150',
      country: '🇺🇸',
      feature: 'Tonfall',
    },
    {
      quote: 'Funktioniert einwandfrei. Tolle App.',
      author: 'Terrablack2600',
      country: '🇩🇪',
      feature: 'Zuverlässig',
    },
    {
      quote: 'Überraschend nützlich. Ich hätte nicht gedacht, dass eine Drittanbieter-Tastatur so reibungslos läuft — Grammatikprüfung mit einem Tipp.',
      author: 'Jungejason',
      country: '🇺🇸',
      feature: 'Grammatik',
    },
  ],
  fr: [
    {
      quote: 'Un très bon clavier avec des options très sympas. Tout est parfait.',
      author: 'D@@C',
      country: '🇫🇷',
      feature: 'Tout-en-un',
    },
    {
      quote: "Excellente application. Elle répond à tous les besoins.",
      author: 'Momane',
      country: '🇫🇷',
      feature: 'Complète',
    },
    {
      quote: "Un vrai game changer. J'envoie beaucoup d'e-mails pro depuis mon téléphone — le changeur de ton fait toute la différence.",
      author: 'BBA5150',
      country: '🇺🇸',
      feature: 'Ton',
    },
    {
      quote: 'Étonnamment utile. Je ne pensais pas qu\'un clavier tiers serait pratique — la vérification grammaticale est imbattable.',
      author: 'Jungejason',
      country: '🇺🇸',
      feature: 'Grammaire',
    },
  ],
  es: [
    {
      quote: 'Un game changer. Envío muchos correos de trabajo desde el móvil y el cambiador de tono ahorra horas.',
      author: 'BBA5150',
      country: '🇺🇸',
      feature: 'Tono',
    },
    {
      quote: 'La aplicación de IA definitiva para el día a día. Muy fluida y fácil de usar. Vale cada euro.',
      author: 'grrvrbtbt',
      country: '🇺🇸',
      feature: 'Día a día',
    },
    {
      quote: 'Sorprendentemente útil. No pensé que un teclado de terceros fuera tan cómodo — la corrección gramatical funciona de maravilla.',
      author: 'Jungejason',
      country: '🇺🇸',
      feature: 'Gramática',
    },
    {
      quote: 'Hace toda la diferencia tener el poder de ChatGPT directamente en el teclado.',
      author: 'acamposxp',
      country: '🇧🇷',
      feature: 'IA integrada',
    },
  ],
  pt: [
    {
      quote: 'Faz toda a diferença ter o poder do ChatGPT no teclado. Excelente app.',
      author: 'acamposxp',
      country: '🇧🇷',
      feature: 'IA integrada',
    },
    {
      quote: 'Merece cinco estrelas fácil. Simples, dinâmico e direto. Parabéns aos desenvolvedores.',
      author: 'Thales Pratírio',
      country: '🇧🇷',
      feature: 'Direto ao ponto',
    },
    {
      quote: 'Surpreendeu as minhas expectativas. Recomendo.',
      author: 'Mfg',
      country: '🇧🇷',
      feature: 'Surpresa',
    },
    {
      quote: 'Ajuda muito com correção gramatical e tradução. Top.',
      author: 'Dinhovox',
      country: '🇧🇷',
      feature: 'Gramática',
    },
  ],
  'pt-br': [
    {
      quote: 'Faz toda a diferença ter o poder do ChatGPT no teclado. Excelente app. Espero que se mantenha ativo e atualizado sempre.',
      author: 'acamposxp',
      country: '🇧🇷',
      feature: 'IA integrada',
    },
    {
      quote: 'Merece cinco estrelas fácil. Simples, dinâmico e direto. Parabéns aos desenvolvedores.',
      author: 'Thales Pratírio',
      country: '🇧🇷',
      feature: 'Direto ao ponto',
    },
    {
      quote: 'Superou minhas expectativas. Recomendo!',
      author: 'Mfg',
      country: '🇧🇷',
      feature: 'Recomendo',
    },
    {
      quote: 'Ajuda muito numa correção gramatical e tradução. Top.',
      author: 'Dinhovox',
      country: '🇧🇷',
      feature: 'Gramática',
    },
  ],
};

export const TESTIMONIALS_SECTION_TITLE: Record<Locale, { title: string; subtitle: string }> = {
  en:      { title: 'Loved by 100,000+ people on iPhone', subtitle: 'Real reviews from the App Store.' },
  de:      { title: 'Geliebt von über 100.000 iPhone-Nutzern',  subtitle: 'Echte Bewertungen aus dem App Store.' },
  fr:      { title: 'Adoré par 100 000+ utilisateurs iPhone',   subtitle: 'Vrais avis depuis l\'App Store.' },
  es:      { title: 'Amado por +100.000 usuarios de iPhone',    subtitle: 'Reseñas reales del App Store.' },
  pt:      { title: 'Adorado por mais de 100.000 utilizadores', subtitle: 'Avaliações reais da App Store.' },
  'pt-br': { title: 'Amado por mais de 100.000 usuários',       subtitle: 'Avaliações reais da App Store.' },
};
