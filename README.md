# ZapForge — landing page

Marketing site for **ZapForge**, Zapcom's governed migration and modernization
workbench.

The page is product-first: it leads with what ZapForge does, shows the real
application, and treats Gulf open-banking as the proof section rather than the
frame. Product facts and screenshots come from the application itself
([AIToolKit2026/zapforge](https://github.com/AIToolKit2026/zapforge)).

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Statically prerendered — deploys to Vercel with zero configuration

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Editing the copy

**All page copy lives in `src/content/site.ts`.** Edit there rather than in the
components — each exported object maps to one section of the page:

| Export        | Section                                                    |
| ------------- | ---------------------------------------------------------- |
| `contact`     | Contact email and the "A Zapcom product" line              |
| `nav`         | Header navigation                                           |
| `hero`        | Hero headline, lede, CTAs, proof badges                     |
| `stacks`      | Legacy-stack strip under the hero                           |
| `problem`     | The ICP's throughput problem                                |
| `product`     | Five screenshot-led feature blocks                          |
| `gates`       | The five-gate workflow                                      |
| `templates`   | Migration / modernization / greenfield template library     |
| `workstreams` | Migrate / Modernize / Integrate                             |
| `regulated`   | Gulf mandate + bank disclosures + first-engagement scope    |
| `security`    | CISO questions + the FAQ block                              |
| `pricing`     | Pilot / Programme / Enterprise                              |
| `cta`         | Week 0–4 pilot plan and closing CTA                         |
| `footer`      | Footer link columns and the sourcing note                   |

## Design tokens

Brand colours are declared once in the `@theme` block of
`src/app/globals.css` and used as Tailwind utilities (`bg-navy-950`,
`text-brand`, `text-forge`, `border-line`, …). Change them there to restyle the
whole page.

## Deployment

Deployed on Vercel (team `zapforge`, project `zapforge-web`) and connected to
this repository, so every push to `main` ships to production and branches get
preview URLs.

Production: **https://zapforge-web.vercel.app**

`metadataBase` in `src/app/layout.tsx` points at that URL. Update it if a custom
domain is attached, otherwise Open Graph and canonical URLs will resolve against
the old host.

## Product screenshots

`public/shots/` holds the application screenshots used by the `product` section.
They are copied from `screenshots/dark/` in the product repo:

| File           | Source                      |
| -------------- | --------------------------- |
| `composer.png` | `04-composer-migration.png` |
| `plan.png`     | `11-run-plan.png`           |
| `diff.png`     | `14-run-diff-split.png`     |
| `summary.png`  | `16-run-pr-summary.png`     |
| `logs.png`     | `17-run-logs.png`           |

They show **demonstration data** (`acme/payments-service`), which the section
masthead states explicitly.

**Each is cropped to the main pane (x≥665 of the 2704px original).** The
committed dark captures were taken mid theme transition, so the left run-list
sidebar rendered with light-mode styling — white rows inside an otherwise dark
window. The app itself is correct (`.zf-row` resolves to `--bg-subtle` /
`--bg-muted`, which are `#111111` / `#1a1a1a` under `[data-theme="dark"]`); only
the captures are wrong. Cropping removes the affected region and makes the
remaining UI larger. Re-crop from the same offset if you re-copy them, or drop
the crop once the product repo has clean dark captures.

The root cause is worth fixing upstream: `tests/e2e/screenshots.spec.ts` selects
the theme toggle with `button.zf-themetoggle`, which now matches three buttons
(Anvil, theme, Help) and so clicks the wrong one; it also waits only 80ms and
never disables CSS transitions before capturing.

## Rendered mocks

Two product surfaces are built in markup rather than screenshotted, so they are
crisp at any resolution and always render in true dark mode:

- `src/components/RunMock.tsx` — the animated hero run. Replays the approval
  gate, and honours `prefers-reduced-motion` by pinning to the finished state.
- `src/components/WorkbenchMock.tsx` — the workspace screen. Uses the
  application's own dark tokens; its dark capture was unusable for the reason
  above. Referenced from `site.ts` via the `mock:workbench` sentinel.

## Content note

Institutional references in the `regulated` section are drawn from those
institutions' own published disclosures and are presented as public market
evidence, **not** as a client list. Keep the disclaimer in place when editing
that section.
