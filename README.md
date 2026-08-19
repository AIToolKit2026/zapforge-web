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
| `contact`     | Contact name, email, "A Zapcom company" line               |
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

| File           | Source                          |
| -------------- | ------------------------------- |
| `composer.png` | `04-composer-migration.png`     |
| `plan.png`     | `11-run-plan.png`               |
| `diff.png`     | `14-run-diff-split.png`         |
| `summary.png`  | `16-run-pr-summary.png`         |
| `logs.png`     | `17-run-logs.png`               |

They show **demonstration data** (`acme/payments-service`), which the section
masthead states explicitly. Re-copy them when the product UI changes.

The hero visual is not a screenshot — `src/components/RunMock.tsx` is an
animated recreation of the same run, so it stays crisp at any resolution. Its
stage names and durations mirror the product's own seed data. It honours
`prefers-reduced-motion` by rendering the finished state statically.

## Content note

Institutional references in the `regulated` section are drawn from those
institutions' own published disclosures and are presented as public market
evidence, **not** as a client list. Keep the disclaimer in place when editing
that section.
