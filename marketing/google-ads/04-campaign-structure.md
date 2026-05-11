# Campaign Structure & Targeting

## Campaign hierarchy

```
US - Search                ($12/day)
├── Best AI Keyboard       (12 keywords → /)
├── Free AI Keyboard       (7 keywords  → /free-ai-keyboard/)
├── WhatsApp Intent        (4 keywords  → /)
├── vs Grammarly           (4 keywords  → /vs/grammarly/)
├── vs ChatGPT             (4 keywords  → /vs/chatgpt-keyboard/)
├── vs Apple Intelligence  (3 keywords  → /vs/apple-intelligence/)
├── vs CleverType          (2 keywords  → /vs/clevertype/)
├── vs Ghostwriter         (2 keywords  → /vs/ghostwriter/)
├── Feature - Tone         (3 keywords  → /)
├── Feature - Translate    (3 keywords  → /)
└── Feature - Humanize     (2 keywords  → /)

DE - Search                ($6/day)
├── Beste KI Tastatur      (6 → /de/)
├── ChatGPT Tastatur       (3 → /de/vs/chatgpt-keyboard/)
├── WhatsApp Intent        (3 → /de/)
├── Schreibassistent       (3 → /de/)
└── vs Grammarly           (2 → /de/vs/grammarly/)

BR - Search                ($3/day)
├── Melhor Teclado IA      (6 → /pt-br/)
├── ChatGPT no Teclado     (3 → /pt-br/vs/chatgpt-keyboard/)
├── WhatsApp Intent        (3 → /pt-br/)
└── Corretor IA            (3 → /pt-br/)

FR - Search                ($3/day)
├── Meilleur Clavier IA    (5 → /fr/)
├── ChatGPT Clavier        (2 → /fr/vs/chatgpt-keyboard/)
├── WhatsApp Intent        (2 → /fr/)
└── Correcteur             (2 → /fr/)
```

## Per-campaign targeting

Apply to **every** Search campaign:

- **Device targeting:** iPhone + iPad only. Exclude Android, Computer, Tablet (other), TV.
- **Networks:** Search Network. **DO NOT** enable Search Partners or Display Network for week 1.
- **Bidding strategy:** Maximize Clicks with target CPC ceiling (US: $2.50, DE: $1.50, BR: $0.50, FR: $1.80). Switch to Maximize Conversions once you have ~30 conversions logged.
- **Ad rotation:** Optimize for clicks (Google picks the best RSA combinations).

## Geo targeting per campaign

| Campaign | Locations | Exclude |
|---|---|---|
| US - Search | United States | None |
| DE - Search | Germany, Austria, Switzerland (German-speaking) | – |
| BR - Search | Brazil | – |
| FR - Search | France, Belgium (French-speaking), Switzerland | – |

## Schedule (recommended start)

- Run ads **24/7** for the first 2 weeks to collect data.
- After week 2, look at the **Day & Hour** report and pause low-converting hours.

## Audiences (Observation, not Targeting)

Add these as **observation** audiences on each ad group so you can see performance segments without restricting reach:

- In-market: Apps & software → Productivity apps
- In-market: iPhone owners
- Custom intent: people who recently searched any of your keywords
- Affinity: Technology enthusiasts

## Sitelink extensions (apply to all campaigns)

| Sitelink | URL |
|---|---|
| All 14 AI Tools | https://bestaikeyboard.com/#features |
| 100K+ Real Reviews | https://bestaikeyboard.com/#testimonials |
| 3-Day Free Trial | https://bestaikeyboard.com/#pricing |
| vs Grammarly | https://bestaikeyboard.com/vs/grammarly/ |

## Callout extensions

- 14 AI Writing Tools
- 60+ Languages Supported
- 100,000+ Users Worldwide
- 4.6 Stars on App Store
- Works in Every App
- 3-Day Free Trial · No Card
- Cancel Anytime
- iPhone & iPad

## Structured snippets

- Type: **Models** → 14 AI Tools, Grammar Check, Tone Changer, Translate, Ask AI, Humanize, Paraphrase, AI Replies, Continue Text, Find Synonyms, Rewrite Post, Emojify, Custom Prompts, Auto Paste
- Type: **Featured** → WhatsApp, iMessage, Mail, Notes, Instagram, X, Slack, LinkedIn, Telegram

## Kill criteria — review at end of week 2

Pause a keyword if:
- Spent >$15 (US/EU) or >$5 (BR), got zero clicks → bid too low, raise
- Spent >$25 with clicks but zero App Store referrals in App Store Connect → wrong intent, pause
- CPC consistently above target ceiling → adjust bid or pause

## When to expand

Add a **UAC (Universal App Campaign)** campaign once Search has logged at least **30 App Store badge click conversions**. UAC needs that signal to optimize. Start at $15/day, target CPA of $5.
