/**
 * The ZapForge workspace screen, rebuilt in markup rather than screenshotted.
 *
 * The captured dark-mode screenshot of this screen was taken mid theme
 * transition, so its run rows and titles rendered with light-mode styling.
 * Recreating it here renders the screen in true dark mode using the
 * application's own dark tokens (src/renderer/src/styles/tokens.css):
 *
 *   bg #0a0a0a · bg-subtle #111111 · bg-muted #1a1a1a · border #262626
 *   fg #fafafa · fg-muted #a3a3a3 · fg-faint #8e8e8e
 *
 * Run data mirrors the product's seed set. Static by design — the hero already
 * carries the animated run.
 */

type Run = {
  title: string;
  id: string;
  repo: string;
  mode: string;
  ago: string;
  state: "queued" | "done" | "failed";
};

const RUNS: Run[] = [
  {
    title: "Webpack → Vite in billing-dashboard",
    id: "run_queued",
    repo: "acme/billing-dashboard",
    mode: "MIGRATION · WEBPACK → VITE",
    ago: "1m ago",
    state: "queued",
  },
  {
    title: "Scaffold usage-metering service",
    id: "run_gre01",
    repo: "(new repo)",
    mode: "GREENFIELD · NEW SERVICE",
    ago: "4m ago",
    state: "done",
  },
  {
    title: "Bump Spring Boot 2.7 → 3.3 in billing-web",
    id: "run_mod01",
    repo: "acme/billing-web",
    mode: "MODERNIZATION · SPRING BOOT 2 → 3",
    ago: "19m ago",
    state: "done",
  },
  {
    title: "Migrate Express 4 → Fastify 4 in payments-service",
    id: "run_mig01",
    repo: "acme/payments-service",
    mode: "MIGRATION · EXPRESS → FASTIFY",
    ago: "47m ago",
    state: "done",
  },
  {
    title: "Convert legacy-jboss to Spring Boot 3",
    id: "run_failed",
    repo: "acme/legacy-jboss",
    mode: "MODERNIZATION · JBOSS → SPRING",
    ago: "5h ago",
    state: "failed",
  },
];

const MODES = [
  { name: "Migration", hint: "Move between stacks or versions.", selected: true },
  { name: "Modernization", hint: "Refactor without behavior change.", selected: false },
  { name: "Greenfield", hint: "Generate a new project.", selected: false },
];

export default function WorkbenchMock() {
  return (
    <div className="bg-[#0a0a0a] text-[#fafafa]">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-[#262626] px-5 py-3">
        <p className="font-mono text-[11px] text-[#8e8e8e]">
          zapforge <span className="text-[#5c5c5c]">/ workbench</span>
        </p>
        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <span className="rounded-md border border-[#262626] bg-[#111111] px-3 py-1.5 font-mono text-[11px] text-[#5c5c5c]">
            Search runs, forges, files…
          </span>
        </div>
      </div>

      <div className="px-5 py-6 sm:px-7 sm:py-8">
        <p className="font-mono text-[10px] tracking-[0.18em] text-[#8e8e8e] uppercase">
          Workbench
        </p>
        <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Good morning.
        </p>
        <p className="mt-1.5 text-sm text-[#a3a3a3]">
          5 runs · 0 currently running.
        </p>

        {/* Mode cards */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {MODES.map((m) => (
            <div
              key={m.name}
              className={`rounded-lg border px-4 py-3.5 ${
                m.selected
                  ? "border-[#fafafa] bg-[#fafafa] text-[#0a0a0a]"
                  : "border-[#262626] bg-[#111111]"
              }`}
            >
              <p className="text-sm font-semibold">{m.name}</p>
              <p
                className={`mt-1 text-xs ${
                  m.selected ? "text-[#525252]" : "text-[#8e8e8e]"
                }`}
              >
                {m.hint}
              </p>
            </div>
          ))}
        </div>

        {/* Recent runs */}
        <p className="mt-8 font-mono text-[10px] tracking-[0.18em] text-[#8e8e8e] uppercase">
          Recent runs
        </p>
        <ul className="mt-3 divide-y divide-[#1a1a1a] overflow-hidden rounded-lg border border-[#262626] bg-[#111111]">
          {RUNS.map((r) => (
            <li
              key={r.id}
              className="grid grid-cols-1 items-center gap-x-4 gap-y-1.5 px-4 py-3.5 lg:grid-cols-[1.6fr_1fr_1.1fr_auto_auto]"
            >
              <div className="flex min-w-0 items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                    r.state === "failed"
                      ? "bg-transparent ring-1 ring-[#8e8e8e]"
                      : r.state === "queued"
                        ? "bg-[#5c5c5c]"
                        : "bg-[#fafafa]"
                  }`}
                />
                <div className="min-w-0">
                  <p className="truncate text-[13px] text-[#fafafa]">
                    {r.title}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-[#8e8e8e]">
                    {r.id}
                  </p>
                </div>
              </div>

              <p className="truncate font-mono text-[11px] text-[#a3a3a3]">
                {r.repo}
              </p>

              <p className="font-mono text-[10px] leading-relaxed text-[#8e8e8e]">
                <span className="rounded bg-[#1a1a1a] px-1.5 py-0.5">
                  {r.mode}
                </span>
              </p>

              <p className="font-mono text-[11px] text-[#8e8e8e]">{r.ago}</p>

              <p className="hidden text-[13px] font-medium text-[#fafafa] lg:block">
                Open <span aria-hidden="true">→</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
