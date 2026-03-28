const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-depth border-t border-surface-border/90 text-ink overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgb(56_189_248_/_0.06),transparent)] pointer-events-none"
        aria-hidden
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-accent mb-4">
              Portfolio
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink leading-tight">
              Jagadish Gollapalli
            </h2>
            <p className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed max-w-sm">
              Full stack developer building scalable services, thoughtful React
              UIs, and reliable data layers—based in Texas.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-accent/90 mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-ink-muted hover:text-accent transition-colors text-base font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.16em] text-accent/90 mb-4">
              Contact
            </p>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
              Collaboration, referrals, or engineering chats—always happy to
              connect.
            </p>
            <a
              href="mailto:jagadish.g2408@gmail.com"
              className="inline-block font-semibold text-ink mt-4 hover:text-accent transition-colors break-all text-lg"
            >
              jagadish.g2408@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-surface-border/50 text-center font-mono text-xs sm:text-sm text-ink-subtle uppercase tracking-wider">
          © {new Date().getFullYear()} · Austin, TX · United States
        </div>
      </div>
    </footer>
  );
}
