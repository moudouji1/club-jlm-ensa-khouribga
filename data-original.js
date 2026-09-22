const CLUB = {
  // ============================
  // INFORMATIONS OFFICIELLES DU CLUB
  // ============================
  // TODO: Remplacer les textes provisoires ci-dessous par les informations officielles
  // que le vice-team leader / team leader vont me transmettre.
  name: "JLM ENSA Khouribga",
  tagline: "Des jeunes idées pour un Maroc meilleur demain.",
  slogan: "Étudiants · Innovation · Impact",
  history: "Le JLM ENSA Khouribga est une communauté étudiante engagée qui transforme les idées en projets et les valeurs en actions concrètes.",
  mission: "Mobiliser les compétences étudiantes pour des projets à impact positif.",
  vision: "Être un club de référence à l’ENSA Khouribga pour un Maroc plus durable et plus équitable.",

  // Couleurs principales demandées : orange, rouge et vert.
  colors: {
    orange: "#ff9700",
    red: "#ff1744",
    green: "#13a86b"
  },

  values: [
    { title: "Engagement", text: "Agir aujourd’hui.", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_44_57.png", color: "red" },
    { title: "Solidarité", text: "Avancer ensemble.", icon: "assets/icon-pack/page_album/ChatGPT Image 18 sept. 2026, 03_11_26.png", color: "green" },
    { title: "Innovation", text: "Transformer les idées.", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_08.png", color: "orange" },
    { title: "Responsabilité", text: "Agir pour demain.", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 02_06_24.png", color: "dark" }
  ],

  pillars: [
    { title: "Capital humain", text: "Développer les compétences", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_44_57.png", color: "red" },
    { title: "Environnement", text: "Des solutions durables", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 02_06_24.png", color: "green" },
    { title: "Entrepreneuriat", text: "Transformer les idées en projets", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_08.png", color: "orange" },
    { title: "Pérennité", text: "Des actions à fort impact", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_18.png", color: "dark" }
  ],

  stats: [
    { value: "+7", label: "Projets réalisés", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_43.png", color: "red" },
    { value: "+500", label: "Étudiants touchés", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_46_57.png", color: "green" },
    { value: "+30", label: "Formations", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_53.png", color: "orange" },
    { value: "+15", label: "Actions terrain", icon: "assets/icon-pack/pagePrincipale/ChatGPT Image 18 sept. 2026, 01_45_28.png", color: "red" }
  ],

  // TODO: Remplacer par les VRAIS liens officiels du club.
  social: {
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
    facebook: "#",
    youtube: "#"
  }
};

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



/*
  PROJETS
  ----------------
  Les contenus ci-dessous sont provisoires à partir de la première version.
  TODO : remplacer chaque description, résultat, année, équipe et image
  par le contenu du script officiel de la compétition précédente / saison actuelle.

  Pour une image de projet :
  - placer la photo dans assets/projets/
  - puis mettre son chemin dans image: "assets/projets/nom-image.jpg"
*/
const PROJECTS = [
  {
    id: "ecowatt",
    title: "EcoWatt",
    category: "Environnement",
    categoryKey: "environment",
    color: "green",
    image: "assets/project-placeholder.svg",
    short: "Des solutions énergétiques durables pour un campus plus vert.",
    description: "EcoWatt vise à imaginer et proposer des solutions énergétiques durables adaptées aux besoins d’un campus universitaire.",
    objectives: [
      "Sensibiliser aux économies d’énergie.",
      "Identifier des pistes d’optimisation énergétique.",
      "Encourager l’innovation étudiante autour de la transition énergétique."
    ],
    results: [
      "+300 étudiants sensibilisés",
      "Des idées étudiantes orientées vers l’efficacité énergétique",
      "Une démarche réutilisable sur le campus"
    ],
    year: "2024",
    status: "Projet à la une",
    team: "Équipe EcoWatt"
  },
  {
    id: "aquaflow",
    title: "AquaFlow",
    category: "Environnement",
    categoryKey: "environment",
    color: "green",
    image: "assets/project-placeholder.svg",
    short: "Une gestion intelligente de l’eau.",
    description: "AquaFlow explore des approches intelligentes pour mieux comprendre, suivre et réduire la consommation d’eau.",
    objectives: [
      "Promouvoir une consommation responsable de l’eau.",
      "Proposer des mécanismes de suivi.",
      "Transformer un besoin concret en projet étudiant."
    ],
    results: [
      "Sensibilisation à la gestion de l’eau",
      "Prototype et réflexion autour de la consommation",
      "Mobilisation d’une équipe multidisciplinaire"
    ],
    year: "2024",
    status: "Projet",
    team: "Équipe AquaFlow"
  },
  {
    id: "nkhdam-lik",
    title: "Nkhdam Lik",
    category: "Ateliers & Formations",
    categoryKey: "solidarity",
    color: "red",
    image: "assets/project-placeholder.svg",
    short: "Faciliter l’insertion des jeunes talents.",
    description: "Nkhdam Lik est pensé autour de l’accompagnement et de la mise en relation des jeunes talents avec des opportunités et des ressources utiles.",
    objectives: [
      "Faciliter l’accès à l’information.",
      "Développer l’employabilité des étudiants.",
      "Créer une dynamique d’entraide."
    ],
    results: [
      "Conseils et accompagnement",
      "Partage d’opportunités",
      "Création de liens entre étudiants et acteurs du monde professionnel"
    ],
    year: "2024",
    status: "Projet",
    team: "Équipe Nkhdam Lik"
  },
  {
    id: "hrayfia",
    title: "HrayfIA",
    category: "Entrepreneuriat & Digitalisation",
    categoryKey: "entrepreneurship",
    color: "yellow",
    image: "assets/project-placeholder.svg",
    short: "L’IA au service des métiers et des savoir-faire locaux.",
    description: "HrayfIA cherche à valoriser les savoir-faire locaux en explorant des usages responsables de l’intelligence artificielle.",
    objectives: [
      "Mettre en valeur les métiers et savoir-faire.",
      "Explorer des applications concrètes de l’IA.",
      "Créer des ponts entre innovation et patrimoine local."
    ],
    results: [
      "Sensibilisation autour de l’IA",
      "Mise en avant de savoir-faire",
      "Concept orienté impact social"
    ],
    year: "2024",
    status: "Projet",
    team: "Équipe HrayfIA"
  },
  {
    id: "eduplan",
    title: "EduPlan",
    category: "Entrepreneuriat & Digitalisation",
    categoryKey: "entrepreneurship",
    color: "yellow",
    image: "assets/project-placeholder.svg",
    short: "Planifier un meilleur parcours éducatif.",
    description: "EduPlan propose une réflexion autour de l’organisation et du suivi du parcours d’apprentissage des étudiants.",
    objectives: [
      "Faciliter la planification.",
      "Encourager de meilleures habitudes d’apprentissage.",
      "Aider les étudiants à visualiser leurs objectifs."
    ],
    results: [
      "Organisation plus claire du parcours",
      "Approche centrée étudiant",
      "Potentiel d’évolution vers un outil numérique"
    ],
    year: "2024",
    status: "Projet",
    team: "Équipe EduPlan"
  },
  {
    id: "ai-days",
    title: "AI Days",
    category: "Entrepreneuriat & Digitalisation",
    categoryKey: "entrepreneurship",
    color: "yellow",
    image: "assets/project-placeholder.svg",
    short: "Un rendez-vous autour de l’intelligence artificielle.",
    description: "AI Days rassemble étudiants, passionnés et intervenants autour de l’intelligence artificielle, de ses usages et de son impact.",
    objectives: [
      "Découvrir les tendances de l’IA.",
      "Créer des échanges entre étudiants et intervenants.",
      "Encourager les projets innovants."
    ],
    results: [
      "Conférences et échanges",
      "Participation étudiante",
      "Ouverture sur les opportunités liées à l’IA"
    ],
    year: "2024",
    status: "Événement / Projet",
    team: "Équipe AI Days"
  },
  {
    id: "smiley-business-challenge",
    title: "Smiley Business Challenge",
    category: "Entrepreneuriat & Digitalisation",
    categoryKey: "entrepreneurship",
    color: "yellow",
    image: "assets/project-placeholder.svg",
    short: "Un challenge pour faire grandir les idées.",
    description: "Un challenge entrepreneurial qui encourage les étudiants à structurer, présenter et faire évoluer leurs idées.",
    objectives: [
      "Développer l’esprit entrepreneurial.",
      "Apprendre à présenter une idée.",
      "Encourager le travail en équipe."
    ],
    results: [
      "Des idées transformées en concepts",
      "Des échanges entre participants",
      "Une expérience de challenge"
    ],
    year: "2024",
    status: "Challenge",
    team: "Équipe du challenge"
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
    id: "actions-solidaires",
    title: "Actions solidaires",
    category: "Ateliers & Formations",
    categoryKey: "solidarity",
    color: "red",
    image: "assets/action-placeholder.svg",
    short: "Agir pour une société plus juste et inclusive.",
    description: "Des actions de proximité qui mobilisent les étudiants autour de la solidarité et de l’entraide.",
    objectives: [
      "Soutenir les communautés locales.",
      "Mobiliser les bénévoles.",
      "Transformer l’engagement étudiant en impact concret."
    ],
    results: [
      "Mobilisation de bénévoles",
      "Soutien de bénéficiaires locaux",
      "Renforcement de l’esprit solidaire"
    ],
    year: "Saison en cours",
    status: "Action terrain"
  },
  {
    id: "caravane-sociale",
    title: "Caravane sociale",
    category: "Ateliers & Formations",
    categoryKey: "solidarity",
    color: "yellow",
    image: "assets/action-placeholder.svg",
    short: "Aller à la rencontre des populations locales.",
    description: "Une initiative itinérante destinée à rapprocher le club des populations locales et à répondre à des besoins identifiés sur le terrain.",
    objectives: [
      "Être au plus près des bénéficiaires.",
      "Créer des actions utiles et accessibles.",
      "Favoriser la solidarité territoriale."
    ],
    results: [
      "Rencontres de terrain",
      "Activités de proximité",
      "Implication de bénévoles étudiants"
    ],
    year: "Saison en cours",
    status: "Action terrain"
  },
  {
    id: "sensibilisation",
    title: "Sensibilisation",
    category: "Environnement",
    categoryKey: "environment",
    color: "green",
    image: "assets/action-placeholder.svg",
    short: "Des campagnes pour un avenir plus durable.",
    description: "Des campagnes et ateliers de sensibilisation portant sur l’environnement, l’eau, l’énergie et les comportements responsables.",
    objectives: [
      "Diffuser de bonnes pratiques.",
      "Encourager des comportements responsables.",
      "Impliquer les étudiants dans la transition durable."
    ],
    results: [
      "Ateliers et campagnes",
      "Public étudiant sensibilisé",
      "Échanges autour des enjeux environnementaux"
    ],
    year: "Saison en cours",
    status: "Sensibilisation"
  },
  {
    id: "accompagnement-local",
    title: "Accompagnement local",
    category: "Formation",
    categoryKey: "training",
    color: "red",
    image: "assets/action-placeholder.svg",
    short: "Soutien scolaire et accompagnement des jeunes.",
    description: "Une initiative destinée à accompagner les jeunes de la région à travers des activités éducatives, de soutien et d’orientation.",
    objectives: [
      "Soutenir les jeunes.",
      "Partager les compétences étudiantes.",
      "Créer un lien durable avec la communauté locale."
    ],
    results: [
      "Sessions d’accompagnement",
      "Mobilisation de bénévoles",
      "Transmission de compétences"
    ],
    year: "Saison en cours",
    status: "Action locale"
  }
];

/*
  BUREAU ACTUEL
  ----------------
  TODO : remplacer les membres ci-dessous par les noms / rôles / filières officiels.
  Photos : déposer les portraits dans assets/bureau/ puis mettre le chemin dans image.
*/
const TEAM = [
  { name: "Membre 1", role: "Présidence", field: "À compléter", image: "assets/team-placeholder.svg", color: "yellow" },
  { name: "Membre 2", role: "Vice-présidence / Team Leader", field: "À compléter", image: "assets/team-placeholder.svg", color: "red" },
  { name: "Membre 3", role: "Responsable", field: "À compléter", image: "assets/team-placeholder.svg", color: "green" },
  { name: "Membre 4", role: "Responsable", field: "À compléter", image: "assets/team-placeholder.svg", color: "yellow" },
  { name: "Membre 5", role: "Responsable", field: "À compléter", image: "assets/team-placeholder.svg", color: "red" },
  { name: "Membre 6", role: "Responsable", field: "À compléter", image: "assets/team-placeholder.svg", color: "green" }
];

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
