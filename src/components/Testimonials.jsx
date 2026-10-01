import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xeaogkar";

import aminataImg   from "../data/aminata.png";
import moussaImg    from "../data/moussa.png";
import fatoumataImg from "../data/fatoumata.png";
import ibrahimImg   from "../data/Ibrahim.png";
import kadiatouImg  from "../data/Kadiatou.png";
import seydouImg    from "../data/seydou.png";

const testimonials = [
  {
    name: "Aminata Coulibaly",
    role: "Commerçante, Ségou",
    avatar: aminataImg,
    rating: 5,
    text: "Saj Art a décoré ma boutique avec une fresque bogolan magnifique. Les clients s'arrêtent tous pour prendre des photos ! Je recommande les yeux fermés.",
  },
  {
    name: "Moussa Traoré",
    role: "Entrepreneur, Bamako",
    avatar: moussaImg,
    rating: 5,
    text: "Les maillots personnalisés pour mon équipe de foot ont été livrés en 48h. La qualité est irréprochable, le logo est parfaitement imprimé. Bravo !",
  },
  {
    name: "Fatoumata Diallo",
    role: "Organisatrice d'événements",
    avatar: fatoumataImg,
    rating: 5,
    text: "La décoration de mariage était somptueuse — wax, bogolan, couleurs chaudes. Mes clients étaient en larmes d'émotion. C'est du travail d'artiste pur.",
  },
  {
    name: "Ibrahim Konaté",
    role: "Directeur d'école, Mopti",
    avatar: ibrahimImg,
    rating: 5,
    text: "Formation bureautique excellente pour mes professeurs. Méthode pédagogique claire, même les débutants ont vite progressé. Merci à toute l'équipe !",
  },
  {
    name: "Kadiatou Sanogo",
    role: "Styliste, Ségou",
    avatar: kadiatouImg,
    rating: 5,
    text: "J'ai commandé des tissus bogolan pour ma nouvelle collection. Chaque pièce est unique, les teintes naturelles sont sublimes. Une vraie collaboration artistique.",
  },
  {
    name: "Seydou Dougnon",
    role: "Photographe professionnel",
    avatar: seydouImg,
    rating: 5,
    text: "Le portrait à l'huile de ma fille est une œuvre d'art. Le rendu réaliste, les détails du visage, la lumière — Saj Art a capturé son âme. Merci infiniment.",
  },
];
/* ── Étoiles ── */
function Stars({ n = 5 }) {
  return (
    <div className="testi-stars" aria-label={`${n} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={i < n ? "star-on" : "star-off"}>
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.27l-4.94 2.44.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Carte témoignage ── */
function TestiCard({ t, index }) {
  return (
    <div
      className="testi-card glass"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="testi-quote-icon" aria-hidden="true">
        <svg viewBox="0 0 48 38" fill="none">
          <text x="2" y="34" fontSize="52" fontFamily="Georgia,serif" fill="currentColor" opacity="1">"</text>
        </svg>
      </div>

      <p className="testi-text">{t.text}</p>

      <Stars n={t.rating} />

      <div className="testi-author">
        <div className="testi-avatar-wrap">
          <img
            src={t.avatar}
            alt={t.name}
            className="testi-avatar"
            loading="lazy"
            decoding="async"
          />
          <div className="testi-avatar-ring" aria-hidden="true" />
        </div>
        <div>
          <strong className="testi-name">{t.name}</strong>
          <span className="testi-role">{t.role}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Formulaire satisfaction ── */
const EMOJIS = [
  { val: 5, icon: "😄", label: "Excellent" },
  { val: 4, icon: "😊", label: "Très bien" },
  { val: 3, icon: "😐", label: "Correct" },
  { val: 2, icon: "😕", label: "Décevant" },
  { val: 1, icon: "😞", label: "Mauvais" },
];

function SatisfactionForm() {
  const [rating, setRating]   = useState(null);
  const [status, setStatus]   = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!rating) return;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) e.target.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="satisf-wrap glass">

      <div className="satisf-deco satisf-deco-left" aria-hidden="true">
        <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="deco-brush">
            <rect x="52" y="10" width="16" height="80" rx="8" fill="#f06a35" opacity=".85"/>
            <rect x="48" y="86" width="24" height="16" rx="4" fill="#115886" opacity=".9"/>
            <path d="M52 102 Q60 130 56 160 Q54 175 60 185" stroke="#4fa3d8" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <circle cx="60" cy="188" r="8" fill="#f06a35" opacity=".7"/>
          </g>
          <g className="deco-stars-float">
            <path d="M20 40 l2 5 5 0 -4 3 1.5 5L20 50l-4.5 3 1.5-5-4-3 5 0z" fill="#ff9466" opacity=".8"/>
            <path d="M95 70 l1.5 3.5 3.5 0-2.8 2 1 3.5L95 76.5l-3.2 2 1-3.5-2.8-2 3.5 0z" fill="#4fa3d8" opacity=".7"/>
            <path d="M15 140 l1.2 2.8 2.8 0-2.2 1.6.8 2.8L15 145.5l-2.6 1.7.8-2.8-2.2-1.6 2.8 0z" fill="#f06a35" opacity=".6"/>
          </g>
          <path d="M90 150 Q110 130 95 110 Q80 90 100 75" stroke="#ff9466" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 4" opacity=".5"/>
        </svg>
      </div>

      <div className="satisf-deco satisf-deco-right" aria-hidden="true">
        <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="deco-palette">
            <ellipse cx="60" cy="110" rx="42" ry="38" fill="#1b3a50" stroke="#4fa3d8" strokeWidth="1.5" opacity=".6"/>
            <ellipse cx="60" cy="110" rx="30" ry="26" fill="#0f2233" opacity=".8"/>
            <circle cx="40" cy="100" r="7" fill="#f06a35" opacity=".9"/>
            <circle cx="65" cy="90"  r="6" fill="#4fa3d8" opacity=".9"/>
            <circle cx="82" cy="108" r="6" fill="#ff9466" opacity=".9"/>
            <circle cx="75" cy="128" r="5" fill="#115886" opacity=".9"/>
            <circle cx="50" cy="130" r="5" fill="#f06a35" opacity=".7"/>
            <ellipse cx="78" cy="80" rx="7" ry="9" fill="#0f2233" stroke="#4fa3d8" strokeWidth="1.2" opacity=".7"/>
          </g>
          <g className="deco-confetti">
            <rect x="18" y="30" width="8" height="8" rx="2" fill="#ff9466" opacity=".8" transform="rotate(20 22 34)"/>
            <rect x="92" y="20" width="7" height="7" rx="2" fill="#4fa3d8" opacity=".7" transform="rotate(-15 96 24)"/>
            <rect x="10" y="170" width="6" height="6" rx="1" fill="#f06a35" opacity=".6" transform="rotate(35 13 173)"/>
            <rect x="100" y="160" width="7" height="7" rx="2" fill="#ff9466" opacity=".7" transform="rotate(-25 104 164)"/>
          </g>
        </svg>
      </div>

      <div className="satisf-inner">
        <div className="satisf-head">
          <div className="satisf-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 52 52" fill="none" className="satisf-heart-svg">
              <path d="M26 44s-18-10-18-22a10 10 0 0120 0 10 10 0 0120 0c0 12-22 22-22 22z"
                fill="#f06a35" opacity=".15" stroke="#f06a35" strokeWidth="1.8"/>
              <path className="satisf-heart-pulse" d="M14 26h5l3-6 5 12 4-9 2 3h5"
                stroke="#f06a35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div>
            <h3 className="satisf-title">Votre avis nous inspire</h3>
            <p className="satisf-sub">Partagez votre expérience avec Saj Art — chaque retour nous aide à nous améliorer et motive toute l'équipe.</p>
          </div>
        </div>

        {status === "ok" ? (
          <div className="satisf-success">
            <div className="satisf-success-icon" aria-hidden="true">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="36" fill="#f06a35" opacity=".12" stroke="#f06a35" strokeWidth="1.5"/>
                <path d="M24 40l10 10 22-22" stroke="#f06a35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 18 l1.5 3 3 0-2.5 2 1 3-3-1.8-3 1.8 1-3-2.5-2 3 0z" fill="#ff9466"/>
                <path d="M66 14 l1.2 2.5 2.5 0-2 1.5 .8 2.5-2.5-1.5-2.5 1.5 .8-2.5-2-1.5 2.5 0z" fill="#4fa3d8"/>
                <path d="M70 60 l1 2 2 0-1.6 1.2 .6 2-2-1.2-2 1.2 .6-2-1.6-1.2 2 0z" fill="#f06a35"/>
              </svg>
            </div>
            <p className="satisf-success-msg">Merci pour votre confiance ! 🎉<br/>Votre avis a bien été transmis à l'équipe Saj Art.</p>
          </div>
        ) : (
          <form className="satisf-form" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="type_demande" value="Satisfaction client" />
            <input type="hidden" name="note" value={rating ?? ""} />

            <div className="satisf-emoji-group">
              <p className="satisf-emoji-label">Comment évaluez-vous votre expérience ?</p>
              <div className="satisf-emojis">
                {EMOJIS.map(({ val, icon, label }) => (
                  <button
                    key={val}
                    type="button"
                    className={`satisf-emoji-btn${rating === val ? " is-active" : ""}`}
                    onClick={() => setRating(val)}
                    aria-pressed={rating === val}
                    title={label}
                  >
                    <span className="satisf-emoji">{icon}</span>
                    <span className="satisf-emoji-lbl">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="satisf-fields">
              <div className="form-group">
                <label htmlFor="satisf-nom">Votre nom</label>
                <input id="satisf-nom" name="nom" type="text" placeholder="Ex : Aminata Koné" required />
              </div>

              <div className="form-group">
                <label htmlFor="satisf-service">Service utilisé</label>
                <input id="satisf-service" name="service" type="text"
                  placeholder="Ex : Bogolan, Maillots, Formation…" />
              </div>

              <div className="form-group satisf-full">
                <label htmlFor="satisf-msg">Votre témoignage</label>
                <textarea id="satisf-msg" name="message" rows="3"
                  placeholder="Racontez-nous votre expérience avec Saj Art…"
                  required />
              </div>
            </div>

            {status === "err" && (
              <p className="form-status form-status-err">
                ✗ Une erreur s'est produite. Réessayez ou contactez-nous sur WhatsApp.
              </p>
            )}

            <button
              className="btn btn-primary satisf-submit"
              type="submit"
              disabled={status === "sending" || !rating}
            >
              {status === "sending" ? (
                "Envoi en cours…"
              ) : (
                <>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M3 10l14-7-4 7 4 7-14-7z" strokeLinejoin="round" strokeLinecap="round"/>
                  </svg>
                  Envoyer mon avis
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ── Section principale ── */
export default function Testimonials() {
  return (
    <section id="temoignages">
      <div className="testi-bg-deco" aria-hidden="true">
        <svg viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
          <pattern id="bogolan-pat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="40" height="40" fill="none"/>
            <path d="M0 20 L10 10 L20 20 L30 10 L40 20" stroke="#f06a35" strokeWidth="0.8" fill="none" opacity=".18"/>
            <path d="M0 30 L10 20 L20 30 L30 20 L40 30" stroke="#4fa3d8" strokeWidth="0.6" fill="none" opacity=".14"/>
            <circle cx="20" cy="20" r="2" fill="#ff9466" opacity=".12"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#bogolan-pat)"/>
        </svg>
      </div>

      <h2>Ils nous font confiance</h2>
      <p className="section-note">
        Des clients satisfaits de Ségou à Bamako — leurs mots valent mieux que les nôtres.
      </p>

      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <TestiCard key={t.name} t={t} index={i} />
        ))}
      </div>

      <div className="testi-divider" aria-hidden="true">
        <svg viewBox="0 0 600 40" fill="none" preserveAspectRatio="xMidYMid meet">
          <line x1="0" y1="20" x2="220" y2="20" stroke="#f06a35" strokeWidth="0.8" opacity=".3"/>
          <g transform="translate(300,20)">
            <circle r="3" fill="#f06a35" opacity=".7"/>
            <circle cx="-18" r="2" fill="#4fa3d8" opacity=".5"/>
            <circle cx="18" r="2" fill="#4fa3d8" opacity=".5"/>
            <circle cx="-36" r="1.5" fill="#ff9466" opacity=".4"/>
            <circle cx="36" r="1.5" fill="#ff9466" opacity=".4"/>
            <path d="M-8 0 L0 -8 L8 0 L0 8z" fill="none" stroke="#f06a35" strokeWidth="0.8" opacity=".6"/>
          </g>
          <line x1="380" y1="20" x2="600" y2="20" stroke="#f06a35" strokeWidth="0.8" opacity=".3"/>
        </svg>
      </div>

      <SatisfactionForm />

      <style>{`
        /* ── Section ── */
        #temoignages { position: relative; overflow: hidden; }

        .testi-bg-deco {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 0;
          opacity: 0.6;
        }
        .testi-bg-deco svg { width: 100%; height: 100%; }

        #temoignages > h2,
        #temoignages > .section-note { position: relative; z-index: 1; }

        /* ── Grille ── */
        .testi-grid {
          position: relative; z-index: 1;
          max-width: var(--container); margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        /* ── Carte ── */
        .testi-card {
          display: flex; flex-direction: column; gap: 0.8rem;
          padding: 1.6rem 1.4rem 1.4rem;
          border-radius: 18px;
          animation: testi-up 0.6s ease-out both;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .testi-card:hover {
          transform: translateY(-5px);
          border-color: rgba(240,106,53,.4);
          box-shadow: 0 18px 45px -18px rgba(240,106,53,.28);
        }
        @keyframes testi-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Guillemet */
        .testi-quote-icon {
          width: 36px; height: 28px; color: #f06a35;
          opacity: 0.7; margin-bottom: -0.4rem;
          animation: quote-bob 3s ease-in-out infinite;
        }
        .testi-quote-icon svg { width: 100%; height: 100%; }
        @keyframes quote-bob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        /* Texte du témoignage */
        .testi-text {
          font-size: 0.88rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.82);
          margin: 0; flex: 1;
          max-width: none;
        }

        /* Mode clair : texte témoignage lisible */
        :root:not([data-theme="dark"]) .testi-text,
        [data-theme="light"] .testi-text {
          color: #3a2210;
        }

        /* Étoiles */
        .testi-stars { display: flex; gap: 3px; }
        .testi-stars svg { width: 14px; height: 14px; }
        .star-on  { fill: #f06a35; }
        .star-off { fill: rgba(255,255,255,.2); }
        :root:not([data-theme="dark"]) .star-off,
        [data-theme="light"] .star-off { fill: rgba(0,0,0,.15); }

        /* Auteur */
        .testi-author {
          display: flex; align-items: center; gap: 0.75rem;
          margin-top: 0.3rem;
        }
        .testi-avatar-wrap {
          position: relative; flex-shrink: 0;
          width: 46px; height: 46px;
        }
        .testi-avatar {
          width: 46px; height: 46px;
          border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(240,106,53,.45);
          display: block;
        }
        .testi-avatar-ring {
          position: absolute; inset: -4px;
          border-radius: 50%;
          border: 1.5px solid rgba(240,106,53,.3);
          animation: ring-pulse 2.5s ease-in-out infinite;
        }
        @keyframes ring-pulse {
          0%,100% { transform: scale(1);   opacity: 0.6; }
          50%      { transform: scale(1.1); opacity: 0.15; }
        }

        /* Nom : doré en dark, brun foncé en clair */
        .testi-name {
          display: block; font-size: 0.88rem; font-weight: 700;
          color: #f4d9a0; line-height: 1.2;
        }
        :root:not([data-theme="dark"]) .testi-name,
        [data-theme="light"] .testi-name {
          color: #7a3a10;
        }

        /* Rôle : bien visible dans les deux modes */
        .testi-role {
          display: block; font-size: 0.75rem;
          color: rgba(255,255,255,.65); margin-top: 2px;
        }
        :root:not([data-theme="dark"]) .testi-role,
        [data-theme="light"] .testi-role {
          color: #8a5a30;
        }

        /* ── Séparateur ── */
        .testi-divider { max-width: 600px; margin: 2.5rem auto 2rem; }
        .testi-divider svg { width: 100%; height: auto; }

        /* ── Formulaire satisfaction ── */
        .satisf-wrap {
          position: relative; z-index: 1;
          max-width: var(--container); margin: 0 auto;
          border-radius: 22px; overflow: hidden;
        }

        .satisf-deco {
          position: absolute; top: 0; bottom: 0;
          width: 110px; pointer-events: none; z-index: 0; opacity: 0.55;
        }
        .satisf-deco svg { width: 100%; height: 100%; }
        .satisf-deco-left  { left: 0; }
        .satisf-deco-right { right: 0; transform: scaleX(-1); }

        .deco-brush { animation: brush-swing 4s ease-in-out infinite; transform-origin: 60px 10px; }
        @keyframes brush-swing {
          0%,100% { transform: rotate(-4deg); }
          50%      { transform: rotate(5deg); }
        }
        .deco-stars-float { animation: stars-float 6s ease-in-out infinite; }
        @keyframes stars-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .deco-palette { animation: palette-rock 5s ease-in-out infinite; transform-origin: 60px 110px; }
        @keyframes palette-rock {
          0%,100% { transform: rotate(0deg); }
          33%      { transform: rotate(5deg); }
          66%      { transform: rotate(-4deg); }
        }
        .deco-confetti { animation: confetti-drift 7s ease-in-out infinite; }
        @keyframes confetti-drift {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(8deg); }
        }

        .satisf-inner {
          position: relative; z-index: 1;
          padding: 2.2rem 140px;
        }

        .satisf-head {
          display: flex; align-items: flex-start; gap: 1.2rem;
          margin-bottom: 1.8rem;
        }
        .satisf-icon-wrap { flex-shrink: 0; width: 56px; height: 56px; }
        .satisf-heart-svg { width: 100%; height: 100%; }
        .satisf-heart-pulse {
          stroke-dasharray: 60; stroke-dashoffset: 60;
          animation: heart-draw 2s ease-in-out infinite;
        }
        @keyframes heart-draw {
          0%   { stroke-dashoffset: 60; opacity: 0.4; }
          60%  { stroke-dashoffset: 0;  opacity: 1; }
          100% { stroke-dashoffset: -60; opacity: 0.4; }
        }

        /* Titre formulaire */
        .satisf-title {
          font-size: 1.3rem; margin: 0 0 0.35rem; color: #f4d9a0;
        }
        :root:not([data-theme="dark"]) .satisf-title,
        [data-theme="light"] .satisf-title {
          color: #7a3a10;
        }

        /* Sous-titre formulaire */
        .satisf-sub {
          font-size: 0.88rem; color: rgba(255,255,255,.6);
          margin: 0; max-width: 55ch; line-height: 1.55;
        }
        :root:not([data-theme="dark"]) .satisf-sub,
        [data-theme="light"] .satisf-sub {
          color: #6b4020;
        }

        /* Émojis */
        .satisf-emoji-group { margin-bottom: 1.5rem; }
        .satisf-emoji-label {
          font-size: 0.82rem; color: rgba(255,255,255,.7);
          margin: 0 0 0.9rem; max-width: none;
        }
        :root:not([data-theme="dark"]) .satisf-emoji-label,
        [data-theme="light"] .satisf-emoji-label {
          color: #5a3010;
        }

        .satisf-emojis { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .satisf-emoji-btn {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 0.6rem 0.9rem; border-radius: 14px;
          background: rgba(255,255,255,.05);
          border: 1.5px solid rgba(255,255,255,.1);
          cursor: pointer;
          transition: transform 0.22s ease, border-color 0.22s ease,
                      background 0.22s ease, box-shadow 0.22s ease;
          min-width: 68px;
        }
        :root:not([data-theme="dark"]) .satisf-emoji-btn,
        [data-theme="light"] .satisf-emoji-btn {
          background: rgba(120,60,10,.06);
          border-color: rgba(120,60,10,.18);
        }
        .satisf-emoji-btn:hover {
          transform: translateY(-3px) scale(1.07);
          border-color: rgba(240,106,53,.5);
          background: rgba(240,106,53,.1);
        }
        .satisf-emoji-btn.is-active {
          border-color: #f06a35;
          background: rgba(240,106,53,.2);
          box-shadow: 0 6px 22px -6px rgba(240,106,53,.45);
          transform: translateY(-2px) scale(1.08);
        }
        .satisf-emoji { font-size: 1.8rem; line-height: 1; }

        /* Label emoji : visible dans les deux modes */
        .satisf-emoji-lbl {
          font-size: 0.68rem; color: rgba(255,255,255,.65); white-space: nowrap;
        }
        :root:not([data-theme="dark"]) .satisf-emoji-lbl,
        [data-theme="light"] .satisf-emoji-lbl {
          color: #7a4a20;
        }
        .satisf-emoji-btn.is-active .satisf-emoji-lbl { color: #ff9466; }

        /* Champs */
        .satisf-fields {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; margin-bottom: 1.2rem;
        }
        .satisf-full { grid-column: span 2; }
        .satisf-fields .form-group { margin: 0; }

        /* Labels champs : visibles en mode clair */
        .satisf-fields label {
          display: block; font-size: 0.82rem; font-weight: 600;
          color: rgba(255,255,255,.75); margin-bottom: 0.35rem;
        }
        :root:not([data-theme="dark"]) .satisf-fields label,
        [data-theme="light"] .satisf-fields label {
          color: #5a3010;
        }

        /* Inputs / Textarea */
        .satisf-fields input,
        .satisf-fields textarea {
          width: 100%;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 10px;
          padding: 0.65rem 0.9rem;
          color: var(--ink-050, #f0f4f8);
          font-size: 0.9rem;
          font-family: var(--font-body);
          transition: border-color 0.2s;
          resize: vertical;
        }
        :root:not([data-theme="dark"]) .satisf-fields input,
        :root:not([data-theme="dark"]) .satisf-fields textarea,
        [data-theme="light"] .satisf-fields input,
        [data-theme="light"] .satisf-fields textarea {
          background: rgba(255,248,240,.7);
          border-color: rgba(120,60,10,.25);
          color: #2a1505;
        }
        .satisf-fields input::placeholder,
        .satisf-fields textarea::placeholder {
          color: rgba(255,255,255,.35);
        }
        :root:not([data-theme="dark"]) .satisf-fields input::placeholder,
        :root:not([data-theme="dark"]) .satisf-fields textarea::placeholder,
        [data-theme="light"] .satisf-fields input::placeholder,
        [data-theme="light"] .satisf-fields textarea::placeholder {
          color: #b08060;
        }
        .satisf-fields input:focus,
        .satisf-fields textarea:focus {
          outline: none; border-color: var(--orange, #f06a35);
        }

        /* Bouton envoi */
        .satisf-submit { display: inline-flex; align-items: center; gap: 0.5rem; }
        .satisf-submit:disabled { opacity: 0.45; cursor: not-allowed; transform: none !important; }
        .satisf-submit svg { width: 18px; height: 18px; }

        /* Succès */
        .satisf-success {
          display: flex; flex-direction: column; align-items: center;
          gap: 1rem; padding: 2rem 0; text-align: center;
        }
        .satisf-success-icon { width: 80px; height: 80px; }
        .satisf-success-msg {
          font-size: 1rem; color: rgba(255,255,255,.85); margin: 0;
          max-width: none; line-height: 1.6;
        }
        :root:not([data-theme="dark"]) .satisf-success-msg,
        [data-theme="light"] .satisf-success-msg {
          color: #3a1a05;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .testi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .satisf-inner { padding: 2rem 2rem; }
          .satisf-deco  { display: none; }
        }
        @media (max-width: 600px) {
          .testi-grid { grid-template-columns: minmax(0, 1fr); }
          .satisf-fields { grid-template-columns: minmax(0, 1fr); }
          .satisf-full  { grid-column: span 1; }
          .satisf-inner { padding: 1.6rem 1.2rem; }
          .satisf-emojis { gap: 0.4rem; }
          .satisf-emoji-btn { min-width: 56px; padding: 0.5rem 0.6rem; }
          .satisf-emoji { font-size: 1.5rem; }
        }

        /* ── Mouvement réduit ── */
        @media (prefers-reduced-motion: reduce) {
          .testi-card              { animation: none; opacity: 1; }
          .testi-quote-icon        { animation: none; }
          .testi-avatar-ring       { animation: none; }
          .deco-brush,
          .deco-stars-float,
          .deco-palette,
          .deco-confetti           { animation: none; }
          .satisf-heart-pulse      { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}