import Button from "../common/Button.jsx";

export default function ProjectEmptyState() {
  return (
    <div className="relative isolate overflow-hidden rounded-[18px] border border-line bg-night-800 p-7 sm:p-12 lg:p-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="light-field light-field--low" />
      </div>
      <p className="font-mono text-xs tracking-[0.14em] text-cyan-400 uppercase">Portfolio</p>
      <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-tight font-semibold tracking-tight text-ink-50">
        Aucune réalisation publiée
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed">
        Un projet apparaît ici seulement lorsque TAKADEV a confirmé son nom, sa description, son type et,
        s’ils existent, ses technologies et ses résultats.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button to="/contact" arrow>
          Discutons de votre projet
        </Button>
        <Button to="/services" variant="ghost">
          Explorer nos services
        </Button>
      </div>
    </div>
  );
}
