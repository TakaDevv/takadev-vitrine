import { company } from "../data/company.js";
import Container from "../components/common/Container.jsx";
import PageIntro from "../components/common/PageIntro.jsx";
import Seo from "../components/common/Seo.jsx";

export default function LegalNoticePage() {
  const rows = [
    { label: "Éditeur", value: company.legalName },
    { label: "Adresse", value: company.address },
    {
      label: "Téléphone",
      value: (
        <a href={company.phoneHref} className="link-u text-blue-400">
          {company.phoneDisplay}
        </a>
      ),
    },
    {
      label: "E-mail",
      value: (
        <a href={`mailto:${company.email}`} className="link-u break-all text-blue-400">
          {company.email}
        </a>
      ),
    },
    { label: "Rattachement", value: `${company.cerist}.` },
  ];

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
      <div className="py-16 sm:py-20">
        <Container>
          <dl className="max-w-3xl border-t border-line">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
                <dt className="font-mono text-xs leading-7 tracking-[0.12em] text-ink-400 uppercase">{row.label}</dt>
                <dd className="leading-7 text-ink-50">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </>
  );
}
