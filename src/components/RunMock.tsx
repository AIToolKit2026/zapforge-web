"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * An animated recreation of a real ZapForge run, used as the hero visual.
 *
 * The stage names, details and durations are the same ones the product uses for
 * an Express 4 → Fastify 4 migration. The point of the animation is the gate in
 * the middle: planning completes, a human approves, and only then does anything
 * execute.
 *
 * Honours prefers-reduced-motion by rendering the finished state statically.
 */

type Step = {
  title: string;
  detail: string;
  duration: string;
  phase: "plan" | "exec";
};

const STEPS: Step[] = [
  {
    title: "Scan repository",
    detail: "Indexed 218 files (175 .ts, 25 .json, 18 .md)",
    duration: "4.2s",
    phase: "plan",
  },
  {
    title: "Detect Express usage",
    detail: "14 route files, 8 middleware, 1 entrypoint",
    duration: "6.1s",
    phase: "plan",
  },
  {
    title: "Plan migration",
    detail: "10 file rewrites, 3 dep swaps, 1 new file",
    duration: "21.0s",
    phase: "plan",
  },
  {
    title: "Rewrite routes & middleware",
    detail: "Express handlers → Fastify route plugins",
    duration: "1m 29s",
    phase: "exec",
  },
  {
    title: "Update package.json & lockfile",
    detail: "Replace express with fastify, drop body-parser",
    duration: "8.4s",
    phase: "exec",
  },
  {
    title: "Run test suite",
    detail: "Vitest: 124 passed, 0 failed",
    duration: "5.3s",
    phase: "exec",
  },
];

/** Cursor positions. Steps are interleaved with the approval gate. */
type Frame =
  | { kind: "step"; step: number }
  | { kind: "gate-pending" }
  | { kind: "gate-approved" }
  | { kind: "done" };

const TIMELINE: Frame[] = [
  { kind: "step", step: 0 },
  { kind: "step", step: 1 },
  { kind: "step", step: 2 },
  { kind: "gate-pending" },
  { kind: "gate-approved" },
  { kind: "step", step: 3 },
  { kind: "step", step: 4 },
  { kind: "step", step: 5 },
  { kind: "done" },
  { kind: "done" },
  { kind: "done" },
];

const LAST = TIMELINE.length - 1;
const TICK_MS = 1100;

/** How many timeline frames a given step has to wait for. */
const FRAME_OF_STEP = STEPS.map((_, s) =>
  TIMELINE.findIndex((f) => f.kind === "step" && f.step === s),
);

const TOTAL_TOKENS = 412.0;
const TOTAL_USD = 1.84;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const getMotionSnapshot = () => window.matchMedia(REDUCED_MOTION).matches;
/** Assume motion is allowed on the server; the client corrects on hydration. */
const getMotionServerSnapshot = () => false;

export default function RunMock() {
  const reduced = useSyncExternalStore(
    subscribeMotion,
    getMotionSnapshot,
    getMotionServerSnapshot,
  );
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(
      () => setTick((c) => (c >= LAST ? 0 : c + 1)),
      TICK_MS,
    );
    return () => window.clearInterval(id);
  }, [reduced]);

  // Reduced motion pins the mock to its finished state instead of animating.
  const animate = !reduced;
  const cursor = reduced ? LAST : tick;

  const gatePending = cursor >= 3;
  const gateApproved = cursor >= 4;
  const finished = cursor >= 8;

  // Cost ramps with progress, then holds at the real end-of-run figures.
  const progress = Math.min(cursor / 8, 1);
  const tokens = (TOTAL_TOKENS * progress).toFixed(1);
  const usd = (TOTAL_USD * progress).toFixed(2);

  const stepState = (s: number): "done" | "running" | "pending" => {
    const frame = FRAME_OF_STEP[s];
    if (cursor > frame) return "done";
    if (cursor === frame) return animate ? "running" : "done";
    return "pending";
  };

  return (
    <div
      className="overflow-hidden rounded-xl border border-white/12 bg-[#0b0d12] shadow-2xl shadow-black/50"
      role="img"
      aria-label="ZapForge running an Express 4 to Fastify 4 migration: three planning stages complete, a human approves the plan, three execution stages run in an isolated worktree, and the run finishes with a reviewable diff and a cost of 412,000 tokens or 1.84 US dollars."
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <p className="font-mono text-[11px] text-white/40">
          zapforge <span className="text-white/25">/ workbench /</span> run_mig01
        </p>
        <span
          className={`ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors duration-500 ${
            finished
              ? "bg-emerald-400/15 text-emerald-300"
              : gateApproved
                ? "bg-brand/20 text-brand-bright"
                : "bg-forge/15 text-forge"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              finished
                ? "bg-emerald-400"
                : gateApproved
                  ? "bg-brand-bright"
                  : "bg-forge"
            }`}
          />
          {finished ? "succeeded" : gateApproved ? "running" : "planning"}
        </span>
      </div>

      {/* Run header */}
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-[10px] tracking-wider text-white/35 uppercase">
          Migration · Express → Fastify
        </p>
        <p className="mt-1.5 text-[15px] font-semibold text-white sm:text-base">
          Migrate Express 4 → Fastify 4 in payments-service
        </p>
        <p className="mt-1.5 font-mono text-[11px] text-white/35">
          acme/payments-service · main · claude-sonnet-4-6
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_13rem]">
        {/* Timeline */}
        <ol className="divide-y divide-white/[0.06] border-white/10 lg:border-r">
          {STEPS.map((step, s) => {
            const state = stepState(s);
            const gatedOut = step.phase === "exec" && !gateApproved;
            return (
              <li key={step.title}>
                {/* The approval gate sits between planning and execution */}
                {s === 3 ? (
                  <div
                    className={`flex items-center gap-2.5 border-y border-dashed px-5 py-3 transition-colors duration-500 ${
                      gateApproved
                        ? "border-brand/40 bg-brand/[0.08]"
                        : gatePending
                          ? "border-forge/50 bg-forge/[0.08]"
                          : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`transition-colors duration-500 ${
                        gateApproved
                          ? "text-brand-bright"
                          : gatePending
                            ? "text-forge"
                            : "text-white/25"
                      }`}
                    >
                      {gateApproved ? <CheckIcon /> : <LockIcon />}
                    </span>
                    <p
                      className={`font-mono text-[10px] tracking-wider uppercase transition-colors duration-500 ${
                        gateApproved
                          ? "text-brand-bright"
                          : gatePending
                            ? "text-forge"
                            : "text-white/25"
                      }`}
                    >
                      {gateApproved
                        ? "Plan approved — executing in isolated worktree"
                        : gatePending
                          ? "Plan ready — awaiting human approval"
                          : "Approval gate"}
                    </p>
                  </div>
                ) : null}

                <div
                  className={`flex items-start gap-3 px-5 py-3 transition-opacity duration-500 ${
                    state === "pending" || gatedOut
                      ? "opacity-25"
                      : "opacity-100"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      state === "done"
                        ? "border-brand-bright/60 bg-brand-bright/15 text-brand-bright"
                        : state === "running"
                          ? "border-forge text-forge"
                          : "border-white/20 text-transparent"
                    }`}
                  >
                    {state === "done" ? (
                      <CheckIcon />
                    ) : state === "running" ? (
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-forge" />
                    ) : null}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium text-white/90">
                      {step.title}
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[11px] text-white/40">
                      {step.detail}
                    </p>
                  </div>

                  <p
                    className={`shrink-0 font-mono text-[11px] transition-opacity duration-300 ${
                      state === "done"
                        ? "text-white/35 opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {step.duration}
                  </p>
                </div>
              </li>
            );
          })}

          {/* Result strip — appears once the run lands */}
          <li
            className={`flex flex-nowrap items-center gap-x-3 overflow-hidden px-5 py-3.5 transition-all duration-700 sm:gap-x-4 ${
              finished
                ? "bg-emerald-400/[0.06] opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <span className="shrink-0 font-mono text-[10px] tracking-wider text-emerald-300/80 uppercase">
              Diff ready
            </span>
            <span className="shrink-0 font-mono text-[11px] text-white/50">
              2 files
            </span>
            <span className="shrink-0 font-mono text-[11px] text-emerald-400">+20</span>
            <span className="shrink-0 font-mono text-[11px] text-rose-400">−18</span>
            <span className="truncate font-mono text-[11px] text-white/50">
              scan: 0 critical
            </span>
          </li>
        </ol>

        {/* Environment / cost rail */}
        <aside className="hidden flex-col gap-4 px-4 py-4 lg:flex">
          <div>
            <p className="font-mono text-[10px] tracking-wider text-white/30 uppercase">
              Environment
            </p>
            <dl className="mt-2.5 space-y-1.5 font-mono text-[11px]">
              <Row k="engine" v="agent-sdk" />
              <Row k="branch" v="main" />
              <Row k="worktree" v="isolated" />
              <Row k="exit" v={finished ? "0" : "—"} />
            </dl>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-wider text-white/30 uppercase">
              Cost
            </p>
            <div className="mt-2.5 space-y-2">
              <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                <p className="font-mono text-[9px] tracking-wider text-white/30 uppercase">
                  Tokens
                </p>
                <p className="mt-0.5 font-mono text-sm text-white tabular-nums">
                  {tokens}K
                </p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                <p className="font-mono text-[9px] tracking-wider text-white/30 uppercase">
                  USD
                </p>
                <p className="mt-0.5 font-mono text-sm text-white tabular-nums">
                  ${usd}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <dt className="text-white/30">{k}</dt>
      <dd className="text-white/70 tabular-nums">{v}</dd>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 6.5l2.5 2.5 4.5-5.5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <rect x="2.5" y="5.5" width="7" height="5" rx="1" />
      <path d="M4.25 5.5V4a1.75 1.75 0 013.5 0v1.5" />
    </svg>
  );
}
