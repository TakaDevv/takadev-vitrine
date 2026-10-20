import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
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
      <div className="py-12 sm:py-16">
        <Container className="grid gap-6">
          {publishedProjects.length === 0 ? <ProjectEmptyState /> : null}
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Container>
      </div>
    </>
  );
}
