import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "We identify your business problems, customer journey, and opportunities for digital improvement.",
  },
  {
    number: "02",
    title: "Build",
    description: "We create the website, application, or automation around your actual workflow.",
  },
  {
    number: "03",
    title: "Grow",
    description: "We help turn your digital presence into a system that generates leads, bookings, and measurable growth.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            A system, not just a website.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px bg-line sm:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="relative">
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-xs text-white">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
