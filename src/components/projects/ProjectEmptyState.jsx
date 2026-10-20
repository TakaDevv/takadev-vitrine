export default function ProjectEmptyState() {
  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-night">Aucune réalisation publiée</h2>
      <p className="mt-3 max-w-2xl leading-relaxed">
        Un projet apparaît ici seulement lorsque TAKADEV a confirmé son nom, sa description, son
        type et, s’ils existent, ses technologies et ses résultats.
      </p>
    </div>
  );
}
