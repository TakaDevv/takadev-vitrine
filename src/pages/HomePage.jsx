import CtaBand from "../components/common/CtaBand.jsx";
import Seo from "../components/common/Seo.jsx";
import Advantages from "../components/home/Advantages.jsx";
import Hero from "../components/home/Hero.jsx";
import ProcessPreview from "../components/home/ProcessPreview.jsx";
import ServicePreview from "../components/home/ServicePreview.jsx";
import { company } from "../data/company.js";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legalName,
  description: company.summary,
  email: company.email,
  telephone: company.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "05 rue des Frères Aissou",
    addressLocality: "Ben Aknoun",
    addressRegion: "Alger",
    addressCountry: "DZ",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Centre de Recherche sur l’Information Scientifique et Technique",
    alternateName: "CERIST",
  },
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="Solutions informatiques, développement et formation"
        description="TAKADEV, filiale du CERIST, conçoit des applications web, des applications mobiles, des systèmes de gestion et des formations."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replaceAll("<", "\\u003c") }}
      />
      <Hero />
      <ServicePreview />
      <Advantages />
      <ProcessPreview />
      <CtaBand />
    </>
  );
}
