import { useState, useEffect, useRef } from "react";
import { services } from "../data/content.jsx";

const FORMSPREE_URL = "https://formspree.io/f/xeaogkar";

function toUrl(img) {
  if (!img) return null;
  if (typeof img === "string") return img;
  if (img.default) return img.default;
  return String(img);
}

/* ── Modal demande de service ─────────────────────────────── */
function ServiceModal({ service, onClose }) {
  const [status, setStatus] = useState("idle");
  const dialogRef = useRef(null);

  // Fermer avec Escape + trap focus
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    el.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
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
    <div
      className="svc-modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Demander : ${service.title}`}
    >
      <div className="svc-modal glass" ref={dialogRef} tabIndex={-1}>
        {/* En-tête */}
        <div className="svc-modal-head">
          <div className="svc-modal-icon" aria-hidden="true">{service.icon}</div>
          <div>
            <p className="svc-modal-eyebrow">Demande de service</p>
            <h3 className="svc-modal-title">{service.title}</h3>
          </div>
          <button className="svc-modal-close" onClick={onClose} aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {status === "ok" ? (
          <div className="svc-modal-success">
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="24" cy="24" r="22" stroke="#4fa3d8" strokeWidth="2"/>
              <path d="M14 24l7 7 13-14" stroke="#f06a35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Demande envoyée — on vous répond très vite !</p>
            <button className="btn btn-ghost svc-modal-back" onClick={onClose}>
              Fermer
            </button>
          </div>
        ) : (
          <form className="svc-modal-form" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="type_demande" value={`Demande de service : ${service.title}`} />
            <input type="hidden" name="service"      value={service.title} />

            <div className="form-group">
              <label htmlFor="svc-nom">Nom complet</label>
              <input id="svc-nom" name="nom" type="text" placeholder="Votre nom" required />
            </div>

            <div className="form-group">
              <label htmlFor="svc-tel">Téléphone</label>
              <input id="svc-tel" name="telephone" type="tel" placeholder="+223  XX XX XX XX" required />
            </div>

            <div className="form-group">
              <label htmlFor="svc-msg">Précisez votre projet</label>
              <textarea id="svc-msg" name="message" rows="3"
                placeholder={`Décrivez ce que vous souhaitez pour « ${service.title} »…`}
                required />
            </div>

            {status === "err" && (
              <p className="form-status form-status-err">
                ✗ Une erreur s'est produite. Réessayez ou contactez-nous sur WhatsApp.
              </p>
            )}

            <button
              className="btn btn-primary svc-modal-submit"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ── Carte service ────────────────────────────────────────── */
function ServiceCard({ s, index }) {
  const raw    = s.images || (s.image ? [s.image] : []);
  const images = raw.map(toUrl).filter(Boolean);
  const [current,      setCurrent]      = useState(0);
  const [modalOpen,    setModalOpen]    = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const goTo = (i) => {
    setCurrent(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3000);
  };

  return (
    <>
      <div
        className="service-card glass"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {/* Zone photo */}
        <div className="service-photo" role="img" aria-label={s.title}>
          {images.map((url, i) => (
            <div
              key={i}
              className={`service-slide${i === current ? " is-active" : ""}`}
              style={{ backgroundImage: `url("${url}")` }}
              aria-hidden={i !== current}
            />
          ))}
          {images.length === 0 && (
            <div className="service-slide is-active service-slide-fallback" />
          )}
          <div className="service-photo-veil" aria-hidden="true" />
          <div className="service-icon-badge" aria-hidden="true">{s.icon}</div>
          {images.length > 1 && (
            <div className="service-dots" aria-hidden="true">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`service-dot${i === current ? " is-active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); goTo(i); }}
                  tabIndex={-1}
                />
              ))}
            </div>
          )}
          {images.length > 1 && (
            <span className="service-counter" aria-hidden="true">
              {current + 1}/{images.length}
            </span>
          )}
        </div>

        {/* Corps texte */}
        <div className="service-body">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>

          {/* ── Bouton demande ── */}
          <button
            className="svc-request-btn"
            onClick={() => setModalOpen(true)}
            aria-label={`Demander le service : ${s.title}`}
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z"/>
              <path d="M10 7v3l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Demander ce service
          </button>
        </div>
      </div>

      {modalOpen && (
        <ServiceModal service={s} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

/* ── Section services ─────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services">
      <h2>Nos savoir-faire</h2>
      <p className="section-note">
        Nos spécialités, un seul atelier — chaque pièce reste faite à la main.
      </p>
      <div className="service-grid">
        {services.map((s, i) => (
          <ServiceCard key={s.title} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}