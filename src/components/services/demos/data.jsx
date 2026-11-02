import {
  Calendar,
  Check,
  CreditCard,
  FileText,
  Folder,
  Mail,
  MessageSquare,
  Receipt,
  Search,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { Label, Line, Pill, Window } from "./kit.jsx";

// Demos for the Data & IA, Formation & Conseil and Intégration offerings. All data is fictional.
const seq = (index) => ({ "--i": index });

/* Data & Intelligence Artificielle */

export function DataAnalysisDemo() {
  const points = [
    [12, 70], [22, 58], [30, 62], [38, 48], [46, 50], [55, 40], [63, 36], [72, 28], [80, 30], [88, 18],
  ];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-[0.8em]">
      <div className="overflow-hidden rounded-[0.7em] border border-[#d5dfef] bg-white">
        <div className="grid grid-cols-3 bg-[#f1f4f9] px-[0.5em] py-[0.35em] text-[0.5em] font-bold text-[#5b6579]">
          <span>Mois</span>
          <span>Demandes</span>
          <span>Délai</span>
        </div>
        {["Janv.", "Févr.", "Mars", "Avr.", "Mai"].map((month, index) => (
          <div key={month} className="dm-row grid grid-cols-3 border-t border-[#eef1f6] px-[0.5em] py-[0.32em] text-[0.52em] text-[#0b1630]" style={seq(index % 4)}>
            <span>{month}</span>
            <span className="tabular-nums">{[40, 46, 52, 49, 58][index]}</span>
            <span className="tabular-nums">{["3 j", "3 j", "2 j", "2 j", "1 j"][index]}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col rounded-[0.7em] bg-[#0b1630] p-[0.7em]">
        <span className="text-[0.6em] font-bold text-white">Corrélation</span>
        <svg viewBox="0 0 100 80" className="mt-[0.3em] min-h-0 flex-1" aria-hidden="true">
          <path d="M5 75 H98 M5 75 V3" stroke="#334366" />
          <path className="dm-draw" d="M10 70 L92 16" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 3" pathLength="100" />
          {points.map(([x, y], index) => (
            <circle key={index} className="dm-seq" cx={x} cy={y} r="3" fill="#2563eb" style={seq(index % 6)} />
          ))}
        </svg>
      </div>
    </div>
  );
}

export function BiDemo() {
  return (
    <Window title="Tableau de bord · démo" className="h-full w-full">
      <div className="grid h-full grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-[0.7em] p-[0.9em]">
        <div className="flex flex-col items-center justify-center gap-[0.4em]">
          <svg viewBox="0 0 100 100" className="size-[6.5em]" aria-hidden="true">
            <circle cx="50" cy="50" r="36" fill="none" stroke="#dbeafe" strokeWidth="16" />
            <circle className="dm-draw" cx="50" cy="50" r="36" fill="none" stroke="#2563eb" strokeWidth="16" pathLength="100" transform="rotate(-90 50 50)" />
          </svg>
          <div className="flex gap-[0.4em]">
            <Pill>Web</Pill>
            <Pill tone="bg-[#eef3fd] text-[#5b6579]">Agence</Pill>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[0.3em]">
            {["Mois", "Trimestre", "Année"].map((filter, index) => (
              <Pill key={filter} tone={index === 1 ? "bg-[#0b1630] text-white" : "bg-[#f1f4f9] text-[#5b6579]"}>{filter}</Pill>
            ))}
          </div>
          <div className="mt-[0.5em] flex min-h-0 flex-1 items-end gap-[0.35em]">
            {[45, 60, 52, 78, 66, 90].map((height, index) => (
              <span key={index} className={`dm-bar flex-1 rounded-t-[0.25em] ${index === 5 ? "bg-[#2563eb]" : "bg-[#93c5fd]"}`} style={{ height: `${height}%`, ...seq(index) }} />
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

export function AiIntegrationDemo() {
  const docs = [
    ["Facture_0412.pdf", "Facture"],
    ["Contrat_service.pdf", "Contrat"],
    ["Demande_conge.pdf", "Ressources humaines"],
  ];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_2.6em_minmax(0,1fr)] items-center gap-[0.4em]">
      <div className="space-y-[0.35em]">
        {docs.map(([name]) => (
          <div key={name} className="flex items-center gap-[0.4em] rounded-[0.4em] border border-[#d5dfef] bg-white px-[0.5em] py-[0.4em]">
            <FileText aria-hidden="true" className="size-[1em] shrink-0 text-[#5b6579]" />
            <span className="truncate text-[0.52em] text-[#0b1630]">{name}</span>
          </div>
        ))}
      </div>
      <span className="dm-pulse grid size-[2.6em] place-items-center rounded-full bg-[#2563eb] text-white">
        <Sparkles aria-hidden="true" className="size-[1.3em]" />
      </span>
      <div className="space-y-[0.35em] rounded-[0.7em] bg-[#0b1630] p-[0.6em]">
        <span className="text-[0.55em] font-bold text-white">Classement automatique</span>
        {docs.map(([name, label], index) => (
          <p key={name} className="dm-seq flex items-center gap-[0.35em]" style={seq(index)}>
            <Check aria-hidden="true" className="size-[1em] text-[#34d399]" strokeWidth={3} />
            <Pill tone="bg-[#1c2f5e] text-[#bfdbfe]">{label}</Pill>
          </p>
        ))}
      </div>
    </div>
  );
}

/* Formation & Conseil */

export function ConsultingDemo() {
  const phases = ["Diagnostic", "Feuille de route", "Mise en œuvre", "Suivi"];
  return (
    <div className="flex h-full w-full flex-col justify-center gap-[0.9em]">
      <div className="relative grid grid-cols-4">
        <span className="absolute top-[0.85em] right-[12.5%] left-[12.5%] h-[0.15em] bg-[#c9d6ee]" />
        <span className="dm-token absolute top-[0.6em] left-[12%] size-[0.65em] rounded-full bg-[#2563eb] shadow-[0_0_0_0.3em_rgb(37_99_235/0.2)]" />
        {phases.map((phase, index) => (
          <div key={phase} className="relative flex flex-col items-center gap-[0.4em]">
            <span className="dm-node grid size-[1.8em] place-items-center rounded-full border border-[#c9d6ee] bg-white text-[0.75em] font-bold text-[#2563eb]" style={seq(index)}>
              {index + 1}
            </span>
            <span className="text-[0.55em] font-semibold text-[#0b1630]">{phase}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[0.5em]">
        {["Processus actuels", "Outils à prévoir", "Priorités"].map((note, index) => (
          <div key={note} className="dm-seq rounded-[0.5em] border border-[#fde68a] bg-[#fffbeb] p-[0.5em]" style={seq(index)}>
            <span className="text-[0.55em] font-semibold text-[#92400e]">{note}</span>
            <Line w="80%" tone="#fcd34d" className="mt-[0.35em]" />
            <Line w="60%" tone="#fde68a" className="mt-[0.25em]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechSupportCoachDemo() {
  const code = ["function calculer(total) {", "  return total * 1.19;", "}"];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-[0.8em]">
      <Window title="Séance de travail · revue de code" dark className="h-full">
        <div className="space-y-[0.3em] p-[0.7em] font-mono">
          {code.map((line, index) => (
            <p key={index} className="text-[0.55em] whitespace-pre text-[#c3ccdb]">
              <span className="mr-[0.6em] text-[#475569]">{index + 1}</span>
              {line}
            </p>
          ))}
          <div className="dm-seq mt-[0.5em] flex items-start gap-[0.4em] rounded-[0.4em] bg-[#1c2f5e] p-[0.45em]" style={seq(1)}>
            <MessageSquare aria-hidden="true" className="size-[1em] shrink-0 text-[#60a5fa]" />
            <span className="font-sans text-[0.52em] text-[#e2e8f0]">Suggestion : sortir le taux dans une constante.</span>
          </div>
        </div>
      </Window>
      <div className="grid grid-rows-2 gap-[0.5em]">
        {["Formateur", "Votre équipe"].map((who, index) => (
          <div key={who} className="relative flex flex-col items-center justify-center rounded-[0.6em] bg-[#0b1630]">
            <span className={`grid size-[2.2em] place-items-center rounded-full ${index ? "bg-[#60a5fa]" : "bg-[#2563eb]"} text-white`}>
              {index ? <Users aria-hidden="true" className="size-[1.1em]" /> : <Video aria-hidden="true" className="size-[1.1em]" />}
            </span>
            <span className="mt-[0.3em] text-[0.52em] text-white">{who}</span>
            {index === 0 ? <span className="dm-blink absolute top-[0.5em] right-[0.5em] size-[0.5em] rounded-full bg-[#ef4444]" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DevTrainingDemo() {
  const code = ["def bonjour(nom):", '    return f"Bonjour {nom}"', "", 'print(bonjour("TAKADEV"))'];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-[0.8em]">
      <Window title="Exercice 3 · fonctions" dark className="h-full">
        <div className="space-y-[0.25em] p-[0.7em] font-mono">
          {code.map((line, index) => (
            <p key={index} className="type-line-loop text-[0.55em] whitespace-pre text-[#c3ccdb]" style={seq(index)}>
              {line || " "}
            </p>
          ))}
          <p className="dm-seq mt-[0.5em] text-[0.55em] text-[#86efac]" style={seq(4)}>
            &gt; Bonjour TAKADEV
          </p>
        </div>
      </Window>
      <div className="rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.7em]">
        <Label>Tests</Label>
        <ul className="mt-[0.4em] space-y-[0.4em]">
          {["Renvoie un texte", "Contient le nom", "Sans erreur"].map((test, index) => (
            <li key={test} className="flex items-center gap-[0.4em] text-[0.55em] text-[#3e4a63]">
              <span className="dm-check grid size-[1.3em] place-items-center rounded-full bg-[#34d399] text-white" style={seq(index + 2)}>
                <Check aria-hidden="true" className="size-[0.8em]" strokeWidth={3} />
              </span>
              {test}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* Intégration & Digitalisation */

export function ProcessDigitalDemo() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_2em_minmax(0,1fr)] items-center gap-[0.5em]">
      <div className="h-[85%] rotate-[-3deg] rounded-[0.3em] bg-[#fffdf7] p-[0.7em] shadow-[0_0.8em_1.6em_-1em_rgb(11_22_48/0.5)]">
        <p className="text-[0.6em] font-bold text-[#5b6579]">Formulaire papier</p>
        {[80, 65, 90, 55, 70].map((width, index) => (
          <svg key={index} viewBox="0 0 100 8" className="mt-[0.5em] h-[0.6em] w-full" aria-hidden="true">
            <path d={`M2 5 Q 10 1, 18 5 T 34 5 T 50 5 T ${width} 5`} fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          </svg>
        ))}
      </div>
      <span className="text-center text-[1.4em] font-bold text-[#2563eb]">→</span>
      <Window title="Formulaire en ligne" className="h-[85%]">
        <div className="space-y-[0.35em] p-[0.6em]">
          {["Nom", "Service", "Motif"].map((field, index) => (
            <span key={field} className="dm-seq block rounded-[0.3em] border border-[#e3e8f0] px-[0.4em] py-[0.25em] text-[0.52em] text-[#5b6579]" style={seq(index)}>
              {field}
            </span>
          ))}
          <span className="dm-seq block rounded-[0.3em] bg-[#2563eb] py-[0.3em] text-center text-[0.52em] font-bold text-white" style={seq(3)}>
            Envoyer pour validation
          </span>
        </div>
      </Window>
    </div>
  );
}

export function ThirdPartyDemo() {
  const tools = [
    [Mail, "Messagerie", "top-[6%] left-[6%]"],
    [Receipt, "Comptabilité", "top-[6%] right-[6%]"],
    [CreditCard, "Paiement", "bottom-[6%] left-[6%]"],
    [Calendar, "Agenda", "bottom-[6%] right-[6%]"],
  ];
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 100 62" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
        {[
          "M50 31 L16 10",
          "M50 31 L84 10",
          "M50 31 L16 52",
          "M50 31 L84 52",
        ].map((path, index) => (
          <path key={path} className="dm-flow" d={path} stroke="#2563eb" strokeWidth="0.6" strokeDasharray="2 2" style={seq(index)} />
        ))}
      </svg>
      <span className="dm-pulse absolute top-1/2 left-1/2 grid size-[4.6em] -translate-1/2 place-items-center rounded-[1em] bg-[#0b1630] text-center">
        <span className="text-[0.7em] leading-tight font-extrabold text-white">
          Votre
          <br />
          outil
        </span>
      </span>
      {tools.map(([Icon, label, position], index) => (
        <span key={label} className={`dm-node absolute flex items-center gap-[0.4em] rounded-[0.6em] border border-[#c9d6ee] bg-white px-[0.6em] py-[0.45em] ${position}`} style={seq(index)}>
          <Icon aria-hidden="true" className="size-[1.1em] text-[#2563eb]" />
          <span className="text-[0.6em] font-semibold text-[#0b1630]">{label}</span>
        </span>
      ))}
    </div>
  );
}

export function DocumentManagementDemo() {
  return (
    <Window title="Documents · démo" className="h-full w-full">
      <div className="grid h-full grid-cols-[6em_minmax(0,1fr)]">
        <div className="space-y-[0.4em] border-r border-[#eef1f6] p-[0.6em]">
          {["Contrats", "Factures", "RH", "Archives"].map((folder, index) => (
            <span key={folder} className={`flex items-center gap-[0.3em] rounded-[0.3em] px-[0.3em] py-[0.2em] text-[0.55em] ${index === 0 ? "bg-[#dbeafe] text-[#1d4ed8]" : "text-[#3e4a63]"}`}>
              <Folder aria-hidden="true" className="size-[1.1em]" />
              {folder}
            </span>
          ))}
        </div>
        <div className="p-[0.6em]">
          <div className="flex items-center gap-[0.4em] rounded-[0.4em] border border-[#c9d6ee] px-[0.5em] py-[0.3em]">
            <Search aria-hidden="true" className="size-[1em] text-[#5b6579]" />
            <span className="type-line-loop text-[0.55em] text-[#0b1630]">contrat maintenance</span>
          </div>
          <ul className="mt-[0.5em] space-y-[0.3em]">
            {[
              ["Contrat_maintenance_v3.pdf", "v3"],
              ["Contrat_maintenance_v2.pdf", "v2"],
            ].map(([name, version], index) => (
              <li key={name} className="dm-seq flex items-center gap-[0.4em] rounded-[0.35em] bg-[#f5f7fb] px-[0.45em] py-[0.35em]" style={seq(index + 2)}>
                <FileText aria-hidden="true" className="size-[1em] shrink-0 text-[#2563eb]" />
                <span className="truncate text-[0.52em] text-[#0b1630]">{name}</span>
                <Pill tone="bg-white text-[#5b6579]" className="ml-auto">{version}</Pill>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Window>
  );
}
