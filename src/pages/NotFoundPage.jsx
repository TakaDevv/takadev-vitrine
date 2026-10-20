import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page introuvable"
        description="La page demandée n’existe pas sur le site de TAKADEV."
        index={false}
      />
      <PageIntro
        eyebrow="404"
        title="Cette page est introuvable."
        description="Le lien est peut-être incomplet, ou la page a été déplacée."
      />
      <div className="py-12">
        <Container>
          <Button to="/">Retour à l’accueil</Button>
        </Container>
      </div>
    </>
  );
}
