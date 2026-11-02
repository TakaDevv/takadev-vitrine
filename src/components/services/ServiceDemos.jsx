import { Check, FileText, Lock, MousePointer2, Play, ShieldCheck, Sparkles } from "lucide-react";
import { Window } from "./demos/kit.jsx";

// Small animated mini-projects, one per service. Sizes are in `em`: the stage sets
// font-size from the card width (container units), so every demo scales with its card.
// All content is fictional demo data, labelled "Démo" on the card.

const seq = (index) => ({ "--i": index });

export function WebDemo() {
  return (
    <Window title="votre-site · aperçu" className="h-full w-full">
      <div className="absolute inset-0 overflow-hidden">
        <div className="dm-scroll">
          <div className="flex items-center gap-[0.8em] px-[1.2em] py-[0.8em]">
            <span className="h-[0.8em] w-[4.5em] rounded-full bg-[#0b1630]" />
            <span className="ml-auto h-[0.5em] w-[2.4em] rounded-full bg-[#c9d6ee]" />
            <span className="h-[0.5em] w-[2.4em] rounded-full bg-[#c9d6ee]" />
            <span className="dm-pulse rounded-full bg-[#2563eb] px-[0.8em] py-[0.3em] text-[0.6em] font-bold text-white">Contact</span>
          </div>
          <div className="mx-[1.2em] rounded-[0.6em] bg-[#0b1630] p-[1.2em]">
            <span className="block h-[0.9em] w-[60%] rounded-full bg-white" />
            <span className="mt-[0.5em] block h-[0.9em] w-[42%] rounded-full bg-[#60a5fa]" />
            <span className="mt-[0.9em] block h-[0.45em] w-[70%] rounded-full bg-white/30" />
            <span className="mt-[1em] inline-block rounded-[0.4em] bg-[#2563eb] px-[0.9em] py-[0.35em] text-[0.6em] font-bold text-white">Découvrir</span>
          </div>
          <div className="grid grid-cols-3 gap-[0.7em] p-[1.2em]">
            {["#dbeafe", "#e0e7ff", "#bfdbfe"].map((color) => (
              <div key={color} className="rounded-[0.5em] border border-[#e3e8f0] p-[0.5em]">
                <span className="block h-[3em] rounded-[0.35em]" style={{ background: color }} />
                <span className="mt-[0.5em] block h-[0.45em] w-[80%] rounded-full bg-[#0b1630]" />
                <span className="mt-[0.35em] block h-[0.4em] w-[55%] rounded-full bg-[#c9d6ee]" />
              </div>
            ))}
          </div>
          <div className="mx-[1.2em] grid grid-cols-[1fr_1.4fr] gap-[0.8em] rounded-[0.6em] bg-[#f1f4f9] p-[1em]">
            <span className="h-[4em] rounded-[0.4em] bg-[#93c5fd]" />
            <div className="space-y-[0.4em] pt-[0.3em]">
              <span className="block h-[0.55em] w-[80%] rounded-full bg-[#0b1630]" />
              <span className="block h-[0.4em] w-full rounded-full bg-[#c9d6ee]" />
              <span className="block h-[0.4em] w-[70%] rounded-full bg-[#c9d6ee]" />
            </div>
          </div>
          <div className="mt-[1.2em] h-[3em] bg-[#0b1630]" />
        </div>
      </div>
      <MousePointer2 aria-hidden="true" className="dm-cursor-web absolute size-[1.3em] fill-[#0b1630] text-white" />
    </Window>
  );
}

export function MobileDemo() {
  const items = ["Commande #104", "Commande #103", "Commande #102"];
  return (
    <div className="flex h-full w-full items-center justify-center gap-[1.6em]">
      <div className="flex flex-col gap-[0.6em]">
        {["Android", "iOS", "Multiplateforme"].map((store, index) => (
          <span key={store} className="dm-seq rounded-full border border-[#c9d6ee] bg-white px-[0.8em] py-[0.35em] text-[0.7em] font-semibold text-[#0b1630]" style={seq(index)}>
            {store}
          </span>
        ))}
      </div>
      <div className="relative h-full w-[11.5em] rounded-[1.6em] border-[0.4em] border-[#0b1630] bg-[#f5f7fb] shadow-[0_1.4em_2.8em_-1.4em_rgb(11_22_48/0.6)]">
        <span className="absolute top-[0.4em] left-1/2 h-[0.4em] w-[3em] -translate-x-1/2 rounded-full bg-[#0b1630]" />
        <div className="dm-toast absolute inset-x-[0.6em] top-[1.3em] z-10 flex items-center gap-[0.5em] rounded-[0.6em] bg-[#0b1630] px-[0.6em] py-[0.45em] text-[0.62em] font-semibold text-white">
          <span className="grid size-[1.4em] place-items-center rounded-full bg-[#34d399]">
            <Check aria-hidden="true" className="size-[0.9em]" strokeWidth={3} />
          </span>
          Commande expédiée
        </div>
        <div className="px-[0.8em] pt-[1.6em]">
          <p className="text-[0.75em] font-bold text-[#0b1630]">Mes commandes</p>
          <div className="mt-[0.5em] rounded-[0.6em] bg-linear-to-br from-[#2563eb] to-[#60a5fa] p-[0.6em]">
            <span className="block h-[0.45em] w-[50%] rounded-full bg-white/70" />
            <span className="mt-[0.4em] block h-[0.8em] w-[70%] rounded-full bg-white" />
          </div>
          <ul className="mt-[0.6em] space-y-[0.4em]">
            {items.map((item, index) => (
              <li key={item} className="dm-seq flex items-center gap-[0.5em] rounded-[0.5em] border border-[#e3e8f0] bg-white p-[0.45em]" style={seq(index + 1)}>
                <span className="size-[1.4em] rounded-[0.35em] bg-[#dbeafe]" />
                <span className="text-[0.6em] font-semibold text-[#0b1630]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-[2.4em] items-center justify-around rounded-b-[1.2em] border-t border-[#e3e8f0] bg-white">
          <span className="dm-tab absolute top-0 left-[12.5%] h-[0.2em] w-[12.5%] -translate-x-1/2 rounded-full bg-[#2563eb]" />
          {[0, 1, 2, 3].map((index) => (
            <span key={index} className="size-[0.7em] rounded-[0.2em] bg-[#c9d6ee]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SoftwareDemo() {
  const rows = [
    ["Article A", "120", "En stock", "bg-[#dcfce7] text-[#047857]"],
    ["Article B", "18", "Faible", "bg-[#fef3c7] text-[#92400e]"],
    ["Article C", "64", "En stock", "bg-[#dcfce7] text-[#047857]"],
    ["Article D", "0", "Rupture", "bg-[#fee2e2] text-[#b91c1c]"],
  ];
  return (
    <Window title="Gestion de stock · démo" className="h-full w-full">
      <div className="grid h-full grid-cols-[6.5em_minmax(0,1fr)]">
        <div className="space-y-[0.5em] bg-[#0b1630] p-[0.8em]">
          {["Tableau", "Stock", "Commandes", "Rapports"].map((label, index) => (
            <span key={label} className={`block rounded-[0.35em] px-[0.5em] py-[0.3em] text-[0.62em] ${index === 1 ? "bg-[#2563eb] text-white" : "text-[#94a3b8]"}`}>
              {label}
            </span>
          ))}
        </div>
        <div className="p-[0.9em]">
          <div className="flex items-center justify-between">
            <span className="text-[0.8em] font-bold text-[#0b1630]">Stock</span>
            <span className="rounded-[0.35em] bg-[#2563eb] px-[0.6em] py-[0.25em] text-[0.58em] font-bold text-white">+ Ajouter</span>
          </div>
          <div className="mt-[0.7em] overflow-hidden rounded-[0.5em] border border-[#e3e8f0]">
            {rows.map(([name, qty, status, tone], index) => (
              <div key={name} className="dm-row grid grid-cols-[1.4fr_0.6fr_1fr] items-center border-b border-[#eef1f6] px-[0.6em] py-[0.42em] text-[0.62em] last:border-b-0" style={seq(index)}>
                <span className="font-semibold text-[#0b1630]">{name}</span>
                <span className="text-[#5b6579] tabular-nums">{qty}</span>
                <span className={`justify-self-start rounded-full px-[0.6em] py-[0.1em] text-[0.9em] font-semibold ${tone}`}>{status}</span>
              </div>
            ))}
          </div>
          <div className="mt-[0.7em] flex h-[2.6em] items-end gap-[0.3em]">
            {[40, 70, 55, 85, 60, 95, 75].map((height, index) => (
              <span key={index} className="dm-bar flex-1 rounded-t-[0.2em] bg-[#93c5fd]" style={{ height: `${height}%`, ...seq(index) }} />
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

export function DesignDemo() {
  return (
    <Window title="Maquette · application" className="h-full w-full">
      <div className="grid h-full grid-cols-[5.5em_minmax(0,1fr)_5em]">
        <div className="space-y-[0.45em] border-r border-[#eef1f6] p-[0.7em]">
          <p className="text-[0.55em] font-bold tracking-wider text-[#5b6579] uppercase">Calques</p>
          {["Écran", "En-tête", "Carte", "Bouton"].map((layer, index) => (
            <span key={layer} className={`block rounded-[0.3em] px-[0.4em] py-[0.2em] text-[0.6em] ${index === 3 ? "bg-[#dbeafe] text-[#1d4ed8]" : "text-[#3e4a63]"}`}>
              {layer}
            </span>
          ))}
        </div>
        <div className="relative grid place-items-center bg-[#f1f4f9] bg-[radial-gradient(#d5dfef_0.08em,transparent_0.09em)] [background-size:0.9em_0.9em]">
          <div className="relative h-[85%] w-[8em] overflow-hidden rounded-[0.8em] border border-[#c9d6ee] bg-white">
            {/* Wireframe */}
            <div className="absolute inset-0 space-y-[0.45em] p-[0.6em]">
              <span className="block h-[0.5em] w-[50%] rounded-full border border-dashed border-[#94a3b8]" />
              <span className="block h-[3.2em] rounded-[0.4em] border border-dashed border-[#94a3b8]" />
              <span className="block h-[0.4em] w-[80%] rounded-full border border-dashed border-[#94a3b8]" />
              <span className="block h-[0.4em] w-[60%] rounded-full border border-dashed border-[#94a3b8]" />
              <span className="block h-[1.2em] rounded-full border border-dashed border-[#94a3b8]" />
            </div>
            {/* Final design fades in over the wireframe */}
            <div className="dm-final absolute inset-0 space-y-[0.45em] bg-white p-[0.6em]">
              <span className="block h-[0.5em] w-[50%] rounded-full bg-[#0b1630]" />
              <span className="block h-[3.2em] rounded-[0.4em] bg-linear-to-br from-[#2563eb] to-[#60a5fa]" />
              <span className="block h-[0.4em] w-[80%] rounded-full bg-[#0b1630]" />
              <span className="block h-[0.4em] w-[60%] rounded-full bg-[#c9d6ee]" />
              <span className="block h-[1.2em] rounded-full bg-[#2563eb]" />
            </div>
          </div>
          <div className="dm-cursor-ux absolute flex items-start">
            <MousePointer2 aria-hidden="true" className="size-[1.2em] fill-[#2563eb] text-white" />
            <span className="mt-[0.9em] rounded-[0.3em] bg-[#2563eb] px-[0.4em] py-[0.1em] text-[0.55em] font-semibold text-white">Designer</span>
          </div>
        </div>
        <div className="space-y-[0.5em] border-l border-[#eef1f6] p-[0.7em]">
          <p className="text-[0.55em] font-bold tracking-wider text-[#5b6579] uppercase">Couleurs</p>
          <div className="grid grid-cols-2 gap-[0.35em]">
            {["#0b1630", "#2563eb", "#60a5fa", "#dbeafe"].map((color) => (
              <span key={color} className="aspect-square rounded-[0.3em] border border-[#e3e8f0]" style={{ background: color }} />
            ))}
          </div>
          <p className="pt-[0.3em] text-[0.55em] font-bold tracking-wider text-[#5b6579] uppercase">Texte</p>
          <span className="block text-[0.9em] font-bold text-[#0b1630]">Aa</span>
        </div>
      </div>
    </Window>
  );
}

export function CloudDemo() {
  const steps = ["Build", "Tests", "Déploiement", "En ligne"];
  const logs = ["$ git push origin main", "✓ build terminé", "✓ tests réussis", "→ déploiement en cours…"];
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-[0.8em]">
      <div className="rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.9em] shadow-[0_1em_2em_-1.4em_rgb(11_22_48/0.4)]">
        <div className="flex items-center justify-between">
          <span className="text-[0.75em] font-bold text-[#0b1630]">Pipeline de déploiement</span>
          <span className="text-[0.6em] text-[#5b6579]">démo</span>
        </div>
        <div className="relative mt-[0.8em] h-[0.35em] rounded-full bg-[#e3e8f0]">
          <span className="dm-fill absolute inset-y-0 left-0 w-full origin-left rounded-full bg-linear-to-r from-[#2563eb] to-[#60a5fa]" />
        </div>
        <div className="mt-[0.6em] grid grid-cols-4">
          {steps.map((step, index) => (
            <span key={step} className="flex items-center gap-[0.3em] text-[0.6em] font-semibold text-[#0b1630]">
              <span className="dm-check grid size-[1.4em] place-items-center rounded-full bg-[#2563eb] text-white" style={seq(index)}>
                <Check aria-hidden="true" className="size-[0.9em]" strokeWidth={3} />
              </span>
              {step}
            </span>
          ))}
        </div>
      </div>
      <div className="grid min-h-0 grid-cols-[1.2fr_1fr] gap-[0.8em]">
        <div className="space-y-[0.35em] overflow-hidden rounded-[0.7em] bg-[#0b1630] p-[0.8em] font-mono">
          {logs.map((line, index) => (
            <p key={line} className="dm-seq text-[0.58em] whitespace-nowrap text-[#c3ccdb]" style={seq(index)}>
              {line}
            </p>
          ))}
        </div>
        <div className="space-y-[0.4em]">
          {["srv-web-01", "srv-api-01", "sauvegarde"].map((server, index) => (
            <div key={server} className="flex items-center gap-[0.5em] rounded-[0.5em] border border-[#d5dfef] bg-white px-[0.6em] py-[0.45em]">
              <span className={`size-[0.55em] rounded-full ${index === 2 ? "bg-[#60a5fa]" : "bg-[#34d399]"} dm-blink`} />
              <span className="font-mono text-[0.58em] text-[#0b1630]">{server}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SecurityDemo() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-[1em]">
      <div className="relative rounded-[0.8em] border border-[#d5dfef] bg-white p-[1em] shadow-[0_1em_2em_-1.4em_rgb(11_22_48/0.45)]">
        <div className="flex items-center gap-[0.5em]">
          <span className="grid size-[1.8em] place-items-center rounded-[0.5em] bg-[#0b1630] text-white">
            <Lock aria-hidden="true" className="size-[1em]" />
          </span>
          <span className="text-[0.75em] font-bold text-[#0b1630]">Connexion sécurisée</span>
        </div>
        <span className="mt-[0.8em] block rounded-[0.4em] border border-[#e3e8f0] px-[0.5em] py-[0.35em] text-[0.6em] text-[#5b6579]">utilisateur@exemple</span>
        <span className="mt-[0.4em] block rounded-[0.4em] border border-[#e3e8f0] px-[0.5em] py-[0.2em] text-[0.8em] tracking-[0.2em] text-[#0b1630]">••••••••</span>
        <p className="mt-[0.6em] text-[0.55em] font-semibold text-[#5b6579]">Code de vérification</p>
        <div className="mt-[0.3em] grid grid-cols-6 gap-[0.3em]">
          {["4", "8", "1", "9", "2", "7"].map((digit, index) => (
            <span key={index} className="grid aspect-[4/5] place-items-center rounded-[0.35em] border border-[#c9d6ee] bg-[#f5f7fb]">
              <span className="dm-seq text-[0.75em] font-bold text-[#0b1630]" style={seq(index)}>
                {digit}
              </span>
            </span>
          ))}
        </div>
        <div className="dm-granted absolute inset-0 grid place-items-center rounded-[0.8em] bg-white/95">
          <span className="flex flex-col items-center gap-[0.4em] text-[0.75em] font-bold text-[#047857]">
            <ShieldCheck aria-hidden="true" className="size-[2.4em]" />
            Accès autorisé
          </span>
        </div>
      </div>
      <div className="space-y-[0.4em] rounded-[0.8em] bg-[#0b1630] p-[0.8em]">
        <p className="text-[0.6em] font-bold text-white">Journal d’accès</p>
        {[
          ["Connexion vérifiée", "bg-[#34d399]"],
          ["Tentative bloquée", "bg-[#f87171]"],
          ["Rôle « lecture » appliqué", "bg-[#60a5fa]"],
          ["Session chiffrée", "bg-[#34d399]"],
        ].map(([label, tone], index) => (
          <p key={label} className="dm-seq flex items-center gap-[0.5em] text-[0.55em] text-[#c3ccdb]" style={seq(index)}>
            <span className={`size-[0.8em] shrink-0 rounded-full ${tone}`} />
            {label}
          </p>
        ))}
      </div>
    </div>
  );
}

export function SupportDemo() {
  const columns = ["Ouvert", "En cours", "Résolu"];
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-[0.7em]">
      <div className="flex items-center gap-[0.8em] rounded-[0.7em] border border-[#d5dfef] bg-white px-[0.9em] py-[0.6em]">
        <span className="text-[0.65em] font-bold text-[#0b1630]">Surveillance</span>
        <svg viewBox="0 0 200 30" className="h-[1.6em] flex-1" preserveAspectRatio="none" aria-hidden="true">
          <path className="dm-draw" d="M0 18 H60 L70 6 L82 26 L92 14 L100 18 H200" fill="none" stroke="#34d399" strokeWidth="2.5" pathLength="100" />
        </svg>
        <span className="flex items-center gap-[0.3em] text-[0.6em] font-semibold text-[#047857]">
          <span className="dm-blink size-[0.6em] rounded-full bg-[#34d399]" />
          Opérationnel
        </span>
      </div>
      <div className="relative grid grid-cols-3 gap-[0.6em]">
        {columns.map((column, index) => (
          <div key={column} className="rounded-[0.7em] bg-[#e7edf8] p-[0.5em]">
            <p className="text-[0.6em] font-bold text-[#3e4a63]">{column}</p>
            <div className="mt-[0.4em] space-y-[0.35em]">
              {[0, 1].slice(0, index === 1 ? 1 : 2).map((card) => (
                <span key={card} className="block rounded-[0.4em] bg-white p-[0.4em]">
                  <span className="block h-[0.4em] w-[80%] rounded-full bg-[#c9d6ee]" />
                  <span className="mt-[0.3em] block h-[0.35em] w-[50%] rounded-full bg-[#e3e8f0]" />
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="dm-ticket absolute top-[1.9em] left-[0.5em] w-[calc((100%-2.2em)/3)] rounded-[0.4em] border border-[#2563eb] bg-white p-[0.4em] shadow-[0_0.8em_1.4em_-0.8em_rgb(37_99_235/0.7)]">
          <span className="text-[0.55em] font-bold text-[#0b1630]">Ticket #212</span>
          <span className="mt-[0.3em] block h-[0.35em] w-[70%] rounded-full bg-[#93c5fd]" />
        </div>
      </div>
    </div>
  );
}

export function DataDemo() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-[0.8em]">
      <div className="flex flex-col rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.9em] shadow-[0_1em_2em_-1.4em_rgb(11_22_48/0.4)]">
        <span className="text-[0.7em] font-bold text-[#0b1630]">Tableau de bord BI</span>
        <span className="text-[0.55em] text-[#5b6579]">données de démonstration</span>
        <svg viewBox="0 0 200 90" className="mt-[0.4em] min-h-0 flex-1" preserveAspectRatio="none" aria-hidden="true">
          <g fill="#dbeafe">
            {[20, 45, 30, 60, 50, 72].map((height, index) => (
              <rect key={index} x={10 + index * 32} y={90 - height} width="20" height={height} rx="3" />
            ))}
          </g>
          <path className="dm-draw" d="M10 70 C 40 60, 60 40, 90 46 S 150 20, 195 12" fill="none" stroke="#2563eb" strokeWidth="3" pathLength="100" />
        </svg>
      </div>
      <div className="flex flex-col gap-[0.45em] rounded-[0.7em] bg-[#0b1630] p-[0.7em]">
        <span className="flex items-center gap-[0.4em] text-[0.6em] font-bold text-white">
          <Sparkles aria-hidden="true" className="size-[1.1em] text-[#60a5fa]" />
          Assistant IA
        </span>
        <p className="dm-seq self-end rounded-[0.6em] rounded-br-[0.15em] bg-[#2563eb] px-[0.6em] py-[0.35em] text-[0.55em] text-white" style={seq(0)}>
          Résume les demandes de la semaine
        </p>
        <span className="dm-typing flex gap-[0.25em] self-start rounded-[0.6em] bg-[#1c2f5e] px-[0.6em] py-[0.5em]">
          <span className="size-[0.35em] rounded-full bg-[#94a3b8]" />
          <span className="size-[0.35em] rounded-full bg-[#94a3b8]" />
          <span className="size-[0.35em] rounded-full bg-[#94a3b8]" />
        </span>
        <p className="dm-seq self-start rounded-[0.6em] rounded-bl-[0.15em] bg-[#1c2f5e] px-[0.6em] py-[0.35em] text-[0.55em] text-[#e2e8f0]" style={seq(4)}>
          Voici la synthèse par catégorie, avec les tendances.
        </p>
      </div>
    </div>
  );
}

export function TrainingDemo() {
  const lessons = ["Introduction à Docker", "Images et conteneurs", "Pipeline CI/CD", "Déployer sur le cloud"];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-[0.8em]">
      <div className="flex flex-col overflow-hidden rounded-[0.7em] bg-[#0b1630]">
        <div className="relative grid flex-1 place-items-center bg-[radial-gradient(circle_at_70%_30%,#2563eb55,transparent_60%)]">
          <span className="dm-pulse grid size-[2.6em] place-items-center rounded-full bg-white/95 text-[#2563eb]">
            <Play aria-hidden="true" className="ml-[0.15em] size-[1.2em] fill-current" />
          </span>
          <span className="absolute top-[0.6em] left-[0.7em] rounded-[0.3em] bg-[#2563eb] px-[0.5em] py-[0.15em] text-[0.55em] font-bold text-white">Module DevOps</span>
        </div>
        <div className="p-[0.6em]">
          <div className="h-[0.3em] rounded-full bg-white/15">
            <span className="dm-fill block h-full w-full origin-left rounded-full bg-[#60a5fa]" />
          </div>
        </div>
      </div>
      <div className="rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.7em]">
        <p className="text-[0.65em] font-bold text-[#0b1630]">Programme</p>
        <ul className="mt-[0.4em] space-y-[0.4em]">
          {lessons.map((lesson, index) => (
            <li key={lesson} className="flex items-center gap-[0.45em] text-[0.55em] text-[#3e4a63]">
              <span className="grid size-[1.5em] shrink-0 place-items-center rounded-full border border-[#c9d6ee]">
                <span className="dm-check grid size-full place-items-center rounded-full bg-[#2563eb] text-white" style={seq(index)}>
                  <Check aria-hidden="true" className="size-[0.9em]" strokeWidth={3} />
                </span>
              </span>
              {lesson}
            </li>
          ))}
        </ul>
        <span className="dm-seq mt-[0.6em] inline-flex items-center gap-[0.3em] rounded-full bg-[#dcfce7] px-[0.6em] py-[0.2em] text-[0.55em] font-bold text-[#047857]" style={seq(4)}>
          Quiz validé
        </span>
      </div>
    </div>
  );
}

export function IntegrationDemo() {
  const nodes = ["Document", "Validation", "Signature", "Archivé"];
  return (
    <div className="grid h-full w-full grid-rows-[auto_minmax(0,1fr)] gap-[0.9em]">
      <div className="relative grid grid-cols-4 gap-[0.6em]">
        <span className="absolute top-[1.2em] right-[12%] left-[12%] h-[0.15em] bg-[#c9d6ee]" />
        <span className="dm-token absolute top-[0.95em] left-[12%] size-[0.65em] rounded-full bg-[#2563eb] shadow-[0_0_0_0.3em_rgb(37_99_235/0.2)]" />
        {nodes.map((node, index) => (
          <div key={node} className="relative flex flex-col items-center gap-[0.35em]">
            <span className="dm-node grid size-[2.4em] place-items-center rounded-[0.6em] border border-[#c9d6ee] bg-white text-[#2563eb]" style={seq(index)}>
              <span className="text-[0.7em] font-bold">{index + 1}</span>
            </span>
            <span className="text-[0.55em] font-semibold text-[#0b1630]">{node}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-[0.8em]">
        <div className="rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.7em]">
          <FileText aria-hidden="true" className="size-[1.5em] text-[#2563eb]" />
          <span className="mt-[0.4em] block h-[0.4em] w-[80%] rounded-full bg-[#0b1630]" />
          <span className="mt-[0.3em] block h-[0.35em] w-full rounded-full bg-[#e3e8f0]" />
          <span className="mt-[0.3em] block h-[0.35em] w-[70%] rounded-full bg-[#e3e8f0]" />
        </div>
        <div className="flex flex-col justify-between rounded-[0.7em] bg-[#0b1630] p-[0.7em]">
          <span className="text-[0.6em] font-bold text-white">Signature électronique</span>
          <svg viewBox="0 0 160 40" className="h-[2.4em] w-full" aria-hidden="true">
            <path className="dm-draw" d="M6 28 C 20 6, 30 36, 44 20 S 64 8, 72 26 S 96 30, 104 14 S 130 22, 154 18" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" pathLength="100" />
          </svg>
          <span className="h-[0.1em] bg-white/20" />
        </div>
      </div>
    </div>
  );
}

const demos = {
  "developpement-web": WebDemo,
  "developpement-mobile": MobileDemo,
  "logiciel-sur-mesure": SoftwareDemo,
  "ui-ux-design": DesignDemo,
  "hebergement-cloud": CloudDemo,
  cybersecurite: SecurityDemo,
  "maintenance-support": SupportDemo,
  "data-intelligence-artificielle": DataDemo,
  "formation-conseil": TrainingDemo,
  "integration-digitalisation": IntegrationDemo,
};

export default function ServiceDemo({ slug, fallback = null }) {
  const Demo = demos[slug];
  return Demo ? <Demo /> : fallback;
}
