export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white">
      {project.demonstration ? (
        <p className="bg-night px-6 py-3 text-sm leading-relaxed text-on-night">
          Projet fictif, visible uniquement pendant le développement. Ce n’est pas une réalisation
          de TAKADEV.
        </p>
      ) : null}
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div
          className="flex min-h-40 items-end rounded-xl bg-night p-4 text-sm font-semibold text-on-night"
          role="img"
          aria-label="Visuel d’exemple, sans capture d’un projet réel"
        >
          Visuel d’exemple
        </div>
        <div>
          <p className="text-sm font-semibold text-brand">{project.type}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-night">{project.name}</h2>
          <p className="mt-3 leading-relaxed">{project.summary}</p>
          {project.technologies.length > 0 ? (
            <p className="mt-4 text-sm">
              <span className="font-semibold text-night">Technologies : </span>
              {project.technologies.join(", ")}
            </p>
          ) : null}
          {project.results ? (
            <p className="mt-3 text-sm">
              <span className="font-semibold text-night">Résultats : </span>
              {project.results}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
