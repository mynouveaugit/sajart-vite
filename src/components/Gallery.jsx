import { useEffect, useRef, useState } from "react";
import { gallery } from "../data/content.jsx";

function toUrl(img) {
  if (!img) return null;
  if (typeof img === "string") return img;
  if (img.default) return img.default;
  return String(img);
}

function GalleryItem({ g, index }) {
  const ref      = useRef(null);
  const [src, setSrc]       = useState(null);   // null = pas encore chargée
  const [ready, setReady]   = useState(false);  // image décodée

  // Déclenche le chargement quand l'item entre dans le viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(toUrl(g.image));
          io.disconnect();
        }
      },
      { rootMargin: "200px" }   // précharge 200px avant d'être visible
    );
    io.observe(el);
    return () => io.disconnect();
  }, [g.image]);

  // Fade-in quand l'image est décodée
  function handleLoad(e) {
    e.target.decode?.().catch(() => {}).finally(() => setReady(true));
    setReady(true);
  }

  return (
    <figure
      ref={ref}
      className={`gallery-item ${g.size || ""}`}
      style={{ animationDelay: `${(index % 4) * 0.07}s` }}
    >
      {/* Squelette pendant le chargement */}
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
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="galerie">
      <h2>Réalisations</h2>
      <p className="section-note">
        Un aperçu de nos créations — chaque pièce raconte une histoire, chaque œuvre porte notre signature.
      </p>
      <div className="gallery-grid">
        {gallery.map((g, i) => (
          <GalleryItem key={i} g={g} index={i} />
        ))}
      </div>
    </section>
  );
}