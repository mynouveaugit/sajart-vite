export default function Logo({ className = "" }) {
  return (
    <div className={`logo-chip logo-chip-art ${className}`}>
      <svg 
        viewBox="0 0 500 150" 
        role="img" 
        aria-label="SajArt" 
        className="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- ICÔNE DE GAUCHE (Symbole S abstrait) --- */}
        <g transform="translate(10, 0)">
          {/* Courbe Bleue du haut */}
          <path
            className="logo-shape ls1"
            fill="#115886"
            d="M 25,75 C 25,25 75,10 155,20 C 110,30 65,55 55,80 C 50,95 60,105 70,115 C 35,105 25,90 25,75 Z"
          />
          {/* Point Orange central */}
          <circle 
            className="logo-shape ls2" 
            fill="#F06A35" 
            cx="105" 
            cy="50" 
            r="11" 
          />
          {/* Courbe Orange du bas */}
          <path
            className="logo-shape ls3"
            fill="#F06A35"
            d="M 115,70 C 175,80 185,125 115,145 C 60,165 10,140 10,140 C 60,150 110,120 105,90 C 100,75 115,70 115,70 Z"
          />
        </g>

        {/* --- TEXTE : "Sa" --- */}
        <text
          className="logo-text"
          x="170"
          y="110"
          fill="#115886"
          fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          fontSize="75"
          fontWeight="700"
          letterSpacing="-1"
        >
          Sa
        </text>

        {/* --- LE "j" PINCEAU PERSONNALISÉ --- */}
        <g transform="translate(260, 55)">
          {/* Tige de la lettre "j" (Bleu) - Animée avec le reste du texte */}
          <path 
            className="logo-text" 
            fill="#115886" 
            d="M 12,10 L 28,10 L 28,50 C 28,75 12,85 -5,80 L -2,68 C 8,72 12,65 12,52 Z" 
          />
          {/* Corps/Poils du pinceau (Orange) */}
          <path
            className="logo-shape ls5"
            fill="#F06A35"
            d="M 10,10 C 5,-5 20,-15 35,-20 C 25,-5 22,5 25,13 Z"
          />
          {/* Pointe du pinceau (Bleu) */}
          <polygon
            className="logo-shape ls4"
            fill="#115886"
            points="34,-24 48,-44 54,-40 39,-18"
          />
        </g>

        {/* --- TEXTE : "Art" --- */}
        <text
          className="logo-text"
          x="315"
          y="110"
          fill="#115886"
          fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          fontSize="75"
          fontWeight="700"
          letterSpacing="-1"
        >
          Art
        </text>
      </svg>
    </div>
  );
}