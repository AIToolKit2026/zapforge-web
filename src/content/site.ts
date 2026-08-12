/**
 * Single source of truth for all landing-page copy.
 * Sourced from the ZapForge banking deck — edit here, not in the components.
 */

export const contact = {
  name: "Anurag Mahanto",
  email: "anurag.mahanto@zapcg.com",
  company: "Zapcom",
  parentLine: "A Zapcom company",
} as const;

export const nav = [
  { label: "The mandate", href: "#mandate" },
  { label: "Where we start", href: "#scope" },
  { label: "How it works", href: "#gates" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const hero = {
  headline: "Modernise the layer around the core.",
  headlineAccent: "Leave the core alone.",
  lede: "Built for Gulf banks facing an open-banking deadline on a legacy estate. Zapcom delivers governed migration work on your own infrastructure, inside your own jurisdiction. CRM, cards, data platforms, customer forms and the API layer.",
  badges: [
    "UAE · KSA · Bahrain · Qatar",
    "Non-core first",
    "Data stays in region",
    "Audit-ready",
  ],
} as const;

export const mandate = {
  eyebrow: "The pattern",
  heading: "Open banking is now mandatory across the Gulf.",
  lede: "Four regulators, one direction of travel, and a deadline none of the banks set for themselves. The work lands on adapters, interfaces, customer-facing forms and the API surface.",
  cards: [
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
  pullquote:
    "That in-between layer is the work: repetitive, low-glamour, deadline-bound, and sitting outside the core where it is safe to start.",
} as const;

export const evidence = {
  eyebrow: "The market is already saying it",
  heading: "Gulf banks have already put this in writing.",
  lede: "Every line below is from the institution's own published disclosures. We are not speculating about demand in this region, we are reading it off the record.",
  cards: [
    {
      region: "UAE · Dubai",
      name: "Dubai Islamic Bank",
      body: "Disclosed migration to upgraded core banking systems on a modular architecture, plus modernisation of the analytics platform and upgrades to the CRM platform, the cards platform and the data warehouse. Also reported API governance, open-finance enablement and microservices work underway.",
      wedge: "Wedge: CRM, cards, data warehouse and API layer",
    },
    {
      region: "UAE · Dubai",
      name: "Emirates NBD",
      body: "Management described a four to twenty-four month path to bring the technology stack into a newly acquired entity, noting that the target environment includes Calypso, Finacle and Oracle at differing versions and therefore requires a roadmap.",
      wedge: "Wedge: version alignment and stack integration",
    },
    {
      region: "UAE · Abu Dhabi",
      name: "First Abu Dhabi Bank",
      body: "Reported an integrated data platform enabling scaled AI deployment, with more than ninety-five percent of the bank's structured data integrated into the platform, and management citing clear progress on data foundations.",
      wedge: "Wedge: the application layer around the data",
    },
    {
      region: "UAE · Abu Dhabi",
      name: "Abu Dhabi Commercial Bank",
      body: "Stated a focus on transforming into a technology-driven organisation, linked its rising operating expense to targeted investment in technology and talent, and said it would continue investing in AI, in technology and in improving the operating platforms.",
      wedge: "Wedge: operating-platform modernisation",
    },
  ],
  disclaimer:
    "This is public market evidence, not a client list. Zapcom has not disclosed and will not disclose which institutions it is in conversation with, and the same discretion applies to you.",
} as const;

export const scope = {
  eyebrow: "Where we start",
  heading: "We start where the risk is lowest and the volume is highest.",
  lede: "The first engagement sits deliberately away from anything a Gulf regulator would treat as critical infrastructure.",
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

export const workstreams = {
  eyebrow: "What we migrate and modernise",
  heading: "What we migrate and modernise.",
  lede: "The starred items are what Gulf banks are asking for most right now. Everything here is delivered the same way: one contained workflow, plan-gated, reviewable, on your own infrastructure.",
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
      title: "Modernise",
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
    "Salesforce migration is our demo-proven starting point. For a Gulf bank the fastest first win is usually the ISO 20022 or Open Finance adapter layer, because it is compliance-driven and sits outside the core.",
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

export const security = {
  eyebrow: "Why it clears security review",
  heading: "Built for the questions your CISO will ask first.",
  lede: "These are the three answers that decide whether a modernisation tool gets through vendor risk at a Gulf bank, where data residency is a regulatory question rather than a preference.",
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
    "Next step: 20 minutes on whichever modernisation workstream is absorbing the most engineering time right now.",
} as const;
