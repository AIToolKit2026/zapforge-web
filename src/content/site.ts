/**
 * Single source of truth for all landing-page copy.
 *
 * Product facts (modes, templates, run stages, engines, cost meter) are drawn
 * from the ZapForge application itself — see AIToolKit2026/zapforge. Regulatory
 * and institutional references are drawn from public disclosures.
 *
 * Edit copy here, not in the components.
 */

export const contact = {
  email: "Zapforge@zapcg.com",
  company: "Zapcom",
  parentLine: "A Zapcom product",
} as const;

export const nav = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#gates" },
  { label: "Templates", href: "#templates" },
  { label: "Regulated estates", href: "#regulated" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const hero = {
  eyebrow: "Migration & modernization workbench",
  headline: "Migrate legacy code at scale.",
  headlineAccent: "Without losing control of it.",
  lede: "ZapForge turns your modernization backlog into governed runs: it plans the change, waits for an engineer to approve that plan, executes in an isolated worktree, and hands back a reviewable diff and a security scan \u2014 on your own machines.",
  primaryCta: "Book a 20-minute demo",
  secondaryCta: "See a run, end to end",
  badges: [
    "Runs on your machines",
    "Plan-gated by default",
    "Diff + security scan per run",
    "macOS & Windows",
  ],
} as const;

/** Legacy stacks the product is aimed at. Shown as a marquee under the hero. */
export const stacks = {
  label: "Built for the stacks your roadmap keeps deferring",
  items: [
    "COBOL",
    "Oracle Forms",
    "Java EE / JBoss",
    "Struts",
    "Spring Boot 2.x",
    ".NET Framework",
    "AngularJS",
    "jQuery",
    "PL/SQL",
    "Webpack",
    "Kony",
    "Salesforce",
  ],
} as const;

export const problem = {
  eyebrow: "The problem",
  heading: "Modernization is not a skills problem. It is a throughput problem.",
  lede: "Every engineering org of a certain age carries the same backlog. Your team knows exactly how to do the work. There has never been a quarter with enough capacity to actually do it.",
  cards: [
    {
      tag: "01",
      title: "It never gets scheduled",
      body: "The javax to jakarta upgrade, the AngularJS rewrite, the Oracle Forms port. Too large to fit in a sprint, too unglamorous to win a roadmap fight. So it moves to next quarter, again.",
    },
    {
      tag: "02",
      title: "It is repetitive, not hard",
      body: "218 imports across 162 files. 14 route handlers and 8 middleware. 612 Java files. The work is mechanical at heart, which is exactly why it burns senior engineers who should be shipping product.",
    },
    {
      tag: "03",
      title: "AI tools stop at the editor",
      body: "A copilot helps one engineer type faster in one file. Nobody has solved the workflow around a six-hundred-file change: who approved it, what ran, what changed, and how you would prove any of it later.",
    },
    {
      tag: "04",
      title: "So nobody will sign it off",
      body: "Change control wants a plan, a named approver, an isolated execution, a diff and an audit trail. Ungoverned AI output clears none of those bars, so the work stays exactly where it was.",
    },
  ],
  pullquote:
    "ZapForge exists for that gap: the change is mechanical enough to automate, and consequential enough that it has to be governed.",
} as const;

export const product = {
  eyebrow: "The product",
  heading: "One run, end to end.",
  lede: "A run is the unit of work. It starts as a sentence, passes a human gate, executes in isolation, and finishes as a diff your reviewer can approve like any other pull request.",
  features: [
    {
      n: "01",
      title: "Every migration in one workspace",
      body: "The workbench is the home screen: every run across every connected repository, what is queued, what is running and what failed. Start a new one from three modes, or reopen a past run and branch it.",
      bullets: [
        "Migration, modernization and greenfield modes",
        "Recent runs across every connected repository",
        "Status, mode and elapsed time at a glance",
      ],
      // Rendered by WorkbenchMock rather than screenshotted — see that component.
      shot: "mock:workbench",
      alt: "The ZapForge workbench home screen listing five recent runs across four repositories, with cards for the migration, modernization and greenfield modes",
    },
    {
      n: "02",
      title: "Describe the change in plain language",
      body: "Pick a repository and a branch, choose migration, modernization or greenfield, and say what you want. Or start from a template that already encodes the migration. Model and engine are selectable per run — Claude Agent SDK or the API directly.",
      bullets: [
        "Plain-language prompt, or start from a template",
        "Repo and branch picker, or upload a zip",
        "Per-run model and engine selection",
      ],
      shot: "/shots/composer.png",
      alt: "ZapForge composer with a migration prompt describing an Express 4 to Fastify 4 move on acme/payments-service",
    },
    {
      n: "03",
      title: "It plans before it touches anything",
      body: "ZapForge indexes the repository, detects what is actually in use, and proposes a step-by-step plan with file counts and expected durations. Not a single line is written until a human approves that plan.",
      bullets: [
        "Repository indexed and dependencies detected",
        "Plan as a timeline or a dependency graph",
        "Hard approval gate before execution",
      ],
      shot: "/shots/plan.png",
      alt: "ZapForge run plan showing six completed stages from repository scan through test suite, with per-stage durations",
    },
    {
      n: "04",
      title: "Every change lands as a reviewable diff",
      body: "Execution happens in a throwaway git worktree, so your checkout and your branch are never touched. What comes back is a diff — split or unified, per file, with line counts — reviewed exactly the way your team already reviews code.",
      bullets: [
        "Isolated worktree, your branch untouched",
        "Split and unified views, per-file line counts",
        "Export the patch or open a pull request",
      ],
      shot: "/shots/diff.png",
      alt: "ZapForge split diff view comparing before and after for server.ts, showing plus eighteen and minus sixteen lines",
    },
    {
      n: "05",
      title: "A pull request your reviewer can actually read",
      body: "Highlights, a check matrix with durations, and the commit list — generated from what the run actually did rather than written by hand afterwards. This is the artefact that goes to change control.",
      bullets: [
        "Generated PR title, body and highlights",
        "lint, typecheck, unit and contract checks with timings",
        "Commit list tied back to the approved plan",
      ],
      shot: "/shots/summary.png",
      alt: "ZapForge pull request preview with highlights, a passing check matrix and the commit list for the Fastify migration",
    },
    {
      n: "06",
      title: "Full transcript, and what it cost",
      body: "Every command the run issued, in order, kept with the run. Alongside it a token and USD meter, so spend is visible while the work is happening rather than as a surprise on an invoice at the end of the month.",
      bullets: [
        "Complete runner transcript per run",
        "Token and USD cost meter, per run and per forge",
        "Severity-graded security scan on the result",
      ],
      shot: "/shots/logs.png",
      alt: "ZapForge logs tab showing the runner transcript alongside a cost panel reading 412.0K tokens and 1.84 US dollars",
    },
  ],
} as const;

export const gates = {
  eyebrow: "How it works",
  heading: "Five gates. Nothing merges unreviewed.",
  lede: "Every run is a governed workflow, not a prompt. The engineer approves the plan before any code is written, and reviews the diff before anything merges. Every stage runs on your machines.",
  steps: [
    {
      n: 1,
      title: "Plan",
      body: "ZapForge proposes an executable plan with target files, risks and rollback notes. No code is written yet.",
      highlight: false,
    },
    {
      n: 2,
      title: "Approve",
      body: "Your engineer or tech lead approves the plan, or sends it back with notes. This is a hard gate.",
      highlight: false,
    },
    {
      n: 3,
      title: "Execute",
      body: "The work runs in an isolated git worktree on your machine. Your checkout and branch are untouched.",
      highlight: true,
    },
    {
      n: 4,
      title: "Diff + scan",
      body: "A reviewable diff lands together with a security scan. Findings are severity-graded.",
      highlight: false,
    },
    {
      n: 5,
      title: "Merge",
      body: "Your engineer merges, with the prompt, plan, diff, logs and scan retained as evidence.",
      highlight: false,
    },
  ],
  footnote:
    "Step 3 is the only stage that changes code, and it runs in a throwaway worktree.",
} as const;

export const templates = {
  eyebrow: "Template library",
  heading: "Start from a migration that is already encoded.",
  lede: "Templates carry the prompt, the constraints and the checks for a known move, so the first run on a new repository is not a blank page. Anything not in the library starts as a plain description instead.",
  groups: [
    {
      kind: "Migration",
      hint: "Move between stacks or versions",
      items: [
        "Express → Fastify",
        "JS → TypeScript",
        "Webpack → Vite",
        "Mocha → Vitest",
        "CRA → Vite",
        "Pages Router → App Router",
        "Redux → Zustand",
        "REST → tRPC",
      ],
    },
    {
      kind: "Modernization",
      hint: "Update what stays in place",
      items: [
        "React class → hooks",
        "TS strict mode",
        "Promises → async/await",
        "CommonJS → ESM",
        "Spring Boot 2 → 3",
        "javax → jakarta",
        "Enable Turborepo",
        "Add OpenAPI",
      ],
    },
    {
      kind: "Greenfield",
      hint: "Scaffold something new",
      items: [
        "Next.js + Postgres",
        "FastAPI service",
        "Go CLI",
        "React component lib",
      ],
    },
  ],
  footnote:
    "Enterprise migrations — Oracle Forms, COBOL adapter layers, Salesforce, Kony, .NET Framework — are delivered as scoped forges built with you during the engagement.",
} as const;

export const workstreams = {
  eyebrow: "Where teams point it",
  heading: "Migrate, modernize, integrate.",
  lede: "The starred items are what enterprise teams are asking for most right now. Everything here is delivered the same way: one contained workflow, plan-gated, reviewable, on your own infrastructure.",
  columns: [
    {
      title: "Migrate",
      subtitle: "Move onto a new stack",
      starred: [
        "Salesforce and CRM platform migration",
        "Oracle Forms to a modern web front end",
      ],
      items: [
        "Kony, AngularJS and similar framework moves",
        ".NET Framework to current .NET",
        "On-premise workloads to cloud",
      ],
    },
    {
      title: "Modernize",
      subtitle: "Update what stays in place",
      starred: [
        "COBOL and mainframe adapter layers",
        "Cards platform and data warehouse",
      ],
      items: [
        "Struts and legacy Java EE upgrades",
        "PL/SQL and batch-era business logic",
        "Version alignment across a merged estate",
      ],
    },
    {
      title: "Integrate",
      subtitle: "Make it talk to the new world",
      starred: [
        "ISO 20022 message and schema work",
        "Open Finance and open banking APIs",
      ],
      items: [
        "Microservices decomposition of a monolith",
        "Analytics and reporting platform feeds",
        "Partner and third-party interface adapters",
      ],
    },
  ],
  footnote:
    "Salesforce migration is our demo-proven starting point. For a regulated estate the fastest first win is usually an adapter layer, because it is compliance-driven and sits outside the core.",
} as const;

export const regulated = {
  eyebrow: "Why regulated estates move first",
  heading: "The deadline is not self-imposed.",
  lede: "Modernization slips indefinitely until a regulator sets a date. Across the Gulf that date now exists, which is why banking is where this work is being funded first — and why the governance model above is the part that matters.",

  mandate: [
    {
      tag: "UAE",
      title: "Eight majors mandated",
      body: "The CBUAE Open Finance Regulation has been in force since July 2025, requiring standardised APIs and ISO 20022 message definitions, with implementation mandated across the eight major banks in 2026.",
    },
    {
      tag: "KSA",
      title: "SAMA licensing is live",
      body: "The Saudi Central Bank began licensing open-banking providers in March 2026 after completing the sandbox phase. The framework now covers both account information and payment initiation.",
    },
    {
      tag: "BHR",
      title: "Bahrain set the precedent",
      body: "Bahrain pioneered open-banking regulation in the GCC, and Qatar regulators have since issued comparable frameworks. The regional direction is settled.",
    },
    {
      tag: "Core",
      title: "Schemas predate the standard",
      body: "API connectivity is not a front-end job. Legacy cores hold data in formats and schemas that predate modern API standards, so something has to sit in between.",
    },
  ],

  evidenceHeading: "They have already put it in writing.",
  evidenceLede:
    "Every line below is from the institution's own published disclosures — public market evidence that this work is scoped, funded and underway.",
  evidence: [
    {
      region: "UAE · Dubai",
      name: "Dubai Islamic Bank",
      quote:
        "Migration to upgraded core banking systems on a modular architecture, with modernisation of the analytics platform and upgrades to the CRM platform, the cards platform and the data warehouse.",
      wedge: "CRM, cards, data warehouse and API layer",
    },
    {
      region: "UAE · Dubai",
      name: "Emirates NBD",
      quote:
        "A four to twenty-four month path to bring the technology stack into a newly acquired entity, where the target environment runs Calypso, Finacle and Oracle at differing versions.",
      wedge: "Version alignment across a merged estate",
    },
    {
      region: "UAE · Abu Dhabi",
      name: "First Abu Dhabi Bank",
      quote:
        "An integrated data platform enabling scaled AI deployment, with more than ninety-five percent of the bank's structured data already integrated into it.",
      wedge: "The application layer around the data",
    },
    {
      region: "UAE · Abu Dhabi",
      name: "Abu Dhabi Commercial Bank",
      quote:
        "A stated focus on transforming into a technology-driven organisation, with rising operating expense linked to targeted investment in technology and talent.",
      wedge: "Operating-platform modernisation",
    },
  ],
  disclaimer:
    "This is public market evidence, not a client list. Zapcom has not disclosed and will not disclose which institutions it is in conversation with, and the same discretion applies to you.",

  scopeHeading: "We start where the blast radius is smallest.",
  scopeLede:
    "In a regulated estate the first engagement sits deliberately away from anything a regulator would treat as critical infrastructure.",
  inScope: [
    {
      title: "Customer-facing forms and journeys",
      body: "Onboarding forms, servicing screens and the supporting apps around them. High volume, well understood, low blast radius.",
    },
    {
      title: "CRM, cards and data-platform adapters",
      body: "The integration layer between upgraded platforms and everything that still has to talk to them.",
    },
    {
      title: "Open banking and ISO 20022 adapters",
      body: "The layer between a legacy core and the API contract your regulator now requires. Message schemas, validation and translation.",
    },
  ],
  outOfScope: {
    title: "Explicitly not in the first engagement",
    items: [
      "The core banking ledger",
      "Payment authorisation paths",
      "Anything that moves money in real time",
      "Anything under live regulatory remediation",
    ],
    note: "We will decline core scope in a first engagement even if it is offered. Core systems come after a non-critical workflow has produced evidence your own change-control function, and your regulator, can accept.",
  },
} as const;

export const security = {
  eyebrow: "Why it clears security review",
  heading: "Built for the questions your CISO will ask first.",
  lede: "These are the three answers that decide whether a modernization tool gets through vendor risk, in any estate where data residency is a regulatory question rather than a preference.",
  cards: [
    {
      tag: "Stays in jurisdiction",
      body: "ZapForge runs on your own machines inside your own environment. Your repository is never uploaded to a vendor cloud, so residency requirements from SAMA, the CBUAE or your local regulator are not affected by using it.",
    },
    {
      tag: "Nothing ungated",
      body: "No change is written before a human approves the plan, and no change merges before a human reviews the diff. The gate is structural, not a setting that can be turned off.",
    },
    {
      tag: "Evidence by default",
      body: "Every run retains the prompt, the approved plan, the diff, the logs and a severity-graded security scan. The audit trail is a by-product of how the tool works.",
    },
  ],
  faq: {
    tag: "The question we get asked most",
    question:
      "How is this different from the AI coding tools our developers already have?",
    answer:
      "Those help one engineer write lines faster inside an editor. This owns the workflow around the change: it plans it, waits for approval, executes it in isolation, and produces the diff, the scan and the evidence. Different problem, and they run alongside each other.",
  },
} as const;

export const pricing = {
  eyebrow: "Commercials",
  heading: "How we price it.",
  lede: "Priced per engagement, never off a rate card and never per developer. Each engagement is scoped to what it actually covers, so the number reflects your estate rather than a seat count.",
  tiers: [
    {
      tag: "Start",
      name: "Pilot",
      subtitle: "Outcome-priced",
      featured: false,
      items: [
        "One contained workflow, one repository",
        "Four weeks, KPI ranges agreed at week zero",
        "You pay only if the agreed ranges are hit",
        "Sized to sit under your procurement threshold",
      ],
    },
    {
      tag: "Scale",
      name: "Programme",
      subtitle: "Annual engagement",
      featured: true,
      items: [
        "All workflows across a defined engineering org",
        "Delivered with Zapcom forward-deployed engineers",
        "Scoped to the org, not metered per developer",
        "No charge that grows because you succeeded",
      ],
    },
    {
      tag: "Extend",
      name: "Enterprise",
      subtitle: "Programme plus delivery",
      featured: false,
      items: [
        "ZapForge inside a wider Zapcom programme",
        "Joint accountability for the delivered outcome",
        "On-site presence where the programme needs it",
        "Commercials built around the programme plan",
      ],
    },
  ],
  guarantees: {
    tag: "Two things that do not change",
    body: "You bring your own model account, so you see the usage meter directly and we take no margin on it. And there is no per-developer meter anywhere in the model, because we do not want a price that rises simply because your team got faster.",
  },
} as const;

export const cta = {
  heading: "Start with one workflow.",
  lede: "Four weeks. One repository. KPIs agreed before we begin.",
  phases: [
    {
      label: "Week 0",
      body: "We scope one contained workflow and agree the KPI ranges together, in writing.",
    },
    {
      label: "Weeks 1 to 3",
      body: "Zapcom engineers run the workflow through ZapForge alongside your team, on your machines.",
    },
    {
      label: "Week 4",
      body: "We report against the agreed ranges and hand over the full evidence pack.",
    },
  ],
  banner:
    "Next step: 20 minutes on whichever modernization workstream is absorbing the most engineering time right now.",
} as const;

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "What it does", href: "#product" },
        { label: "The five gates", href: "#gates" },
        { label: "Template library", href: "#templates" },
        { label: "Where teams point it", href: "#workstreams" },
      ],
    },
    {
      title: "Enterprise",
      links: [
        { label: "Regulated estates", href: "#regulated" },
        { label: "Security review", href: "#security" },
        { label: "Pricing", href: "#pricing" },
        { label: "Book a demo", href: "#contact" },
      ],
    },
  ],
  note: "Institutional references on this page are drawn from the institutions' own published disclosures and are cited as public market evidence, not as a client list. Product screenshots show demonstration data.",
} as const;
