import GrowthConsole from "./GrowthConsole";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="animate-fadeUp">
          <span className="eyebrow">Technology &amp; Revenue Operations</span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Transform Your Local Business with High-Converting Digital Solutions.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            We build fast, AI-powered lead-generation websites, apps, and automations for clinics, salons, and SMEs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Book a Consultation
            </a>
            <a href="#services" className="btn-secondary">
              View Our Services
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
            <span>Clinics</span>
            <span>Salons &amp; Spas</span>
            <span>Real Estate</span>
            <span>Interior Design</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <GrowthConsole />
        </div>
      </div>
    </section>
  );
}
