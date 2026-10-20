const demonstrationProject = {
  id: "demo-fiche-projet",
  name: "Exemple de fiche projet",
  summary:
    "Ce texte sert à vérifier la présentation d’une réalisation. Il ne décrit aucun projet mené par TAKADEV.",
  type: "Exemple fictif",
  technologies: [],
  results: null,
  published: false,
  demonstration: true,
};

export const projects = [demonstrationProject];

export function getVisibleProjects() {
  return projects.filter(
    (project) => project.published || (project.demonstration && import.meta.env.DEV),
  );
}
