import type { Locale } from './locales';

export type UIStrings = {
  nav: {
    features: string;
    pricing: string;
    compare: string;
    blog: string;
    getApp: string;
    usersPill: string;
  };
  hero: {
    h1: string;
    subhead: string;
    socialProof: string;
    rating: string;
    download: string;
  };
  features: {
    sectionEyebrow: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  works: {
    title: string;
    subtitle: string;
  };
  privacy: {
    title: string;
    body: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    trustLine: string;
    weekly: string;
    yearly: string;
    lifetime: string;
    perWeek: string;
    perYear: string;
    paidOnce: string;
    trial: string;
    cta: string;
    cancelAnytime: string;
    save: string;
    bestValue: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  finalCta: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    productH: string;
    compareH: string;
    legalH: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  meta: {
    title: string;
    description: string;
    ogTitle: string;
  };
};

export const UI: Record<Locale, UIStrings> = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      compare: 'Compare',
      blog: 'Blog',
      getApp: 'Get the app',
      usersPill: '⭐ 100K+ users',
    },
    hero: {
      h1: 'The Best AI Keyboard for iPhone',
      subhead: '14 AI writing tools live inside your iPhone keyboard. Fix grammar, change tone, translate, and reply with AI in WhatsApp, iMessage, Mail, and every other app — without copy-pasting into ChatGPT.',
      socialProof: '100,000+ people write better with AI · 4.6★ on the App Store',
      rating: '4.6★ · 60+ languages · iOS 15+',
      download: 'Download on the App Store',
    },
    features: {
      sectionEyebrow: '14 AI tools, one keyboard',
      sectionTitle: 'Your complete AI writing toolkit',
      sectionSubtitle: 'Works in Messages, Mail, WhatsApp, Notes, X, Instagram — every app you type in.',
    },
    works: {
      title: 'Works everywhere you write',
      subtitle: 'No copy-paste. No app switching. AI is always one tap away.',
    },
    privacy: {
      title: 'Your typing is never logged',
      body: 'KeyAI only sends text to AI when you tap a feature — never silently, never in password fields. iOS guarantees the second part: Apple auto-switches to the system keyboard for passwords and card numbers, so KeyAI literally cannot see them.',
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Try it free for 3 days',
      trustLine: 'Trusted by 100,000+ users worldwide',
      weekly: 'Weekly',
      yearly: 'Yearly',
      lifetime: 'Lifetime',
      perWeek: '/ week',
      perYear: '/ year',
      paidOnce: 'Pay once, yours forever',
      trial: '3-day free trial · Cancel anytime',
      cta: 'Start 3-day Free Trial',
      cancelAnytime: 'Secured by the App Store. Cancel anytime.',
      save: 'Save 84%',
      bestValue: 'Best Value',
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know about KeyAI.',
      items: [
        { q: 'What is KeyAI?', a: 'An iPhone keyboard with 14 AI writing tools built in — grammar, tone change, translation, AI replies, paraphrasing, ask-AI, and more. All inside the keyboard, in every app. No copy-paste to ChatGPT.' },
        { q: 'How is this different from ChatGPT?', a: "ChatGPT is a separate app — you leave your conversation, type the message there, copy the response back. KeyAI lives in your keyboard, so the AI is always one tap away — in iMessage, WhatsApp, Mail, Notes, X, Instagram, wherever you're already typing." },
        { q: 'How is this different from Grammarly Keyboard?', a: 'Grammarly fixes grammar. KeyAI fixes grammar plus 13 other things — tone change, translation in 55+ languages, AI-generated replies, paraphrasing, synonyms, and asking AI anything. If you only fix typos, Grammarly is fine. If you actually write on your iPhone, KeyAI is the upgrade.' },
        { q: 'Does KeyAI work with my native language?', a: '60+ keyboard layouts including English, Spanish, French, German, Portuguese, Italian, Dutch, Arabic, Japanese, Korean, and more. Translation supports 55+ languages.' },
        { q: 'Is my typing private?', a: "Yes. Text is only sent to AI when you tap a feature — we never silently capture what you're writing. iOS also auto-switches to the system keyboard for password fields and card numbers, so KeyAI literally cannot see those." },
        { q: 'Why does it ask for Full Access?', a: 'iOS requires Full Access for any third-party keyboard to use the internet — which KeyAI needs to talk to the AI. We use it only for that, never to log keystrokes.' },
        { q: 'How much does it cost?', a: "There's a 3-day free trial. After that, choose Weekly, Yearly (best value), or Lifetime — Apple handles all billing through the App Store. Cancel anytime in your Apple ID subscriptions." },
        { q: 'Will it work on my iPad?', a: 'Yes — KeyAI works on iPhone and iPad with the same subscription.' },
        { q: 'How do I install KeyAI?', a: 'Download from the App Store, then Settings → General → Keyboard → Keyboards → Add New Keyboard → KeyAI, and enable Allow Full Access. Takes 30 seconds.' },
        { q: 'Can I cancel anytime?', a: 'Yes. Subscription is managed in your Apple ID settings — cancel any time before the trial ends and you will not be charged.' },
        { q: 'Does it work on Android?', a: 'Not yet. KeyAI is built for iPhone and iPad only — we use iOS-specific APIs (Full Access, system keyboard handoff for password fields) to keep your typing private. There is no Android version planned in 2026.' },
        { q: 'Does it work in WhatsApp?', a: 'Yes — KeyAI works in WhatsApp, iMessage, Mail, Notes, Instagram, X, Slack, LinkedIn, Telegram, and every other text field on iOS. The AI tools are in the keyboard, not in any specific app.' },
      ],
    },
    finalCta: {
      title: 'Join 100,000+ users writing smarter on iPhone',
      subtitle: 'Free for 3 days. No credit card to start the trial.',
    },
    footer: {
      tagline: 'The best AI keyboard for iPhone. 14 AI writing tools in one keyboard.',
      productH: 'Product',
      compareH: 'Compare',
      legalH: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
    },
    meta: {
      title: 'KeyAI · The Best AI Keyboard for iPhone',
      description: 'The best AI keyboard for iPhone. 14 AI tools — grammar, tone, translate, reply — inside every app. 60+ languages. 3-day free trial. 100,000+ users.',
      ogTitle: 'KeyAI — The Best AI Keyboard for iPhone',
    },
  },
  de: {
    nav: {
      features: 'Funktionen',
      pricing: 'Preise',
      compare: 'Vergleich',
      blog: 'Blog',
      getApp: 'App laden',
      usersPill: '⭐ 100K+ Nutzer',
    },
    hero: {
      h1: 'Die beste KI-Tastatur für iPhone',
      subhead: '14 KI-Schreibwerkzeuge in deiner iPhone-Tastatur. Grammatik prüfen, Tonfall ändern, übersetzen und mit KI antworten — in WhatsApp, iMessage, Mail und jeder anderen App, ohne ChatGPT zu öffnen.',
      socialProof: 'Über 100.000 zufriedene Nutzer schreiben besser mit KI',
      rating: '4.6 im App Store',
      download: 'Im App Store laden',
    },
    features: {
      sectionEyebrow: '14 KI-Tools, eine Tastatur',
      sectionTitle: 'Dein komplettes KI-Schreibset',
      sectionSubtitle: 'Funktioniert in Nachrichten, Mail, WhatsApp, Notizen, X, Instagram — überall, wo du tippst.',
    },
    works: {
      title: 'Überall wo du schreibst',
      subtitle: 'Kein Kopieren-Einfügen. Kein App-Wechsel. KI ist immer einen Tipp entfernt.',
    },
    privacy: {
      title: 'Datenschutz standardmäßig',
      body: 'Wir senden Text nur an OpenAI, wenn du eine KI-Funktion antippst. Apple schaltet automatisch auf die System-Tastatur um bei Passwörtern, Kreditkartennummern und anderen sensiblen Feldern. Dein Tippen wird niemals heimlich erfasst.',
    },
    pricing: {
      eyebrow: 'Preise',
      title: '3 Tage kostenlos testen',
      trustLine: 'Vertraut von über 100.000 Nutzern weltweit',
      weekly: 'Wöchentlich',
      yearly: 'Jährlich',
      lifetime: 'Lebenslang',
      perWeek: '/ Woche',
      perYear: '/ Jahr',
      paidOnce: 'Einmal zahlen, für immer dein',
      trial: '3 Tage kostenlos · Jederzeit kündbar',
      cta: '3-Tage kostenlose Testphase starten',
      cancelAnytime: 'Über App Store gesichert. Jederzeit kündbar.',
      save: '84% sparen',
      bestValue: 'Bester Wert',
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was du über KeyAI wissen musst.',
      items: [
        { q: 'Was ist KeyAI?', a: 'KeyAI ist eine KI-gestützte Tastatur für iPhone. Sie fügt 10+ Schreibwerkzeuge hinzu — Grammatikprüfung, Tonfalländerung, Übersetzung, Paraphrasierung, Antworten und mehr — direkt in deiner Tastatur, sodass du KI in jeder App nutzen kannst ohne in ChatGPT zu kopieren.' },
        { q: 'Wie unterscheidet sich das von ChatGPT?', a: 'ChatGPT ist eine separate App — du musst deine Konversation verlassen, deine Nachricht dort eingeben und die Antwort zurückkopieren. KeyAI läuft innerhalb deiner Tastatur in jeder App, sodass die KI immer einen Tipp entfernt ist — in iMessage, WhatsApp, Mail, Notizen, X, Instagram, überall wo du schreibst.' },
        { q: 'Wie unterscheidet sich das von Grammarly Keyboard?', a: 'Grammarly ist hauptsächlich Grammatikkorrektur. KeyAI macht das plus Tonfalländerung, Übersetzung in 55+ Sprachen, KI-generierte Antworten, Paraphrasierung, Synonyme und KI jede Frage stellen — alles aus deiner Tastatur heraus.' },
        { q: 'Funktioniert KeyAI mit meiner Muttersprache?', a: 'Ja — KeyAI unterstützt 60+ Tastaturlayouts, darunter Deutsch, Englisch, Spanisch, Französisch, Portugiesisch, Italienisch, Niederländisch, Arabisch, Japanisch, Koreanisch und mehr.' },
        { q: 'Ist mein Tippen privat?', a: 'Ja. Wir übertragen Text nur an OpenAI, wenn du eine Funktion antippst — wir erfassen niemals heimlich, was du schreibst. Apple schaltet auch automatisch auf die System-Tastatur um bei Passwortfeldern, Kreditkartennummern und anderen sensiblen Eingaben.' },
        { q: 'Warum fragt es nach Vollzugriff?', a: 'Vollzugriff wird von iOS für jede Drittanbieter-Tastatur benötigt, um das Internet zu nutzen — was KeyAI braucht, um mit der KI zu kommunizieren. Wir verwenden es nur dafür, niemals um deine Tastenanschläge zu protokollieren.' },
        { q: 'Was kostet es?', a: 'KeyAI kostet 4,99 € / Woche oder 39,99 € / Jahr (Ersparnis 84%). Neue Nutzer erhalten eine 3-tägige kostenlose Testphase. Die Abrechnung erfolgt über den App Store — jederzeit kündbar in deinen Apple-ID-Abonnements.' },
        { q: 'Funktioniert es auf meinem iPad?', a: 'Ja — KeyAI funktioniert auf iPhone und iPad mit demselben Abonnement.' },
        { q: 'Wie installiere ich KeyAI?', a: 'Aus dem App Store laden, dann Einstellungen → Allgemein → Tastatur → Tastaturen → Neue Tastatur hinzufügen → KeyAI, und Vollzugriff erlauben. Dauert 30 Sekunden.' },
        { q: 'Kann ich jederzeit kündigen?', a: 'Ja. Das Abonnement wird in deinen Apple-ID-Einstellungen verwaltet — kündige jederzeit vor Ablauf der Testphase und es wird dir nichts berechnet.' },
        { q: 'Funktioniert es auf Android?', a: 'Noch nicht. KeyAI wurde nur für iPhone und iPad gebaut — wir nutzen iOS-spezifische APIs (Vollzugriff, System-Tastatur-Übergabe bei Passwortfeldern), um dein Tippen privat zu halten. Eine Android-Version ist für 2026 nicht geplant.' },
        { q: 'Funktioniert es in WhatsApp?', a: 'Ja — KeyAI funktioniert in WhatsApp, iMessage, Mail, Notizen, Instagram, X, Slack, LinkedIn, Telegram und jedem anderen Textfeld auf iOS. Die KI-Tools sind in der Tastatur, nicht in einer bestimmten App.' },
      ],
    },
    finalCta: {
      title: 'Über 100.000 Nutzer schreiben smarter auf iPhone',
      subtitle: '3 Tage kostenlos. Keine Kreditkarte für die Testphase nötig.',
    },
    footer: {
      tagline: 'Die beste KI-Tastatur für iPhone. 14 KI-Schreibwerkzeuge in einer Tastatur.',
      productH: 'Produkt',
      compareH: 'Vergleich',
      legalH: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      rights: 'Alle Rechte vorbehalten.',
    },
    meta: {
      title: 'KeyAI · Die beste KI-Tastatur für iPhone',
      description: 'Die beste KI-Tastatur für iPhone. 14 KI-Tools — Grammatik, Tonfall, Übersetzung, Antworten — in jeder App. 60+ Sprachen. 3 Tage kostenlos. Über 100.000 Nutzer.',
      ogTitle: 'KeyAI — Die beste KI-Tastatur für iPhone',
    },
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      compare: 'Comparer',
      blog: 'Blog',
      getApp: "Obtenir l'app",
      usersPill: '⭐ 100K+ utilisateurs',
    },
    hero: {
      h1: 'Le meilleur clavier IA pour iPhone',
      subhead: "14 outils IA d'écriture dans le clavier de votre iPhone. Corrigez la grammaire, changez le ton, traduisez et répondez avec l'IA — dans WhatsApp, iMessage, Mail et toutes vos apps, sans ouvrir ChatGPT.",
      socialProof: 'Plus de 100 000 utilisateurs satisfaits écrivent mieux avec IA',
      rating: '4.6 sur App Store',
      download: "Télécharger sur l'App Store",
    },
    features: {
      sectionEyebrow: '14 outils IA, un seul clavier',
      sectionTitle: "Votre boîte à outils d'écriture IA complète",
      sectionSubtitle: 'Fonctionne dans Messages, Mail, WhatsApp, Notes, X, Instagram — partout où vous tapez.',
    },
    works: {
      title: 'Partout où vous écrivez',
      subtitle: "Pas de copier-coller. Pas de changement d'app. L'IA est toujours à un tapotement.",
    },
    privacy: {
      title: 'Privé par défaut',
      body: "Nous envoyons du texte à OpenAI uniquement quand vous tapotez une fonction IA. Apple bascule automatiquement sur le clavier système pour les mots de passe, numéros de carte de crédit et autres champs sensibles. Votre frappe n'est jamais capturée silencieusement.",
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: 'Essayez gratuitement 3 jours',
      trustLine: 'Plus de 100 000 utilisateurs nous font confiance',
      weekly: 'Hebdomadaire',
      yearly: 'Annuel',
      lifetime: 'À vie',
      perWeek: '/ semaine',
      perYear: '/ an',
      paidOnce: 'Payez une fois, à vous pour toujours',
      trial: '3 jours gratuits · Annulez à tout moment',
      cta: 'Commencer mon essai gratuit de 3 jours',
      cancelAnytime: 'Sécurisé par App Store. Annulez à tout moment.',
      save: 'Économisez 84%',
      bestValue: 'Meilleure offre',
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur KeyAI.',
      items: [
        { q: "Qu'est-ce que KeyAI ?", a: "KeyAI est un clavier alimenté par IA pour iPhone. Il ajoute 10+ outils d'écriture — vérification grammaticale, changement de ton, traduction, paraphrase, réponses et plus — directement dans votre clavier, pour utiliser l'IA dans toutes vos apps sans copier-coller vers ChatGPT." },
        { q: "En quoi est-ce différent de ChatGPT ?", a: "ChatGPT est une app séparée — vous devez quitter votre conversation, taper votre message là-bas, puis recopier la réponse. KeyAI tourne dans votre clavier dans toutes les apps, donc l'IA est toujours à un tapotement — dans iMessage, WhatsApp, Mail, Notes, X, Instagram, partout où vous écrivez déjà." },
        { q: "En quoi est-ce différent de Grammarly Keyboard ?", a: "Grammarly est principalement de la correction grammaticale. KeyAI fait cela plus le changement de ton, la traduction dans 55+ langues, les réponses générées par IA, la paraphrase, les synonymes et poser n'importe quelle question à l'IA — tout depuis votre clavier." },
        { q: "KeyAI fonctionne-t-il dans ma langue natale ?", a: "Oui — KeyAI prend en charge 60+ dispositions de clavier dont le français, anglais, espagnol, allemand, portugais, italien, néerlandais, arabe, japonais, coréen et plus." },
        { q: "Ma frappe est-elle privée ?", a: "Oui. Nous transmettons le texte à OpenAI uniquement lorsque vous tapotez une fonction — nous ne capturons jamais silencieusement ce que vous écrivez. Apple bascule également automatiquement sur le clavier système pour les champs de mot de passe, numéros de carte de crédit et autres saisies sensibles." },
        { q: "Pourquoi demande-t-il l'accès complet ?", a: "L'accès complet est requis par iOS pour tout clavier tiers utilisant Internet — ce dont KeyAI a besoin pour communiquer avec l'IA. Nous l'utilisons uniquement pour cela, jamais pour enregistrer vos frappes." },
        { q: 'Combien ça coûte ?', a: "KeyAI coûte 4,99 € / semaine ou 39,99 € / an (84% d'économie). Les nouveaux utilisateurs bénéficient d'un essai gratuit de 3 jours. La facturation est gérée par l'App Store — annulez à tout moment dans vos abonnements Apple ID." },
        { q: 'Fonctionne-t-il sur mon iPad ?', a: 'Oui — KeyAI fonctionne sur iPhone et iPad avec le même abonnement.' },
        { q: 'Comment installer KeyAI ?', a: "Téléchargez depuis l'App Store, puis Réglages → Général → Clavier → Claviers → Ajouter un nouveau clavier → KeyAI, et activez Autoriser l'accès complet. Prend 30 secondes." },
        { q: "Puis-je annuler à tout moment ?", a: "Oui. L'abonnement est géré dans vos réglages Apple ID — annulez à tout moment avant la fin de l'essai et vous ne serez pas facturé." },
        { q: "Fonctionne-t-il sur Android ?", a: "Pas encore. KeyAI est conçu uniquement pour iPhone et iPad — nous utilisons des APIs spécifiques à iOS (Accès complet, basculement vers le clavier système pour les champs de mot de passe) pour garder votre frappe privée. Aucune version Android n'est prévue en 2026." },
        { q: "Fonctionne-t-il dans WhatsApp ?", a: "Oui — KeyAI fonctionne dans WhatsApp, iMessage, Mail, Notes, Instagram, X, Slack, LinkedIn, Telegram et tout autre champ de texte sur iOS. Les outils IA sont dans le clavier, pas dans une app spécifique." },
      ],
    },
    finalCta: {
      title: 'Plus de 100 000 utilisateurs écrivent plus intelligemment sur iPhone',
      subtitle: "Gratuit pendant 3 jours. Pas de carte bancaire pour commencer l'essai.",
    },
    footer: {
      tagline: "Le meilleur clavier IA pour iPhone. 14 outils d'écriture IA dans un clavier.",
      productH: 'Produit',
      compareH: 'Comparer',
      legalH: 'Légal',
      privacy: 'Confidentialité',
      terms: "Conditions d'utilisation",
      rights: 'Tous droits réservés.',
    },
    meta: {
      title: 'KeyAI · Le meilleur clavier IA pour iPhone',
      description: 'Le meilleur clavier IA pour iPhone. 14 outils IA — grammaire, ton, traduction — dans toutes vos apps. 60+ langues. 3 jours gratuits. 100K+ utilisateurs.',
      ogTitle: 'KeyAI — Le meilleur clavier IA pour iPhone',
    },
  },
  es: {
    nav: {
      features: 'Funciones',
      pricing: 'Precios',
      compare: 'Comparar',
      blog: 'Blog',
      getApp: 'Obtener la app',
      usersPill: '⭐ +100K usuarios',
    },
    hero: {
      h1: 'El mejor teclado IA para iPhone',
      subhead: '14 herramientas de escritura IA dentro del teclado de tu iPhone. Corrige gramática, cambia el tono, traduce y responde con IA — en WhatsApp, iMessage, Mail y todas tus apps, sin abrir ChatGPT.',
      socialProof: 'Más de 100.000 usuarios satisfechos escriben mejor con IA',
      rating: '4.6 en App Store',
      download: 'Descargar en App Store',
    },
    features: {
      sectionEyebrow: '14 herramientas IA, un teclado',
      sectionTitle: 'Tu kit completo de escritura con IA',
      sectionSubtitle: 'Funciona en Mensajes, Mail, WhatsApp, Notas, X, Instagram — en cada app donde escribas.',
    },
    works: {
      title: 'En todos los lugares donde escribes',
      subtitle: 'Sin copiar-pegar. Sin cambiar de app. La IA está siempre a un toque.',
    },
    privacy: {
      title: 'Privado por defecto',
      body: 'Solo enviamos texto a OpenAI cuando tocas una función IA. Apple cambia automáticamente al teclado del sistema para contraseñas, números de tarjeta y otros campos sensibles. Tu escritura nunca se captura silenciosamente.',
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Pruébalo gratis 3 días',
      trustLine: 'Confianza de más de 100.000 usuarios en todo el mundo',
      weekly: 'Semanal',
      yearly: 'Anual',
      lifetime: 'De por vida',
      perWeek: '/ semana',
      perYear: '/ año',
      paidOnce: 'Paga una vez, tuyo para siempre',
      trial: '3 días gratis · Cancela cuando quieras',
      cta: 'Comenzar prueba gratuita de 3 días',
      cancelAnytime: 'Asegurado por App Store. Cancela cuando quieras.',
      save: 'Ahorra 84%',
      bestValue: 'Mejor valor',
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre KeyAI.',
      items: [
        { q: '¿Qué es KeyAI?', a: 'KeyAI es un teclado con IA para iPhone. Añade más de 10 herramientas de escritura — revisión gramatical, cambio de tono, traducción, parafraseo, respuestas y más — dentro de tu teclado, para usar IA en cualquier app sin copiar y pegar en ChatGPT.' },
        { q: '¿En qué se diferencia de ChatGPT?', a: 'ChatGPT es una app separada — tienes que salir de tu conversación, escribir el mensaje allí y copiar la respuesta de vuelta. KeyAI vive en tu teclado en cada app, así la IA siempre está a un toque — en iMessage, WhatsApp, Mail, Notas, X, Instagram, donde ya escribes.' },
        { q: '¿En qué se diferencia de Grammarly Keyboard?', a: 'Grammarly es principalmente corrección gramatical. KeyAI hace eso más cambio de tono, traducción a más de 55 idiomas, respuestas generadas por IA, parafraseo, sinónimos y preguntar cualquier cosa a la IA — todo desde tu teclado.' },
        { q: '¿Funciona en mi idioma nativo?', a: 'Sí — KeyAI soporta más de 60 distribuciones de teclado, incluyendo español, inglés, francés, alemán, portugués, italiano, neerlandés, árabe, japonés, coreano y más.' },
        { q: '¿Mi escritura es privada?', a: 'Sí. Solo transmitimos texto a OpenAI cuando tocas una función — nunca capturamos silenciosamente lo que escribes. Apple también cambia automáticamente al teclado del sistema en campos de contraseña, números de tarjeta y otras entradas sensibles.' },
        { q: '¿Por qué pide acceso completo?', a: 'iOS requiere acceso completo para que cualquier teclado de terceros use Internet — lo que KeyAI necesita para hablar con la IA. Lo usamos solo para eso, nunca para registrar tus pulsaciones.' },
        { q: '¿Cuánto cuesta?', a: 'KeyAI cuesta 4,99 € / semana o 39,99 € / año (ahorra 84%). Los nuevos usuarios obtienen una prueba gratuita de 3 días. La facturación la gestiona App Store — cancela cuando quieras en tus suscripciones de Apple ID.' },
        { q: '¿Funciona en mi iPad?', a: 'Sí — KeyAI funciona en iPhone y iPad con la misma suscripción.' },
        { q: '¿Cómo instalo KeyAI?', a: 'Descárgalo de App Store, luego Ajustes → General → Teclado → Teclados → Añadir nuevo teclado → KeyAI, y activa Permitir acceso completo. Tarda 30 segundos.' },
        { q: '¿Puedo cancelar cuando quiera?', a: 'Sí. La suscripción se gestiona en los ajustes de Apple ID — cancela antes de que termine la prueba y no se te cobrará.' },
        { q: '¿Funciona en Android?', a: 'Todavía no. KeyAI está hecho solo para iPhone y iPad — usamos APIs específicas de iOS (acceso completo, paso al teclado del sistema en campos de contraseña) para mantener tu escritura privada. No hay versión Android prevista en 2026.' },
        { q: '¿Funciona en WhatsApp?', a: 'Sí — KeyAI funciona en WhatsApp, iMessage, Mail, Notas, Instagram, X, Slack, LinkedIn, Telegram y cualquier otro campo de texto en iOS. Las herramientas IA están en el teclado, no en una app específica.' },
      ],
    },
    finalCta: {
      title: 'Únete a +100.000 usuarios que escriben más inteligente en iPhone',
      subtitle: 'Gratis 3 días. Sin tarjeta para iniciar la prueba.',
    },
    footer: {
      tagline: 'El mejor teclado IA para iPhone. 14 herramientas IA en un solo teclado.',
      productH: 'Producto',
      compareH: 'Comparar',
      legalH: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: 'Todos los derechos reservados.',
    },
    meta: {
      title: 'KeyAI · El mejor teclado IA para iPhone',
      description: 'El mejor teclado IA para iPhone. 14 herramientas IA — gramática, tono, traducir, responder — en cada app. 60+ idiomas. 3 días gratis. +100.000 usuarios.',
      ogTitle: 'KeyAI — El mejor teclado IA para iPhone',
    },
  },
  pt: {
    nav: {
      features: 'Funcionalidades',
      pricing: 'Preços',
      compare: 'Comparar',
      blog: 'Blog',
      getApp: 'Obter a app',
      usersPill: '⭐ +100K utilizadores',
    },
    hero: {
      h1: 'O melhor teclado IA para iPhone',
      subhead: '14 ferramentas IA de escrita dentro do teclado do teu iPhone. Corrige gramática, muda o tom, traduz e responde com IA — no WhatsApp, iMessage, Mail e todas as tuas apps, sem abrir o ChatGPT.',
      socialProof: 'Mais de 100.000 utilizadores satisfeitos escrevem melhor com IA',
      rating: '4.6 na App Store',
      download: 'Descarregar na App Store',
    },
    features: {
      sectionEyebrow: '14 ferramentas IA, um teclado',
      sectionTitle: 'O teu kit completo de escrita com IA',
      sectionSubtitle: 'Funciona em Mensagens, Mail, WhatsApp, Notas, X, Instagram — em cada app onde escreves.',
    },
    works: {
      title: 'Em todos os sítios onde escreves',
      subtitle: 'Sem copiar-colar. Sem trocar de app. A IA está sempre a um toque.',
    },
    privacy: {
      title: 'Privado por defeito',
      body: 'Só enviamos texto para a OpenAI quando tocas numa funcionalidade IA. A Apple muda automaticamente para o teclado do sistema para palavras-passe, números de cartão e outros campos sensíveis. A tua escrita nunca é capturada silenciosamente.',
    },
    pricing: {
      eyebrow: 'Preços',
      title: 'Experimenta grátis 3 dias',
      trustLine: 'Confiança de mais de 100.000 utilizadores em todo o mundo',
      weekly: 'Semanal',
      yearly: 'Anual',
      lifetime: 'Vitalício',
      perWeek: '/ semana',
      perYear: '/ ano',
      paidOnce: 'Paga uma vez, é teu para sempre',
      trial: '3 dias grátis · Cancela quando quiseres',
      cta: 'Começar período gratuito de 3 dias',
      cancelAnytime: 'Seguro pela App Store. Cancela quando quiseres.',
      save: 'Poupa 84%',
      bestValue: 'Melhor valor',
    },
    faq: {
      title: 'Perguntas frequentes',
      subtitle: 'Tudo o que precisas de saber sobre o KeyAI.',
      items: [
        { q: 'O que é o KeyAI?', a: 'O KeyAI é um teclado com IA para iPhone. Adiciona mais de 10 ferramentas de escrita — verificação gramatical, mudança de tom, tradução, paráfrase, respostas e mais — dentro do teu teclado, para usar IA em qualquer app sem copiar e colar no ChatGPT.' },
        { q: 'Em que é diferente do ChatGPT?', a: 'O ChatGPT é uma app separada — tens de sair da conversa, escrever a mensagem lá e copiar a resposta de volta. O KeyAI vive dentro do teu teclado em todas as apps, por isso a IA está sempre a um toque — no iMessage, WhatsApp, Mail, Notas, X, Instagram, onde já escreves.' },
        { q: 'Em que é diferente do Grammarly Keyboard?', a: 'O Grammarly é sobretudo correção gramatical. O KeyAI faz isso mais mudança de tom, tradução em mais de 55 idiomas, respostas geradas por IA, paráfrase, sinónimos e perguntar qualquer coisa à IA — tudo a partir do teu teclado.' },
        { q: 'Funciona na minha língua nativa?', a: 'Sim — o KeyAI suporta mais de 60 disposições de teclado, incluindo português, inglês, espanhol, francês, alemão, italiano, neerlandês, árabe, japonês, coreano e mais.' },
        { q: 'A minha escrita é privada?', a: 'Sim. Só transmitimos texto à OpenAI quando tocas numa funcionalidade — nunca capturamos silenciosamente o que escreves. A Apple também muda automaticamente para o teclado do sistema em campos de palavra-passe, números de cartão e outras entradas sensíveis.' },
        { q: 'Porque pede acesso total?', a: 'O iOS exige acesso total para qualquer teclado de terceiros aceder à internet — o KeyAI precisa disso para falar com a IA. Usamos só para isso, nunca para registar as tuas teclas.' },
        { q: 'Quanto custa?', a: 'O KeyAI custa 4,99 € / semana ou 39,99 € / ano (poupa 84%). Novos utilizadores recebem 3 dias grátis. A faturação é tratada pela App Store — cancela quando quiseres nas tuas subscrições Apple ID.' },
        { q: 'Funciona no meu iPad?', a: 'Sim — o KeyAI funciona em iPhone e iPad com a mesma subscrição.' },
        { q: 'Como instalo o KeyAI?', a: 'Descarrega da App Store, depois Ajustes → Geral → Teclado → Teclados → Adicionar Novo Teclado → KeyAI, e ativa Permitir Acesso Total. Demora 30 segundos.' },
        { q: 'Posso cancelar quando quiser?', a: 'Sim. A subscrição é gerida nas tuas definições Apple ID — cancela antes do fim do período gratuito e não serás cobrado.' },
        { q: 'Funciona em Android?', a: 'Ainda não. O KeyAI foi feito apenas para iPhone e iPad — usamos APIs específicas do iOS (acesso total, passagem para o teclado do sistema em campos de palavra-passe) para manter a tua escrita privada. Não há versão Android prevista para 2026.' },
        { q: 'Funciona no WhatsApp?', a: 'Sim — o KeyAI funciona no WhatsApp, iMessage, Mail, Notas, Instagram, X, Slack, LinkedIn, Telegram e em qualquer outro campo de texto no iOS. As ferramentas IA estão no teclado, não numa app específica.' },
      ],
    },
    finalCta: {
      title: 'Junta-te a mais de 100.000 utilizadores que escrevem melhor no iPhone',
      subtitle: 'Grátis durante 3 dias. Sem cartão para começar o período gratuito.',
    },
    footer: {
      tagline: 'O melhor teclado IA para iPhone. 14 ferramentas IA num só teclado.',
      productH: 'Produto',
      compareH: 'Comparar',
      legalH: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos',
      rights: 'Todos os direitos reservados.',
    },
    meta: {
      title: 'KeyAI · O melhor teclado IA para iPhone',
      description: 'O melhor teclado IA para iPhone. 14 ferramentas IA — gramática, tom, traduzir, responder — em cada app. 60+ idiomas. 3 dias grátis. +100.000 utilizadores.',
      ogTitle: 'KeyAI — O melhor teclado IA para iPhone',
    },
  },
  'pt-br': {
    nav: {
      features: 'Recursos',
      pricing: 'Preços',
      compare: 'Comparar',
      blog: 'Blog',
      getApp: 'Baixar app',
      usersPill: '⭐ +100K usuários',
    },
    hero: {
      h1: 'O melhor teclado IA para iPhone',
      subhead: '14 ferramentas IA de escrita dentro do teclado do seu iPhone. Corrija gramática, mude o tom, traduza e responda com IA — no WhatsApp, iMessage, Mail e em todos os seus apps, sem abrir o ChatGPT.',
      socialProof: 'Mais de 100.000 usuários satisfeitos escrevem melhor com IA',
      rating: '4.6 na App Store',
      download: 'Baixar na App Store',
    },
    features: {
      sectionEyebrow: '14 ferramentas IA, um teclado',
      sectionTitle: 'Seu kit completo de escrita com IA',
      sectionSubtitle: 'Funciona em Mensagens, Mail, WhatsApp, Notas, X, Instagram — em cada app onde você digita.',
    },
    works: {
      title: 'Em todo lugar onde você escreve',
      subtitle: 'Sem copiar e colar. Sem trocar de app. A IA está sempre a um toque.',
    },
    privacy: {
      title: 'Privado por padrão',
      body: 'Só enviamos texto à OpenAI quando você toca em um recurso IA. A Apple muda automaticamente para o teclado do sistema para senhas, números de cartão e outros campos sensíveis. Sua digitação nunca é capturada silenciosamente.',
    },
    pricing: {
      eyebrow: 'Preços',
      title: 'Teste grátis por 3 dias',
      trustLine: 'Confiado por mais de 100.000 usuários no mundo todo',
      weekly: 'Semanal',
      yearly: 'Anual',
      lifetime: 'Vitalício',
      perWeek: '/ semana',
      perYear: '/ ano',
      paidOnce: 'Pague uma vez, seu para sempre',
      trial: '3 dias grátis · Cancele quando quiser',
      cta: 'Começar 3 dias grátis',
      cancelAnytime: 'Seguro pela App Store. Cancele quando quiser.',
      save: 'Economize 84%',
      bestValue: 'Melhor valor',
    },
    faq: {
      title: 'Perguntas frequentes',
      subtitle: 'Tudo o que você precisa saber sobre o KeyAI.',
      items: [
        { q: 'O que é o KeyAI?', a: 'O KeyAI é um teclado com IA para iPhone. Adiciona mais de 10 ferramentas de escrita — verificação gramatical, mudança de tom, tradução, paráfrase, respostas e mais — direto no seu teclado, para usar IA em qualquer app sem copiar e colar no ChatGPT.' },
        { q: 'Qual a diferença para o ChatGPT?', a: 'O ChatGPT é um app separado — você precisa sair da sua conversa, digitar a mensagem lá e copiar a resposta de volta. O KeyAI vive dentro do seu teclado em todos os apps, então a IA está sempre a um toque — no iMessage, WhatsApp, Mail, Notas, X, Instagram, onde você já escreve.' },
        { q: 'Qual a diferença para o Grammarly Keyboard?', a: 'O Grammarly é principalmente correção gramatical. O KeyAI faz isso mais mudança de tom, tradução em mais de 55 idiomas, respostas geradas por IA, paráfrase, sinônimos e perguntar qualquer coisa à IA — tudo direto do seu teclado.' },
        { q: 'Funciona no meu idioma nativo?', a: 'Sim — o KeyAI suporta mais de 60 layouts de teclado, incluindo português, inglês, espanhol, francês, alemão, italiano, holandês, árabe, japonês, coreano e mais.' },
        { q: 'Minha digitação é privada?', a: 'Sim. Só transmitimos texto à OpenAI quando você toca em um recurso — nunca capturamos silenciosamente o que você escreve. A Apple também muda automaticamente para o teclado do sistema em campos de senha, números de cartão e outras entradas sensíveis.' },
        { q: 'Por que pede acesso total?', a: 'O iOS exige acesso total para qualquer teclado de terceiros usar a internet — o KeyAI precisa disso para conversar com a IA. Usamos só para isso, nunca para registrar suas teclas.' },
        { q: 'Quanto custa?', a: 'O KeyAI custa R$ 24,90 / semana ou R$ 199,90 / ano (economize 84%). Novos usuários recebem 3 dias grátis. A cobrança é feita pela App Store — cancele quando quiser nas suas assinaturas Apple ID.' },
        { q: 'Funciona no meu iPad?', a: 'Sim — o KeyAI funciona em iPhone e iPad com a mesma assinatura.' },
        { q: 'Como instalo o KeyAI?', a: 'Baixe na App Store, depois Ajustes → Geral → Teclado → Teclados → Adicionar Novo Teclado → KeyAI, e ative Permitir Acesso Total. Leva 30 segundos.' },
        { q: 'Posso cancelar a qualquer momento?', a: 'Sim. A assinatura é gerenciada nas suas configurações Apple ID — cancele antes do fim do teste e nada será cobrado.' },
        { q: 'Funciona no Android?', a: 'Ainda não. O KeyAI foi feito apenas para iPhone e iPad — usamos APIs específicas do iOS (acesso total, passagem para o teclado do sistema em campos de senha) para manter sua digitação privada. Não há versão Android prevista para 2026.' },
        { q: 'Funciona no WhatsApp?', a: 'Sim — o KeyAI funciona no WhatsApp, iMessage, Mail, Notas, Instagram, X, Slack, LinkedIn, Telegram e em qualquer outro campo de texto no iOS. As ferramentas IA estão no teclado, não em um app específico.' },
      ],
    },
    finalCta: {
      title: 'Junte-se a mais de 100.000 usuários escrevendo melhor no iPhone',
      subtitle: 'Grátis por 3 dias. Sem cartão para começar o teste.',
    },
    footer: {
      tagline: 'O melhor teclado IA para iPhone. 14 ferramentas IA em um só teclado.',
      productH: 'Produto',
      compareH: 'Comparar',
      legalH: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos',
      rights: 'Todos os direitos reservados.',
    },
    meta: {
      title: 'KeyAI · O melhor teclado IA para iPhone',
      description: 'O melhor teclado IA para iPhone. 14 ferramentas IA — gramática, tom, traduzir, responder — em cada app. 60+ idiomas. 3 dias grátis. +100.000 usuários.',
      ogTitle: 'KeyAI — O melhor teclado IA para iPhone',
    },
  },
};

export function t(locale: import('./locales').Locale): UIStrings {
  return UI[locale] ?? UI.en;
}
