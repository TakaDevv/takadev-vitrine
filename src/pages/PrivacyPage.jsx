import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Politique de confidentialité"
        description="Politique de confidentialité de TAKADEV. Le texte doit être complété avant toute collecte de données."
      />
      <PageIntro
        eyebrow="Informations légales"
        title="Politique de confidentialité"
        description="Le formulaire de contact n’est pas encore en service. Cette page décrira, après validation, les données demandées, leur finalité et les droits des personnes."
      />
    </>
  );
}
