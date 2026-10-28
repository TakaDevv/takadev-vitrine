import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Reveal from "../components/common/Reveal.jsx";
import Seo from "../components/common/Seo.jsx";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import ProjectEmptyState from "../components/projects/ProjectEmptyState.jsx";
import { getVisibleProjects } from "../data/projects.js";

export default function ProjectsPage() {
  const visibleProjects = getVisibleProjects();
  const publishedProjects = visibleProjects.filter((project) => project.published);

  return (
    <>
      <Seo
        title="Réalisations"
        description="Les projets documentés de TAKADEV seront présentés ici. Aucune réalisation n’est publiée sans information confirmée."
      />
      <PageIntro
        eyebrow="Réalisations"
        title="Les projets confirmés seront publiés ici."
        description="Une réalisation est ajoutée lorsque son nom, sa description et son type sont documentés. Les technologies et les résultats n’apparaissent que s’ils sont confirmés."
      />
      <div className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-16">
          {publishedProjects.length === 0 ? (
            <Reveal>
              <ProjectEmptyState />
            </Reveal>
          ) : null}
          {visibleProjects.length > 0 ? (
            <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
              {visibleProjects.map((project, index) => (
                <Reveal as="li" key={project.id} delay={(index % 2) * 100} className={index % 2 ? "md:mt-24" : ""}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </ul>
          ) : null}
        </Container>
      </div>
    </>
  );
}
