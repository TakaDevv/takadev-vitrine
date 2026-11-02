import { getVisibleProjects } from "../../data/projects.js";
import Reveal from "../common/Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectEmptyState from "./ProjectEmptyState.jsx";

// Large previews: the first project is featured, the others stack beside it.
// Only published projects reach production; the demonstration entry exists in development only.
export default function ProjectShowcase({ headingAs = "h3" }) {
  const visible = getVisibleProjects();
  const published = visible.filter((project) => project.published);
  const [featured, ...others] = visible;

  return (
    <div className="grid gap-10">
      {published.length === 0 ? (
        <Reveal>
          <ProjectEmptyState headingAs={headingAs} />
        </Reveal>
      ) : null}
      {featured ? (
        <div className={`grid gap-6 ${others.length ? "lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]" : "max-w-3xl"}`}>
          <Reveal>
            <ProjectCard project={featured} featured headingAs={headingAs} />
          </Reveal>
          {others.length ? (
            <ul className="grid gap-6">
              {others.map((project, index) => (
                <Reveal as="li" key={project.id} delay={(index + 1) * 90}>
                  <ProjectCard project={project} headingAs={headingAs} />
                </Reveal>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
