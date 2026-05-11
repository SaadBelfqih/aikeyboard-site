# KeyAI Google Ads Starter Pack

Ready-to-import campaign assets for **bestaikeyboard.com** / **App ID 6466343783**.

## Files

- `01-keywords-search.csv` — Search campaign keywords (4 markets × ad groups). Google Ads Editor format.
- `02-rsa-ads.csv` — Responsive Search Ads (RSA): headlines + descriptions per ad group.
- `03-negative-keywords-shared.csv` — Shared negative list applied to ALL search campaigns.
- `04-campaign-structure.md` — Campaign hierarchy + targeting + budget per market.
- `05-conversion-tracking.md` — How to track App Store badge clicks as Google Ads conversions.

## Import order in Google Ads Editor

1. Create the campaigns manually per `04-campaign-structure.md` (Google Ads Editor needs campaigns to exist first).
2. File → Import → CSV → `01-keywords-search.csv`
3. File → Import → CSV → `02-rsa-ads.csv`
4. Tools → Shared library → Negative keyword lists → New list → paste `03-negative-keywords-shared.csv` → attach to all campaigns.
5. Set up conversion per `05-conversion-tracking.md` BEFORE going live.
6. Post changes.

## Budget recommendation (week 1)

| Campaign | Daily budget | Why |
|---|---|---|
| US – Search | $12 | Largest pool, highest CPC |
| DE – Search | $6 | Strong existing market |
| BR – Search | $3 | Cheap CPC, volume play |
| FR – Search | $3 | Moderate CPC, under-targeted |
| **Total** | **$24/day** | ~$170/week |

Scale up after 2 weeks based on which campaigns hit < $30 CPI (US/EU) / < $10 CPI (BR).

## What to do BEFORE turning on

- [ ] Set up GA4 on bestaikeyboard.com (`G-...` measurement ID)
- [ ] Link GA4 → Google Ads
- [ ] Mark "App Store badge click" as a conversion in GA4 (see `05-conversion-tracking.md`)
- [ ] Verify App Store Connect → Sources is recording your `ct=web-<locale>` referrals (already wired in the site)
- [ ] Set iOS-only device targeting on every campaign
