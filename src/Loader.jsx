import { useEffect, useState } from "react";
import Logo from "./components/Logo.jsx";

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding]     = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf;

    function tick(now) {
      const elapsed = now - start;
      // Monte jusqu'à 85% en 1200ms (réduit de 2800ms → 1200ms)
      const fake = Math.min(85, (elapsed / 1200) * 85);
      setProgress(Math.round(fake));
      if (fake < 85) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function finish() {
      cancelAnimationFrame(raf);
      setProgress(100);
      setTimeout(() => {
        setHiding(true);
        // Réduit de 600ms → 350ms : transition de sortie plus rapide
        setTimeout(onDone, 350);
      }, 200); // réduit de 300ms → 200ms
    }

    if (document.readyState === "complete") {
      // Réduit de 1200ms → 400ms : on ne fait plus attendre inutilement
      setTimeout(finish, 400);
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", finish);
    };
  }, [onDone]);

  return (
    <div className={`loader-screen${hiding ? " loader-hiding" : ""}`}>
      <div className="loader-inner">
        <div className="loader-logo">
          <Logo />
          <svg className="loader-orbits" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <circle cx="100" cy="100" r="70" stroke="#f06a35" strokeWidth="1"
              strokeDasharray="12 10" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate"
                from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="100" r="88" stroke="#4fa3d8" strokeWidth="0.8"
              strokeDasharray="5 16" opacity="0.3">
              <animateTransform attributeName="transform" type="rotate"
                from="360 100 100" to="0 100 100" dur="7s" repeatCount="indefinite" />
            </circle>
            <circle cx="170" cy="100" r="4" fill="#f06a35" opacity="0.8">
              <animateTransform attributeName="transform" type="rotate"
                from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="12" r="3" fill="#4fa3d8" opacity="0.7">
              <animateTransform attributeName="transform" type="rotate"
                from="360 100 100" to="0 100 100" dur="7s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-label">Chargement… {progress}%</p>
      </div>
    </div>
  );
}