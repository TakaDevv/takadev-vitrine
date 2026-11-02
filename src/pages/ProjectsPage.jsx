import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";
import ProjectShowcase from "../components/projects/ProjectShowcase.jsx";

export default function ProjectsPage() {
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
        <Container>
          <ProjectShowcase headingAs="h2" />
        </Container>
      </div>
    </>
  );
}
