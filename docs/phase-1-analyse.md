# TAKADEV — Phase 1 : analyse et planification

Statut : plan validé le 17 octobre 2026. La phase 8 règle les contrastes, le clavier, les titres et le build de production.

Décisions confirmées :

- les dix catégories de services restent, y compris les offres seulement partielles dans la fiche ;
- le titre d’accueil est le slogan, avec le paragraphe d’appui proposé ;
- la page Réalisations reste vide en public, avec un exemple fictif visible seulement en développement ;
- le capital, le RC, le NIF et le NIS restent hors des mentions légales tant qu’un accord distinct n’est pas donné.

Source : fiche de présentation « V2 Fiche de présentation TAKADEV », en-tête et pied de page officiels. Les faits ci-dessous en sont extraits. Ce qui n’y figure pas est signalé comme manquant ou comme extension du brief.

## 1. Objectifs reformulés

Le site présente **EPE TAKADEV SPA**, filiale du Centre de Recherche sur l’Information Scientifique et Technique (CERIST), sous la marque **TAKADEV**.

Il doit :

- présenter l’entreprise, sa mission, sa vision et ses valeurs avec les seuls textes confirmés ;
- exposer les services, sans retirer les dix catégories demandées, tout en distinguant ce que la fiche confirme ;
- montrer l’expertise sans statistiques, clients ou témoignages inventés ;
- permettre un contact réel : téléphone, e-mail, adresse, puis formulaire lorsque l’envoi sera branché ;
- préparer l’affichage des réalisations réelles, sans en publier de fausses ;
- être lisible, accessible, rapide et correctement structuré pour le référencement, sans promettre une position sur Google.

Slogan confirmé : « Des solutions informatiques adaptées à vos besoins. »

## 2. Faits confirmés

| Élément | Valeur retenue |
| --- | --- |
| Marque | TAKADEV |
| Raison sociale | EPE TAKADEV SPA |
| Lien CERIST | Filiale du Centre de Recherche sur l’Information Scientifique et Technique (CERIST) |
| Activité | Informatique et technologies numériques : développement logiciel, solutions informatiques, formation |
| Slogan | Des solutions informatiques adaptées à vos besoins. |
| Adresse | 05 rue des Frères Aissou, Ben Aknoun, Alger |
| Téléphone | 0661 16 26 26 |
| E-mail | takadev@cerist.dz |
| Capital social | 3 000 000,00 DA |
| RC | 25B1283159_16/00 |
| NIF | 002516128315989 |
| NIS | 002516220252846 |

L’adresse du corps de la fiche contient des variantes (« Benaknoun », « Bznaknoun »). Le site utilisera la graphie du pied de page : **Ben Aknoun**.

Le pied de page source contient aussi un compte bancaire CPA. Ce RIB ne sera ni affiché sur le site, ni copié dans Git.

Domaines confirmés par la fiche :

1. Développement d’applications mobiles (Android et iOS).
2. Développement d’applications web, plateformes, espaces administrateurs et clients, tableaux de bord, rapports.
3. Systèmes de gestion : commercial, stocks, achats, ventes, clients, fournisseurs, ressources humaines, suivi.
4. Formation : développement web et applicatif, programmation, bases de données, systèmes de gestion, technologies web, outils numériques.

Méthode confirmée : analyse des besoins, conception, développement, tests, mise en service, maintenance.

Valeurs confirmées : innovation, qualité, professionnalisme, écoute, fiabilité, accompagnement.

Publics confirmés : PME, grandes entreprises, start-up, commerces, indépendants, organisations, administrations, porteurs de projets, particuliers ayant un besoin précis.

## 3. Ce que la fiche ne permet pas d’affirmer

À obtenir avant de les publier comme des faits :

- date de création ;
- logo ;
- nom de domaine ;
- comptes de réseaux sociaux ;
- technologies réellement utilisées ;
- effectif et organigramme ;
- liste du matériel ;
- nom, description, type, technologies, visuel et résultats d’au moins un projet réel.

Extensions du brief absentes ou seulement partielles dans la fiche :

| Catégorie demandée | Lecture de la fiche |
| --- | --- |
| Développement Web | Confirmée |
| Développement Mobile | Confirmée |
| Logiciel sur mesure | Confirmée, sous le nom « systèmes de gestion » |
| UI/UX Design | Partielle : la conception d’interface est une étape des apps mobiles, pas une offre autonome |
| Hébergement et Cloud | Non confirmée comme offre. L’hébergement est cité comme moyen et comme compétence « à préciser » |
| Cybersécurité | Partielle : sécurité des projets livrés. Pas d’offre d’audit autonome |
| Maintenance et Support | Confirmée |
| Data et intelligence artificielle | Partielle : rapports et tableaux de bord seulement. IA, BI et chatbots absents |
| Formation et Conseil | Formation confirmée. Le conseil comme offre distincte reste à valider |
| Intégration et digitalisation | La digitalisation des processus est dans la mission. GED, signature électronique et workflows absents |

Décision proposée : les dix catégories restent dans l’architecture, parce que le brief l’exige. Le texte public des lignes non confirmées ne sera figé qu’après un oui explicite de TAKADEV. D’ici là, le plan les conserve et les marque.

Aucune phrase supplémentaire sur le CERIST ne sera écrite au-delà de la filiation confirmée.

## 4. Cahier des charges fonctionnel

### Accueil `/`

- En-tête : marque TAKADEV, navigation, lien « Demander un devis ».
- Hero : eyebrow « EPE TAKADEV SPA · Filiale du CERIST », titre = slogan, paragraphe tiré de la présentation confirmée, deux actions, visuel SVG original (pas de photo de stock ni d’équipe fictive).
- Aperçu des services : les quatre domaines confirmés, avec lien vers le catalogue complet.
- Avantages : les six valeurs confirmées. Aucun chiffre d’affaires, effectif ou taux de satisfaction.
- Méthode résumée en six étapes, avec lien vers la page dédiée.
- Bandeau de contact avant le pied de page.

Titre proposé, à valider :

- H1 : « Des solutions informatiques adaptées à vos besoins. »
- Texte : « TAKADEV conçoit des applications web, des applications mobiles, des systèmes de gestion et des formations pour les entreprises, les organisations et les administrations. »

### À propos `/a-propos`

Identité, mission, vision, objectifs, valeurs, approche de la transformation numérique (digitaliser, automatiser, améliorer le suivi, outiller, former, accompagner), lien CERIST limité à la phrase confirmée.

### Services `/services` et `/services/:slug`

Dix fiches. Chaque fiche a une icône Lucide, un titre, un résumé, la liste complète des prestations demandées, « En savoir plus » et « Demander un devis ».

Les slugs prévus :

- `developpement-web`
- `developpement-mobile`
- `logiciel-sur-mesure`
- `ui-ux-design`
- `hebergement-cloud`
- `cybersecurite`
- `maintenance-support`
- `data-intelligence-artificielle`
- `formation-conseil`
- `integration-digitalisation`

### Réalisations `/realisations`

Schéma de données réutilisable : nom, résumé, type, technologies, visuel, texte alternatif, résultats, `published`, `demonstration`.

La page publique n’affiche que `published: true`. Tant qu’aucun projet réel n’est fourni, elle affiche un état vide honnête. Un enregistrement fictif unique sert à vérifier la mise en page en développement, avec un bandeau « projet fictif, ce n’est pas une réalisation de TAKADEV ». Il ne part pas dans le site publié.

### Méthode `/methode`

Les six étapes de la fiche, développées sans ajouter d’étapes.

### Contact `/contact`

Coordonnées confirmées. Formulaire : nom, e-mail, téléphone facultatif, entreprise facultative, service, objet, message, consentement.

Validation côté navigateur, messages en français, états chargement / erreur / confirmation prévus dans le code. Tant que `VITE_CONTACT_ENDPOINT` est vide, l’envoi ne simule pas un succès : il indique d’écrire à takadev@cerist.dz ou d’appeler le 0661 16 26 26.

### Pages juridiques

`/mentions-legales` et `/politique-de-confidentialite` : brouillons structurels, marqués « texte à faire valider ». RC, NIF, NIS et capital n’y entrent qu’après accord. Le RIB n’y entre pas.

### Pied de page

Marque, phrase courte, navigation, noms des services, coordonnées, mentions, confidentialité, année dynamique. Pas d’icônes sociales tant qu’aucune URL réelle n’est fournie.

## 5. Arborescence prévisionnelle

```text
index.html
package.json
vite.config.js
.gitignore
.env.example
README.md
public/
  favicon.png
  robots.txt
src/
  main.jsx
  App.jsx
  index.css
  assets/
  components/
    layout/     Header, Footer, Layout, MobileNav, SkipLink
    common/     Button, Container, SectionHeading, Seo, CtaBand, PageHero
    home/       Hero, ServicePreview, Advantages, ProcessPreview
    services/   ServiceCard, ServiceCatalog
    projects/   ProjectCard, ProjectEmptyState
    contact/    ContactDetails, ContactForm
  pages/        une page par route, plus NotFoundPage
  data/         company, services, method, projects, navigation
  utils/        validation, contact
```

Pas de dossier `hooks/` tant qu’aucun hook n’existe. Pas de backend.

## 6. Choix techniques

Vérifiés le 17 octobre 2026 sur le registre npm, à recontrôler au moment de l’installation :

| Outil | Version constatée | Rôle |
| --- | --- | --- |
| Node.js | 22.14.0 dans cet environnement | Exécution |
| React / React DOM | 19.3.1 | Interface |
| Vite | 8.3.4 | Projet et serveur de développement |
| Tailwind CSS | 4.3.3 | Styles |
| @tailwindcss/vite | 4.3.3 | Intégration Vite, configuration dans le CSS |
| react-router-dom | 7.18.4 | Routes lisibles |
| lucide-react | 1.59.0 | Icônes |
| Balises SEO | React 19 | `title` et `meta` dans chaque page. react-helmet-async laissait un titre vide. |

`react-router` 8.4.0 existe, mais il exige Node.js `>= 22.22.0`. Cet environnement est en 22.14.0. **react-router-dom 7.18.4** accepte React 19 et reste l’API stable à utiliser.

Tailwind 4 se configure dans `src/index.css` avec `@import "tailwindcss"` et `@theme`, pas avec un ancien `tailwind.config.js`. Les couleurs du brief deviennent des jetons : nuit `#0B1630`, bleu `#2563EB`, blanc `#FFFFFF`, surface `#F4F7FC`, texte `#273449`. Sur fond nuit, le bleu `#2563EB` ne servira pas au petit texte : un bleu plus clair sera réservé aux liens, pour le contraste.

Typographies prévues : Manrope pour les titres, Source Sans 3 pour le texte, via des paquets `@fontsource` afin de ne pas dépendre d’un CDN. JavaScript uniquement, comme demandé. Aucune base de données.

## 7. Plan de réalisation

Chaque phase s’arrête pour validation.

1. **Analyse** — ce document.
2. **Environnement** — vérifier Node et npm, créer le projet Vite React JavaScript, installer Tailwind 4, React Router 7 et Lucide, lancer le serveur.
3. **Structure** — jetons, layout, navigation, pied de page, routes vides, SEO de base, favicon mot-symbole.
4. **Accueil** — hero, aperçus, valeurs, méthode, appel à l’action, vérifications mobile et bureau.
5. **Services** — données centralisées des dix catégories et pages de détail.
6. **Pages** — À propos, Réalisations, Méthode, Contact, mentions, confidentialité, page 404.
7. **Interactions** — menu, ancres, validation du formulaire, envoi réel seulement si un endpoint est fourni.
8. **Finition** — contrastes, clavier, titres, textes alternatifs, build de production.
9. **Git et déploiement** — historique propre, hébergement compatible Vite, domaine et HTTPS expliqués. Le déploiement effectif dépend d’un compte d’hébergement.

Commandes prévues en Phase 2, sous Windows PowerShell, une fois le dossier choisi :

```powershell
node -v
npm -v
npm create vite@latest . -- --template react
npm install
npm install react-router-dom@7 lucide-react
npm install tailwindcss @tailwindcss/vite
npm run dev
```

La commande exacte de création sera ajustée si le dossier contient déjà des fichiers, ce qui est le cas de ce dépôt.

## 8. Décisions à confirmer

1. Conserver les dix catégories, y compris celles que la fiche ne confirme pas encore.
2. Titre d’accueil proposé.
3. État vide des réalisations, avec exemple fictif visible seulement en développement.
4. Publication ou non du capital, du RC, du NIF et du NIS dans les mentions légales.
5. Confirmation que le RIB reste hors du site.
6. Fourniture du logo, du domaine, des réseaux, de la date de création et des projets réels, lorsqu’ils existent.
