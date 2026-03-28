import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const navlinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const closeMenu = () => setOpen(false);

  const linkFocus =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        scrolled
          ? "bg-surface-card/88 backdrop-blur-2xl backdrop-saturate-150 border-b border-surface-border/90 shadow-soft"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 sm:py-4">
        <a
          href="https://github.com/jagadishgollapalli"
          target="_blank"
          rel="noreferrer"
          className={`group flex items-center gap-3 rounded-xl px-2 py-1.5 -ml-2 text-ink hover:text-accent transition-colors ${linkFocus}`}
          aria-label="GitHub profile"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-inset/90 border border-surface-border/80 text-accent shadow-innerline motion-safe:transition group-hover:border-accent/30">
            <FaGithub className="text-lg" />
          </span>
          <span className="hidden sm:flex flex-col items-start leading-none">
            <span className="font-display font-semibold text-base tracking-tight">
              jagadishgollapalli
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-subtle mt-0.5">
              GitHub
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center rounded-full border border-surface-border/70 bg-surface-inset/45 backdrop-blur-md p-1 pl-1.5 shadow-innerline">
          {navlinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`px-4 py-2.5 rounded-full text-sm font-medium text-ink-muted hover:text-ink hover:bg-white/[0.04] motion-safe:transition ${linkFocus}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="https://www.linkedin.com/in/g-jagadish954186205/"
            target="_blank"
            rel="noreferrer"
            className={`p-2.5 rounded-xl text-sky-400 hover:text-sky-300 hover:bg-white/[0.04] motion-safe:transition ${linkFocus}`}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com/@RetailTraderHub"
            target="_blank"
            rel="noreferrer"
            className={`p-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-white/[0.04] motion-safe:transition ${linkFocus}`}
            aria-label="YouTube"
          >
            <IoLogoYoutube className="text-xl" />
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden p-2.5 rounded-xl text-ink hover:bg-surface-inset/90 border border-transparent hover:border-surface-border/60 ${linkFocus}`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-surface-border/90 bg-surface-card/95 backdrop-blur-2xl px-4 pb-5 shadow-soft">
          <div className="flex flex-col pt-3">
            {navlinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="py-4 text-base font-medium text-ink border-b border-surface-border/50 hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-6 pt-5 font-mono text-sm uppercase tracking-wider">
              <a
                href="https://www.linkedin.com/in/g-jagadish954186205/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@RetailTraderHub"
                target="_blank"
                rel="noreferrer"
                className="text-red-400"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
