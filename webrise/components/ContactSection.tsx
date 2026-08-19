import LeadForm from "./LeadForm";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">Get started</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Let&apos;s build your growth system.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Tell us about your business and what&apos;s not working today. We&apos;ll come back with a clear plan —
            no jargon, no pressure.
          </p>

          <div className="mt-10 space-y-5 border-t border-line pt-8">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm text-muted">A response from our team within one business day.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm text-muted">A short call to understand your workflow, not a sales pitch.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm text-muted">No commitment required to get a plan and a quote.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
