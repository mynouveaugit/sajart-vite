import { useEffect, useRef, useState } from "react";
import Logo        from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

/* ── Liens de navigation ─────────────────────────────────────
   "Témoignages" pointe vers #temoignages, l'id de la section
   déclarée dans Testimonials.jsx.
   ─────────────────────────────────────────────────────────── */
const links = [
  { href: "#accueil",     label: "Accueil"      },
  { href: "#apropos",     label: "À propos"     },
  { href: "#services",    label: "Services"     },
  { href: "#galerie",     label: "Galerie"      },
  { href: "#temoignages", label: "Témoignages"  },
  { href: "#contact",     label: "Contact"      },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef             = useRef(null);

  /* ── Détection scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Blocage scroll body quand menu mobile ouvert ── */
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="site-header-inner glass">

        {/* ── Logo ── */}
        <a
          href="#accueil"
          className="brand-link"
          aria-label="SajArt - Accueil"
          onClick={close}
        >
          <Logo />
        </a>

        {/* ── Navigation desktop ── */}
        <nav className="main-nav-desktop" aria-label="Navigation principale">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-brush-link"
              style={{ "--i": i }}
            >
              <span className="nav-link-label">{l.label}</span>
              <svg
                className="nav-brush-svg"
                viewBox="0 0 100 14"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="nav-brush-path"
                  d="M2,8 C15,2 30,11 45,5 C60,-1 75,10 98,6"
                />
              </svg>
            </a>
          ))}
        </nav>

        {/* ── Droite : toggle thème + burger mobile ── */}
        <div className="header-right">
          <ThemeToggle />

          <button
            className={`nav-toggle nav-toggle-art ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="toggle-blob"  aria-hidden="true"></span>
            <span className="toggle-bar b1"></span>
            <span className="toggle-bar b2"></span>
            <span className="toggle-bar b3"></span>
          </button>
        </div>
      </div>

      {/* ── Scrim ── */}
      <div
        className={`nav-scrim ${open ? "is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Menu mobile ── */}
      <nav
        id="mobile-nav"
        className={`mobile-nav mobile-nav-art ${open ? "is-open" : ""}`}
        aria-label="Menu mobile"
      >
        <div className="mobile-nav-splash" aria-hidden="true" />

        <button
          type="button"
          className="mobile-nav-close"
          onClick={close}
          aria-label="Fermer le menu"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>

        <ul className="mobile-nav-list">
          {links.map((l, i) => (
            <li
              key={l.href}
              className="mobile-nav-item"
              style={{ "--i": i }}
            >
              <a href={l.href} onClick={close}>
                <span className="mobile-nav-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mobile-nav-text">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mobile-nav-tag">SajArt — Atelier créatif</p>
      </nav>
    </header>
  );
}