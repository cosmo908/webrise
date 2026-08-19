"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, durationMs = 1400, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs]);

  return value;
}

const METRICS = [
  { label: "Leads Captured", target: 214, suffix: "" },
  { label: "Bookings Confirmed", target: 86, suffix: "" },
  { label: "Conversion Rate", target: 32, suffix: "%" },
];

export default function GrowthConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const leads = useCountUp(METRICS[0].target, 1400, active);
  const bookings = useCountUp(METRICS[1].target, 1400, active);
  const conversion = useCountUp(METRICS[2].target, 1400, active);
  const values = [leads, bookings, conversion];

  return (
    <div ref={ref} className="card w-full max-w-md p-5 shadow-[0_1px_2px_rgba(20,23,26,0.04),0_20px_40px_-24px_rgba(20,23,26,0.18)] sm:p-6">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Growth Console
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulseDot" />
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {METRICS.map((m, i) => (
          <div key={m.label} className="rounded-lg bg-bg px-3 py-3">
            <p className="font-mono text-xl font-medium text-ink sm:text-2xl">
              {values[i]}
              {m.suffix}
            </p>
            <p className="mt-1 text-[11px] leading-tight text-muted">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-line px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-muted">Inquiries this month</span>
          <span className="font-mono text-xs text-accent-dark">+18%</span>
        </div>
        <svg viewBox="0 0 240 60" className="w-full" aria-hidden="true">
          <polyline
            points="0,48 30,42 60,44 90,30 120,33 150,18 180,22 210,10 240,6"
            fill="none"
            stroke="#0B8457"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="240"
            className={active ? "animate-drawLine" : ""}
            style={{ strokeDashoffset: active ? 0 : 240 }}
          />
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-accent-tint px-4 py-3">
        <span className="text-xs font-medium text-accent-dark">Automated follow-up sent</span>
        <span className="font-mono text-[11px] text-accent-dark">2 min ago</span>
      </div>
    </div>
  );
}
