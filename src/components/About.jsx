import jacoobPhoto from "../data/jacoob.png";

export default function About() {
  return (
    <section id="apropos">
      <div className="about-inner glass">
        <div className="about-visual" aria-hidden="true">
          <svg className="about-shop" viewBox="0 0 200 160" fill="none">
            {/* --- Toit / auvent à deux pans, motif bogolan en dents de scie --- */}
            <path className="shop-line shop-roof-l"
              d="M 10,60 L 20,30 L 100,30 L 100,60 Z"
              stroke="#4fa3d8" strokeWidth="2.5" strokeLinejoin="round" />
            <path className="shop-line shop-roof-r"
              d="M 100,60 L 100,30 L 180,30 L 190,60 Z"
              stroke="#4fa3d8" strokeWidth="2.5" strokeLinejoin="round" />
            <path className="shop-line shop-roof-trim"
              d="M 8,60 L 20,50 L 32,60 L 44,50 L 56,60 L 68,50 L 80,60 L 92,50 L 104,60 L 116,50 L 128,60 L 140,50 L 152,60 L 164,50 L 176,60 L 188,50 L 192,60"
              stroke="#f06a35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path className="shop-line shop-facade"
              d="M 20,140 L 20,60 L 180,60 L 180,140 Z"
              stroke="#ff9466" strokeWidth="2.5" strokeLinejoin="round" />
            <rect className="shop-sign-bg"
              x="55" y="38" width="90" height="20" rx="3"
              fill="#115886" stroke="#4fa3d8" strokeWidth="1.5" />
            <text className="shop-sign-text"
              x="100" y="52" textAnchor="middle"
              fontFamily="Georgia, serif" fontSize="11" fontWeight="bold"
              fill="#f4d9a0" letterSpacing="1">
              SAJ&apos;ART
            </text>
            <path className="shop-line shop-window-l"
              d="M 30,110 L 30,75 L 78,75 L 78,110 Z"
              stroke="#4fa3d8" strokeWidth="2" strokeLinejoin="round" />
            <path className="shop-line shop-window-l-cross"
              d="M 54,75 L 54,110 M 30,92 L 78,92"
              stroke="#4fa3d8" strokeWidth="1.2" />
            <circle className="shop-item shop-item-calebasse"
              cx="42" cy="100" r="8"
              fill="none" stroke="#f06a35" strokeWidth="1.8" />
            <path className="shop-item shop-item-calebasse-motif"
              d="M 36,100 L 48,100 M 42,94 L 42,106"
              stroke="#f06a35" strokeWidth="1" />
            <path className="shop-item shop-item-cloth"
              d="M 60,82 L 72,82 L 72,104 L 60,104 Z"
              fill="#f06a35" opacity="0.55" />
            <path className="shop-line shop-window-r"
              d="M 122,110 L 122,75 L 170,75 L 170,110 Z"
              stroke="#4fa3d8" strokeWidth="2" strokeLinejoin="round" />
            <path className="shop-line shop-window-r-cross"
              d="M 146,75 L 146,110 M 122,92 L 170,92"
              stroke="#4fa3d8" strokeWidth="1.2" />
            <rect className="shop-item shop-item-frame"
              x="130" y="82" width="16" height="12"
              fill="none" stroke="#f06a35" strokeWidth="1.5" />
            <path className="shop-item shop-item-frame-motif"
              d="M 130,82 L 146,94 M 146,82 L 130,94"
              stroke="#f06a35" strokeWidth="1" />
            <path className="shop-line shop-door"
              d="M 88,140 L 88,90 L 112,90 L 112,140 Z"
              stroke="#ff9466" strokeWidth="2.2" strokeLinejoin="round" />
            <circle className="shop-item shop-door-handle"
              cx="106" cy="116" r="1.8" fill="#f4d9a0" />
            <path className="shop-item shop-diamond shop-diamond-l"
              d="M 82,124 L 86,120 L 90,124 L 86,128 Z" fill="#4fa3d8" />
            <path className="shop-item shop-diamond shop-diamond-r"
              d="M 110,124 L 114,120 L 118,124 L 114,128 Z" fill="#4fa3d8" />
            <path className="shop-flagpole"
              d="M 158,30 L 158,14"
              stroke="#8a5a1a" strokeWidth="1.5" strokeLinecap="round" />
            <path className="shop-flag"
              d="M 158,14 L 174,17 L 158,22 Z" fill="#f06a35" />
            <path className="shop-plant shop-plant-pot"
              d="M 20,140 L 20,132 L 30,132 L 30,140 Z" fill="#115886" />
            <path className="shop-plant shop-plant-leaf1"
              d="M 25,132 C 22,126 22,120 25,116"
              stroke="#4fa3d8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path className="shop-plant shop-plant-leaf2"
              d="M 25,132 C 28,125 30,122 30,117"
              stroke="#4fa3d8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path className="shop-plant shop-plant-leaf3"
              d="M 25,132 C 25,124 27,124 32,122"
              stroke="#4fa3d8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="about-text">
          <h2>L'UNIVERS SAJ'ART</h2>
          <p>
            SAJ'ART est un espace créatif et entrepreneurial où l'art, le digital,
            l'artisanat et le commerce se rencontrent. Nous transformons les idées
            en créations concrètes : design graphique, personnalisation, création
            artistique, artisanat, Bògôlan, accompagnement et formation.
          </p>
          <p>
            À travers nos projets, nous valorisons la créativité, les talents et
            les savoir-faire locaux, tout en explorant de nouvelles façons de créer
            et de s'exprimer.
          </p>
          <div className="about-signature">
            <div className="about-univers">
              <span>Art</span><i>·</i>
              <span>Design</span><i>·</i>
              <span>Digital</span><i>·</i>
              <span>Artisanat</span><i>·</i>
              <span>Personnalisation</span><i>·</i>
              <span>Formation</span><i>·</i>
              <span>Commerce</span>
            </div>
            <div className="about-motto">
              <span>Créer.</span>
              <span>Transformer.</span>
              <span>Exprimer.</span>
            </div>
          </div>
          <div className="about-badge">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2 L14.5 8.5 L21 9 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9 L9.5 8.5 Z"
                stroke="#f06a35" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span>En activité depuis 2021</span>
          </div>
        </div>
      </div>

      {/* ── Section fondateur ── */}
      <div className="founder-inner glass">

        {/* Photo avec cercles décoratifs en fond */}
        <div className="founder-photo-wrap">

          {/* SVG cercles orbitaux — même système que contact/team */}
          <svg
            className="founder-deco-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Anneau 1 : grand, bleu SajArt */}
            <circle cx="50" cy="50" r="46"
              className="fdeco-ring fdeco-ring-1"
              strokeWidth="0.5" strokeDasharray="3 4">
              <animateTransform attributeName="transform" type="rotate"
                from="0 50 50" to="360 50 50" dur="24s" repeatCount="indefinite"/>
            </circle>

            {/* Anneau 2 : moyen, orange */}
            <circle cx="50" cy="50" r="36"
              className="fdeco-ring fdeco-ring-2"
              strokeWidth="0.4" strokeDasharray="2 5">
              <animateTransform attributeName="transform" type="rotate"
                from="360 50 50" to="0 50 50" dur="16s" repeatCount="indefinite"/>
            </circle>

            {/* Anneau 3 : petit, bleu clair */}
            <circle cx="50" cy="50" r="24"
              className="fdeco-ring fdeco-ring-3"
              strokeWidth="0.35" strokeDasharray="1.5 4">
              <animateTransform attributeName="transform" type="rotate"
                from="0 50 50" to="360 50 50" dur="36s" repeatCount="indefinite"/>
            </circle>

            {/* Halo central */}
            <circle cx="50" cy="50" r="14" className="fdeco-halo" />

            {/* Points orbitaux */}
            <circle cx="96" cy="50" r="1.8" className="fdeco-dot fdeco-dot-orange">
              <animateTransform attributeName="transform" type="rotate"
                from="0 50 50" to="360 50 50" dur="24s" repeatCount="indefinite"/>
            </circle>
            <circle cx="4" cy="50" r="1.4" className="fdeco-dot fdeco-dot-blue">
              <animateTransform attributeName="transform" type="rotate"
                from="180 50 50" to="540 50 50" dur="24s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="14" r="1.5" className="fdeco-dot fdeco-dot-orange">
              <animateTransform attributeName="transform" type="rotate"
                from="360 50 50" to="0 50 50" dur="16s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="86" r="1.2" className="fdeco-dot fdeco-dot-blue">
              <animateTransform attributeName="transform" type="rotate"
                from="90 50 50" to="450 50 50" dur="16s" repeatCount="indefinite"/>
            </circle>

            {/* Courbe pinceau bas */}
            <path d="M 10 88 Q 50 76 90 88"
              className="fdeco-brush"
              strokeWidth="0.45" strokeLinecap="round" fill="none"
              strokeDasharray="120" strokeDashoffset="120">
              <animate attributeName="stroke-dashoffset"
                from="120" to="0" dur="1.8s" fill="freeze" begin="0.3s"/>
            </path>
          </svg>

          {/* Photo par-dessus le SVG */}
          <div className="founder-photo">
            <img src={jacoobPhoto} alt="Jacob Sagara, fondateur de l'entreprise" />
            <div className="founder-photo-frame" aria-hidden="true" />
          </div>
        </div>

        <div className="founder-text">
          <span className="founder-eyebrow">Le fondateur</span>
          <h3>Amplilema, dit Jacob Sagara</h3>
          <p>
            Artiste et artisan, il développe un savoir-faire autour de la
            peinture, du bogolan, de la gravure, de la calligraphie et de la
            décoration artistique, associant techniques traditionnelles et
            créations contemporaines.
          </p>
          <p>
            Son objectif : valoriser les savoir-faire artistiques maliens en
            leur donnant une expression adaptée aux besoins d&apos;aujourd&apos;hui.
          </p>
        </div>
      </div>
    </section>
  );
}