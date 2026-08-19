import Reveal from "./Reveal";

const BEFORE = ["Paper registers", "WhatsApp chaos", "Missed leads"];
const AFTER = ["Booking-ready websites", "Automated follow-up", "Measurable growth"];

export default function ProblemSection() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">The problem</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Stop losing clients to outdated websites and manual workflows.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Local businesses shouldn&apos;t have to depend on spreadsheets, paper registers, or endless WhatsApp
            conversations to manage their customers. WebRise brings modern digital systems into the businesses
            that need them most.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid items-center gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-3">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Before</p>
              {BEFORE.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-line bg-bg px-4 py-3 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-faint" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center py-2 lg:py-0">
              <div className="flex flex-col items-center gap-2 lg:rotate-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="rotate-90 text-accent lg:rotate-0" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-dark">WebRise</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-dark">After</p>
              {AFTER.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-accent/20 bg-accent-tint px-4 py-3 text-sm font-medium text-ink"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
