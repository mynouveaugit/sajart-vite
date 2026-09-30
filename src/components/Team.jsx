import { teamData } from "../data/content.jsx";

function toUrl(img) {
  if (!img) return null;
  if (typeof img === "string") return img;
  if (img.default) return img.default;
  return String(img);
}

export default function Team() {
  const t = teamData;
  return (
    <section id="equipe">
      <div className="team-wrap">

        {/* ── En-tête ── */}
        <div className="team-header">
          <div className="team-eyebrow">
            <span className="eyebrow-dot" />
            Notre équipe
          </div>
          <h2 className="team-title">{t.headline}</h2>
          <p className="team-sub">{t.sub}</p>
          <div className="team-pills">
            {t.pills.map((p) => (
              <span className="team-pill" key={p}>{p}</span>
            ))}
          </div>
        </div>

        {/* ── Photos ── */}
        <div className="team-photos">
          {t.members.map((m, i) => (
            <div className="team-photo-card" key={i}>

              {/* ── Cercle décoratif en fond
                  viewBox en % : le SVG s'étire à 100% de la carte
                  preserveAspectRatio="xMidYMid meet" garde les cercles ronds
              ── */}
              <svg
                className="team-deco-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Anneau 1 : très grand, dépasse volontairement le bord */}
                <circle
                  cx="50" cy="50" r="52"
                  className="deco-ring deco-ring-1"
                  strokeWidth="0.4"
                  strokeDasharray="3 4"
                >
                  <animateTransform
                    attributeName="transform" type="rotate"
                    from="0 50 50" to="360 50 50"
                    dur="28s" repeatCount="indefinite"
                  />
                </circle>

                {/* Anneau 2 : moyen */}
                <circle
                  cx="50" cy="50" r="36"
                  className="deco-ring deco-ring-2"
                  strokeWidth="0.35"
                  strokeDasharray="2 5"
                >
                  <animateTransform
                    attributeName="transform" type="rotate"
                    from="360 50 50" to="0 50 50"
                    dur="18s" repeatCount="indefinite"
                  />
                </circle>

                {/* Anneau 3 : petit intérieur */}
                <circle
                  cx="50" cy="50" r="24"
                  className="deco-ring deco-ring-3"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 4"
                >
                  <animateTransform
                    attributeName="transform" type="rotate"
                    from="0 50 50" to="360 50 50"
                    dur="38s" repeatCount="indefinite"
                  />
                </circle>

                {/* Halo central très discret */}
                <circle cx="50" cy="50" r="16" className="deco-center" />

                {/* Points orbitaux — anneau 1 */}
                <circle cx="96" cy="50" r="1.4" className="deco-dot deco-dot-orange">
                  <animateTransform
                    attributeName="transform" type="rotate"
                    from="0 50 50" to="360 50 50"
                    dur="28s" repeatCount="indefinite"
                  />
                </circle>
                <circle cx="4" cy="50" r="1.2" className="deco-dot deco-dot-blue">
                  <animateTransform
                    attributeName="transform" type="rotate"
                    from="180 50 50" to="540 50 50"
                    dur="28s" repeatCount="indefinite"
                  />
                </circle>

                {/* Point orbital — anneau 2 */}
                <circle cx="50" cy="14" r="1.3" className="deco-dot deco-dot-orange-light">
                  <animateTransform
                    attributeName="transform" type="rotate"
                    from="360 50 50" to="0 50 50"
                    dur="18s" repeatCount="indefinite"
                  />
                </circle>

                {/* Courbe pinceau bas */}
                <path
                  d="M 8 88 Q 50 75 92 88"
                  className="deco-brush"
                  strokeWidth="0.4"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="120"
                  strokeDashoffset="120"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="120" to="0"
                    dur="1.8s" fill="freeze" begin="0.4s"
                  />
                </path>
              </svg>

              {/* Photo */}
              <div
                className="team-photo-img"
                style={{ backgroundImage: `url("${toUrl(m.image)}")` }}
                role="img"
                aria-label="Membre de l'équipe"
              />

              {/* Quote */}
              <div className="team-photo-quote">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                  <path
                    d="M0 16V9.6C0 4.267 3.2 1.067 9.6 0l1.2 2C7.467 2.8 5.6 4.533 5.333 7.2H9.6V16H0ZM12.4 16V9.6C12.4 4.267 15.6 1.067 22 0l1.2 2c-3.333.8-5.2 2.533-5.467 5.2H21.8V16H12.4Z"
                    fill="var(--orange)" opacity="0.7"
                  />
                </svg>
                <p>{m.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats ── */}
        <div className="team-stats">
          {t.stats.map((s) => (
            <div className="team-stat" key={s.label}>
              <span className="team-stat-value">{s.value}</span>
              <span className="team-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}