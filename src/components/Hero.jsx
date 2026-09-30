export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="glow-orb orange" aria-hidden="true"></div>
      <div className="glow-orb blue" aria-hidden="true"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <span className="eyebrow-badge glass">
            <span className="dot"></span>
            Atelier d'art à Ségou, Mali
          </span>
          <h1>  Créer. Transformer. Exprimer.</h1>
          <p className="hero-lead">
       Entre matière, culture et imagination, chaque création raconte une histoire.       </p>
          <div className="hero-actions">
            <a href="#galerie" className="btn btn-primary">
              Voir nos réalisations
            </a>
            <a
              href="https://wa.me/22393688661"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-visual-frame glass" aria-hidden="true">
          <svg className="hero-canvas" viewBox="0 0 420 420" fill="none">
            {/* --- Médaillon central : cercle support, façon calebasse gravée --- */}
            <circle
              className="bogo-line bl-circle"
              cx="210"
              cy="210"
              r="86"
              stroke="#4fa3d8"
              strokeWidth="3"
            />
            <circle
              className="bogo-line bl-circle-inner"
              cx="210"
              cy="210"
              r="62"
              stroke="#f06a35"
              strokeWidth="2"
              strokeDasharray="6 5"
            />

            {/* --- Croix centrale bogolan --- */}
            <path
              className="bogo-line bl-cross"
              stroke="#ff9466"
              strokeWidth="5"
              strokeLinecap="round"
              d="M 210,160 L 210,260 M 160,210 L 260,210"
            />
            <circle className="bogo-dot bd-center" cx="210" cy="210" r="6" fill="#115886" />

            {/* --- Chevrons en couronne autour du médaillon (motif bogolan) --- */}
            <path className="bogo-line bl-chev c1" stroke="#4fa3d8" strokeWidth="3" strokeLinecap="round" d="M 195,120 L 210,105 L 225,120" />
            <path className="bogo-line bl-chev c2" stroke="#4fa3d8" strokeWidth="3" strokeLinecap="round" d="M 195,300 L 210,315 L 225,300" />
            <path className="bogo-line bl-chev c3" stroke="#4fa3d8" strokeWidth="3" strokeLinecap="round" d="M 120,195 L 105,210 L 120,225" />
            <path className="bogo-line bl-chev c4" stroke="#4fa3d8" strokeWidth="3" strokeLinecap="round" d="M 300,195 L 315,210 L 300,225" />

            {/* --- Losanges aux quatre coins, motif tissage bogolan --- */}
            <path className="bogo-shape bs1" fill="#f06a35" d="M 60,60 L 78,42 L 96,60 L 78,78 Z" />
            <path className="bogo-shape bs2" fill="#4fa3d8" d="M 360,60 L 378,42 L 396,60 L 378,78 Z" />
            <path className="bogo-shape bs3" fill="#4fa3d8" d="M 60,360 L 78,342 L 96,360 L 78,378 Z" />
            <path className="bogo-shape bs4" fill="#f06a35" d="M 360,360 L 378,342 L 396,360 L 378,378 Z" />

            {/* --- Ligne de dents de scie, bordure textile bogolan --- */}
            <path
              className="bogo-line bl-zigzag"
              stroke="#ff9466"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 55,150 L 75,130 L 95,150 L 115,130 L 135,150"
            />
            <path
              className="bogo-line bl-zigzag2"
              stroke="#ff9466"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 285,270 L 305,250 L 325,270 L 345,250 L 365,270"
            />

            {/* --- Trait de calligraphie fluide qui traverse la composition --- */}
            <path
              className="bogo-calli"
              stroke="#4fa3d8"
              strokeWidth="3.5"
              strokeLinecap="round"
              d="M 40,340 C 90,320 130,360 170,335 C 210,310 240,345 280,320 C 320,298 350,320 385,300"
            />
            <circle className="bogo-dot bd-calli1" cx="40" cy="340" r="3" fill="#4fa3d8" />
            <circle className="bogo-dot bd-calli2" cx="385" cy="300" r="3" fill="#4fa3d8" />

            {/* --- Petits points de finition, ponctuation du motif --- */}
            <circle className="bogo-dot bd1" cx="210" cy="95" r="3" fill="#ff9466" />
            <circle className="bogo-dot bd2" cx="210" cy="325" r="3" fill="#ff9466" />
            <circle className="bogo-dot bd3" cx="95" cy="210" r="3" fill="#ff9466" />
            <circle className="bogo-dot bd4" cx="325" cy="210" r="3" fill="#ff9466" />

            {/* =========================================================
                SIGNATURE — "SAJ'ART" tracée au pinceau, lettre par lettre
                Style manuscrit / calligraphie libre, pas machine à écrire
                Démarre juste après que le motif du haut soit complet,
                sur le même cycle --bogo-cycle (voir hero-signature.css)
                ========================================================= */}
            <g className="sig-group" aria-hidden="true">
              {/* Trait de guide, à peine visible, comme une ligne d'écriture */}
              <path
                className="sig-baseline"
                stroke="#4fa3d8"
                strokeWidth="0.75"
                strokeDasharray="1 6"
                strokeLinecap="round"
                d="M 70,396 C 140,390 280,390 350,396"
              />

              {/* S — forme en double courbe classique, geste plein d'un seul jet */}
              <path
                className="sig-letter sig-s"
                stroke="#115886"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 100,364 C 92,359 82,360 80,367 C 78,375 90,377 96,380 C 102,383 104,389 98,393 C 92,397 82,395 78,389"
              />

              {/* A — deux jambages + barre, angle légèrement penché */}
              <path
                className="sig-letter sig-a"
                stroke="#115886"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 116,386 C 120,370 126,358 132,356 C 138,358 142,371 145,386 M 121,375 L 141,375"
              />

              {/* J — descente avec la petite courbe finale, geste typique du J manuscrit */}
              <path
                className="sig-letter sig-j"
                stroke="#f06a35"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 160,358 L 163,385 C 163,392 158,395 152,392"
              />

              {/* Apostrophe — petite virgule suspendue, signe d'une vraie main */}
              <path
                className="sig-letter sig-apo"
                stroke="#f06a35"
                strokeWidth="3"
                strokeLinecap="round"
                d="M 174,358 C 176,361 177,365 175,368"
              />

              {/* A (2e) — même geste que le premier A, repris à l'identique */}
              <path
                className="sig-letter sig-a2"
                stroke="#ff9466"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 184,386 C 188,370 194,358 200,356 C 206,358 210,371 213,386 M 189,375 L 209,375"
              />

              {/* R — panse + jambe qui repart en diagonale, un seul geste continu */}
              <path
                className="sig-letter sig-r"
                stroke="#ff9466"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 226,386 L 226,356 C 236,356 242,359 242,365 C 242,371 236,374 226,374 C 233,374 238,378 244,386"
              />

              {/* T — barre horizontale puis hampe, deux gestes rapides */}
              <path
                className="sig-letter sig-t"
                stroke="#115886"
                strokeWidth="4.5"
                strokeLinecap="round"
                d="M 254,358 L 280,358 M 267,358 L 267,386"
              />

              {/* Soulignement final — grand geste de fermeture, tout le mot d'un coup */}
              <path
                className="sig-letter sig-underline"
                stroke="#f06a35"
                strokeWidth="3.5"
                strokeLinecap="round"
                d="M 84,402 C 130,408 230,408 282,400"
              />

              {/* Point-signature à l'encre, dépose finale du pinceau */}
              <circle className="sig-dot" cx="292" cy="396" r="3.5" fill="#f06a35" />

              {/* --- Crayon qui écrit : suit la pointe du trait à chaque lettre --- */}
              <g className="sig-pencil-s">
                <g className="sig-pencil">
                  <path d="M 0,0 L 5,-5 L 22,-22 L 27,-17 L 10,0 L 5,5 Z" fill="#e8a33d" stroke="#8a5a1a" strokeWidth="1" />
                  <path d="M 0,0 L 5,-5 L 9,-1 L 4,4 Z" fill="#3a3a3a" />
                  <path d="M 22,-22 L 27,-17 L 30,-20 L 25,-25 Z" fill="#d94f4f" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}