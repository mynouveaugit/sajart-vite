import Logo from "./Logo.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  const lat  = 13.4376593;
  const lng  = -6.2184230;

  // URL OpenStreetMap embed centré sur la position exacte
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.012}%2C${lat - 0.008}%2C${lng + 0.012}%2C${lat + 0.008}&layer=mapnik&marker=${lat}%2C${lng}`;
  const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <>
      {/* ── Bloc localisation ── */}
      <div className="footer-location">
        <div className="footer-location-inner">

          {/* Texte + infos */}
          <div className="footer-loc-content">

            {/* SVG décoratif animé */}
            <div className="footer-loc-deco" aria-hidden="true">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="34" stroke="#f06a35" strokeWidth="1"
                  strokeDasharray="8 9" opacity="0.25">
                  <animateTransform attributeName="transform" type="rotate"
                    from="0 40 40" to="360 40 40" dur="18s" repeatCount="indefinite"/>
                </circle>
                <circle cx="40" cy="40" r="22" stroke="#4fa3d8" strokeWidth="0.8"
                  strokeDasharray="4 10" opacity="0.2">
                  <animateTransform attributeName="transform" type="rotate"
                    from="360 40 40" to="0 40 40" dur="12s" repeatCount="indefinite"/>
                </circle>
                {/* Pin */}
                <path d="M40 18C33.4 18 28 23.4 28 30c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z"
                  fill="#f06a35" opacity="0.8"/>
                <circle cx="40" cy="30" r="4" fill="white" opacity="0.9"/>
                {/* Point orbital */}
                <circle cx="74" cy="40" r="3" fill="#f06a35" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate"
                    from="0 40 40" to="360 40 40" dur="18s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>

            <div className="footer-loc-text">
              <span className="footer-loc-eyebrow">
                <span className="eyebrow-dot" />
                Où nous trouver
              </span>
              <h3>Ségou, Mali</h3>
              <p>Quartier Pelengana Nord Sebenicoro — Ségou</p>
              <p className="footer-loc-coords">13.4376593, -6.2184230</p>

              
               <a href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost footer-loc-btn">
     
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor"
                  strokeWidth="1.5" aria-hidden="true">
                  <path d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z"/>
                  <circle cx="10" cy="8" r="2"/>
                </svg>
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>

          {/* Carte */}
          <div className="footer-map-wrap glass">
            <iframe
              src={mapSrc}
              loading="lazy"
              title="Localisation SajArt — Ségou, Mali"
              allowFullScreen
            />
            {/* Overlay de style pour forcer le dark */}
            <div className="footer-map-veil" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">

          {/* Logo + tagline */}
          <div className="footer-brand">
            <Logo />
            <p className="footer-note">
              Peinture · Gravure · Bogolan · Décoration<br />
              <span>Artisanat d'art à Ségou, Mali</span>
            </p>
          </div>

          {/* Liens rapides */}
          <nav className="footer-nav" aria-label="Navigation pied de page">
            <a href="#services">Services</a>
            <a href="#equipe">Équipe</a>
            <a href="#galerie">Réalisations</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Socials + copyright */}
          <div className="footer-right">
            <div className="social-row">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.4.3-.5.6-.5H16V8z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="4"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17" cy="7" r="1"/>
                </svg>
              </a>
              <a href="https://wa.me/22300000000" aria-label="WhatsApp"
                target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 20l1.3-3.8A7.6 7.6 0 1112 19.6a7.5 7.5 0 01-4.6-1.5L4 20z"/>
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5"/>
                </svg>
              </a>
            </div>
            <p className="footer-copy">© {year} SajArt — Tous droits réservés</p>
          </div>

        </div>
      </footer>
    </>
  );
}