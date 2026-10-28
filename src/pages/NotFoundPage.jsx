import Button from "../components/common/Button.jsx";
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
        eyebrow="Erreur 404"
        title="Cette page est introuvable."
        description="Le lien est peut-être incomplet, ou la page a été déplacée."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/" arrow>
            Retour à l’accueil
          </Button>
          <Button to="/services" variant="ghost">
            Explorer nos services
          </Button>
        </div>
      </PageIntro>
    </>
  );
}
