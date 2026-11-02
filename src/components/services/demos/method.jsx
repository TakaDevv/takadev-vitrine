import { Check, Database, GitCommit, Layout, MessageSquare, Server, Users } from "lucide-react";
import { Label, Line, Pill, Window } from "./kit.jsx";

// Demos for the method steps that have no matching service demo. All content is fictional.
const seq = (index) => ({ "--i": index });

export function AnalysisDemo() {
  const notes = [
    ["Suivre les commandes", "bg-[#fef3c7] border-[#fde68a] text-[#92400e]"],
    ["Accès sur mobile", "bg-[#dbeafe] border-[#bfdbfe] text-[#1d4ed8]"],
    ["Export des rapports", "bg-[#dcfce7] border-[#bbf7d0] text-[#047857]"],
    ["Plusieurs rôles", "bg-[#fce7f3] border-[#fbcfe8] text-[#9d174d]"],
  ];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-[0.8em]">
      <div className="rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.8em]">
        <div className="flex items-center gap-[0.4em]">
          <Users aria-hidden="true" className="size-[1.1em] text-[#2563eb]" />
          <Label>Atelier de cadrage</Label>
        </div>
        <div className="mt-[0.6em] grid grid-cols-2 gap-[0.45em]">
          {notes.map(([note, tone], index) => (
            <span key={note} className={`dm-seq rounded-[0.35em] border p-[0.5em] text-[0.55em] font-semibold shadow-sm ${tone}`} style={{ ...seq(index), rotate: `${index % 2 ? 2 : -2}deg` }}>
              {note}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[0.45em] rounded-[0.7em] bg-[#0b1630] p-[0.7em]">
        <span className="text-[0.6em] font-bold text-white">Besoins retenus</span>
        {["Objectifs définis", "Utilisateurs identifiés", "Priorités validées"].map((item, index) => (
          <p key={item} className="flex items-center gap-[0.4em] text-[0.55em] text-[#e2e8f0]">
            <span className="dm-check grid size-[1.3em] place-items-center rounded-full bg-[#34d399] text-[#0b1630]" style={seq(index + 1)}>
              <Check aria-hidden="true" className="size-[0.8em]" strokeWidth={3} />
            </span>
            {item}
          </p>
        ))}
        <span className="mt-auto flex items-center gap-[0.3em] text-[0.5em] text-[#94a3b8]">
          <MessageSquare aria-hidden="true" className="size-[1.1em]" />
          Compte rendu partagé
        </span>
      </div>
    </div>
  );
}

export function ArchitectureDemo() {
  const boxes = [
    [Layout, "Interface", "left-[4%] top-[30%]"],
    [Server, "API", "left-1/2 top-[30%] -translate-x-1/2"],
    [Database, "Base de données", "right-[4%] top-[30%]"],
  ];
  return (
    <div className="relative h-full w-full">
      <span className="absolute top-[6%] left-1/2 -translate-x-1/2">
        <Pill>Architecture de la solution</Pill>
      </span>
      <svg viewBox="0 0 100 62" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
        <path className="dm-flow" d="M27 30 H40" stroke="#2563eb" strokeWidth="0.7" strokeDasharray="2 2" />
        <path className="dm-flow" d="M60 30 H73" stroke="#2563eb" strokeWidth="0.7" strokeDasharray="2 2" />
      </svg>
      {boxes.map(([Icon, label, position], index) => (
        <span key={label} className={`dm-node absolute flex w-[9em] flex-col items-center gap-[0.35em] rounded-[0.7em] border border-[#c9d6ee] bg-white p-[0.7em] ${position}`} style={seq(index)}>
          <Icon aria-hidden="true" className="size-[1.6em] text-[#2563eb]" />
          <span className="text-[0.6em] font-bold text-[#0b1630]">{label}</span>
        </span>
      ))}
      <div className="absolute inset-x-[10%] bottom-[6%] grid grid-cols-3 gap-[0.5em]">
        {["Écrans", "Données", "Sécurité"].map((spec, index) => (
          <span key={spec} className="dm-seq rounded-[0.4em] bg-[#0b1630] px-[0.5em] py-[0.35em] text-center text-[0.55em] font-semibold text-white" style={seq(index + 2)}>
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CodingDemo() {
  const code = [
    "export function creerCommande(client) {",
    "  const commande = nouvelle(client);",
    "  verifierStock(commande);",
    "  return enregistrer(commande);",
    "}",
  ];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[0.8em]">
      <Window title="commandes.js" dark className="h-full">
        <div className="space-y-[0.3em] p-[0.7em] font-mono">
          {code.map((line, index) => (
            <p key={index} className="type-line-loop text-[0.52em] whitespace-pre text-[#c3ccdb]" style={seq(index)}>
              <span className="mr-[0.8em] text-[#475569]">{index + 1}</span>
              {line}
            </p>
          ))}
        </div>
      </Window>
      <div className="space-y-[0.4em] rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.7em]">
        <Label>Historique</Label>
        {["Ajout des commandes", "Écran de suivi", "Export PDF"].map((commit, index) => (
          <p key={commit} className="dm-seq flex items-center gap-[0.35em] text-[0.55em] text-[#3e4a63]" style={seq(index + 2)}>
            <GitCommit aria-hidden="true" className="size-[1.2em] shrink-0 text-[#2563eb]" />
            {commit}
          </p>
        ))}
        <Line w="60%" className="mt-[0.4em]" />
      </div>
    </div>
  );
}

export function TestingDemo() {
  const tests = ["Création d’une commande", "Accès refusé sans connexion", "Affichage sur mobile", "Temps de chargement"];
  return (
    <Window title="Tests et validation · démo" className="h-full w-full">
      <div className="p-[0.9em]">
        <div className="flex items-center justify-between">
          <Label>Campagne de tests</Label>
          <Pill tone="bg-[#dcfce7] text-[#047857]" className="dm-seq" style={seq(5)}>
            Tout est validé
          </Pill>
        </div>
        <div className="mt-[0.5em] h-[0.35em] rounded-full bg-[#e3e8f0]">
          <span className="dm-fill block h-full w-full origin-left rounded-full bg-[#34d399]" />
        </div>
        <ul className="mt-[0.7em] space-y-[0.4em]">
          {tests.map((test, index) => (
            <li key={test} className="flex items-center gap-[0.45em] rounded-[0.35em] bg-[#f5f7fb] px-[0.5em] py-[0.35em] text-[0.55em] text-[#0b1630]">
              <span className="dm-check grid size-[1.3em] place-items-center rounded-full bg-[#34d399] text-white" style={seq(index)}>
                <Check aria-hidden="true" className="size-[0.8em]" strokeWidth={3} />
              </span>
              {test}
            </li>
          ))}
        </ul>
      </div>
    </Window>
  );
}
