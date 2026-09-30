import { useState, useEffect, useRef } from "react";
import { services } from "../data/content.jsx";

// Normalise une image importée par Vite (objet ou string) en string URL
function toUrl(img) {
  if (!img) return null;
  if (typeof img === "string") return img;
  // Vite peut renvoyer { default: "..." } pour certains imports statiques
  if (img.default) return img.default;
  return String(img);
}

function ServiceCard({ s, index }) {
  const raw = s.images || (s.image ? [s.image] : []);
  const images = raw.map(toUrl).filter(Boolean);
  const [current, setCurrent] = useState(0);
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
    <div
      className="service-card glass"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="service-photo" role="img" aria-label={s.title}>

        {/* Slides — z-index 0, visibilité gérée par is-active */}
        {images.map((url, i) => (
          <div
            key={i}
            className={`service-slide${i === current ? " is-active" : ""}`}
            style={{
              backgroundImage: `url("${url}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={i !== current}
          />
        ))}

        {/* Fallback si aucune image */}
        {images.length === 0 && (
          <div className="service-slide is-active service-slide-fallback" />
        )}

        {/* Voile z-index 1 */}
        <div className="service-photo-veil" aria-hidden="true" />

        {/* Badge icône z-index 2 */}
        <div className="service-icon-badge" aria-hidden="true">
          {s.icon}
        </div>

        {/* Points carousel z-index 3 */}
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

        {/* Compteur z-index 3 */}
        {images.length > 1 && (
          <span className="service-counter" aria-hidden="true">
            {current + 1}/{images.length}
          </span>
        )}
      </div>

      <div className="service-body">
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
    </div>
  );
}

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