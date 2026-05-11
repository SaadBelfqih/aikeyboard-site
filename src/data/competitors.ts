import type { Locale } from '~/i18n/locales';

export type CompetitorRow = {
  feature: string;
  keyai: string | boolean;
  competitor: string | boolean;
};

export type CompetitorContent = {
  name: string;
  intro: string;
  rows: CompetitorRow[];
  verdict: string;
  ctaHeadline: string;
};

export const COMPETITORS = ['grammarly', 'chatgpt-keyboard', 'apple-intelligence', 'keybot', 'typeai'] as const;
export type CompetitorSlug = (typeof COMPETITORS)[number];

const COMPETITOR_DISPLAY_NAME: Record<CompetitorSlug, string> = {
  grammarly: 'Grammarly Keyboard',
  'chatgpt-keyboard': 'ChatGPT (in a separate app)',
  'apple-intelligence': 'Apple Intelligence Writing Tools',
  keybot: 'Keybot',
  typeai: 'TypeAI',
};

const FEATURE_LABELS: Record<Locale, {
  feature: string;
  keyai: string;
  worksInsideKeyboard: string;
  toolCount: string;
  toneChange: string;
  translation: string;
  paraphrase: string;
  askAi: string;
  generatedReplies: string;
  worksOffline: string;
  privacy: string;
  multilingual: string;
  cost: string;
  trial: string;
  verdictTitle: string;
  ctaTitle: string;
  introBuilder: (name: string) => string;
}> = {
  en: {
    feature: 'Feature',
    keyai: 'KeyAI',
    worksInsideKeyboard: 'Works inside your keyboard',
    toolCount: 'Number of AI tools',
    toneChange: 'Tone change',
    translation: 'Translate 55+ languages',
    paraphrase: 'Paraphrase',
    askAi: 'Ask AI any question',
    generatedReplies: 'AI-generated replies',
    worksOffline: 'Sends text only on tap',
    privacy: 'Auto-hides on password fields',
    multilingual: 'Supports 60+ keyboard layouts',
    cost: 'Cost',
    trial: 'Free trial',
    verdictTitle: 'Our verdict',
    ctaTitle: 'Try the best AI keyboard — free for 3 days',
    introBuilder: (name) => `KeyAI and ${name} both promise to make writing on iPhone faster, but they take very different approaches. Here is the side-by-side breakdown of what each one actually does.`,
  },
  de: {
    feature: 'Funktion',
    keyai: 'KeyAI',
    worksInsideKeyboard: 'Funktioniert in deiner Tastatur',
    toolCount: 'Anzahl der KI-Tools',
    toneChange: 'Tonfalländerung',
    translation: 'Übersetzung in 55+ Sprachen',
    paraphrase: 'Paraphrasieren',
    askAi: 'Beliebige Frage an KI',
    generatedReplies: 'KI-generierte Antworten',
    worksOffline: 'Sendet Text nur auf Tipp',
    privacy: 'Versteckt sich bei Passwörtern',
    multilingual: 'Unterstützt 60+ Tastaturlayouts',
    cost: 'Preis',
    trial: 'Kostenlose Testphase',
    verdictTitle: 'Unser Urteil',
    ctaTitle: 'Probiere die beste KI-Tastatur — 3 Tage kostenlos',
    introBuilder: (name) => `KeyAI und ${name} versprechen beide, das Schreiben auf iPhone schneller zu machen, aber sie verfolgen sehr unterschiedliche Ansätze. Hier ist der direkte Vergleich.`,
  },
  fr: {
    feature: 'Fonction',
    keyai: 'KeyAI',
    worksInsideKeyboard: 'Fonctionne dans votre clavier',
    toolCount: "Nombre d'outils IA",
    toneChange: 'Changement de ton',
    translation: 'Traduire 55+ langues',
    paraphrase: 'Paraphraser',
    askAi: 'Poser une question à IA',
    generatedReplies: 'Réponses générées par IA',
    worksOffline: 'Envoie le texte uniquement au tap',
    privacy: 'Se cache sur les champs de mot de passe',
    multilingual: 'Supporte 60+ dispositions de clavier',
    cost: 'Prix',
    trial: 'Essai gratuit',
    verdictTitle: 'Notre verdict',
    ctaTitle: 'Essayez le meilleur clavier IA — gratuit 3 jours',
    introBuilder: (name) => `KeyAI et ${name} promettent tous deux de rendre l'écriture sur iPhone plus rapide, mais ils adoptent des approches très différentes. Voici la comparaison côte à côte.`,
  },
  es: {
    feature: 'Función',
    keyai: 'KeyAI',
    worksInsideKeyboard: 'Funciona dentro de tu teclado',
    toolCount: 'Número de herramientas IA',
    toneChange: 'Cambio de tono',
    translation: 'Traducir 55+ idiomas',
    paraphrase: 'Parafrasear',
    askAi: 'Preguntar a la IA',
    generatedReplies: 'Respuestas generadas por IA',
    worksOffline: 'Envía texto solo al tocar',
    privacy: 'Se oculta en campos de contraseña',
    multilingual: 'Soporta 60+ distribuciones de teclado',
    cost: 'Precio',
    trial: 'Prueba gratuita',
    verdictTitle: 'Nuestro veredicto',
    ctaTitle: 'Prueba el mejor teclado IA — gratis 3 días',
    introBuilder: (name) => `KeyAI y ${name} prometen hacer más rápida la escritura en iPhone, pero adoptan enfoques muy distintos. Aquí está la comparación lado a lado.`,
  },
  pt: {
    feature: 'Funcionalidade',
    keyai: 'KeyAI',
    worksInsideKeyboard: 'Funciona dentro do teu teclado',
    toolCount: 'Número de ferramentas IA',
    toneChange: 'Mudança de tom',
    translation: 'Traduzir 55+ idiomas',
    paraphrase: 'Parafrasear',
    askAi: 'Perguntar à IA',
    generatedReplies: 'Respostas geradas por IA',
    worksOffline: 'Envia texto só ao tocar',
    privacy: 'Oculta-se em campos de palavra-passe',
    multilingual: 'Suporta 60+ disposições de teclado',
    cost: 'Preço',
    trial: 'Período gratuito',
    verdictTitle: 'O nosso veredicto',
    ctaTitle: 'Experimenta o melhor teclado IA — 3 dias grátis',
    introBuilder: (name) => `KeyAI e ${name} prometem ambos tornar a escrita no iPhone mais rápida, mas têm abordagens muito diferentes. Aqui está a comparação lado a lado.`,
  },
  'pt-br': {
    feature: 'Recurso',
    keyai: 'KeyAI',
    worksInsideKeyboard: 'Funciona dentro do seu teclado',
    toolCount: 'Número de ferramentas IA',
    toneChange: 'Mudança de tom',
    translation: 'Traduzir 55+ idiomas',
    paraphrase: 'Parafrasear',
    askAi: 'Perguntar à IA',
    generatedReplies: 'Respostas geradas por IA',
    worksOffline: 'Envia texto só ao tocar',
    privacy: 'Esconde em campos de senha',
    multilingual: 'Suporta 60+ layouts de teclado',
    cost: 'Preço',
    trial: 'Teste grátis',
    verdictTitle: 'Nosso veredicto',
    ctaTitle: 'Experimente o melhor teclado IA — 3 dias grátis',
    introBuilder: (name) => `KeyAI e ${name} prometem deixar a escrita no iPhone mais rápida, mas têm abordagens bem diferentes. Aqui está a comparação lado a lado.`,
  },
};

function makeRows(locale: Locale, slug: CompetitorSlug): CompetitorRow[] {
  const L = FEATURE_LABELS[locale];
  // Each row: [keyai, competitor]
  const data: Record<CompetitorSlug, [boolean | string, boolean | string][]> = {
    grammarly: [
      [true, true],   // inside keyboard
      ['10+', '~2'],  // tool count
      [true, false],  // tone
      ['55+', '1'],   // translation
      [true, false],  // paraphrase
      [true, false],  // ask AI
      [true, false],  // generated replies
      [true, false],  // sends on tap only
      [true, true],   // privacy
      ['60+', '30+'], // multilingual
      ['$4.99/wk · $39.99/yr', 'Free + Premium $5.83/mo'],
      ['3 days', '7 days'],
    ],
    'chatgpt-keyboard': [
      [true, false],  // inside keyboard - ChatGPT requires switching apps
      ['10+', 'Chat only'],
      [true, false],
      ['55+', '50+'],
      [true, false],
      [true, true],
      [true, false],
      [true, false],
      [true, false],
      ['60+', '—'],
      ['$4.99/wk · $39.99/yr', '$20/mo (ChatGPT Plus)'],
      ['3 days', 'No paid trial'],
    ],
    'apple-intelligence': [
      [true, true],
      ['10+', '~5 (Rewrite, Proofread, Summarize)'],
      [true, true],
      ['55+', 'No translation in Writing Tools'],
      [true, true],
      [true, false],
      [true, false],
      [true, true],
      [true, true],
      ['60+ devices', 'iPhone 15 Pro and newer only'],
      ['$4.99/wk · $39.99/yr', 'Free (on supported devices)'],
      ['3 days', '—'],
    ],
    keybot: [
      [true, true],
      ['10+', '~5'],
      [true, true],
      ['55+', '40+'],
      [true, true],
      [true, true],
      [true, false],
      [true, false],
      [true, false],
      ['60+', '20+'],
      ['$4.99/wk · $39.99/yr', '$6.99/wk · $49.99/yr'],
      ['3 days', '3 days'],
    ],
    typeai: [
      [true, true],
      ['10+', '~6'],
      [true, true],
      ['55+', '30+'],
      [true, true],
      [true, false],
      [true, true],
      [true, false],
      [true, false],
      ['60+', '15+'],
      ['$4.99/wk · $39.99/yr', '$5.99/wk · $39.99/yr'],
      ['3 days', '3 days'],
    ],
  };

  const rowLabels = [
    L.worksInsideKeyboard,
    L.toolCount,
    L.toneChange,
    L.translation,
    L.paraphrase,
    L.askAi,
    L.generatedReplies,
    L.worksOffline,
    L.privacy,
    L.multilingual,
    L.cost,
    L.trial,
  ];

  return data[slug].map(([keyai, competitor], i) => ({
    feature: rowLabels[i],
    keyai,
    competitor,
  }));
}

const VERDICTS: Record<Locale, Record<CompetitorSlug, string>> = {
  en: {
    grammarly: "Grammarly is excellent at one job — grammar. KeyAI does grammar plus 9 more AI tools, all from inside your keyboard, in 55+ languages. If you only ever fix typos, Grammarly is fine. If you want the full AI assistant inside every app, KeyAI is the upgrade.",
    'chatgpt-keyboard': "ChatGPT is incredibly powerful — but it lives in its own app. KeyAI brings the AI to where you're already typing, so there's no switching apps, no copy-paste. You keep the speed of ChatGPT without breaking your flow.",
    'apple-intelligence': "Apple Intelligence is genuinely good for native rewriting on iPhone 15 Pro and newer. On older devices, you don't get it at all. KeyAI runs on every iPhone running iOS 15 and up, in 60+ languages, with more granular control over tone and translation.",
    keybot: "Keybot and KeyAI cover similar ground. KeyAI ships more total tools, supports more keyboard layouts, and runs a faster price plan with a longer free trial. If you've outgrown Keybot, KeyAI is the natural step up.",
    typeai: "TypeAI is a solid AI keyboard. KeyAI ships more languages, more tools (10+ vs ~6), and the same yearly price with a 3-day trial. Try both — KeyAI's tone changer alone is worth the switch.",
  },
  de: {
    grammarly: 'Grammarly ist exzellent für eine Aufgabe — Grammatik. KeyAI bietet Grammatik plus 9 weitere KI-Tools, alle aus deiner Tastatur in 55+ Sprachen. Wenn du nur Tippfehler korrigierst, reicht Grammarly. Wenn du den vollen KI-Assistenten in jeder App willst, ist KeyAI das Upgrade.',
    'chatgpt-keyboard': 'ChatGPT ist unglaublich mächtig — aber lebt in einer eigenen App. KeyAI bringt die KI dorthin, wo du bereits tippst: kein App-Wechsel, kein Kopieren-Einfügen. Du behältst die Geschwindigkeit von ChatGPT ohne deinen Flow zu unterbrechen.',
    'apple-intelligence': 'Apple Intelligence ist wirklich gut für natives Umschreiben auf iPhone 15 Pro und neuer. Auf älteren Geräten bekommst du es gar nicht. KeyAI läuft auf jedem iPhone ab iOS 15 in 60+ Sprachen mit feinerer Kontrolle über Tonfall und Übersetzung.',
    keybot: 'Keybot und KeyAI decken ähnliches Gebiet ab. KeyAI bietet mehr Tools, mehr Tastaturlayouts und einen günstigeren Preis mit längerer kostenloser Testphase. Wenn du über Keybot hinausgewachsen bist, ist KeyAI der natürliche Schritt.',
    typeai: 'TypeAI ist eine solide KI-Tastatur. KeyAI bietet mehr Sprachen, mehr Tools (10+ vs ~6) und denselben Jahrespreis mit 3-Tage-Testphase. Probiere beides — schon der Tonfall-Wechsler von KeyAI ist den Wechsel wert.',
  },
  fr: {
    grammarly: 'Grammarly excelle dans une tâche — la grammaire. KeyAI fait la grammaire plus 9 autres outils IA, tous depuis votre clavier, en 55+ langues. Si vous ne corrigez que des fautes, Grammarly suffit. Si vous voulez l\'assistant IA complet dans chaque app, KeyAI est la mise à niveau.',
    'chatgpt-keyboard': 'ChatGPT est incroyablement puissant — mais vit dans sa propre app. KeyAI amène l\'IA là où vous tapez déjà, sans changement d\'app ni copier-coller. Vous gardez la vitesse de ChatGPT sans casser votre flow.',
    'apple-intelligence': 'Apple Intelligence est vraiment bien pour la réécriture native sur iPhone 15 Pro et plus récent. Sur les appareils plus anciens, vous ne l\'avez pas du tout. KeyAI fonctionne sur tous les iPhone iOS 15+, en 60+ langues, avec un contrôle plus fin du ton et de la traduction.',
    keybot: 'Keybot et KeyAI couvrent des terrains similaires. KeyAI offre plus d\'outils au total, plus de dispositions de clavier, et un prix plus avantageux avec un essai gratuit plus long. Si vous avez dépassé Keybot, KeyAI est l\'évolution naturelle.',
    typeai: 'TypeAI est un clavier IA solide. KeyAI offre plus de langues, plus d\'outils (10+ vs ~6) et le même prix annuel avec un essai de 3 jours. Essayez les deux — le changeur de ton de KeyAI vaut à lui seul le changement.',
  },
  es: {
    grammarly: 'Grammarly es excelente en una tarea — gramática. KeyAI hace gramática más 9 herramientas IA adicionales, todo desde tu teclado en 55+ idiomas. Si solo corriges errores tipográficos, Grammarly basta. Si quieres el asistente IA completo en cada app, KeyAI es la mejora.',
    'chatgpt-keyboard': 'ChatGPT es increíblemente potente — pero vive en su propia app. KeyAI lleva la IA a donde ya estás escribiendo, sin cambios de app ni copiar-pegar. Mantienes la velocidad de ChatGPT sin romper tu flujo.',
    'apple-intelligence': 'Apple Intelligence es genuinamente bueno para reescritura nativa en iPhone 15 Pro y posteriores. En dispositivos más antiguos, no lo tienes en absoluto. KeyAI funciona en todos los iPhone con iOS 15+, en 60+ idiomas, con control más granular sobre tono y traducción.',
    keybot: 'Keybot y KeyAI cubren terrenos similares. KeyAI incluye más herramientas en total, soporta más distribuciones de teclado y tiene un precio más rápido con prueba gratuita más larga. Si has superado Keybot, KeyAI es el paso natural.',
    typeai: 'TypeAI es un teclado IA sólido. KeyAI incluye más idiomas, más herramientas (10+ vs ~6) y el mismo precio anual con prueba de 3 días. Prueba ambos — el cambiador de tono de KeyAI por sí solo merece el cambio.',
  },
  pt: {
    grammarly: 'O Grammarly é excelente numa tarefa — gramática. O KeyAI faz gramática mais 9 ferramentas IA adicionais, tudo a partir do teu teclado em 55+ idiomas. Se só corriges erros, o Grammarly chega. Se queres o assistente IA completo em cada app, o KeyAI é a evolução.',
    'chatgpt-keyboard': 'O ChatGPT é incrivelmente potente — mas vive na sua própria app. O KeyAI traz a IA para onde já estás a escrever, sem mudanças de app nem copiar-colar. Mantém a velocidade do ChatGPT sem quebrar o teu fluxo.',
    'apple-intelligence': 'A Apple Intelligence é genuinamente boa para reescrita nativa em iPhone 15 Pro e posterior. Em dispositivos mais antigos, não a tens de todo. O KeyAI funciona em todos os iPhone com iOS 15+, em 60+ idiomas, com controlo mais granular sobre tom e tradução.',
    keybot: 'O Keybot e o KeyAI cobrem terreno semelhante. O KeyAI inclui mais ferramentas no total, suporta mais disposições de teclado e tem um preço melhor com período gratuito mais longo. Se superaste o Keybot, o KeyAI é o passo natural.',
    typeai: 'O TypeAI é um teclado IA sólido. O KeyAI inclui mais idiomas, mais ferramentas (10+ vs ~6) e o mesmo preço anual com 3 dias grátis. Experimenta ambos — só o trocador de tom do KeyAI já vale a mudança.',
  },
  'pt-br': {
    grammarly: 'O Grammarly é excelente em uma tarefa — gramática. O KeyAI faz gramática mais 9 ferramentas IA adicionais, tudo direto do seu teclado em 55+ idiomas. Se você só corrige erros, o Grammarly basta. Se quer o assistente IA completo em cada app, o KeyAI é o upgrade.',
    'chatgpt-keyboard': 'O ChatGPT é incrivelmente potente — mas vive em seu próprio app. O KeyAI traz a IA para onde você já está digitando, sem trocas de app nem copiar-colar. Você mantém a velocidade do ChatGPT sem quebrar seu fluxo.',
    'apple-intelligence': 'A Apple Intelligence é genuinamente boa para reescrita nativa no iPhone 15 Pro e mais novos. Em dispositivos mais antigos, você não tem ela de jeito nenhum. O KeyAI funciona em todo iPhone com iOS 15+, em 60+ idiomas, com controle mais granular sobre tom e tradução.',
    keybot: 'O Keybot e o KeyAI cobrem terreno parecido. O KeyAI inclui mais ferramentas no total, suporta mais layouts de teclado e tem um preço melhor com teste grátis mais longo. Se você passou do Keybot, o KeyAI é o passo natural.',
    typeai: 'O TypeAI é um teclado IA sólido. O KeyAI inclui mais idiomas, mais ferramentas (10+ vs ~6) e o mesmo preço anual com 3 dias grátis. Experimente os dois — só o mudador de tom do KeyAI já vale a troca.',
  },
};

export function getCompetitorContent(slug: CompetitorSlug, locale: Locale): CompetitorContent {
  const L = FEATURE_LABELS[locale];
  const name = COMPETITOR_DISPLAY_NAME[slug];
  return {
    name,
    intro: L.introBuilder(name),
    rows: makeRows(locale, slug),
    verdict: VERDICTS[locale][slug],
    ctaHeadline: L.ctaTitle,
  };
}

export function competitorTitle(slug: CompetitorSlug, locale: Locale): string {
  const name = COMPETITOR_DISPLAY_NAME[slug];
  const titles: Record<Locale, string> = {
    en: `KeyAI vs ${name} — Which AI keyboard is better for iPhone?`,
    de: `KeyAI vs ${name} — Welche KI-Tastatur ist besser für iPhone?`,
    fr: `KeyAI vs ${name} — Quel clavier IA est meilleur pour iPhone ?`,
    es: `KeyAI vs ${name} — ¿Qué teclado IA es mejor para iPhone?`,
    pt: `KeyAI vs ${name} — Qual teclado IA é melhor para iPhone?`,
    'pt-br': `KeyAI vs ${name} — Qual teclado IA é melhor para iPhone?`,
  };
  return titles[locale];
}

export function competitorDescription(slug: CompetitorSlug, locale: Locale): string {
  const name = COMPETITOR_DISPLAY_NAME[slug];
  const descs: Record<Locale, string> = {
    en: `Side-by-side comparison of KeyAI and ${name}. Features, pricing, language support, and our verdict on which AI keyboard is best for iPhone in 2026.`,
    de: `Direkter Vergleich von KeyAI und ${name}. Funktionen, Preise, Sprachunterstützung und unser Urteil, welche KI-Tastatur 2026 die beste für iPhone ist.`,
    fr: `Comparaison côte à côte de KeyAI et ${name}. Fonctionnalités, tarifs, support linguistique et notre verdict sur le meilleur clavier IA pour iPhone en 2026.`,
    es: `Comparación lado a lado de KeyAI y ${name}. Funciones, precios, soporte de idiomas y nuestro veredicto sobre el mejor teclado IA para iPhone en 2026.`,
    pt: `Comparação lado a lado de KeyAI e ${name}. Funcionalidades, preços, suporte de idiomas e o nosso veredicto sobre o melhor teclado IA para iPhone em 2026.`,
    'pt-br': `Comparação lado a lado do KeyAI e ${name}. Recursos, preços, suporte a idiomas e nosso veredicto sobre o melhor teclado IA para iPhone em 2026.`,
  };
  return descs[locale];
}

export const COMPETITOR_LABELS = FEATURE_LABELS;
