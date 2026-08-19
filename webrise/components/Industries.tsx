import Reveal from "./Reveal";

const INDUSTRIES = [
  {
    title: "Healthcare & Clinics",
    description: "Appointments, patient inquiries, lead capture, and digital workflows.",
    tag: "Appointments",
  },
  {
    title: "Salons & Spas",
    description: "Online bookings, service discovery, inquiries, and customer engagement.",
    tag: "Bookings",
  },
  {
    title: "Real Estate",
    description: "Property inquiries, lead capture, consultation requests, and follow-up workflows.",
    tag: "Inquiries",
  },
  {
    title: "Interior Designers",
    description: "Project inquiries, portfolio presentation, consultation bookings, and lead management.",
    tag: "Projects",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">Industries</span>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Built for businesses that depend on customers.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 80}>
              <div className="card h-full overflow-hidden">
                <div className="flex h-28 items-end justify-between bg-ink px-5 pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                    {industry.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-ink">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
