# ZapForge — landing page

Marketing site for **ZapForge**, Zapcom's governed migration and modernisation
product for Gulf banks. Content is derived from the ZapForge banking deck.

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

| Export         | Section                                     |
| -------------- | ------------------------------------------- |
| `contact`      | Contact name, email, "A Zapcom company" line |
| `nav`          | Header navigation                            |
| `hero`         | Hero headline, lede, badges                  |
| `mandate`      | Gulf open-banking regulatory pattern         |
| `evidence`     | Published bank disclosures                   |
| `scope`        | In scope vs. explicitly out of scope         |
| `workstreams`  | Migrate / Modernise / Integrate              |
| `gates`        | The five-gate workflow                       |
| `security`     | CISO questions + the FAQ block               |
| `pricing`      | Pilot / Programme / Enterprise               |
| `cta`          | Week 0–4 pilot plan and closing CTA          |

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

## Content note

Institutional references in the "Gulf banks have already put this in writing"
section are drawn from those institutions' own published disclosures and are
presented as public market evidence, **not** as a client list. Keep the
disclaimer in place when editing that section.
