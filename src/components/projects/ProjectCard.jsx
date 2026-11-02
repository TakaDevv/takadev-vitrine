import { ArrowUpRight } from "lucide-react";

// Abstract layout used when a project has no screenshot yet; it never imitates a real product.
function PreviewPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Visuel d’exemple, sans capture d’un projet réel"
      data-parallax
      className="project-shot theme-dark absolute inset-0 bg-night-900"
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-x-[7%] top-[12%] bottom-0 rounded-t-xl bg-[#f5f7fb] p-[4%]">
        <div className="flex gap-2">
          <span className="h-2.5 w-20 rounded-full bg-[#0b1630]" />
          <span className="ml-auto h-2.5 w-10 rounded-full bg-[#d5dce8]" />
          <span className="h-2.5 w-10 rounded-full bg-[#d5dce8]" />
        </div>
        <div className="mt-[5%] grid grid-cols-3 gap-2.5">
          <span className="h-14 rounded-lg border border-[#e3e8f0] bg-white" />
          <span className="h-14 rounded-lg border border-[#e3e8f0] bg-white" />
          <span className="h-14 rounded-lg bg-[#dce7fc]" />
        </div>
        <span className="mt-2.5 block h-24 rounded-lg border border-[#e3e8f0] bg-white" />
      </div>
      <span className="absolute top-3.5 left-5 font-mono text-[0.65rem] tracking-[0.14em] text-ink-400 uppercase">
        Visuel d’exemple
      </span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false, headingAs: Heading = "h2" }) {
  return (
    <article className="project-card group relative overflow-clip rounded-[20px] border border-line bg-night-800">
      <div className={`relative overflow-clip ${featured ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? ""}
            loading="lazy"
            decoding="async"
            data-parallax
            className="project-shot size-full object-cover"
          />
        ) : (
          <PreviewPlaceholder />
        )}
        <div aria-hidden="true" className="project-overlay absolute inset-0 bg-linear-to-t from-[#0b1630]/55 to-transparent" />
        {project.demonstration ? (
          <p className="absolute right-4 bottom-4 left-4 rounded-lg bg-white/95 px-3.5 py-2.5 text-sm leading-snug text-[#0b1630]">
            Projet fictif, visible uniquement pendant le développement. Ce n’est pas une réalisation de TAKADEV.
          </p>
        ) : null}
      </div>
      <div className="flex items-end justify-between gap-6 p-6 sm:p-7">
        <div>
          <p className="font-mono text-xs tracking-[0.12em] text-blue-400 uppercase">{project.type}</p>
          <Heading
            className={`mt-3 font-display font-bold tracking-tight text-ink-50 ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
          >
            {project.url ? (
              <a href={project.url} className="stretched">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </Heading>
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
        {project.url ? (
          <span
            aria-hidden="true"
            className="project-link grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-ink-50"
          >
            <ArrowUpRight size={18} />
          </span>
        ) : null}
      </div>
    </article>
  );
}
