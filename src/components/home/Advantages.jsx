import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ValueGrid from "../common/ValueGrid.jsx";

export default function Advantages() {
  return (
    <section aria-labelledby="valeurs">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          id="valeurs"
          eyebrow="Valeurs"
          title="Ce qui guide chaque projet."
          description="Innovation, qualité, professionnalisme, écoute, fiabilité et accompagnement, de la première discussion jusqu’au suivi."
        />
        <div className="mt-10">
          <ValueGrid />
        </div>
      </Container>
    </section>
  );
}
