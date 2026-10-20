export const services = [
  {
    slug: "developpement-web",
    title: "Développement Web",
    icon: "Globe",
    summary:
      "Sites professionnels, applications web, e-commerce, portails et outils de gestion accessibles en ligne.",
    description:
      "TAKADEV conçoit des sites, des applications et des portails accessibles en ligne, du front-end jusqu’aux API et aux outils de gestion.",
    offerings: [
      "Création de sites web professionnels",
      "Développement d’applications web sur mesure",
      "Plateformes e-commerce",
      "Portails et espaces clients",
      "Systèmes de gestion interne : ERP, CRM, ressources humaines, stocks",
      "Développement front-end et back-end",
      "API et services web",
    ],
  },
  {
    slug: "developpement-mobile",
    title: "Développement Mobile",
    icon: "Smartphone",
    summary:
      "Applications Android, iOS et multiplateformes, de la conception jusqu’à la publication et la maintenance.",
    description:
      "TAKADEV développe des applications Android, iOS et multiplateformes, puis accompagne leur publication et leurs mises à jour.",
    offerings: [
      "Applications Android",
      "Applications iOS",
      "Applications hybrides multiplateformes",
      "Maintenance et mise à jour d’applications mobiles",
      "Publication sur Google Play et App Store",
    ],
  },
  {
    slug: "logiciel-sur-mesure",
    title: "Développement Logiciel sur Mesure",
    icon: "Boxes",
    summary:
      "Logiciels de gestion, solutions métiers, automatisation et tableaux de bord adaptés à votre organisation.",
    description:
      "TAKADEV construit des logiciels de gestion et des outils métiers lorsque l’organisation a besoin d’un fonctionnement qui lui est propre.",
    offerings: [
      "Logiciels de gestion d’entreprise",
      "Solutions métiers personnalisées",
      "Automatisation des processus",
      "Outils de reporting et tableaux de bord",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "PenTool",
    summary: "Interfaces, parcours utilisateurs, maquettes et mise en page responsive.",
    description:
      "TAKADEV dessine des interfaces claires et des parcours compréhensibles, puis les adapte au téléphone, à la tablette et à l’ordinateur.",
    offerings: [
      "Conception d’interfaces modernes",
      "Expérience utilisateur",
      "Prototypage et maquettage",
      "Design responsive",
    ],
  },
  {
    slug: "hebergement-cloud",
    title: "Hébergement & Cloud",
    icon: "Cloud",
    summary: "Hébergement, configuration des serveurs, déploiement et sauvegarde des données.",
    description:
      "TAKADEV prépare l’hébergement, la configuration des serveurs, le déploiement et la sauvegarde des sites et des applications.",
    offerings: [
      "Hébergement web et applicatif",
      "Configuration des serveurs et du cloud",
      "Déploiement DevOps",
      "Sauvegarde et sécurité des données",
    ],
  },
  {
    slug: "cybersecurite",
    title: "Cybersécurité",
    icon: "Shield",
    summary: "Sécurisation des applications, gestion des accès et protection des données.",
    description:
      "TAKADEV examine et renforce la sécurité des applications : accès, authentification et protection des données.",
    offerings: [
      "Audit de sécurité",
      "Sécurisation des applications web et mobiles",
      "Gestion des accès et authentification",
      "Protection des données",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    icon: "LifeBuoy",
    summary: "Maintenance corrective et évolutive, support technique et assistance aux utilisateurs.",
    description:
      "TAKADEV reste présent après la mise en service pour corriger, faire évoluer, surveiller et aider les utilisateurs.",
    offerings: [
      "Maintenance corrective et évolutive",
      "Support technique",
      "Surveillance des systèmes",
      "Assistance aux utilisateurs",
    ],
  },
  {
    slug: "data-intelligence-artificielle",
    title: "Data & Intelligence Artificielle",
    icon: "LineChart",
    summary: "Analyse de données, tableaux de bord et intégration d’automatisations intelligentes.",
    description:
      "TAKADEV exploite les données de l’activité, construit des tableaux de bord et intègre des automatisations, y compris des assistants conversationnels.",
    offerings: [
      "Analyse de données",
      "Tableaux de bord BI",
      "Intégration d’intelligence artificielle",
      "Chatbots et automatisation intelligente",
    ],
  },
  {
    slug: "formation-conseil",
    title: "Formation & Conseil",
    icon: "GraduationCap",
    summary: "Formation en développement et accompagnement dans la transformation numérique.",
    description:
      "TAKADEV forme les équipes au développement et aux outils numériques, et accompagne les décisions de transformation.",
    offerings: [
      "Conseil en transformation digitale",
      "Accompagnement technique",
      "Formation en développement informatique",
      "Formation DevOps, cybersécurité et cloud",
    ],
  },
  {
    slug: "integration-digitalisation",
    title: "Intégration & Digitalisation",
    icon: "Workflow",
    summary: "Digitalisation des processus, intégration d’outils et organisation des flux de travail.",
    description:
      "TAKADEV relie les outils déjà en place, numérise les processus et organise les circuits de validation.",
    offerings: [
      "Digitalisation des processus métiers",
      "Intégration de solutions tierces",
      "Solutions de gestion documentaire",
      "Signature électronique et workflows",
    ],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
