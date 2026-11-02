import {
  Apple,
  Bell,
  Briefcase,
  Calendar,
  Check,
  Download,
  FileText,
  Monitor,
  Package,
  Play,
  RefreshCw,
  ShoppingCart,
  Smartphone,
  Tablet,
  Users,
  Zap,
} from "lucide-react";
import { Label, Line, Phone, Pill, Window } from "./kit.jsx";

// Demos for the Développement, Mobile, Logiciel and UI/UX offerings. All data is fictional.
const seq = (index) => ({ "--i": index });

/* Développement Web */

export function WebAppDemo() {
  const days = ["L", "M", "M", "J", "V"];
  return (
    <Window title="Réservations · application web" className="h-full w-full">
      <div className="grid h-full grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-[0.8em] p-[0.9em]">
        <div>
          <div className="flex items-center gap-[0.4em]">
            <Calendar aria-hidden="true" className="size-[1em] text-[#2563eb]" />
            <Label>Semaine en cours</Label>
          </div>
          <div className="mt-[0.5em] grid grid-cols-5 gap-[0.3em]">
            {days.map((day, index) => (
              <span key={index} className="text-center text-[0.55em] font-bold text-[#5b6579]">{day}</span>
            ))}
            {Array.from({ length: 15 }, (_, index) => (
              <span
                key={index}
                className={`h-[1.6em] rounded-[0.3em] ${[1, 5, 7, 11, 13].includes(index) ? "dm-seq bg-[#2563eb]" : "bg-[#eef3fd]"}`}
                style={seq([1, 5, 7, 11, 13].indexOf(index))}
              />
            ))}
          </div>
        </div>
        <div className="space-y-[0.45em] rounded-[0.5em] bg-[#f5f7fb] p-[0.6em]">
          <Label>Nouvelle réservation</Label>
          <span className="block rounded-[0.3em] border border-[#e3e8f0] bg-white px-[0.4em] py-[0.25em] text-[0.55em] text-[#5b6579]">Nom du client</span>
          <span className="block rounded-[0.3em] border border-[#e3e8f0] bg-white px-[0.4em] py-[0.25em] text-[0.55em] text-[#5b6579]">Jeudi · 10:00</span>
          <span className="dm-pulse block rounded-[0.3em] bg-[#2563eb] py-[0.3em] text-center text-[0.55em] font-bold text-white">Confirmer</span>
        </div>
      </div>
    </Window>
  );
}

export function EcommerceDemo() {
  const products = ["#dbeafe", "#e0e7ff", "#bfdbfe"];
  return (
    <Window title="Boutique en ligne · démo" className="h-full w-full">
      <div className="grid h-full grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[0.8em] p-[0.9em]">
        <div className="grid grid-cols-3 gap-[0.5em]">
          {products.map((color, index) => (
            <div key={color} className="flex flex-col rounded-[0.5em] border border-[#e3e8f0] p-[0.4em]">
              <span className="flex h-[3.4em] items-center justify-center rounded-[0.35em]" style={{ background: color }}>
                <Package aria-hidden="true" className="size-[1.4em] text-[#2563eb]" />
              </span>
              <Line w="80%" tone="#0b1630" className="mt-[0.4em]" />
              <span className="mt-[0.3em] text-[0.55em] font-bold text-[#2563eb]">{["2 900 DA", "4 500 DA", "1 800 DA"][index]}</span>
              <span className={`mt-auto rounded-[0.3em] bg-[#0b1630] py-[0.2em] text-center text-[0.5em] font-bold text-white ${index === 1 ? "dm-pulse" : ""}`}>
                Ajouter
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col rounded-[0.5em] bg-[#0b1630] p-[0.6em]">
          <span className="flex items-center gap-[0.4em] text-[0.6em] font-bold text-white">
            <ShoppingCart aria-hidden="true" className="size-[1.2em] text-[#60a5fa]" />
            Panier
          </span>
          {["Article 2", "Article 1"].map((item, index) => (
            <span key={item} className="dm-seq mt-[0.4em] flex justify-between rounded-[0.3em] bg-[#1c2f5e] px-[0.4em] py-[0.25em] text-[0.5em] text-[#e2e8f0]" style={seq(index)}>
              {item}
              <span>×1</span>
            </span>
          ))}
          <span className="dm-seq mt-auto rounded-[0.3em] bg-[#2563eb] py-[0.3em] text-center text-[0.55em] font-bold text-white" style={seq(2)}>
            Commander
          </span>
        </div>
      </div>
    </Window>
  );
}

export function PortalDemo() {
  const tiles = [
    ["Mes documents", FileText],
    ["Mes demandes", Briefcase],
    ["Mon compte", Users],
  ];
  return (
    <Window title="Espace client · démo" className="h-full w-full">
      <div className="p-[0.9em]">
        <div className="flex items-center justify-between">
          <span className="text-[0.75em] font-bold text-[#0b1630]">Bonjour, cher client</span>
          <span className="relative">
            <Bell aria-hidden="true" className="size-[1.2em] text-[#0b1630]" />
            <span className="dm-blink absolute -top-[0.1em] -right-[0.1em] size-[0.5em] rounded-full bg-[#ef4444]" />
          </span>
        </div>
        <div className="mt-[0.6em] grid grid-cols-3 gap-[0.5em]">
          {tiles.map(([label, Icon], index) => (
            <span key={label} className="dm-node flex flex-col gap-[0.4em] rounded-[0.5em] border border-[#c9d6ee] bg-white p-[0.5em]" style={seq(index)}>
              <Icon aria-hidden="true" className="size-[1.2em] text-[#2563eb]" />
              <span className="text-[0.55em] font-semibold text-[#0b1630]">{label}</span>
            </span>
          ))}
        </div>
        <div className="mt-[0.6em] space-y-[0.3em]">
          {[
            ["Demande #31", "En traitement", "bg-[#fef3c7] text-[#92400e]"],
            ["Demande #30", "Terminée", "bg-[#dcfce7] text-[#047857]"],
          ].map(([name, status, tone], index) => (
            <div key={name} className="dm-seq flex items-center justify-between rounded-[0.35em] bg-[#f5f7fb] px-[0.5em] py-[0.3em]" style={seq(index + 1)}>
              <Label>{name}</Label>
              <Pill tone={tone}>{status}</Pill>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

export function ErpDemo() {
  const modules = [
    ["ERP", Package],
    ["CRM", Users],
    ["RH", Briefcase],
    ["Stocks", Package],
  ];
  return (
    <Window title="Gestion interne · démo" dark className="h-full w-full">
      <div className="grid h-full grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-[0.8em] p-[0.9em]">
        <div className="grid grid-cols-2 gap-[0.5em]">
          {modules.map(([label, Icon], index) => (
            <span key={label} className="dm-node flex flex-col items-center justify-center gap-[0.3em] rounded-[0.5em] border border-[#1c2f5e] bg-[#12224a] text-[#60a5fa]" style={seq(index)}>
              <Icon aria-hidden="true" className="size-[1.4em]" />
              <span className="text-[0.6em] font-bold text-white">{label}</span>
            </span>
          ))}
        </div>
        <div className="space-y-[0.35em] rounded-[0.5em] bg-[#12224a] p-[0.6em]">
          <span className="text-[0.6em] font-bold text-white">Activité récente</span>
          {["Facture créée", "Client ajouté", "Congé validé", "Stock mis à jour"].map((event, index) => (
            <p key={event} className="dm-seq flex items-center gap-[0.4em] text-[0.55em] text-[#c3ccdb]" style={seq(index)}>
              <Check aria-hidden="true" className="size-[1.1em] text-[#34d399]" />
              {event}
            </p>
          ))}
        </div>
      </div>
    </Window>
  );
}

export function FullStackDemo() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_3em_minmax(0,1fr)] items-center gap-[0.5em]">
      <Window title="Front-end" className="h-[80%]">
        <div className="space-y-[0.4em] p-[0.7em]">
          <Label>Formulaire</Label>
          <span className="block rounded-[0.3em] border border-[#e3e8f0] px-[0.4em] py-[0.25em] text-[0.55em] text-[#5b6579]">Votre e-mail</span>
          <span className="block rounded-[0.3em] border border-[#e3e8f0] px-[0.4em] py-[0.25em] text-[0.55em] text-[#5b6579]">Message</span>
          <span className="dm-pulse block rounded-[0.3em] bg-[#2563eb] py-[0.3em] text-center text-[0.55em] font-bold text-white">Envoyer</span>
        </div>
      </Window>
      <div className="relative h-[0.15em] bg-[#c9d6ee]">
        <span className="dm-travel absolute -top-[0.25em] size-[0.65em] rounded-full bg-[#2563eb]" />
      </div>
      <Window title="Back-end" dark className="h-[80%]">
        <div className="space-y-[0.35em] p-[0.7em] font-mono">
          {["POST /api/messages", "→ validation ✓", "→ base de données ✓", "← 201 Created"].map((line, index) => (
            <p key={line} className={`dm-seq text-[0.52em] whitespace-nowrap ${index === 3 ? "text-[#86efac]" : "text-[#c3ccdb]"}`} style={seq(index)}>
              {line}
            </p>
          ))}
        </div>
      </Window>
    </div>
  );
}

export function ApiDemo() {
  const routes = [
    ["GET", "/clients", "bg-[#dcfce7] text-[#047857]"],
    ["POST", "/commandes", "bg-[#dbeafe] text-[#1d4ed8]"],
    ["PUT", "/stocks/12", "bg-[#fef3c7] text-[#92400e]"],
  ];
  const json = ['{', '  "id": 12,', '  "nom": "Client démo",', '  "statut": "actif"', '}'];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-[0.8em]">
      <div className="space-y-[0.45em] rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.8em]">
        <Label>Points d’accès</Label>
        {routes.map(([method, path, tone], index) => (
          <div key={path} className="dm-row flex items-center gap-[0.5em] rounded-[0.35em] px-[0.3em] py-[0.25em]" style={seq(index)}>
            <Pill tone={tone}>{method}</Pill>
            <span className="font-mono text-[0.55em] text-[#0b1630]">{path}</span>
          </div>
        ))}
      </div>
      <div className="rounded-[0.7em] bg-[#0b1630] p-[0.8em] font-mono">
        <p className="text-[0.55em] text-[#60a5fa]">200 OK · application/json</p>
        {json.map((line, index) => (
          <p key={index} className="dm-seq mt-[0.2em] text-[0.55em] whitespace-pre text-[#e2e8f0]" style={seq(index)}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/* Développement Mobile */

function StoreChip({ icon: Icon, children }) {
  return (
    <span className="flex items-center gap-[0.4em] rounded-[0.5em] bg-[#0b1630] px-[0.7em] py-[0.4em] text-[0.6em] font-semibold text-white">
      <Icon aria-hidden="true" className="size-[1.2em]" />
      {children}
    </span>
  );
}

export function AndroidDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-[1.6em]">
      <Phone>
        <div className="bg-[#2563eb] px-[0.7em] pt-[1.6em] pb-[0.6em]">
          <span className="text-[0.7em] font-bold text-white">Mes tâches</span>
        </div>
        <ul className="space-y-[0.35em] p-[0.6em]">
          {["Préparer la réunion", "Envoyer le devis", "Relancer le client"].map((task, index) => (
            <li key={task} className="dm-seq flex items-center gap-[0.4em] rounded-[0.4em] bg-white p-[0.4em] shadow-sm" style={seq(index)}>
              <span className="size-[0.9em] rounded-[0.2em] border-2 border-[#2563eb]" />
              <span className="text-[0.55em] text-[#0b1630]">{task}</span>
            </li>
          ))}
        </ul>
        <span className="dm-pulse absolute right-[0.7em] bottom-[2.4em] grid size-[2.2em] place-items-center rounded-[0.7em] bg-[#2563eb] text-[1em] font-bold text-white">+</span>
        <div className="absolute inset-x-0 bottom-0 flex h-[1.8em] items-center justify-around bg-[#0b1630]">
          <span className="size-[0.5em] rotate-45 border-b-2 border-l-2 border-white" />
          <span className="size-[0.6em] rounded-full border-2 border-white" />
          <span className="size-[0.55em] border-2 border-white" />
        </div>
      </Phone>
      <StoreChip icon={Smartphone}>Android</StoreChip>
    </div>
  );
}

export function IosDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-[1.6em]">
      <StoreChip icon={Apple}>iOS</StoreChip>
      <Phone>
        <span className="absolute top-[0.5em] left-1/2 z-10 h-[0.9em] w-[3.6em] -translate-x-1/2 rounded-full bg-[#0b1630]" />
        <div className="px-[0.8em] pt-[2.2em]">
          <p className="text-[1em] font-extrabold text-[#0b1630]">Accueil</p>
          <div className="mt-[0.5em] h-[4em] rounded-[0.8em] bg-linear-to-br from-[#2563eb] to-[#60a5fa] p-[0.6em]">
            <Line w="60%" tone="rgb(255 255 255 / 0.8)" />
            <Line w="40%" tone="rgb(255 255 255 / 0.5)" className="mt-[0.4em]" />
          </div>
          <div className="mt-[0.5em] divide-y divide-[#e3e8f0] rounded-[0.8em] bg-white px-[0.5em]">
            {["Profil", "Notifications", "Réglages"].map((row, index) => (
              <p key={row} className="dm-seq flex items-center justify-between py-[0.4em] text-[0.55em] text-[#0b1630]" style={seq(index)}>
                {row}
                <span className="text-[#94a3b8]">›</span>
              </p>
            ))}
          </div>
        </div>
        <span className="absolute bottom-[0.4em] left-1/2 h-[0.25em] w-[4em] -translate-x-1/2 rounded-full bg-[#0b1630]" />
      </Phone>
    </div>
  );
}

export function AppUpdateDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-[1.4em]">
      <Phone>
        <div className="px-[0.8em] pt-[2em]">
          <span className="mx-auto grid size-[3em] place-items-center rounded-[0.8em] bg-linear-to-br from-[#2563eb] to-[#60a5fa] text-white">
            <RefreshCw aria-hidden="true" className="size-[1.5em]" />
          </span>
          <p className="mt-[0.6em] text-center text-[0.7em] font-bold text-[#0b1630]">Mise à jour 2.1</p>
          <div className="mt-[0.5em] h-[0.35em] rounded-full bg-[#e3e8f0]">
            <span className="dm-fill block h-full w-full origin-left rounded-full bg-[#2563eb]" />
          </div>
          <ul className="mt-[0.7em] space-y-[0.35em]">
            {["Correctifs", "Performances", "Nouvel écran"].map((item, index) => (
              <li key={item} className="flex items-center gap-[0.4em] text-[0.55em] text-[#3e4a63]">
                <span className="dm-check grid size-[1.3em] place-items-center rounded-full bg-[#2563eb] text-white" style={seq(index)}>
                  <Check aria-hidden="true" className="size-[0.8em]" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Phone>
      <div className="space-y-[0.4em]">
        {["v2.0", "v2.1"].map((version, index) => (
          <Pill key={version} tone={index ? "bg-[#2563eb] text-white" : "bg-white text-[#5b6579]"} className="block">
            {version}
          </Pill>
        ))}
      </div>
    </div>
  );
}

export function StoreDemo() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center gap-[1em]">
      <div className="rounded-[0.8em] border border-[#d5dfef] bg-white p-[0.9em] shadow-[0_1em_2em_-1.4em_rgb(11_22_48/0.45)]">
        <div className="flex items-center gap-[0.7em]">
          <span className="grid size-[3.2em] place-items-center rounded-[0.8em] bg-linear-to-br from-[#2563eb] to-[#60a5fa] text-white">
            <Zap aria-hidden="true" className="size-[1.6em]" />
          </span>
          <div>
            <p className="text-[0.75em] font-bold text-[#0b1630]">Votre application</p>
            <p className="text-[0.55em] text-[#5b6579]">Votre entreprise</p>
          </div>
        </div>
        <div className="mt-[0.7em] grid grid-cols-3 gap-[0.35em]">
          {[0, 1, 2].map((shot) => (
            <span key={shot} className="h-[4.2em] rounded-[0.4em] bg-[#eef3fd]" />
          ))}
        </div>
        <span className="dm-pulse mt-[0.7em] flex items-center justify-center gap-[0.3em] rounded-full bg-[#2563eb] py-[0.35em] text-[0.6em] font-bold text-white">
          <Download aria-hidden="true" className="size-[1.1em]" />
          Installer
        </span>
      </div>
      <div className="space-y-[0.5em]">
        {[
          [Play, "Google Play"],
          [Apple, "App Store"],
        ].map(([Icon, store], index) => (
          <div key={store} className="flex items-center gap-[0.5em]">
            <StoreChip icon={Icon}>{store}</StoreChip>
            <span className="dm-check grid size-[1.4em] place-items-center rounded-full bg-[#34d399] text-white" style={seq(index + 1)}>
              <Check aria-hidden="true" className="size-[0.9em]" strokeWidth={3} />
            </span>
          </div>
        ))}
        <p className="text-[0.55em] font-semibold text-[#047857]">Publiée</p>
      </div>
    </div>
  );
}

/* Logiciel sur mesure */

export function BusinessAppDemo() {
  const steps = ["Reçu", "Instruction", "Validé"];
  return (
    <Window title="Gestion des dossiers · démo" className="h-full w-full">
      <div className="p-[0.9em]">
        <div className="flex items-center justify-between">
          <span className="text-[0.75em] font-bold text-[#0b1630]">Dossier A-12</span>
          <Pill>Service technique</Pill>
        </div>
        <div className="mt-[0.8em] grid grid-cols-3 gap-[0.4em]">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center gap-[0.3em]">
              <span className="dm-check grid size-[1.8em] place-items-center rounded-full bg-[#2563eb] text-white" style={seq(index)}>
                <Check aria-hidden="true" className="size-[1em]" strokeWidth={3} />
              </span>
              <span className="text-[0.55em] font-semibold text-[#0b1630]">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-[0.8em] grid grid-cols-2 gap-[0.4em]">
          {["Demandeur", "Date", "Catégorie", "Responsable"].map((field) => (
            <span key={field} className="rounded-[0.3em] border border-[#e3e8f0] px-[0.4em] py-[0.25em] text-[0.52em] text-[#5b6579]">
              {field}
            </span>
          ))}
        </div>
      </div>
    </Window>
  );
}

export function AutomationDemo() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-[0.6em]">
      <div className="flex items-center gap-[0.6em] rounded-[0.6em] border border-[#d5dfef] bg-white p-[0.6em]">
        <span className="grid size-[2em] place-items-center rounded-[0.5em] bg-[#fef3c7] text-[#92400e]">
          <Zap aria-hidden="true" className="size-[1.1em]" />
        </span>
        <div>
          <p className="text-[0.5em] font-bold tracking-wider text-[#5b6579] uppercase">Quand</p>
          <Label>Une nouvelle commande arrive</Label>
        </div>
      </div>
      <div className="relative mx-auto h-[1.6em] w-[0.15em] bg-[#c9d6ee]">
        <span className="dm-drop absolute -left-[0.25em] size-[0.65em] rounded-full bg-[#2563eb]" />
      </div>
      <div className="rounded-[0.6em] bg-[#0b1630] p-[0.6em]">
        <p className="text-[0.5em] font-bold tracking-wider text-[#94a3b8] uppercase">Alors</p>
        {["Envoyer la confirmation au client", "Mettre à jour le stock", "Créer la facture"].map((action, index) => (
          <p key={action} className="mt-[0.3em] flex items-center gap-[0.4em] text-[0.55em] text-white">
            <span className="dm-check grid size-[1.3em] place-items-center rounded-full bg-[#34d399] text-[#0b1630]" style={seq(index + 1)}>
              <Check aria-hidden="true" className="size-[0.8em]" strokeWidth={3} />
            </span>
            {action}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ReportingDemo() {
  return (
    <Window title="Rapport mensuel · démo" className="h-full w-full">
      <div className="flex h-full flex-col p-[0.9em]">
        <div className="grid grid-cols-3 gap-[0.4em]">
          {[
            ["Ventes", "+ 8 %"],
            ["Commandes", "312"],
            ["Délais", "2,1 j"],
          ].map(([label, value], index) => (
            <span key={label} className="dm-seq rounded-[0.4em] bg-[#f5f7fb] p-[0.45em]" style={seq(index)}>
              <span className="block text-[0.5em] text-[#5b6579]">{label}</span>
              <span className="block text-[0.8em] font-extrabold text-[#0b1630]">{value}</span>
            </span>
          ))}
        </div>
        <svg viewBox="0 0 200 60" className="mt-[0.5em] min-h-0 flex-1" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 50 H200" stroke="#e3e8f0" />
          <path className="dm-draw" d="M0 46 C 30 40, 50 44, 80 30 S 140 26, 200 8" fill="none" stroke="#2563eb" strokeWidth="3" pathLength="100" />
        </svg>
        <span className="dm-pulse mt-[0.4em] self-end rounded-[0.3em] bg-[#0b1630] px-[0.6em] py-[0.25em] text-[0.55em] font-bold text-white">Exporter en PDF</span>
      </div>
    </Window>
  );
}

/* UI/UX Design */

export function UiKitDemo() {
  return (
    <Window title="Bibliothèque de composants" className="h-full w-full">
      <div className="grid h-full grid-cols-2 gap-[0.7em] p-[0.9em]">
        <div className="space-y-[0.5em]">
          <Label>Boutons</Label>
          <div className="flex gap-[0.4em]">
            <span className="rounded-[0.35em] bg-[#2563eb] px-[0.7em] py-[0.3em] text-[0.55em] font-bold text-white">Principal</span>
            <span className="rounded-[0.35em] border border-[#c9d6ee] px-[0.7em] py-[0.3em] text-[0.55em] font-bold text-[#0b1630]">Secondaire</span>
          </div>
          <Label>Champ</Label>
          <span className="block rounded-[0.35em] border-2 border-[#2563eb] px-[0.5em] py-[0.25em] text-[0.55em] text-[#0b1630]">
            Saisie<span className="dm-blink ml-[0.1em] inline-block h-[1em] w-[0.1em] translate-y-[0.15em] bg-[#0b1630]" />
          </span>
          <Label>Interrupteur</Label>
          <span className="relative block h-[1.2em] w-[2.2em] rounded-full bg-[#c9d6ee]">
            <span className="dm-final absolute inset-0 rounded-full bg-[#2563eb]" />
            <span className="dm-switch absolute top-[0.15em] left-[0.15em] size-[0.9em] rounded-full bg-white shadow" />
          </span>
        </div>
        <div className="space-y-[0.5em]">
          <Label>Carte</Label>
          <div className="dm-seq rounded-[0.5em] border border-[#e3e8f0] p-[0.5em] shadow-sm" style={seq(1)}>
            <span className="block h-[2.4em] rounded-[0.35em] bg-linear-to-br from-[#2563eb] to-[#60a5fa]" />
            <Line w="70%" tone="#0b1630" className="mt-[0.4em]" />
            <Line w="50%" className="mt-[0.3em]" />
          </div>
          <div className="flex gap-[0.3em]">
            {["#0b1630", "#2563eb", "#60a5fa", "#f5f7fb"].map((color) => (
              <span key={color} className="size-[1.2em] rounded-[0.3em] border border-[#e3e8f0]" style={{ background: color }} />
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

export function UxDemo() {
  const spots = [
    ["28%", "30%"],
    ["70%", "62%"],
    ["45%", "78%"],
  ];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[0.8em]">
      <Window title="Carte de chaleur" className="h-full">
        <div className="relative h-full p-[0.7em]">
          <Line w="50%" tone="#0b1630" />
          <span className="mt-[0.5em] block h-[3em] rounded-[0.4em] bg-[#eef3fd]" />
          <Line w="80%" className="mt-[0.5em]" />
          <span className="mt-[0.6em] block h-[1.4em] w-[60%] rounded-full bg-[#2563eb]" />
          {spots.map(([left, top], index) => (
            <span
              key={left}
              className="dm-blink absolute size-[2.6em] -translate-1/2 rounded-full bg-[radial-gradient(circle,rgb(239_68_68/0.7),rgb(251_191_36/0.35)_45%,transparent_70%)]"
              style={{ left, top, animationDelay: `${index * 0.5}s` }}
            />
          ))}
        </div>
      </Window>
      <div className="flex flex-col justify-center gap-[0.4em]">
        <Label>Parcours utilisateur</Label>
        {["Découverte", "Inscription", "Première commande"].map((step, index) => (
          <div key={step} className="dm-seq flex items-center gap-[0.4em] rounded-[0.4em] border border-[#d5dfef] bg-white px-[0.5em] py-[0.35em]" style={seq(index)}>
            <span className="grid size-[1.3em] place-items-center rounded-full bg-[#2563eb] text-[0.55em] font-bold text-white">{index + 1}</span>
            <span className="text-[0.55em] font-semibold text-[#0b1630]">{step}</span>
          </div>
        ))}
        <Pill tone="bg-[#fef3c7] text-[#92400e]" className="dm-seq self-start" style={seq(3)}>Point de friction repéré</Pill>
      </div>
    </div>
  );
}

export function ResponsiveDemo() {
  const card = (
    <>
      <Line w="50%" tone="#0b1630" />
      <span className="mt-[0.35em] block h-[1.6em] rounded-[0.3em] bg-linear-to-br from-[#2563eb] to-[#60a5fa]" />
      <Line w="80%" className="mt-[0.35em]" />
    </>
  );
  return (
    <div className="flex h-full w-full items-end justify-center gap-[0.9em]">
      <div className="dm-node flex w-[16em] flex-col rounded-[0.5em] border border-[#c9d6ee] bg-white p-[0.4em]" style={seq(0)}>
        <Monitor aria-hidden="true" className="size-[1em] text-[#5b6579]" />
        <div className="mt-[0.3em] grid grid-cols-3 gap-[0.35em]">
          {[0, 1, 2].map((key) => (
            <div key={key}>{card}</div>
          ))}
        </div>
      </div>
      <div className="dm-node flex w-[8.5em] flex-col rounded-[0.5em] border border-[#c9d6ee] bg-white p-[0.4em]" style={seq(1)}>
        <Tablet aria-hidden="true" className="size-[1em] text-[#5b6579]" />
        <div className="mt-[0.3em] grid grid-cols-2 gap-[0.35em]">
          {[0, 1].map((key) => (
            <div key={key}>{card}</div>
          ))}
        </div>
      </div>
      <div className="dm-node flex w-[4.6em] flex-col rounded-[0.6em] border border-[#c9d6ee] bg-white p-[0.4em]" style={seq(2)}>
        <Smartphone aria-hidden="true" className="size-[1em] text-[#5b6579]" />
        <div className="mt-[0.3em] space-y-[0.4em]">{card}</div>
      </div>
    </div>
  );
}
