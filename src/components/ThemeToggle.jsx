import { useEffect, useState } from "react";
import "../styles/theme-toggle.css";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => { applyTheme(theme); }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e) => {
      if (!localStorage.getItem("theme"))
        setTheme(e.matches ? "light" : "dark");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => setTheme((p) => (p === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
      onClick={toggle}
      aria-label={isDark ? "Passer en mode jour" : "Passer en mode nuit"}
      title={isDark ? "Mode jour" : "Mode nuit"}
    >
      <span className="tt-track">
        {/* Bille avec l'icône dedans */}
        <span className="tt-thumb">
          {isDark ? (
            /* Soleil — indique qu'on peut passer en mode clair */
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2.2"/>
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          ) : (
            /* Lune — indique qu'on peut passer en mode nuit */
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}