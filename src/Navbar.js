import { useCallback, useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const navlinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
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
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out",
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-surface-border/70"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-4">
        <a
          href="#home"
          className={`group flex items-center gap-2.5 rounded-xl px-1 py-1 -ml-1 ${linkFocus}`}
          aria-label="Home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/30 text-accent">
            <Sparkles className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="font-display font-extrabold text-xl tracking-tight text-ink">
            Jagadish<span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center rounded-full border border-surface-border/70 bg-surface-card/40 backdrop-blur-md p-1 pl-1.5">
          {navlinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full text-sm font-medium text-ink-muted hover:text-ink hover:bg-white/[0.04] transition ${linkFocus}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="https://github.com/jagadishgollapalli"
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:inline-flex p-2.5 rounded-xl text-ink-muted hover:text-ink hover:bg-white/[0.05] transition ${linkFocus}`}
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/g-jagadish954186205/"
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:inline-flex p-2.5 rounded-xl text-ink-muted hover:text-ink hover:bg-white/[0.05] transition ${linkFocus}`}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://www.youtube.com/@RetailTraderHub"
            target="_blank"
            rel="noreferrer"
            className={`hidden md:inline-flex p-2.5 rounded-xl text-ink-muted hover:text-ink hover:bg-white/[0.05] transition ${linkFocus}`}
            aria-label="YouTube"
          >
            <IoLogoYoutube className="text-lg" />
          </a>

          <a
            href="#contact"
            className={`ml-1 hidden sm:inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/[0.07] px-5 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-black transition-all ${linkFocus}`}
          >
            Hire Me
          </a>

          <button
            type="button"
            className={`lg:hidden p-2.5 rounded-xl text-ink hover:bg-white/[0.05] border border-transparent hover:border-surface-border/70 ${linkFocus}`}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-surface-border/70 bg-black/90 backdrop-blur-2xl px-4 pb-5">
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
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-black px-6 py-3 text-sm font-semibold hover:bg-accent-hover transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
