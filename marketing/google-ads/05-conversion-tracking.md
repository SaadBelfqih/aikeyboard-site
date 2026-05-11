# Conversion Tracking Setup

iOS app installs from Google Ads → App Store can't be attributed user-by-user (Apple's privacy model). So we count the **App Store badge click on bestaikeyboard.com** as the Google Ads conversion event. App Store Connect → Sources tracks the actual install via the `ct=web-<locale>` parameter you already have in every badge URL.

## Step 1 — Set up GA4 (if not already)

1. Go to https://analytics.google.com → Admin → Create property → "KeyAI Website"
2. Add a web data stream for `https://bestaikeyboard.com`
3. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)

## Step 2 — Add GA4 + outbound click tracking to the site

The site doesn't have GA4 yet. Add the snippet below to `src/layouts/BaseLayout.astro` right before `</head>`:

```html
<!-- Google Analytics 4 -->
<script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });

  // Fire 'app_store_click' on every App Store badge click
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href*="apps.apple.com"]');
    if (!a) return;
    gtag('event', 'app_store_click', {
      event_category: 'outbound',
      event_label: a.href,
      locale: document.documentElement.lang || 'en',
    });
  });
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

## Step 3 — Mark `app_store_click` as a conversion in GA4

1. GA4 → Admin → Events → wait 24–48h for event to start firing, then it appears in the list
2. Toggle the **Mark as conversion** switch on `app_store_click`

(In 2026 GA4 uses "Key events" instead of "Conversions" in some properties — same toggle, renamed.)

## Step 4 — Link GA4 → Google Ads

1. GA4 → Admin → Google Ads links → Link → pick your Google Ads account → confirm
2. Google Ads → Tools & Settings → Conversions → New → "Import" → Google Analytics 4 properties → select `app_store_click`
3. Set conversion category to **Other** (it's a proxy for install, not an install itself)
4. Conversion window: 7 days
5. Counting: Every (each click counts, not just unique)

## Step 5 — Verify

1. Open the site in an incognito window
2. Click an App Store badge
3. GA4 → Reports → Realtime → confirm `app_store_click` event appears within ~60s
4. Google Ads → Tools → Conversions → confirm "Status: Recording" within 24h of first click

## Step 6 — Cross-check with App Store Connect

Once weekly, open App Store Connect → Analytics → Sources → Web Referrers. You should see traffic broken down by `ct=web-en`, `ct=web-de`, `ct=web-fr`, etc.

Compare:
- Google Ads "app_store_click" conversions per locale
- App Store Connect "Web Referrer installs" per `ct=web-<locale>`

The ratio (Google clicks → App Store installs) is your **conversion rate to install** — typically 30–60% for high-intent search traffic. Use it to set your true target CPA in Google Ads:

```
True cost per install = Target CPA in Google Ads ÷ Click-to-Install rate
```

## Step 7 (optional) — Server-side install attribution via Firebase

If you want Google Ads to optimize for actual installs (not just clicks):

1. Add the Firebase SDK to the iOS app (you may already have it — check Podfile)
2. Firebase Console → Project Settings → Integrations → Google Ads → Link
3. In Google Ads, the conversion appears as `Firebase: First Open`
4. Switch UAC campaigns to optimize for "First Open" or "In-app purchase: free_trial_started"

This unlocks SKAdNetwork-attributed installs (24h delay, privacy-preserving, no user-level data).

## Recommended conversion priority

Once both events fire reliably:

| Conversion | Source | Priority |
|---|---|---|
| `app_store_click` | GA4 → Google Ads | Primary for Search campaigns |
| `Firebase: First Open` | Firebase iOS SDK | Primary for UAC campaigns |
| `Firebase: free_trial_started` | Firebase events | Secondary — optimize for paid intent |
