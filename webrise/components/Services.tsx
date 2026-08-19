import Reveal from "./Reveal";

const SERVICES = [
  {
    number: "01",
    title: "Lead-Generation Websites",
    description:
      "Fast, conversion-focused websites designed to turn visitors into calls, WhatsApp messages, inquiries, and bookings.",
    icon: (
      <path
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zM12 4v16M4 12h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    number: "02",
    title: "Custom Web Applications",
    description:
      "Booking systems, CRMs, dashboards, and internal business applications built around each client's workflow.",
    icon: (
      <path
        d="M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM8 21h8M12 17v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    number: "03",
    title: "AI Workflow Automation",
    description:
      "Automate repetitive tasks, qualify leads, streamline customer communication, and reduce manual work.",
    icon: (
      <path
        d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8a4 4 0 100 8 4 4 0 000-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    number: "04",
    title: "SaaS & White-Label Solutions",
    description:
      "Turn proven business workflows into scalable software products and subscription-based solutions.",
    icon: (
      <path
        d="M6 8l-3 4 3 4M18 8l3 4-3 4M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Technology built around your business.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={i * 80}>
              <div className="card group h-full p-7 hover:border-accent/40 hover:shadow-[0_16px_32px_-24px_rgba(20,23,26,0.2)] sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-tint text-accent-dark transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      {service.icon}
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-faint">{service.number}</span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
