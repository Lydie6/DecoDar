import hero from "../assets/hero.webp";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.webp";
import livingRoomImage from "../assets/living-room.webp";
import bathroom from "../assets/bathroom.jpg";
import kitchen from "../assets/kitchen.jpg";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";


export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "À propos",
    link: "#about",
  },
  {
    name: "Avis",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HOME_CONTENT = {
  title: "DécoDar",
  subtitle: "Repensez votre espace avec nos services de rénovation experts",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Rénovation de cuisine",
    description:
      "Transformez votre cuisine en un espace moderne et fonctionnel avec nos services de rénovation complets. Des armoires sur mesure aux appareils de pointe, nous prenons en charge tous les aspects de la rénovation de cuisine.",
    image: kitchenImage,
    alt: "Rénovation de cuisine",
  },
  {
    title: "Rénovation de salle de bain",
    description:
      "Créez une retraite digne d'un spa chez vous avec nos services de rénovation de salle de bain. Nous proposons des équipements luxueux, des carrelages personnalisés et des designs innovants pour sublimer votre expérience de salle de bain.",
    image: bathroomImage,
    alt: "Rénovation de salle de bain",
  },
  {
    title: "Rénovation de salon",
    description:
      "Modernisez votre salon avec nos services de rénovation experts. Nous proposons des designs personnalisés, de nouvelles options de revêtement de sol et des solutions d'éclairage élégantes pour créer un espace chaleureux et accueillant pour votre famille et vos invités.",
    image: livingRoomImage,
    alt: "Rénovation de salon",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Rénovation de cuisine moderne",
    description:
      "Une révision complète d'une cuisine traditionnelle, avec des armoires sur mesure, des plans de travail en granit et des appareils de pointe.",
    image: kitchen,
    link: "#",
  },
  {
    id: 2,
    name: "Rénovation luxueuse de salle de bain",
    description:
      "Transformation d'une salle de bain démodée en une retraite digne d'un spa avec des carrelages en marbre, une douche en verre et des équipements modernes.",
    image: bathroom,
    link: "#",
  },
  {
    id: 3,
    name: "Mise à jour élégante du salon",
    description:
      "Conception d'un magnifique espace de vie extérieur, avec une pergola, un foyer et des sièges confortables pour les divertissements.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Conversion du sous sol",
    description:
      "Mise à jour d'un salon avec un nouveau revêtement de sol, un éclairage élégant et des étagères sur mesure.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "modernes chambres",
    description:
      "Transformation d'un sous-sol inutilisé en un espace moderne et multifonctionnel incluant un cinéma maison, une salle de sport et une chambre d'amis.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "belle chambre à coucher",
    description:
      "Création d'un bureau à domicile élégant et fonctionnel, optimisant l'espace avec des meubles ergonomiques, un grand espace de rangement et une décoration moderne.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Découvrez ce que nos clients disent de leur expérience avec DécoDar. Nous sommes fiers de notre travail et nous nous engageons à fournir des services de rénovation de maison de premier ordre.",
  reviews: [
    {
      name: "Amina Benali",
      title: "Propriétaire",
      review:
        "DécoDar a transformé notre cuisine démodée en une œuvre moderne. L'équipe était professionnelle, à l'écoute de nos besoins et a dépassé nos attentes. Nous sommes ravis du résultat !",
      image: user1,
    },
    {
      name: "Youssef Khelifi",
      title: "Propriétaire",
      review:
        "La rénovation de notre salle de bain s'est déroulée sans accroc grâce à DécoDar. Ils ont tout pris en charge, de la conception à l'exécution, avec une attention impeccable aux détails. Hautement recommandé !",
      image: user2,
    },
    {
      name: "Karim Saidi",
      title: "Propriétaire",
      review:
        "DécoDar nous a aidés à créer l'espace de vie extérieur parfait. Leur créativité et leur savoir-faire ont transformé notre jardin en une oasis magnifique. C'est maintenant notre endroit préféré pour nous détendre et recevoir des invités.",
      image: user3,
    },
    {
      name: "fatima zahraoui",
      title: "Propriétaire",
      review:
        "La mise à jour de notre salon a dépassé nos attentes. L'équipe de DécoDar était compétente et communicative, garantissant un processus de rénovation fluide. Le nouveau design apporte une touche moderne à notre maison.",
      image: user4,
    },
    {
      name: "salim hadid",
      title: "Propriétaire",
      review:
        "Du début à la fin, travailler avec DécoDar a été un plaisir. Ils ont écouté notre vision et l'ont réalisée avec un savoir-faire expert. Notre bureau à domicile est maintenant un espace élégant et fonctionnel.",
      image: user5,
    },
    {
      name: "Rachid Amrani",
      title: "Propriétaire",
      review:
        "DécoDar a fait un travail incroyable sur la conversion de notre sous-sol. Ils ont créé un espace confortable et multifonctionnel que notre famille adore. L'équipe était professionnelle et a livré dans les délais et le budget.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Vous avez des questions ou besoin de plus d'informations ? Contactez-nous, nous serons ravis de vous aider.",
  phone: {
    label: "Téléphone",
    value: "+213 555 123 456",
  },
  email: {
    label: "Email",
    value: "info@decodar.dz",
  },
  address: {
    label: "Adresse",
    value: " chrea bejaia Algérie",
  },
};