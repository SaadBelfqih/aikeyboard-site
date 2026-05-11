import type { Locale } from './locales';

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const en: Feature[] = [
  { id: 'grammar',    icon: '✓',  title: 'Check Grammar',    description: 'Correct grammatical and spelling errors to perfect your text.' },
  { id: 'tone',       icon: '🎭', title: 'Tone Changer',     description: 'Friendly, formal, sarcastic, empathetic — 12+ tones to fit any message.' },
  { id: 'ask',        icon: '🤖', title: 'Ask AI',           description: 'Get accurate answers to any question, in any language, without leaving your keyboard.' },
  { id: 'translate',  icon: '🌐', title: 'Translate',        description: 'Translate between 55+ languages right from your keyboard, in any app.' },
  { id: 'humanize',   icon: '🧠', title: 'Humanize',         description: 'Make AI-generated or stiff text sound natural and human — beat AI detectors.' },
  { id: 'paraphrase', icon: '↻',  title: 'Paraphrase',       description: "Express the same meaning with different words while keeping the text's essence." },
  { id: 'reply',      icon: '💬', title: 'Reply',            description: 'AI drafts a contextually relevant reply based on the conversation you’re in.' },
  { id: 'continue',   icon: '➤',  title: 'Continue Text',    description: 'Expand your narrative while preserving the original tone and language.' },
  { id: 'email',      icon: '✉️', title: 'Write Emails',     description: 'Turn a one-line brief into a polished email — opening, body, sign-off.' },
  { id: 'rewrite',    icon: '✨', title: 'Rewrite Post',     description: 'Turn a rough idea into a compelling social media post that drives engagement.' },
  { id: 'synonyms',   icon: '⇄',  title: 'Find Synonyms',    description: 'Enrich your vocabulary with linguistically diverse synonyms in a tap.' },
  { id: 'emojify',    icon: '😀', title: 'Emojify',          description: 'Add the right emoji to any sentence automatically. No more searching the emoji picker.' },
  { id: 'custom',     icon: '⚙️', title: 'Custom Prompts',   description: 'Create your own AI commands — anything you can describe, KeyAI can do.' },
  { id: 'autopaste',  icon: '📋', title: 'Auto Paste',       description: 'One-tap paste for the lines you send all the time — addresses, greetings, links.' },
];

const de: Feature[] = [
  { id: 'grammar',    icon: '✓',  title: 'Grammatik prüfen',  description: 'Korrigiere grammatikalische und Rechtschreibfehler, um deinen Text zu perfektionieren.' },
  { id: 'tone',       icon: '🎭', title: 'Tonfall ändern',    description: 'Freundlich, formell, sarkastisch, einfühlsam — 12+ Töne für jede Nachricht.' },
  { id: 'ask',        icon: '🤖', title: 'KI fragen',         description: 'Erhalte genaue Antworten auf jede Frage in jeder Sprache, ohne deine Tastatur zu verlassen.' },
  { id: 'translate',  icon: '🌐', title: 'Übersetzen',        description: 'Übersetze in 55+ Sprachen direkt aus deiner Tastatur, in jeder App.' },
  { id: 'humanize',   icon: '🧠', title: 'Humanisieren',      description: 'Lass KI-generierten oder steifen Text natürlich klingen — umgehe KI-Detektoren.' },
  { id: 'paraphrase', icon: '↻',  title: 'Umschreiben',       description: 'Drücke den gleichen Sinn mit anderen Worten aus und behalte die Essenz des Textes bei.' },
  { id: 'reply',      icon: '💬', title: 'Antworten',         description: 'KI verfasst eine kontextuell relevante Antwort basierend auf dem Gespräch.' },
  { id: 'continue',   icon: '➤',  title: 'Text fortsetzen',   description: 'Erweitere nahtlos deine Erzählung und behalte dabei den ursprünglichen Ton bei.' },
  { id: 'email',      icon: '✉️', title: 'E-Mails schreiben', description: 'Verwandle einen Stichpunkt in eine polierte E-Mail — Anrede, Inhalt, Abschluss.' },
  { id: 'rewrite',    icon: '✨', title: 'Beitrag umschreiben', description: 'Verwandle eine grobe Idee in einen überzeugenden Social-Media-Beitrag.' },
  { id: 'synonyms',   icon: '⇄',  title: 'Synonyme finden',   description: 'Bereichere deinen Wortschatz mit sprachlich vielfältigen Synonymen.' },
  { id: 'emojify',    icon: '😀', title: 'Emojify',           description: 'Füge automatisch das richtige Emoji zu jedem Satz hinzu — Schluss mit Emoji-Suche.' },
  { id: 'custom',     icon: '⚙️', title: 'Eigene Befehle',    description: 'Erstelle eigene KI-Befehle — alles, was du beschreiben kannst, kann KeyAI tun.' },
  { id: 'autopaste',  icon: '📋', title: 'Auto-Einfügen',     description: 'Ein-Tipp-Einfügen für oft gesendete Texte — Adressen, Begrüßungen, Links.' },
];

const fr: Feature[] = [
  { id: 'grammar',    icon: '✓',  title: 'Vérification grammaticale', description: "Corrigez les erreurs grammaticales et d'orthographe pour perfectionner votre texte." },
  { id: 'tone',       icon: '🎭', title: 'Changeur de ton',  description: 'Amical, formel, sarcastique, empathique — 12+ tons pour chaque message.' },
  { id: 'ask',        icon: '🤖', title: "Demandez à l'IA", description: "Obtenez des réponses précises à toute question, dans n'importe quelle langue, sans quitter votre clavier." },
  { id: 'translate',  icon: '🌐', title: 'Traduire',          description: 'Traduisez entre 55+ langues directement depuis votre clavier, dans toutes les apps.' },
  { id: 'humanize',   icon: '🧠', title: 'Humaniser',         description: "Faites en sorte que le texte généré par IA sonne naturel — contournez les détecteurs d'IA." },
  { id: 'paraphrase', icon: '↻',  title: 'Paraphraser',       description: "Exprimez la même idée avec des mots différents tout en conservant l'essence du texte." },
  { id: 'reply',      icon: '💬', title: 'Répondre',          description: "L'IA rédige une réponse contextuellement pertinente basée sur la conversation." },
  { id: 'continue',   icon: '➤',  title: 'Continuer le texte', description: "Développez votre récit tout en préservant le ton et la langue d'origine." },
  { id: 'email',      icon: '✉️', title: 'Rédiger des e-mails', description: "Transformez une simple ligne en e-mail soigné — ouverture, corps, signature." },
  { id: 'rewrite',    icon: '✨', title: 'Réécrire le post',  description: 'Transformez une idée brute en post de médias sociaux convaincant.' },
  { id: 'synonyms',   icon: '⇄',  title: 'Trouver des synonymes', description: 'Enrichissez votre vocabulaire avec des synonymes linguistiquement diversifiés.' },
  { id: 'emojify',    icon: '😀', title: 'Emojify',           description: "Ajoutez automatiquement le bon emoji à chaque phrase — fini la recherche d'emoji." },
  { id: 'custom',     icon: '⚙️', title: 'Commandes personnalisées', description: 'Créez vos propres commandes IA — tout ce que vous pouvez décrire, KeyAI peut le faire.' },
  { id: 'autopaste',  icon: '📋', title: 'Collage automatique', description: "Collage en un tap pour les textes que vous envoyez souvent — adresses, salutations, liens." },
];

const es: Feature[] = [
  { id: 'grammar',    icon: '✓',  title: 'Revisar gramática',  description: 'Corrige errores gramaticales y ortográficos para perfeccionar tu texto.' },
  { id: 'tone',       icon: '🎭', title: 'Cambio de tono',     description: 'Amigable, formal, sarcástico, empático — 12+ tonos para cada mensaje.' },
  { id: 'ask',        icon: '🤖', title: 'Preguntar a la IA',  description: 'Obtén respuestas precisas a cualquier pregunta, en cualquier idioma, sin salir de tu teclado.' },
  { id: 'translate',  icon: '🌐', title: 'Traducir',           description: 'Traduce entre 55+ idiomas directamente desde tu teclado, en cualquier app.' },
  { id: 'humanize',   icon: '🧠', title: 'Humanizar',          description: 'Haz que el texto generado por IA suene natural — evita los detectores de IA.' },
  { id: 'paraphrase', icon: '↻',  title: 'Parafrasear',        description: 'Expresa el mismo significado con palabras diferentes y mantén la esencia del texto.' },
  { id: 'reply',      icon: '💬', title: 'Responder',          description: 'La IA redacta una respuesta contextualmente relevante basada en la conversación.' },
  { id: 'continue',   icon: '➤',  title: 'Continuar texto',    description: 'Expande tu narrativa mientras preservas el tono y el lenguaje originales.' },
  { id: 'email',      icon: '✉️', title: 'Escribir correos',   description: 'Convierte una línea en un correo pulido — saludo, cuerpo, despedida.' },
  { id: 'rewrite',    icon: '✨', title: 'Reescribir publicación', description: 'Convierte una idea cruda en una publicación de redes sociales atractiva.' },
  { id: 'synonyms',   icon: '⇄',  title: 'Encontrar sinónimos', description: 'Enriquece tu vocabulario con sinónimos lingüísticamente diversos.' },
  { id: 'emojify',    icon: '😀', title: 'Emojify',            description: 'Añade el emoji correcto a cada frase automáticamente — adiós al selector de emojis.' },
  { id: 'custom',     icon: '⚙️', title: 'Comandos personalizados', description: 'Crea tus propios comandos de IA — todo lo que puedas describir, KeyAI lo puede hacer.' },
  { id: 'autopaste',  icon: '📋', title: 'Pegar automáticamente', description: 'Pegado de un toque para los textos que envías a menudo — direcciones, saludos, enlaces.' },
];

const pt: Feature[] = [
  { id: 'grammar',    icon: '✓',  title: 'Verificar gramática', description: 'Corrige erros gramaticais e ortográficos para aperfeiçoar o teu texto.' },
  { id: 'tone',       icon: '🎭', title: 'Mudança de tom',     description: 'Amigável, formal, sarcástico, empático — 12+ tons para cada mensagem.' },
  { id: 'ask',        icon: '🤖', title: 'Pergunta à IA',      description: 'Obtém respostas precisas a qualquer pergunta, em qualquer idioma, sem sair do teu teclado.' },
  { id: 'translate',  icon: '🌐', title: 'Traduzir',           description: 'Traduz entre 55+ idiomas diretamente do teu teclado, em qualquer app.' },
  { id: 'humanize',   icon: '🧠', title: 'Humanizar',          description: 'Faz com que o texto gerado por IA soe natural — evita os detetores de IA.' },
  { id: 'paraphrase', icon: '↻',  title: 'Parafrasear',        description: 'Expressa o mesmo significado com palavras diferentes e mantém a essência do texto.' },
  { id: 'reply',      icon: '💬', title: 'Responder',          description: 'A IA elabora uma resposta contextualmente relevante baseada na conversa.' },
  { id: 'continue',   icon: '➤',  title: 'Continuar texto',    description: 'Expande a tua narrativa preservando o tom e o idioma originais.' },
  { id: 'email',      icon: '✉️', title: 'Escrever e-mails',   description: 'Transforma uma linha numa mensagem polida — saudação, corpo, despedida.' },
  { id: 'rewrite',    icon: '✨', title: 'Reescrever post',     description: 'Transforma uma ideia em bruto numa publicação de redes sociais atraente.' },
  { id: 'synonyms',   icon: '⇄',  title: 'Encontrar sinónimos', description: 'Enriquece o teu vocabulário com sinónimos linguisticamente diversos.' },
  { id: 'emojify',    icon: '😀', title: 'Emojify',            description: 'Adiciona o emoji certo a cada frase automaticamente — adeus ao seletor de emojis.' },
  { id: 'custom',     icon: '⚙️', title: 'Comandos personalizados', description: 'Cria os teus próprios comandos de IA — tudo o que conseguires descrever, o KeyAI consegue fazer.' },
  { id: 'autopaste',  icon: '📋', title: 'Colagem automática', description: 'Colagem com um toque para os textos que envias muitas vezes — moradas, saudações, links.' },
];

const ptBR: Feature[] = [
  { id: 'grammar',    icon: '✓',  title: 'Verificar gramática', description: 'Corrija erros gramaticais e ortográficos para aperfeiçoar seu texto.' },
  { id: 'tone',       icon: '🎭', title: 'Mudança de tom',     description: 'Amigável, formal, sarcástico, empático — 12+ tons para cada mensagem.' },
  { id: 'ask',        icon: '🤖', title: 'Pergunte à IA',      description: 'Receba respostas precisas para qualquer pergunta, em qualquer idioma, sem sair do seu teclado.' },
  { id: 'translate',  icon: '🌐', title: 'Traduzir',           description: 'Traduza entre 55+ idiomas direto do seu teclado, em qualquer app.' },
  { id: 'humanize',   icon: '🧠', title: 'Humanizar',          description: 'Faça o texto gerado por IA soar natural — burle os detectores de IA.' },
  { id: 'paraphrase', icon: '↻',  title: 'Parafrasear',        description: 'Expresse o mesmo significado com palavras diferentes e mantenha a essência do texto.' },
  { id: 'reply',      icon: '💬', title: 'Responder',          description: 'A IA elabora uma resposta contextualmente relevante baseada na conversa.' },
  { id: 'continue',   icon: '➤',  title: 'Continuar texto',    description: 'Expanda sua narrativa preservando o tom e o idioma originais.' },
  { id: 'email',      icon: '✉️', title: 'Escrever e-mails',   description: 'Transforme uma linha em um e-mail polido — abertura, corpo, despedida.' },
  { id: 'rewrite',    icon: '✨', title: 'Reescrever post',     description: 'Transforme uma ideia em rascunho em um post de redes sociais que engaja.' },
  { id: 'synonyms',   icon: '⇄',  title: 'Encontrar sinônimos', description: 'Enriqueça seu vocabulário com sinônimos linguisticamente diversos.' },
  { id: 'emojify',    icon: '😀', title: 'Emojify',            description: 'Adicione o emoji certo a cada frase automaticamente — adeus seletor de emojis.' },
  { id: 'custom',     icon: '⚙️', title: 'Prompts personalizados', description: 'Crie seus próprios comandos de IA — tudo que você consegue descrever, o KeyAI consegue fazer.' },
  { id: 'autopaste',  icon: '📋', title: 'Colagem automática', description: 'Cole com um toque os textos que você envia muito — endereços, saudações, links.' },
];

export const FEATURES: Record<Locale, Feature[]> = {
  en, de, fr, es, pt, 'pt-br': ptBR,
};
