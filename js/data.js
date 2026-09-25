const CLUB = {
  // ============================
  // INFORMATIONS OFFICIELLES DU CLUB
  // ============================
  // TODO: Remplacer les textes provisoires ci-dessous par les informations officielles
  // que le vice-team leader / team leader vont me transmettre.
  name: "JLM ENSA Khouribga",
  tagline: "Des jeunes idées pour un Maroc meilleur demain.",
  slogan: "Étudiants · Innovation · Impact",
  history: "Le JLM ENSA Khouribga est une communauté étudiante engagée qui transforme les idées en projets et les valeurs en actions concrètes. Nous organisons aussi des formations ciblées pour développer les compétences des participants. L’innovation est notre signe distinctif : elle guide nos projets et notre engagement pour un Maroc meilleur demain.",
  mission: "Mobiliser les compétences étudiantes pour des projets à impact positif.",
  vision: "Être un club de référence à l’ENSA Khouribga pour un Maroc plus durable et plus équitable.",

  // Couleurs principales demandées : orange, rouge et vert.
  colors: {
    orange: "#ff9700",
    red: "#ff1744",
    green: "#13a86b"
  },

  values: [
    { title: "Engagement", text: "Agir aujourd’hui.", icon: "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_44_57.png", color: "red" },
    { title: "Solidarité", text: "Avancer ensemble.", icon: "assets/icon-pack/page_album/ChatGPT Image 18 sept. 2026, 03_11_26.png", color: "green" },
    { title: "Innovation", text: "Transformer les idées.", icon: "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_08.png", color: "orange" },
    { title: "Responsabilité", text: "Agir pour demain.", icon: "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 02_06_24.png", color: "dark" }
  ],

  pillars: [
    { title: "Solidarité", text: "Agir ensemble pour les autres", icon: "assets/logos_pilier/solidarite.webp", color: "red" },
    { title: "Environnement", text: "Des solutions durables", icon: "assets/logos_pilier/environnement.webp", color: "green" },
    { title: "Entrepreneuriat social", text: "Transformer les idées en projets", icon: "assets/logos_pilier/entrepreneuriat-social.webp", color: "orange" },
    { title: "Pérennité", text: "Des actions à fort impact", icon: "assets/logos_pilier/perennite.webp", color: "dark" }
  ],

  stats: [
    { value: "+7", label: "Projets réalisés", icon: "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_43.png", color: "red" },
    { value: "+500", label: "Étudiants touchés", icon: "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_53.png", color: "green" },
    { value: "+30", label: "Formations organisées", icon: "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_46_02.png", color: "yellow" },
    { value: "+15", label: "Actions sur le terrain", icon: "assets/heart.svg", color: "red" }
  ],

  email: "clubjlmensakh@gmail.com",
  social: {
    instagram: "https://www.instagram.com/jeunesleaders_ensakh?stkn=YnV0cGNyN3o0ZnVl",
    github: "https://github.com/jeunesleaders-ensakh",
    linkedin: "https://www.linkedin.com/company/jeunesleaders-ensakh/"
  }
};

// Remplacer photo par le chemin de la photo de chaque distinction.
const TROPHIES = [
  {
    title: "Demi-finaliste de la compétition nationale JLM 2026",
    badge: "Demi-finaliste",
    category: "Compétition nationale",
    year: "2026",
    color: "red",
    icon: "assets/trophie/demi_finaliste2026.png",
    photo: "assets/trophie/demi_finaliste2026.png"
  },
  {
    title: "Champion de la compétition spéciale #INNOVATION",
    badge: "Champion",
    category: "#INNOVATION",
    year: "",
    color: "yellow",
    icon: "assets/trophie/champion_innovation.png",
    photo: "assets/trophie/champion_innovation.png"
  },
  {
    title: "Champion Environnement JLM 2026",
    badge: "Champion",
    category: "Environnement",
    year: "2026",
    color: "green",
    icon: "assets/trophie/champion_environnement_jlm2026.png",
    photo: "assets/trophie/champion_environnement_jlm2026.png"
  }
];

const TRAINING_TOPICS = [
  { id: "ateliers", title: "Ateliers & formations", short: "Apprendre ensemble", icon: "02_51_47 (1)", color: "red", description: "Des ateliers pratiques centrés sur une compétence précise, pour apprendre, échanger et progresser ensemble." },
  { id: "bootcamps", title: "Bootcamps", short: "Des formations intensives", icon: "02_51_48 (2)", color: "green", description: "Des formats d’apprentissage intensifs qui privilégient la pratique et le travail en équipe pour développer ses compétences." },
  { id: "ai-days", title: "AI Days", short: "Explorer l’intelligence artificielle", icon: "02_51_48 (3)", color: "purple", href: "projet.html?id=ai-days" },
  { id: "prompt-engineering", title: "Prompt engineering", short: "Mieux utiliser l’IA au quotidien", icon: "02_51_50 (5)", color: "orange", description: "Apprendre à formuler des consignes claires, préciser le contexte d’une demande et évaluer les réponses des outils d’intelligence artificielle." },
  { id: "web-development", title: "Web development", short: "Construire le web de demain", icon: "02_51_49 (4)", color: "blue", description: "Découvrir les bases du développement web et de la programmation pour comprendre comment concevoir et construire des interfaces et des applications." }
];

const THEMES = [
  {
    id: "ai",
    title: "Intelligence Artificielle",
    description: "IA, automatisation, data et usages intelligents.",
    icon: "assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_48 (3).png",
    color: "purple"
  },
  {
    id: "web",
    title: "Développement Web & Programmation",
    description: "Web, applications, programmation et solutions logicielles.",
    icon: "assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_49 (4).png",
    color: "blue"
  },
  {
    id: "iot",
    title: "IoT & Systèmes Connectés",
    description: "Objets connectés, capteurs, réseaux et systèmes intelligents.",
    icon: "assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_50 (6).png",
    color: "green"
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneuriat & Digitalisation",
    description: "Idées, business, digitalisation et transformation.",
    icon: "assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_50 (5).png",
    color: "orange"
  },
  {
    id: "environment",
    title: "Environnement & Énergie Durable",
    description: "Énergie, eau, environnement et solutions durables.",
    icon: "assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_28.png",
    color: "green"
  },
  {
    id: "training",
    title: "Ateliers & Formations",
    description: "Ateliers pratiques, apprentissage et montée en compétences.",
    icon: "assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_47 (1).png",
    color: "red"
  }
];

/*
  FORMATS D'ACTIVITÉ — ce ne sont pas des thématiques principales.
  Bootcamps / Workshops / Challenges / Événements sont des formats.
  Icônes correspondantes du pack :
  - Workshop : page_formations/...02_51_48 (2).png
  - Challenge/événement : page_formations/...02_51_51 (8).png
*/



// Source : Rapport des projets JLM ENSA Khouribga, bilan 2025–2026 et perspectives 2026–2027.
const PROJECT_CRITERIA = [
  {
    "id": "solidarity",
    "title": "Solidarité",
    "color": "red",
    "icon": "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_44_57.png"
  },
  {
    "id": "environment",
    "title": "Environnement",
    "color": "green",
    "icon": "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 02_06_24.png"
  },
  {
    "id": "entrepreneurship",
    "title": "Entrepreneuriat social",
    "color": "yellow",
    "icon": "assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_08.png"
  }
];

const PROJECTS = [
  {
    "id": "ecowatt",
    "title": "EcoWatt",
    "criteria": [
      "environment"
    ],
    "image": "assets/logos_Projets/Copie de rapport jlm (1).png",
    "short": "Comprendre et maîtriser sa consommation électrique.",
    "description": "EcoWatt est un système connecté installé au niveau du tableau électrique. Il mesure la consommation et la transmet à une interface de suivi en temps réel. L’utilisateur consulte son historique, repère les périodes ou équipements énergivores et reçoit des recommandations pour mieux maîtriser ses usages.",
    "impact": "Favoriser une utilisation responsable de l’électricité, réduire les consommations inutiles et accompagner de meilleures habitudes grâce à une information claire et continue.",
    "technologies": [
      "ESP32",
      "Capteurs électriques",
      "C/C++",
      "WebSocket / HTTPS",
      "Firebase",
      "Kafka",
      "LSTM",
      "XGBoost",
      "Random Forest"
    ],
    "year": "2025–2026",
    "status": "Projet présenté au bilan 2025–2026",
    "sourcePage": 3,
    "illustration": true
  },
  {
    "id": "aquaflow",
    "title": "AquaFlow",
    "criteria": [
      "environment"
    ],
    "image": "assets/logos_Projets/aquaflow.png",
    "illustration": true,
    "short": "Suivre la consommation d’eau et détecter les fuites.",
    "description": "AquaFlow est un système IoT qui mesure le débit d’eau dans une canalisation et transmet les données à une application. Il permet de visualiser la consommation, de repérer les usages continus ou inhabituels et de déclencher une alerte en cas de fuite potentielle. Une évolution vers les milieux agricoles et industriels est envisagée avec des capteurs plus robustes.",
    "impact": "Réduire le gaspillage en détectant les fuites plus tôt et accompagner une gestion plus intelligente de l’eau.",
    "technologies": [
      "ESP32",
      "Capteur de débit YF-S201",
      "C/C++",
      "WebSocket / HTTPS",
      "Application de suivi",
      "Analyse de données",
      "Machine Learning"
    ],
    "year": "2025–2026",
    "status": "Projet présenté au bilan 2025–2026",
    "sourcePage": 4
  },
  {
    "id": "nkhdam-lik",
    "title": "Nkhdam Lik",
    "criteria": [
      "solidarity",
      "entrepreneurship"
    ],
    "image": "assets/logos_Projets/Copie de rapport jlm (3).png",
    "short": "Donner de la visibilité aux prestataires de services locaux.",
    "description": "Nkhdam Lik met en relation les citoyens et les prestataires de services locaux. La plateforme rassemble leurs profils, services, réalisations et coordonnées. Les utilisateurs recherchent une catégorie, comparent les profils et contactent directement le professionnel adapté à leur besoin.",
    "impact": "Offrir une vitrine professionnelle aux prestataires, faciliter l’accès aux services et créer des opportunités économiques à partir des savoir-faire de la communauté.",
    "technologies": [
      "Frontend Web",
      "Backend Web",
      "Base de données",
      "Gestion de profils",
      "Recherche & filtrage",
      "Géolocalisation",
      "Hébergement Web"
    ],
    "year": "2025–2026",
    "status": "Projet présenté au bilan 2025–2026",
    "sourcePage": 5,
    "illustration": true
  },
  {
    "id": "hrayfia",
    "title": "HrayfIA",
    "criteria": [
      "solidarity",
      "entrepreneurship"
    ],
    "image": "assets/logos_Projets/Hrayfia logo.png",
    "short": "L’intelligence artificielle au service de l’artisanat marocain.",
    "description": "HrayfIA est une marketplace dédiée aux artisans marocains, qui présentent leurs produits et leur identité directement aux clients. Un chatbot multilingue accompagne la recherche, tandis qu’un système de recommandation propose des produits pertinents. Le projet associe patrimoine, commerce numérique et intelligence artificielle.",
    "impact": "Renforcer la visibilité et l’autonomie commerciale des petits artisans, valoriser leur identité et les rapprocher des clients marocains et internationaux.",
    "technologies": [
      "Développement Web",
      "Marketplace e-commerce",
      "LLM / IA générative",
      "NLP multilingue",
      "Chatbot FR / EN / Darija",
      "Système de recommandation",
      "Base produits & artisans"
    ],
    "year": "2025–2026",
    "status": "Projet présenté au bilan 2025–2026",
    "sourcePage": 6,
    "illustration": true
  },
  {
    "id": "eduplan",
    "title": "EduPlan",
    "criteria": [
      "solidarity"
    ],
    "image": "assets/logos_Projets/eduplan logo.png",
    "illustration": true,
    "short": "Organiser et personnaliser l’apprentissage grâce à l’IA.",
    "description": "EduPlan aide les étudiants à préparer un plan de travail personnalisé selon leur niveau, leurs objectifs, leurs ressources et leurs échéances. La plateforme centralise les contenus pédagogiques, propose des recommandations, des exercices et des QCM, et offre un accompagnement conversationnel.",
    "impact": "Mieux organiser les révisions, utiliser efficacement son temps et accéder aux ressources pertinentes, tout en conservant l’enseignant au centre du processus pédagogique.",
    "technologies": [
      "IA générative",
      "LLM",
      "Chatbot pédagogique",
      "Moteur de recommandation",
      "Base de connaissances",
      "Génération de QCM",
      "Personnalisation des parcours"
    ],
    "year": "2025–2026",
    "status": "Projet présenté au bilan 2025–2026",
    "sourcePage": 7
  },
  {
    "id": "ai-days",
    "title": "AI Days",
    "criteria": [
      "solidarity"
    ],
    "image": "assets/logos_Projets/logo_AI_DAYS.png",
    "illustration": true,
    "short": "Initier les lycéens à un usage pratique et responsable de l’IA.",
    "description": "AI Days propose aux lycéens des ateliers de sensibilisation et de formation à l’intelligence artificielle. Les participants apprennent à rédiger des prompts, comparer les réponses et utiliser des outils pour réviser ou créer. Les ateliers abordent aussi les données personnelles, les deepfakes, les limites des modèles et l’orientation scientifique et technologique.",
    "impact": "Développer une culture numérique responsable, des méthodes concrètes d’utilisation de l’IA et l’esprit critique des élèves.",
    "technologies": [
      "ChatGPT",
      "Perplexity",
      "Photomath",
      "Wolfram Alpha",
      "GeoGebra",
      "Gamma",
      "Ideogram",
      "DALL-E",
      "Prompt Engineering"
    ],
    "year": "2025–2026",
    "status": "Projet présenté au bilan 2025–2026",
    "sourcePage": 8
  },
  {
    "id": "smiley-business-challenge",
    "title": "Smiley Business Challenge",
    "criteria": [
      "entrepreneurship"
    ],
    "image": "assets/logos_Projets/Copie de rapport jlm (4).png",
    "illustration": true,
    "short": "Accompagner les structures locales dans leur développement numérique.",
    "description": "Après une formation au diagnostic, à la digitalisation et à la communication, les équipes étudiantes accompagnent des entreprises, coopératives et petites activités locales. Elles interviennent sur l’identité visuelle, les réseaux sociaux, la visibilité locale, la présentation des produits ou la création d’un site web.",
    "impact": "Améliorer la visibilité et la structuration numérique des bénéficiaires tout en donnant aux étudiants une expérience concrète d’accompagnement entrepreneurial.",
    "technologies": [
      "Développement Web",
      "Design graphique",
      "Meta",
      "Google Business Profile",
      "SEO local",
      "Marketing digital",
      "Gestion de contenu",
      "Diagnostic numérique"
    ],
    "year": "2025–2026",
    "status": "Projet présenté au bilan 2025–2026",
    "sourcePage": 9
  },
  {
    "id": "ofok-tech",
    "title": "Ofok Tech",
    "criteria": [
      "solidarity",
      "entrepreneurship"
    ],
    "image": "assets/logos_Projets/WhatsApp Image 2026-09-19 at 22.31.42.jpeg",
    "illustration": true,
    "short": "Former et orienter les jeunes vers des projets digitaux réalistes.",
    "description": "Prévu pour le mandat 2026–2027, Ofok Tech est un programme de formation et d’orientation autour du numérique et de l’entrepreneuriat. Il combine pratique, accompagnement et mises en situation : outils numériques, bases de la digitalisation, présentation d’une idée, organisation d’un projet et premières étapes entrepreneuriales.",
    "impact": "Renforcer l’autonomie numérique des jeunes, les aider à structurer leurs idées et les orienter vers des projets, formations ou initiatives entrepreneuriales réalistes.",
    "technologies": [],
    "year": "2026–2027",
    "status": "Projet à réaliser",
    "sourcePage": 11
  }
];

/*
  ACTIONS
  ----------------
  TODO : remplacer les actions provisoires par les actions officielles de la saison.
  Aucune inscription/contact/suggestion n'est gérée sur ce site :
  vous pourrez partager séparément votre formulaire externe aux étudiants.
*/
const ACTIONS = [
  {
    "id": "caravane-sociale",
    "title": "Caravane 2024–2025",
    "category": "Solidarité",
    "year": "2024–2025",
    "image": "assets/icon-pack-archive/ensa/caravane.png",
    "icon": "assets/icon-pack-archive/ensa/caravane.png",
    "short": "Aller à la rencontre des populations locales.",
    "description": "La caravane du JLM ENSA Khouribga s’inscrit dans les actions solidaires de la saison 2024–2025. Elle porte une démarche de proximité et de rencontre avec les populations locales.",
    "focus": "Une démarche de solidarité sur le terrain, au plus près des communautés.",
    "highlights": ["Solidarité", "Proximité", "Rencontre"]
  },
  {
    "id": "misericorde",
    "title": "Miséricorde",
    "category": "Solidarité",
    "year": "Première édition",
    "image": "assets/icon-pack-archive/ensa/misericorde.png",
    "icon": "assets/icon-pack-archive/ensa/misericorde.png",
    "short": "Partager, animer et créer des liens avec les personnes âgées.",
    "description": "Miséricorde est une action auprès des personnes âgées, autour du partage, de l’animation et du lien intergénérationnel. Elle met la rencontre entre les générations au cœur de l’engagement du club. Une première édition est documentée auprès de 17 résidents.",
    "focus": "Créer des moments de partage et d’animation, et renforcer le lien entre les jeunes et les personnes âgées.",
    "highlights": ["Partage", "Animation", "Lien intergénérationnel"],
    "residents": 17
  }
];

/*
  BUREAU ACTUEL
  ----------------
  Postes dans l’ordre officiel. Compléter les noms et filières lorsqu’ils sont disponibles.
  Photos : déposer les portraits dans assets/bureau/ puis mettre le chemin dans image.
*/
const TEAM = [
  { name: "M'BARKI Mariam", role: "Team Leader", icon: "tl.png", image: "assets/Bureau_membres/team_leader-restored.png" },
  { name: "EL HAOUARI Achraf", role: "Vice Team Leader", icon: "vtl.png", image: "assets/Bureau_membres/Achraf El Haouari.jpeg" },
  { name: "A definire", role: "Secrétaire Générale", icon: "sec_generale.png" },
  { name: "MOUTAHIR Salma", role: "Ressources Humaines", icon: "rh.png", image: "assets/Bureau_membres/MOUTAHIR Salma.jpeg" },
  { name: "BAYOUD Zainab", role: "Chef de la cellule Communication", icon: "communication.png", image: "assets/Bureau_membres/BAYOUD Zainab.jpeg" },
  { name: "ESSABBAR Lamiaa", role: "Chef de la cellule Trésorier & Sponsoring", icon: "sponso.png", image: "assets/Bureau_membres/ESSABBAR Lamiaa.jpeg" },
  { name: "CHERGUAOUI Basma", role: "Sous chef de la cellule Trésorier & Sponsoring", icon: "sponso.png", image: "assets/Bureau_membres/CHERGUAOUI Basma.jpeg" },
  { name: "A definire", role: "Chef de la cellule Gestion des Projets", icon: "projets.png" },
  { name: "A definire", role: "Sous Chef de la cellule Gestion des Projets", icon: "projets.png" },
  { name: "KHADRI Imane", role: "Chef de la cellule Actions & Activités", icon: "actions.png", image: "assets/Bureau_membres/KHADRI Imane.jpeg" },
  { name: "OUSSOUSS Hasnaa", role: "Sous chef de la cellule Actions & Activités", icon: "actions.png", image: "assets/Bureau_membres/OUSSOUSS Hasnaa.jpeg" },
  { name: "TAICHI Loujaine", role: "Chef de la cellule Média", icon: "media.png", image: "assets/Bureau_membres/TAICHI Loujaine.jpeg" },
  { name: "ERRAYAHI Sihame", role: "Sous chef de la cellule média – Design", icon: "sous_chef_design.png", image: "assets/Bureau_membres/ERRAYAHI Sihame.jpeg" },
  { name: "SADIKI Hind", role: "Sous chef de la cellule média – Montage", icon: "sous_chef_montage.png" },
  { name: "OUARCHANE Fadwa", role: "Chef de la cellule Recherche & Formation", icon: "formation.png", image: "assets/Bureau_membres/OUARCHANE Fadwa.jpeg" },
  { name: "DEROUI Mouad", role: "Sous chef de la cellule Recherche & Formation", icon: "formation.png" },
  { name: "MOUJI Rahma", role: "Chef de la cellule Logistique & Organisation", icon: "log&events.png", image: "assets/Bureau_membres/MOUJI Rahma.jpeg" },
  { name: "CHEGRY Hiba", role: "Sous Chef de la cellule Logistique & Organisation", icon: "log&events.png", image: "assets/Bureau_membres/CHEGRY Hiba.jpeg" }
].map(member => ({
  name: "",
  field: "",
  image: "assets/member-portrait.svg",
  ...member,
  icon: `assets/icon-pack-archive/page_bureau/${member.icon}`
}));

/*
  GALERIE
  ----------------
  Les images du pack sont déjà copiées dans assets/icon-pack/.
  Pour vos vraies photos :
  1) créer assets/gallery/
  2) déposer vos photos
  3) remplacer image: ci-dessous.
*/
const GALLERY = [
  { title: "Projets", count: "36 photos", category: "projets", image: "assets/gallery-placeholder.svg" },
  { title: "Actions", count: "24 photos", category: "actions", image: "assets/gallery-placeholder.svg" },
  { title: "Formations", count: "28 photos", category: "formations", image: "assets/gallery-placeholder.svg" },
  { title: "Événements", count: "32 photos", category: "evenements", image: "assets/gallery-placeholder.svg" },
  { title: "Vie étudiante", count: "40 photos", category: "vie-etudiante", image: "assets/gallery-placeholder.svg" },
  { title: "Notre équipe", count: "22 photos", category: "equipe", image: "assets/gallery-placeholder.svg" }
];

const UPCOMING = [
  { date: "15", month: "Avr.", title: "Introduction à Python", place: "ENSA Khouribga" },
  { date: "22", month: "Avr.", title: "Design Thinking", place: "ENSA Khouribga" },
  { date: "10", month: "Mai", title: "Bootcamp Web Dev", place: "ENSA Khouribga" }
];

function getProject(id) {
  return PROJECTS.find(item => item.id === id);
}

function getAction(id) {
  return ACTIONS.find(item => item.id === id);
}

const ACTIVITY_FORMATS = [
  {title:"Bootcamps", text:"Immersions intensives pour apprendre en pratiquant.", image:"assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_48 (2).png"},
  {title:"Workshops", text:"Ateliers pratiques centrés sur une compétence précise.", image:"assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_48 (2).png"},
  {title:"Challenges", text:"Défis collectifs pour transformer une idée en solution.", image:"assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_51 (8).png"},
  {title:"Événements", text:"Rencontres, conférences et moments forts de la vie du club.", image:"assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_51 (7).png"}
];

// Ajouter les photos réelles de chaque album dans photos (chemins locaux).
const PHOTO_ALBUMS = [
  { title: "Projets", id: "projets", icon: "03_10_54 (2)", photos: [] },
  { title: "Actions", id: "actions", icon: "03_11_26", photos: [] },
  { title: "Formations", id: "formations", icon: "03_10_57 (4)", photos: [] },
  { title: "Événements", id: "evenements", icon: "03_10_59 (5)", photos: [] },
  { title: "Kick off", id: "kick-off", iconPath: "assets/kick-off.svg", photos: [] },
  { title: "Compétitions", id: "competitions", icon: "03_10_54 (1)", photos: [] }
];

const GALLERY_REAL = [
  {title:"Vie du club", category:"vie-etudiante", image:"assets/icon-pack/page_a_propos/ChatGPT Image 18 sept. 2026, 02_11_53 (1).png"},
  {title:"Formations", category:"formations", image:"assets/icon-pack/page_formations/ChatGPT Image 18 sept. 2026, 02_51_47 (1).png"},
  {title:"Projets", category:"projets", image:"assets/icon-pack-archive/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_43.png"},
  {title:"Événements", category:"evenements", image:"assets/icon-pack/page_trophets/ChatGPT Image 18 sept. 2026, 03_29_58 (1).png"},
  {title:"Actions", category:"actions", image:"assets/icon-pack/page_album/ChatGPT Image 18 sept. 2026, 03_10_54 (2).png"},
  {title:"ENSA Khouribga", category:"equipe", image:"assets/icon-pack/ensa/ChatGPT Image 18 sept. 2026, 04_12_53.png"}
];

const COMPETITION_MEDIA = [
  {
    "src": "assets/album/competition/0fe06251-9b6a-41f2-adee-ab6a1e2386f8-copied-media~2.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_104639.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_170425.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_170740.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_171106.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_171216.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_171407.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_171615.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_180629.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/20260725_182201.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/IMG-20260725-WA0044.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/IMG-20260725-WA0056.jpg",
    "type": "image"
  },
  {
    "src": "assets/album/competition/IMG-20260802-WA0008.jpg",
    "type": "image"
  }
];

const ALBUM_MEDIA = {
  "actions": [
    {
      "src": "assets/album/misericorde/20260307_141330.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/misericorde/20260307_143210.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/misericorde/20260307_171737.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/misericorde/20260307_175600.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/misericorde/20260307_180101.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/misericorde/20260307_194011.jpg",
      "type": "image"
    }
  ],
  "projets": [
    {
      "src": "assets/album/photosProjets/AI_Days/20260327_153339.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/AI_Days/20260327_153432.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/AI_Days/20260327_155513.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/AI_Days/20260327_161750.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/AI_Days/20260403_170013.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/AI_Days/20260403_172610.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/AI_Days/20260420_121406.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/ecowatt_aquaflow/20260519_124253.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/ecowatt_aquaflow/20260519_125225.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/ecowatt_aquaflow/20260519_125334.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/ecowatt_aquaflow/20260519_130949.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/ecowatt_aquaflow/20260519_221023.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/ecowatt_aquaflow/20260521_184053.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/ecowatt_aquaflow/20260611_190818.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/eduPlan/20260403_115115.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/eduPlan/20260403_121402.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/smileyBC/20260418_110304.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/smileyBC/20260418_112132.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/smileyBC/20260514_191915.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/smileyBC/20260521_192446.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/photosProjets/smileyBC/20260521_200653.jpg",
      "type": "image"
    }
  ],
  "formations": [
    {
      "src": "assets/album/formation_BMCanva/20251219_153348.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/formation_BMCanva/20251219_153759.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/formation_BMCanva/20251219_153905.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/formation_BMCanva/20251219_182346.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/formation_BMCanva/20251219_182442.jpg",
      "type": "image"
    }
  ],
  "evenements": [
    {
      "src": "assets/album/BootcampJLMgeneral/20260412_132603.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/BootcampJLMgeneral/20260412_140734.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/BootcampJLMgeneral/20260412_165159.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/BootcampJLMgeneral/20260412_165223.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/BootcampJLMgeneral/20260412_191958.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/event_SmileyBC_Bootcamp/20260214_143928.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/event_SmileyBC_Bootcamp/20260214_153010.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/event_SmileyBC_Bootcamp/20260214_172129.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/event_SmileyBC_Bootcamp/20260214_173410.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/journees_integration/20250919_133446.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/journees_integration/20250919_133620.jpg",
      "type": "image"
    }
  ],
  "competitions": [
    {
      "src": "assets/album/competition/0fe06251-9b6a-41f2-adee-ab6a1e2386f8-copied-media~2.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_104639.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_170425.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_170740.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_171106.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_171216.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_171407.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_171615.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_180629.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/20260725_182201.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/IMG-20260725-WA0044.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/IMG-20260725-WA0056.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/competition/IMG-20260802-WA0008.jpg",
      "type": "image"
    }
  ],
  "kick-off": [
    {
      "src": "assets/album/kick_off/20251120_171006.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251120_171247.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251120_190213.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251121_185244 (1).jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251121_185244.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251122_122651.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251122_141259.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251122_142350.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251122_150751.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251122_161110.jpg",
      "type": "image"
    },
    {
      "src": "assets/album/kick_off/20251122_162732.jpg",
      "type": "image"
    }
  ]
};
