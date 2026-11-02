import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";
import { company } from "../data/company.js";

// Draft to be validated by TAKADEV before publication.
const sections = [
  {
    title: "Données collectées",
    text: "Le formulaire de contact demande votre nom, votre adresse e-mail, le service concerné, l’objet et le message. Le téléphone et le nom de l’entreprise sont facultatifs.",
  },
  {
    title: "Finalité",
    text: "Ces informations servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni utilisées à des fins publicitaires.",
  },
  {
    title: "Transmission",
    text: `Le message est relayé par e-mail vers ${company.email} grâce au service FormSubmit (formsubmit.co), qui transmet le contenu du formulaire sans le publier.`,
  },
  {
    title: "Conservation",
    text: "Les messages sont conservés dans la messagerie de TAKADEV le temps nécessaire au traitement de la demande et au suivi de la relation.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Politique de confidentialité"
        description="Données collectées par le formulaire de contact de TAKADEV, leur usage et vos droits."
      />
      <PageIntro
        eyebrow="Informations légales"
        title="Politique de confidentialité"
        description="Ce que devient l’information que vous envoyez par le formulaire de contact."
      />
      <div className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <dl className="divide-y divide-line border-y border-line">
            {sections.map((section) => (
              <div key={section.title} className="grid gap-2 py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8">
                <dt className="font-display text-lg font-semibold text-ink-50">{section.title}</dt>
                <dd className="leading-relaxed">{section.text}</dd>
              </div>
            ))}
            <div className="grid gap-2 py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8">
              <dt className="font-display text-lg font-semibold text-ink-50">Vos droits</dt>
              <dd className="leading-relaxed">
                Pour consulter, corriger ou supprimer vos données, écrivez à{" "}
                <a href={`mailto:${company.email}`} className="link-u font-semibold text-blue-400">
                  {company.email}
                </a>
                .
              </dd>
            </div>
          </dl>
        </Container>
      </div>
    </>
  );
}
