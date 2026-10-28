import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ValueGrid from "../common/ValueGrid.jsx";

export default function Advantages() {
  return (
    <section aria-labelledby="valeurs" className="border-b border-line bg-night-800 py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="valeurs"
          index="03"
          eyebrow="Valeurs"
          title="Ce qui guide chaque projet."
          description="Innovation, qualité, professionnalisme, écoute, fiabilité et accompagnement, de la première discussion jusqu’au suivi."
        />
        <div className="mt-12 lg:mt-16">
          <ValueGrid />
        </div>
      </Container>
    </section>
  );
}
