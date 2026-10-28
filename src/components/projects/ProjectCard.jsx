export default function ProjectCard({ project }) {
  return (
    <article className="group">
      {project.demonstration ? (
        <p className="mb-4 rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-3 text-sm leading-relaxed text-ink-50">
          Projet fictif, visible uniquement pendant le développement. Ce n’est pas une réalisation de TAKADEV.
        </p>
      ) : null}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-line bg-night-800 transition-colors duration-300 group-hover:border-line-strong">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? ""}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
          />
        ) : (
          <div
            role="img"
            aria-label="Visuel d’exemple, sans capture d’un projet réel"
            className="relative flex size-full items-end p-5 transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
          >
            <div aria-hidden="true" className="bg-grid absolute inset-0" />
            <div aria-hidden="true" className="light-field" />
            <span className="relative font-mono text-xs tracking-[0.14em] text-ink-400 uppercase">Visuel d’exemple</span>
          </div>
        )}
      </div>
      <div className="mt-6">
        <p className="font-mono text-xs tracking-[0.12em] text-cyan-400 uppercase">{project.type}</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-50 transition-transform duration-500 ease-premium group-hover:translate-x-1 sm:text-3xl">
          {project.name}
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed">{project.summary}</p>
        {project.technologies.length > 0 ? (
          <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded-md border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-300">
                {technology}
              </li>
            ))}
          </ul>
        ) : null}
        {project.results ? (
          <p className="mt-4 text-sm">
            <span className="font-semibold text-ink-50">Résultats : </span>
            {project.results}
          </p>
        ) : null}
      </div>
    </article>
  );
}
