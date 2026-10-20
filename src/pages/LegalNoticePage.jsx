import { company } from "../data/company.js";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";

export default function LegalNoticePage() {
  return (
    <>
      <Seo
        title="Mentions légales"
        description="Mentions légales de TAKADEV. Le texte juridique reste à compléter et à faire valider."
      />
      <PageIntro
        eyebrow="Informations légales"
        title="Mentions légales"
        description="Cette page identifie l’éditeur du site. Le texte juridique complet doit encore être rédigé et validé par TAKADEV."
      />
      <div className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl space-y-3 rounded-2xl bg-white p-6 leading-relaxed sm:p-8">
            <p>
              <span className="font-semibold text-night">Éditeur :</span> {company.legalName}
            </p>
            <p>
              <span className="font-semibold text-night">Adresse :</span> {company.address}
            </p>
            <p>
              <span className="font-semibold text-night">Téléphone :</span>{" "}
              <a href={company.phoneHref} className="text-brand underline underline-offset-2 hover:text-brand-dark">
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-night">E-mail :</span>{" "}
              <a href={`mailto:${company.email}`} className="break-all text-brand underline underline-offset-2 hover:text-brand-dark">
                {company.email}
              </a>
            </p>
            <p>{company.cerist}.</p>
          </div>
        </Container>
      </div>
    </>
  );
}
