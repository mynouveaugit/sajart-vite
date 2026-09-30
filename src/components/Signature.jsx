import "./../styles/hero-signature.css";

// Tracé manuscrit fluide et lisible "SAJ'ART"
const SIG_D =
  "M 30 75 " +
  // S
  "C 30 40 70 35 70 55 C 70 70 35 75 35 95 C 35 110 65 110 80 95 " +
  // A
  "C 90 75 110 75 105 95 C 100 110 115 110 120 75 C 120 90 123 105 130 105 " +
  // J
  "C 140 75 155 75 150 110 C 145 138 125 138 135 110 C 140 95 150 75 155 60 " +
  // Apostrophe (')
  "C 158 48 163 45 160 55 C 165 68 170 75 175 75 " +
  // A
  "C 185 75 205 75 200 95 C 195 110 210 110 215 75 C 215 90 218 105 225 105 " +
  // R
  "C 235 75 250 72 248 88 C 255 88 263 93 259 105 " +
  // T
  "C 268 80 278 45 278 105 C 278 108 264 78 288 78";

// Trait de soulignement sous la signature
const FLOURISH_D = "M 25 125 C 140 140 310 135 440 118 C 455 115 460 122 450 127";

export default function Signature() {
  return (
    <div className="hero-signature" aria-hidden="true">
      {/* viewBox réduit à 480x150 pour éliminer les espaces morts en hauteur */}
      <svg className="sig-canvas" viewBox="0 0 480 150" fill="none">
        {/* --- Le trait de crayon : écriture --- */}
        <path
          className="sig-line sig-main"
          d={SIG_D}
          stroke="#115886"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* --- Soulignement --- */}
        <path
          className="sig-line sig-flourish"
          d={FLOURISH_D}
          stroke="#f06a35"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* --- Le crayon qui suit le chemin --- */}
        <g className="sig-pencil">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            rotate="auto"
            calcMode="linear"
            keyPoints="0;0;1;1"
            keyTimes="0;0.5;0.92;1"
            path={SIG_D}
          />
          <animate
            attributeName="opacity"
            values="0;0;1;1;0;0"
            keyTimes="0;0.49;0.5;0.9;0.93;1"
            dur="8s"
            repeatCount="indefinite"
          />
          <rect x="-32" y="-3.5" width="5" height="7" rx="1.5" fill="#e05a6e" />
          <rect x="-28" y="-3.5" width="2.5" height="7" fill="#b9c2cc" />
          <rect x="-25.5" y="-3.5" width="18" height="7" rx="1.5" fill="#f0a24a" />
          <polygon points="-7.5,-3.5 0,0 -7.5,3.5" fill="#f5d9b0" />
          <polygon points="-2.5,-1.3 0,0 -2.5,1.3" fill="#2b2b2b" />
        </g>
      </svg>
      <p className="sig-caption">L'atelier signe chaque pièce à la main</p>
    </div>
  );
}