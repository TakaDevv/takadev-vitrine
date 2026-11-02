import Button from "../common/Button.jsx";

// Honest empty state with a preview of how a published project will be laid out.
export default function ProjectEmptyState({ headingAs: Heading = "h2" }) {
  return (
    <div className="grid overflow-hidden rounded-[20px] border border-line bg-night-800 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="p-7 sm:p-12">
        <p className="font-mono text-xs tracking-[0.14em] text-blue-400 uppercase">Portfolio</p>
        <Heading className="mt-4 max-w-xl font-display text-[clamp(1.6rem,1.3rem+1.2vw,2.25rem)] leading-tight font-bold tracking-tight text-ink-50">
          Aucune réalisation publiée pour le moment
        </Heading>
        <p className="mt-4 max-w-xl text-lg leading-relaxed">
          Un projet apparaît ici seulement lorsque TAKADEV a confirmé son nom, sa description, son type et, s’ils
          existent, ses technologies et ses résultats.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" arrow>
            Parlons de votre projet
          </Button>
          <Button to="/services" variant="ghost">
            Explorer nos services
          </Button>
        </div>
      </div>

      <div aria-hidden="true" className="theme-dark relative min-h-72 overflow-hidden bg-night-900">
        <div className="bg-grid absolute inset-0" />
        <div className="light-field light-field--low" />
        <span className="absolute top-5 left-6 font-mono text-[0.65rem] tracking-[0.14em] text-ink-400 uppercase">
          Aperçu de mise en page
        </span>
        <div className="absolute inset-x-8 top-14 bottom-0 grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-3">
          <div className="hero-float rounded-t-xl border border-line-strong bg-night-800 p-4">
            <span className="block h-2 w-16 rounded-full bg-blue-400/70" />
            <span className="mt-4 block h-24 rounded-lg bg-night-600" />
            <span className="mt-3 block h-2 w-3/4 rounded-full bg-line-strong" />
            <span className="mt-2 block h-2 w-1/2 rounded-full bg-line-strong" />
          </div>
          <div className="grid gap-3 self-start">
            <span className="hero-float block h-20 rounded-xl border border-line-strong bg-night-800" style={{ "--float-delay": "-3s" }} />
            <span className="hero-float block h-20 rounded-xl border border-line-strong bg-night-800" style={{ "--float-delay": "-5s" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
