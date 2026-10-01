import { useEffect, useRef, useState, useCallback } from "react";
import { gallery } from "../data/content.jsx";

function toUrl(img) {
  if (!img) return null;
  if (typeof img === "string") return img;
  if (img.default) return img.default;
  return String(img);
}

/* ── Lightbox ── */
function Lightbox({ index, onClose, onPrev, onNext }) {
  const g = gallery[index];

  // Touch swipe state
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isDragging  = useRef(false);

  // Clavier + scroll lock
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  /* ── Handlers touch swipe ── */
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current  = false;
  }

  function handleTouchMove(e) {
    if (touchStartX.current === null) return;
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    // Si le mouvement est principalement horizontal → c'est un swipe
    if (dx > dy && dx > 8) {
      isDragging.current = true;
      e.stopPropagation();
    }
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);

    // Swipe horizontal significatif (>50px) et pas diagonal
    if (Math.abs(dx) > 50 && dy < 80) {
      if (dx < 0) onNext();   // swipe gauche → suivant
      else        onPrev();   // swipe droit  → précédent
      e.stopPropagation();    // évite de fermer la lightbox
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current  = false;
  }

  // Ferme le backdrop seulement si pas un swipe
  function handleBackdropClick(e) {
    if (!isDragging.current) onClose();
  }

  return (
    <div
      className="lb-backdrop"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={g.label}
    >
      {/* Compteur */}
      <div className="lb-counter" onClick={e => e.stopPropagation()}>
        {index + 1} / {gallery.length}
      </div>

      {/* Croix */}
      <button className="lb-close" onClick={onClose} aria-label="Fermer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Flèche gauche */}
      <button
        className="lb-arrow lb-prev"
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label="Précédent"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Image — stopPropagation pour ne pas fermer au clic sur l'image */}
      <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
        <img
          key={index}
          src={toUrl(g.image)}
          alt={g.label}
          className="lb-img"
          draggable="false"
        />
        <div className="lb-caption">{g.label}</div>
      </div>

      {/* Flèche droite */}
      <button
        className="lb-arrow lb-next"
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label="Suivant"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="lb-dots" onClick={e => e.stopPropagation()}>
        {gallery.map((_, i) => (
          <button
            key={i}
            className={`lb-dot${i === index ? " lb-dot-active" : ""}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      {/* Indicateur swipe — visible uniquement sur mobile au 1er affichage */}
      <div className="lb-swipe-hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M8 12h8M5 9l3 3-3 3M19 9l-3 3 3 3" />
        </svg>
        <span>Glisser pour naviguer</span>
      </div>
    </div>
  );
}

/* ── Item de galerie ── */
function GalleryItem({ g, index, onOpen }) {
  const ref    = useRef(null);
  const [src, setSrc]     = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setSrc(toUrl(g.image)); io.disconnect(); }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [g.image]);

  function handleLoad(e) {
    e.target.decode?.().catch(() => {}).finally(() => setReady(true));
    setReady(true);
  }

  return (
    <figure
      ref={ref}
      className={`gallery-item ${g.size || ""}`}
      style={{ animationDelay: `${(index % 4) * 0.07}s`, cursor: "zoom-in" }}
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      aria-label={`Voir : ${g.label}`}
      onKeyDown={e => e.key === "Enter" && onOpen(index)}
    >
      {!ready && <div className="gallery-skeleton" aria-hidden="true" />}
      {src && (
        <img
          src={src}
          alt={g.label}
          className={`gallery-img${ready ? " gallery-img-ready" : ""}`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="gallery-overlay">
        <span className="gallery-label">{g.label}</span>
      </div>

      {/* Icône zoom au hover */}
      <div className="gallery-zoom-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>
    </figure>
  );
}

/* ── Composant principal ── */
export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openAt = useCallback(i => setLightboxIndex(i), []);
  const close  = useCallback(() => setLightboxIndex(null), []);
  const prev   = useCallback(() => setLightboxIndex(i => (i - 1 + gallery.length) % gallery.length), []);
  const next   = useCallback(() => setLightboxIndex(i => (i + 1) % gallery.length), []);

  return (
    <>
      <section id="galerie">
        <h2>Réalisations</h2>
        <p className="section-note">
          Un aperçu de nos créations — chaque pièce raconte une histoire, chaque œuvre porte notre signature.
        </p>
        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <GalleryItem key={i} g={g} index={i} onOpen={openAt} />
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}

      <style>{`
        /* ── Backdrop ── */
        .lb-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(5, 10, 18, 0.93);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lb-fade-in 0.25s ease;
          touch-action: pan-y;   /* laisse défiler verticalement, intercepte horizontal en JS */
        }
        @keyframes lb-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Image wrap ── */
        .lb-img-wrap {
          position: relative;
          max-width: min(88vw, 1100px);
          max-height: 82vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: lb-scale-in 0.3s cubic-bezier(0.22, 0.9, 0.32, 1);
        }
        @keyframes lb-scale-in {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lb-img {
          display: block;
          max-width: 100%;
          max-height: 78vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 30px 80px -10px rgba(0,0,0,0.75),
                      0 0 0 1px rgba(255,255,255,0.07);
          user-select: none;
          -webkit-user-drag: none;
          pointer-events: none;   /* évite interférence drag image mobile */
        }

        /* ── Caption ── */
        .lb-caption {
          margin-top: 0.9rem;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-align: center;
        }

        /* ── Compteur ── */
        .lb-counter {
          position: fixed;
          top: 1.4rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.07);
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          pointer-events: none;
          white-space: nowrap;
        }

        /* ── Croix fermer ── */
        .lb-close {
          position: fixed;
          top: 1.2rem;
          right: 1.4rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }
        .lb-close:hover {
          background: rgba(240,106,53,0.25);
          border-color: rgba(240,106,53,0.5);
          transform: rotate(90deg) scale(1.08);
        }
        .lb-close svg { width: 18px; height: 18px; }

        /* ── Flèches ── */
        .lb-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          z-index: 10;
        }
        .lb-prev { left: 1.4rem; }
        .lb-next { right: 1.4rem; }
        .lb-arrow:hover {
          background: rgba(79,163,216,0.22);
          border-color: rgba(79,163,216,0.45);
        }
        .lb-prev:hover { transform: translateY(-50%) scale(1.08) translateX(-2px); }
        .lb-next:hover { transform: translateY(-50%) scale(1.08) translateX(2px); }
        .lb-arrow svg { width: 20px; height: 20px; }

        /* ── Dots ── */
        .lb-dots {
          position: fixed;
          bottom: 1.6rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.45rem;
          align-items: center;
          flex-wrap: wrap;
          max-width: 80vw;
          justify-content: center;
        }
        .lb-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.22);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }
        .lb-dot-active {
          background: #f06a35;
          transform: scale(1.45);
        }
        .lb-dot:hover:not(.lb-dot-active) {
          background: rgba(255,255,255,0.5);
        }

        /* ── Indicateur swipe (mobile uniquement, disparaît après 2s) ── */
        .lb-swipe-hint {
          display: none;
          position: fixed;
          bottom: 4.5rem;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          pointer-events: none;
          animation: lb-hint-fade 2.5s ease forwards;
        }
        .lb-swipe-hint svg { width: 20px; height: 20px; opacity: 0.5; }
        @keyframes lb-hint-fade {
          0%   { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; }
        }

        /* ── Icône zoom sur les items ── */
        .gallery-zoom-icon {
          position: absolute;
          top: 0.7rem;
          right: 0.7rem;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(5,10,18,0.55);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          color: #fff;
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.25s ease, transform 0.25s ease;
          z-index: 5;
          pointer-events: none;
        }
        .gallery-zoom-icon svg { width: 16px; height: 16px; }
        .gallery-item:hover .gallery-zoom-icon {
          opacity: 1;
          transform: scale(1);
        }

        /* ── Responsive mobile ── */
        @media (max-width: 600px) {
          /* Flèches plus petites mais toujours visibles */
          .lb-prev { left: 0.5rem; }
          .lb-next { right: 0.5rem; }
          .lb-arrow {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.18);
          }
          .lb-arrow svg { width: 16px; height: 16px; }

          /* Croix plus accessible */
          .lb-close {
            top: 0.8rem;
            right: 0.8rem;
            width: 42px;
            height: 42px;
          }

          /* Image plus grande sur mobile */
          .lb-img-wrap { max-width: 92vw; }
          .lb-img { max-height: 70vh; border-radius: 10px; }

          /* Dots plus petits */
          .lb-dots { bottom: 0.9rem; gap: 0.35rem; }
          .lb-dot  { width: 6px; height: 6px; }

          /* Afficher l'indicateur swipe */
          .lb-swipe-hint { display: flex; }
        }
      `}</style>
    </>
  );
}