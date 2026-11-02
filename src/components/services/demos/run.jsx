import { AlertTriangle, Bug, Check, Database, Globe, HardDrive, Headphones, Lock, ShieldCheck, Wrench } from "lucide-react";
import { Label, Pill, Window } from "./kit.jsx";

// Demos for the Cloud, Cybersécurité and Maintenance offerings. All data is fictional.
const seq = (index) => ({ "--i": index });

/* Hébergement & Cloud */

export function HostingDemo() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-center gap-[1em]">
      <div className="space-y-[0.35em] rounded-[0.7em] bg-[#0b1630] p-[0.7em]">
        {["web-01", "web-02", "base-01"].map((server, index) => (
          <div key={server} className="flex items-center gap-[0.4em] rounded-[0.35em] bg-[#12224a] px-[0.5em] py-[0.45em]">
            <HardDrive aria-hidden="true" className="size-[1em] text-[#60a5fa]" />
            <span className="font-mono text-[0.55em] text-white">{server}</span>
            <span className="ml-auto flex gap-[0.2em]">
              <span className="dm-blink size-[0.4em] rounded-full bg-[#34d399]" style={{ animationDelay: `${index * 0.3}s` }} />
              <span className="size-[0.4em] rounded-full bg-[#334366]" />
            </span>
          </div>
        ))}
      </div>
      <Window title="votre-site · en ligne" className="h-[75%]">
        <div className="flex h-full flex-col items-center justify-center gap-[0.4em] p-[0.7em]">
          <Globe aria-hidden="true" className="size-[2em] text-[#2563eb]" />
          <Pill tone="bg-[#dcfce7] text-[#047857]">
            <span className="dm-blink size-[0.6em] rounded-full bg-[#34d399]" />
            En ligne · HTTPS
          </Pill>
          <span className="text-[0.55em] text-[#5b6579]">Certificat valide · domaine configuré</span>
        </div>
      </Window>
    </div>
  );
}

export function ServerConfigDemo() {
  const lines = ["server {", "  listen 443 ssl;", "  server_name exemple;", "  location / { proxy_pass app; }", "}"];
  const toggles = ["Pare-feu", "HTTPS", "Compression"];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-[0.8em]">
      <Window title="config.conf" dark className="h-full">
        <div className="space-y-[0.25em] p-[0.7em] font-mono">
          {lines.map((line, index) => (
            <p key={index} className="dm-seq text-[0.55em] whitespace-pre text-[#c3ccdb]" style={seq(index)}>
              {line}
            </p>
          ))}
        </div>
      </Window>
      <div className="flex flex-col justify-center gap-[0.5em] rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.7em]">
        <Label>Réglages</Label>
        {toggles.map((toggle, index) => (
          <div key={toggle} className="flex items-center justify-between">
            <span className="text-[0.55em] text-[#3e4a63]">{toggle}</span>
            <span className="relative block h-[1em] w-[1.9em] rounded-full bg-[#c9d6ee]">
              <span className="dm-check absolute inset-0 rounded-full bg-[#2563eb]" style={seq(index)} />
              <span className="absolute top-[0.12em] right-[0.12em] size-[0.76em] rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BackupDemo() {
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-center gap-[1em]">
      <div className="flex flex-col items-center gap-[0.5em]">
        <span className="relative grid size-[5em] place-items-center rounded-[1.2em] bg-[#0b1630] text-[#60a5fa]">
          <Database aria-hidden="true" className="size-[2.4em]" />
          <span className="absolute -right-[0.5em] -bottom-[0.5em] grid size-[2em] place-items-center rounded-full bg-[#2563eb] text-white">
            <Lock aria-hidden="true" className="size-[1em]" />
          </span>
        </span>
        <Pill>Données chiffrées</Pill>
      </div>
      <div className="rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.8em]">
        <Label>Sauvegarde en cours</Label>
        <div className="mt-[0.4em] h-[0.35em] rounded-full bg-[#e3e8f0]">
          <span className="dm-fill block h-full w-full origin-left rounded-full bg-[#2563eb]" />
        </div>
        <ul className="mt-[0.6em] space-y-[0.35em]">
          {["Sauvegarde du lundi", "Sauvegarde du mardi", "Sauvegarde du mercredi"].map((backup, index) => (
            <li key={backup} className="flex items-center gap-[0.4em] text-[0.55em] text-[#3e4a63]">
              <span className="dm-check grid size-[1.3em] place-items-center rounded-full bg-[#34d399] text-white" style={seq(index)}>
                <Check aria-hidden="true" className="size-[0.8em]" strokeWidth={3} />
              </span>
              {backup}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* Cybersécurité */

export function AuditDemo() {
  const checks = [
    ["Mots de passe", "ok"],
    ["Mises à jour", "warn"],
    ["Ports exposés", "ok"],
    ["Sauvegardes", "ok"],
  ];
  return (
    <Window title="Rapport d’audit · démo" className="h-full w-full">
      <div className="grid h-full grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center gap-[0.8em] p-[0.9em]">
        <svg viewBox="0 0 100 100" className="mx-auto size-[7em]" aria-hidden="true">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e3e8f0" strokeWidth="10" />
          <circle className="dm-draw" cx="50" cy="50" r="40" fill="none" stroke="#2563eb" strokeWidth="10" strokeLinecap="round" pathLength="100" transform="rotate(-90 50 50)" />
          <text x="50" y="56" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0b1630">Audit</text>
        </svg>
        <ul className="space-y-[0.4em]">
          {checks.map(([label, state], index) => (
            <li key={label} className="dm-seq flex items-center gap-[0.45em] text-[0.58em] text-[#0b1630]" style={seq(index)}>
              {state === "ok" ? (
                <Check aria-hidden="true" className="size-[1.2em] text-[#047857]" strokeWidth={3} />
              ) : (
                <AlertTriangle aria-hidden="true" className="size-[1.2em] text-[#d97706]" />
              )}
              {label}
              {state === "warn" ? <Pill tone="bg-[#fef3c7] text-[#92400e]">À corriger</Pill> : null}
            </li>
          ))}
        </ul>
      </div>
    </Window>
  );
}

export function AppHardeningDemo() {
  const items = ["Connexion HTTPS", "Validation des saisies", "En-têtes de sécurité", "Stockage chiffré sur mobile"];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-[1em]">
      <div className="relative">
        <Window title="https://votre-application" className="h-[9em]">
          <div className="flex h-full items-center justify-center gap-[0.4em]">
            <Lock aria-hidden="true" className="size-[1.4em] text-[#047857]" />
            <span className="text-[0.6em] font-semibold text-[#047857]">Connexion sécurisée</span>
          </div>
        </Window>
        <span className="dm-pulse absolute -right-[0.8em] -bottom-[0.8em] grid size-[3em] place-items-center rounded-full bg-[#2563eb] text-white">
          <ShieldCheck aria-hidden="true" className="size-[1.6em]" />
        </span>
      </div>
      <ul className="space-y-[0.45em] rounded-[0.7em] bg-[#0b1630] p-[0.8em]">
        {items.map((item, index) => (
          <li key={item} className="flex items-center gap-[0.45em] text-[0.55em] text-white">
            <span className="dm-check grid size-[1.3em] place-items-center rounded-full bg-[#34d399] text-[#0b1630]" style={seq(index)}>
              <Check aria-hidden="true" className="size-[0.8em]" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DataProtectionDemo() {
  const rows = [
    ["Client A", "a.client@…", "05 •• •• ••"],
    ["Client B", "b.client@…", "06 •• •• ••"],
    ["Client C", "c.client@…", "07 •• •• ••"],
  ];
  return (
    <Window title="Données personnelles · démo" className="h-full w-full">
      <div className="p-[0.9em]">
        <div className="flex items-center justify-between">
          <Label>Fichier clients</Label>
          <Pill>
            <Lock aria-hidden="true" className="size-[1em]" />
            Chiffré
          </Pill>
        </div>
        <div className="mt-[0.6em] overflow-hidden rounded-[0.5em] border border-[#e3e8f0]">
          {rows.map(([name, mail, phone], index) => (
            <div key={name} className="grid grid-cols-3 border-b border-[#eef1f6] px-[0.5em] py-[0.4em] text-[0.55em] last:border-b-0">
              <span className="font-semibold text-[#0b1630]">{name}</span>
              <span className="relative text-[#5b6579]">
                {mail}
                <span className="dm-final absolute inset-y-[0.1em] left-0 w-[80%] rounded-[0.2em] bg-[#0b1630]" style={{ animationDelay: `${index * 0.2}s` }} />
              </span>
              <span className="relative text-[#5b6579]">
                {phone}
                <span className="dm-final absolute inset-y-[0.1em] left-0 w-[80%] rounded-[0.2em] bg-[#0b1630]" style={{ animationDelay: `${index * 0.2 + 0.1}s` }} />
              </span>
            </div>
          ))}
        </div>
        <p className="mt-[0.6em] text-[0.55em] text-[#5b6579]">Accès limité aux personnes autorisées</p>
      </div>
    </Window>
  );
}

/* Maintenance & Support */

export function MaintenanceDemo() {
  const entries = [
    ["v1.4", "Correctif", "Erreur d’export corrigée", "bg-[#fee2e2] text-[#b91c1c]"],
    ["v1.4", "Évolution", "Nouveau filtre de recherche", "bg-[#dbeafe] text-[#1d4ed8]"],
    ["v1.3", "Correctif", "Affichage mobile ajusté", "bg-[#fee2e2] text-[#b91c1c]"],
  ];
  return (
    <div className="grid h-full w-full grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] items-center gap-[1em]">
      <div className="relative mx-auto grid size-[5em] place-items-center">
        <span className="absolute inset-0 grid place-items-center rounded-full bg-[#fee2e2] text-[#b91c1c]">
          <Bug aria-hidden="true" className="size-[2.4em]" />
        </span>
        <span className="dm-final absolute inset-0 grid place-items-center rounded-full bg-[#dcfce7] text-[#047857]">
          <Check aria-hidden="true" className="size-[2.4em]" strokeWidth={3} />
        </span>
      </div>
      <div className="space-y-[0.4em] rounded-[0.7em] border border-[#d5dfef] bg-white p-[0.8em]">
        <Label>Journal des versions</Label>
        {entries.map(([version, kind, text, tone], index) => (
          <div key={text} className="dm-seq flex items-center gap-[0.45em]" style={seq(index)}>
            <span className="font-mono text-[0.55em] text-[#5b6579]">{version}</span>
            <Pill tone={tone}>{kind}</Pill>
            <span className="truncate text-[0.55em] text-[#0b1630]">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MonitoringDemo() {
  const charts = [
    ["Processeur", "M0 30 L20 26 L40 28 L60 18 L80 22 L100 14"],
    ["Mémoire", "M0 20 L20 22 L40 18 L60 20 L80 16 L100 18"],
    ["Temps de réponse", "M0 28 L20 24 L40 30 L60 8 L80 24 L100 22"],
  ];
  return (
    <div className="relative h-full w-full">
      <Window title="Supervision · démo" dark className="h-full w-full">
        <div className="grid h-full grid-cols-3 gap-[0.5em] p-[0.8em]">
          {charts.map(([label, path], index) => (
            <div key={label} className="flex flex-col rounded-[0.5em] bg-[#12224a] p-[0.5em]">
              <span className="text-[0.52em] text-[#94a3b8]">{label}</span>
              <svg viewBox="0 0 100 40" className="mt-[0.3em] min-h-0 flex-1" preserveAspectRatio="none" aria-hidden="true">
                <path className="dm-draw" d={path} fill="none" stroke={index === 2 ? "#fbbf24" : "#60a5fa"} strokeWidth="2.5" pathLength="100" />
              </svg>
            </div>
          ))}
        </div>
      </Window>
      <div className="dm-toast absolute right-[0.8em] bottom-[0.8em] flex items-center gap-[0.4em] rounded-[0.5em] bg-white px-[0.6em] py-[0.4em] text-[0.55em] font-semibold text-[#047857] shadow-lg">
        <Check aria-hidden="true" className="size-[1.2em]" strokeWidth={3} />
        Alerte traitée
      </div>
    </div>
  );
}

export function UserAssistDemo() {
  return (
    <Window title="Assistance · démo" className="h-full w-full">
      <div className="flex h-full flex-col gap-[0.45em] p-[0.9em]">
        <div className="flex items-center gap-[0.5em]">
          <span className="grid size-[1.8em] place-items-center rounded-full bg-[#2563eb] text-white">
            <Headphones aria-hidden="true" className="size-[1em]" />
          </span>
          <Label>Équipe support</Label>
          <span className="dm-blink ml-auto size-[0.5em] rounded-full bg-[#34d399]" />
        </div>
        <p className="dm-seq self-end rounded-[0.6em] rounded-br-[0.15em] bg-[#eef3fd] px-[0.6em] py-[0.35em] text-[0.55em] text-[#0b1630]" style={seq(0)}>
          Je n’arrive pas à exporter mon rapport.
        </p>
        <span className="dm-typing flex gap-[0.25em] self-start rounded-[0.6em] bg-[#0b1630] px-[0.6em] py-[0.5em]">
          <span className="size-[0.35em] rounded-full bg-[#94a3b8]" />
          <span className="size-[0.35em] rounded-full bg-[#94a3b8]" />
          <span className="size-[0.35em] rounded-full bg-[#94a3b8]" />
        </span>
        <p className="dm-seq self-start rounded-[0.6em] rounded-bl-[0.15em] bg-[#0b1630] px-[0.6em] py-[0.35em] text-[0.55em] text-white" style={seq(4)}>
          Voici la marche à suivre, étape par étape.
        </p>
        <span className="dm-seq mt-auto flex items-center gap-[0.3em] self-start" style={seq(5)}>
          <Wrench aria-hidden="true" className="size-[1em] text-[#2563eb]" />
          <span className="text-[0.52em] text-[#5b6579]">Guide envoyé</span>
        </span>
      </div>
    </Window>
  );
}
