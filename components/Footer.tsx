const WHATSAPP_NUMBER = "910000000000";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="font-display text-lg font-semibold text-ink">WebRise</span>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Technology &amp; Revenue Operations for modern local businesses.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Company</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <a href="#services" className="transition-colors hover:text-ink">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" className="transition-colors hover:text-ink">
                  Industries
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-ink">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Reach us</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@webrise.example.com" className="transition-colors hover:text-ink">
                  hello@webrise.example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <p className="container-page text-xs text-faint">© {year} WebRise. All rights reserved.</p>
      </div>
    </footer>
  );
}
