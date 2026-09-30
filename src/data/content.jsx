import car from "./car.jpg";
import bogolan from "./bogolan.jpeg";
import bogolan2 from "./bogolan2.jpeg";
import enseigne2 from "./enseigne2.jpg";
import enseigne3 from "./enseigne3.jpg";
import enseigne1 from "./enseigne1.jpg";
import grav2 from "./grav2.jpg";
import grav1 from "./grav1.jpg";
import port2 from "./port2.jpeg";
import port3 from "./port3.png";
import t1 from "./t1.jpg";
import t2 from "./t2.png";
import cally from "./cally.webp";
import e1 from "./e1.jpg";
import e2 from "./e2.jpg";
import r1  from "./r1.jpg";
import r2  from "./r2.jpeg";
import r3  from "./r3.jpg";
import r4  from "./r4.jpg";
import r5  from "./r5.jpg";
import r6  from "./r6.jpg";
import r7  from "./r7.jpg";
import r8  from "./r8.jpg";
import r9  from "./r9.jpg";
import r10 from "./r10.jpg";
import r11 from "./r11.jpg";
import r12 from "./r12.jpg";
import r13 from "./r13.jpg";
import r14 from "./r14.jpg";
import r15 from "./r15.jpeg";
import r16 from "./r16.jpeg";
import r17 from "./r17.png";
import r18 from "./r18.jpeg";
import p1 from "./p1.avif";
import bureau from "./bureau1.jpeg";
import i from "./i.avif";

export const services = [
  // ── SERVICES ARTISTIQUES ─────────────────────────────────────────────────

  {
    title: "Bogolan",
    desc: "Tissus traditionnels teints et peints à la main selon les techniques ancestrales, pour la mode, la décoration ou l'ameublement.",
    images: [bogolan, bogolan2],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="2" stroke="#ff9466" strokeWidth="2" />
        <path d="M8,18 L14,12 L20,18 L26,12 L32,18 L38,12" stroke="#4fa3d8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M8,30 L14,24 L20,30 L26,24 L32,30 L38,24" stroke="#4fa3d8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="24" r="2.5" fill="#f06a35" />
      </svg>
    ),
  },
  {
    title: "Peinture automobile",
    desc: "Décoration, floquage et personnalisation artistique de véhicules particuliers ou d'entreprise.",
    images: [car],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8,30 L11,19.6 C11.8,17 14.2,15.2 17,15.2 H31 C33.8,15.2 36.2,17 37,19.6 L40,30" stroke="#f06a35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="7" y="30" width="34" height="8" rx="2" stroke="#4fa3d8" strokeWidth="2" fill="none" />
        <circle cx="15" cy="40" r="2.6" fill="#115886" />
        <circle cx="33" cy="40" r="2.6" fill="#115886" />
        <path d="M17,22 L31,22" stroke="#4fa3d8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Enseignes, vitrines et plaques",
    desc: "Signalétique peinte pour boutiques et ateliers, plaques professionnelles ou commémoratives.",
    images: [enseigne1, enseigne3, enseigne2],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="20" rx="2" stroke="#ff9466" strokeWidth="2.2" fill="none" />
        <path d="M12,17 L36,17 M12,23 L28,23" stroke="#4fa3d8" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="24" y1="30" x2="24" y2="40" stroke="#f06a35" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="16" y1="40" x2="32" y2="40" stroke="#f06a35" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Gravure",
    desc: "Gravure sur bois, métal et autres supports, pour objets, trophées ou pièces décoratives.",
    images: [grav1, grav2],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M10,38 L28,20 L34,26 L16,44 H10 Z" stroke="#4fa3d8" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
        <path d="M28,20 L34,14 L40,20 L34,26" stroke="#f06a35" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
        <path d="M14,40 L16,38" stroke="#4fa3d8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Portraits & illustrations",
    desc: "Tableaux sur commande, réalistes ou stylisés, à partir d'une photo ou d'une séance.",
    images: [port2, port3],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="3" stroke="#ff9466" strokeWidth="2.2" fill="none" />
        <circle cx="24" cy="20" r="6" stroke="#4fa3d8" strokeWidth="2" fill="none" />
        <path d="M12,36 C14.8,30.4 19.6,28 24,28 S33.2,30.4 36,36" stroke="#f06a35" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Impression textile et maillots",
    desc: "Tampons et impressions personnalisées sur vêtements, uniformes et maillots d'équipe.",
    images: [t1, t2, r15, r16],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M16,8 L24,12 L32,8 L38,14 L32,19 V40 H16 V19 L10,14 Z" stroke="#4fa3d8" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="26" r="4" stroke="#f06a35" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
  {
    title: "Calligraphie",
    desc: "Compositions calligraphiques pour évènements, citations, enseignes ou décoration murale.",
    images: [
      cally,
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=70",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M40,8 C28,10 14,20 10,36 L6,40" stroke="#4fa3d8" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <path d="M24,17 L30,23" stroke="#f06a35" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="6" cy="40" r="2" fill="#f06a35" />
      </svg>
    ),
  },
  {
    title: "Décoration artistique de maisons",
    desc: "Fresques et décors peints sur mesure pour intérieurs, façades et espaces commerciaux.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=70",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8,22 L24,10 L40,22" stroke="#ff9466" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12,20 V38 H36 V20" stroke="#4fa3d8" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
        <path d="M20,38 V29 H28 V38" stroke="#f06a35" strokeWidth="2" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Art plastique général",
    desc: "D'autres créations sur mesure : peinture, illustration ou objets d'art, selon vos projets.",
    images: [
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=70",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24,6 C13.5,6 6,13.7 6,24 C6,32.7 13.5,42 24,42 C26.8,42 28,40 28,38.4 C28,37.4 27.4,36.6 26.8,35.8 C26.2,35 26.2,33.8 26.9,33.2 C27.6,32.6 28.6,32.4 29.6,32.4 H32 C36.5,32.4 41,28.3 41,22.5 C41,13.8 33.8,6 24,6 Z" stroke="#4fa3d8" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
        <circle cx="15.5" cy="22" r="2.2" fill="#f06a35" />
        <circle cx="24" cy="15.5" r="2.2" fill="#ff9466" />
        <circle cx="32.5" cy="22" r="2.2" fill="#f06a35" />
      </svg>
    ),
  },

  // ── ÉVÉNEMENTS & DÉCORATION ───────────────────────────────────────────────

  {
    title: "Décoration d'Événements",
    desc: "Mariage, baptême, fête de fiançailles, anniversaire… Scénographie florale inspirée des couleurs du Mali — wax, bogolan, éclairage chaleureux, arches et tables d'honneur sur mesure pour des moments inoubliables.",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=800&q=70",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24,6 C24,6 10,16 10,26 C10,33.2 16.3,39 24,39 C31.7,39 38,33.2 38,26 C38,16 24,6 24,6 Z" stroke="#ff9466" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
        <path d="M17,28 C17,28 19,22 24,20 C29,22 31,28 31,28" stroke="#4fa3d8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="33" r="2.5" fill="#f06a35" />
        <path d="M20,10 L16,6 M24,8 L24,4 M28,10 L32,6" stroke="#ff9466" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },

  // ── NUMÉRIQUE & INFORMATIQUE ──────────────────────────────────────────────

  {
    title: "Développement Logiciel & IA",
    desc: "Conception sur mesure d'applications mobiles (Android/iOS), web et desktop adaptées au marché africain. Intégration de modèles d'intelligence artificielle et solutions d'automatisation pour PME et startups.",
    images: [p1,
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=70",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="24" rx="2" stroke="#4fa3d8" strokeWidth="2.2" fill="none" />
        <path d="M15,34 L12,40 M33,34 L36,40" stroke="#4fa3d8" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="40" x2="38" y2="40" stroke="#f06a35" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18,19 L22,23 L30,15" stroke="#ff9466" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Formation Bureautique",
    desc: "Maîtrisez Word, Excel, PowerPoint et Publisher en pratique. Cours adaptés aux entrepreneurs, secrétaires, commerçants et lycéens — pour gagner en efficacité et décrocher de meilleures opportunités professionnelles.",
    images: [bureau,
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=70",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="9" y="8" width="22" height="30" rx="2" stroke="#4fa3d8" strokeWidth="2.2" fill="none" />
        <rect x="13" y="8" width="22" height="30" rx="2" stroke="#ff9466" strokeWidth="2.2" fill="none" />
        <line x1="18" y1="16" x2="30" y2="16" stroke="#f06a35" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="18" y1="21" x2="30" y2="21" stroke="#f06a35" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="18" y1="26" x2="25" y2="26" stroke="#f06a35" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32,32 L40,24 L44,28 L36,36 Z" stroke="#4fa3d8" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M32,32 L30,38 L36,36" stroke="#ff9466" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Initiation Informatique",
    desc: "Découvrez l'ordinateur, l'internet et les outils numériques du quotidien. Programme spécial débutants enseigné en français ou en bambara — apprendre sans pression, à son propre rythme, pour ne pas rester à l'écart du numérique.",
    images: [i, "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=70"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="22" rx="2.5" stroke="#4fa3d8" strokeWidth="2.2" fill="none" />
        <path d="M20,32 L19,40 M28,32 L29,40" stroke="#4fa3d8" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="40" x2="33" y2="40" stroke="#f06a35" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="24" cy="21" r="5.5" stroke="#ff9466" strokeWidth="1.8" fill="none" />
        <path d="M21.5,26 L26.5,26 M22.5,28.5 L25.5,28.5" stroke="#ff9466" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="24" y1="15" x2="24" y2="13" stroke="#ff9466" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="19" y1="17" x2="17.5" y2="15.5" stroke="#ff9466" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="29" y1="17" x2="30.5" y2="15.5" stroke="#ff9466" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },

  // ── DESIGN & COMMUNICATION ────────────────────────────────────────────────

  {
    title: "Design Graphique & Publicité",
    desc: "Affiches publicitaires, cartes d'invitation mariage, flyers événementiels et identité visuelle avec une sensibilité africaine. Formation en design graphique disponible pour lancer votre propre activité.",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=70",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=70",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="10" width="32" height="28" rx="2" stroke="#ff9466" strokeWidth="2.2" fill="none" />
        <circle cx="18" cy="20" r="4" stroke="#4fa3d8" strokeWidth="1.8" fill="none" />
        <path d="M8,32 L16,24 L22,30 L28,22 L40,32" stroke="#f06a35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

// ── GALERIE ───────────────────────────────────────────────────────────────────
export const gallery = [
  { label: "Impression textile",       image: r1,  size: ""     },
  { label: "Équipe sportive",          image: r2,  size: "tall" },
  { label: "Défilé urbain",            image: r3,  size: "tall" },
  { label: "Collection textile",       image: r4,  size: ""     },
  { label: "Décoration Boulangerie",   image: r5,  size: "tall" },
  { label: "Décoration sur plaque",    image: r6,  size: ""     },
  { label: "Design publicitaire",      image: r7,  size: "tall" },
  { label: "Portrait mode",            image: r8,  size: "tall" },
  { label: "Bogolan tissé",            image: r9,  size: "tall" },
  { label: "Tableau décoré lumineux",  image: r10, size: "tall" },
  { label: "Enseigne lumineuse",       image: r11, size: "tall" },
  { label: "Tableaux décoration",      image: r12, size: ""     },
  { label: "Exposition portraits",     image: r13, size: "tall" },
  { label: "Remise de portraits",      image: r14, size: "tall" },
  // ── nouvelles réalisations ──
  { label: "T-shirts Chorales Festive",image: r15, size: ""     },
  { label: "Maillot Mali – SajArt",   image: r16, size: "tall" },
  { label: "Remise portrait crayon",   image: r17, size: "tall" },
  { label: "Portrait & client",        image: r18, size: "tall" },
];

// ── ÉQUIPE ────────────────────────────────────────────────────────────────────
export const teamData = {
  headline: "Une équipe soudée, forgée par la passion",
  sub: "Nous ne sommes pas juste des artistes — nous sommes une famille de créateurs. Chaque projet porte notre signature collective, chaque œuvre naît d'une complicité rare entre des esprits qui partagent la même flamme.",
  pills: ["Passion", "Excellence", "Solidarité", "Innovation"],
  stats: [
    { value: "5+", label: "Ans d'expérience" },
    { value: "200+", label: "Projets réalisés" },
    { value: "100%", label: "Cœur & âme" },
  ],
  members: [
    {
      image: e1,
      quote: "L'art n'est pas ce qu'on fait — c'est ce qu'on laisse derrière soi.",
    },
    {
      image: e2,
      quote: "On met notre âme dans chaque trait, chaque couleur, chaque détail.",
    },
  ],
};