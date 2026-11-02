import { Check, ShieldCheck } from "lucide-react";

// Decorative product window: an illustration of a delivery workflow, not a real TAKADEV tool.
// Every value below is neutral demo content and is labelled as such on screen.
const stages = [
  { label: "Analyse", state: "done" },
  { label: "Conception", state: "done" },
  { label: "Développement", state: "active" },
  { label: "Tests", state: "todo" },
  { label: "Production", state: "todo" },
];
const sections = ["Vue d’ensemble", "Livrables", "Environnements", "Sécurité", "Support"];
const bars = [38, 55, 46, 70, 62, 84, 58];
const environments = [
  { label: "Recette", tone: "bg-success" },
  { label: "Pré-production", tone: "bg-blue-400 hero-blink" },
  { label: "Production", tone: "bg-line-strong" },
];

export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[38rem] sm:py-8 sm:pr-4 sm:pl-6">
      <div className="parallax" style={{ "--depth": 0.5 }}>
        <div className="overflow-hidden rounded-[18px] border border-line-strong bg-night-800 shadow-[0_50px_100px_-40px_rgb(0_0_0/0.75),inset_0_1px_0_rgb(255_255_255/0.06)]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="size-2.5 rounded-full bg-night-600" />
            <span className="size-2.5 rounded-full bg-night-600" />
            <span className="size-2.5 rounded-full bg-night-600" />
            <span className="ml-3 font-mono text-xs text-ink-400">projet / tableau de suivi</span>
            <span className="ml-auto rounded-md border border-line-strong px-2 py-0.5 font-mono text-[0.65rem] text-ink-400">
              illustration
            </span>
          </div>

          <div className="grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <ul className="hidden space-y-1 border-r border-line p-3 text-[0.8rem] text-ink-400 sm:block">
              {sections.map((section, index) => (
                <li
                  key={section}
                  className={`rounded-lg px-2.5 py-2 ${index === 0 ? "bg-blue-600/25 text-ink-50" : ""}`}
                >
                  {section}
                </li>
              ))}
            </ul>

            <div className="space-y-4 p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-bold text-ink-50">Cycle de livraison</span>
                <span className="font-mono text-[0.65rem] text-ink-400">sprint en cours</span>
              </div>

              <ul className="space-y-2.5">
                {stages.map((stage, index) => (
                  <li
                    key={stage.label}
                    className={`hero-step grid grid-cols-[6.5rem_minmax(0,1fr)_1rem] items-center gap-3 text-[0.8rem] ${
                      stage.state === "todo" ? "text-ink-400" : stage.state === "active" ? "text-ink-50" : "text-ink-300"
                    }`}
                    style={{ "--d": `${900 + index * 140}ms` }}
                  >
                    <span>{stage.label}</span>
                    <span className="h-1.5 overflow-hidden rounded-full bg-line-strong/60">
                      {stage.state !== "todo" ? (
                        <span
                          className={`block h-full rounded-full bg-blue-600 ${stage.state === "active" ? "hero-progress shimmer" : ""}`}
                        />
                      ) : null}
                    </span>
                    {stage.state === "done" ? (
                      <Check size={14} strokeWidth={2.4} className="text-blue-400" />
                    ) : stage.state === "active" ? (
                      <span className="hero-blink ml-0.5 size-2 rounded-full bg-blue-400" />
                    ) : (
                      <span />
                    )}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-3">
                <div className="rounded-xl border border-line p-3.5">
                  <p className="font-mono text-[0.65rem] text-ink-400">Activité · données fictives</p>
                  <div className="mt-3 flex h-16 items-end gap-1.5">
                    {bars.map((height, index) => (
                      <span
                        key={index}
                        className={`hero-bar hero-bar-live flex-1 rounded-t-[3px] ${index === 5 ? "bg-blue-600" : "bg-blue-400/35"}`}
                        style={{ height: `${height}%`, "--d": `${1200 + index * 80}ms` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2.5 rounded-xl border border-line p-3.5">
                  <p className="font-mono text-[0.65rem] text-ink-400">Environnements</p>
                  {environments.map((env) => (
                    <p key={env.label} className="flex items-center gap-2 text-[0.8rem] text-ink-300">
                      <span className={`size-2 rounded-full ${env.tone}`} />
                      {env.label}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax absolute inset-0 hidden sm:block" style={{ "--depth": 1.4 }}>
        <div className="hero-float hero-panel absolute bottom-1 left-0 w-56 px-4 py-3.5">
          <p className="font-mono text-[0.65rem] text-ink-400">pipeline · build</p>
          <p className="mt-2 flex items-center gap-2.5 text-sm text-ink-50">
            <span className="grid size-6 place-items-center rounded-md bg-success/15">
              <Check size={14} strokeWidth={2.4} className="text-success" />
            </span>
            Tests automatisés passés
          </p>
        </div>
        <div className="hero-float hero-panel absolute top-0 right-0 w-52 px-4 py-3.5" style={{ "--float-delay": "-3s" }}>
          <p className="flex items-center gap-2.5 text-sm text-ink-50">
            <ShieldCheck size={18} strokeWidth={1.6} className="text-blue-400" />
            Accès sécurisés
          </p>
          <p className="mt-1.5 font-mono text-[0.65rem] text-ink-400">authentification · rôles</p>
        </div>
        <div
          className="hero-float absolute right-6 -bottom-1 flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 shadow-lift"
          style={{ "--float-delay": "-5s" }}
        >
          <span className="font-mono text-xs font-semibold text-[#2563eb]">GET /api</span>
          <span className="font-mono text-xs text-[#5b6579]">200 · ok</span>
        </div>
      </div>
    </div>
  );
}
