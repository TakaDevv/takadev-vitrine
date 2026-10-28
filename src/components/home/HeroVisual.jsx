const CENTER = 260;

// Six disciplines orbiting one core: the visual metaphor of an integrated studio.
const nodes = [
  { label: "WEB", angle: -90 },
  { label: "MOBILE", angle: -30 },
  { label: "CLOUD", angle: 30 },
  { label: "DATA & IA", angle: 90 },
  { label: "SÉCURITÉ", angle: 150 },
  { label: "LOGICIEL", angle: 210 },
].map((node) => {
  const rad = (node.angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    ...node,
    x: CENTER + 170 * cos,
    y: CENTER + 170 * sin,
    lx: CENTER + 202 * cos,
    ly: CENTER + 202 * sin + (Math.abs(sin) > 0.9 ? sin * 6 : 4),
    anchor: Math.abs(cos) < 0.2 ? "middle" : cos > 0 ? "start" : "end",
  };
});

const ticks = Array.from({ length: 48 }, (_, index) => {
  const rad = (index * 7.5 * Math.PI) / 180;
  const inner = index % 4 === 0 ? 232 : 236;
  return {
    x1: CENTER + inner * Math.cos(rad),
    y1: CENTER + inner * Math.sin(rad),
    x2: CENTER + 242 * Math.cos(rad),
    y2: CENTER + 242 * Math.sin(rad),
  };
});

const steps = ["Analyse", "Conception", "Développement", "Tests"];
const bars = [38, 62, 48, 80, 56, 92, 70];

export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="parallax absolute inset-0" style={{ "--depth": 0.4 }}>
        <svg viewBox="0 0 520 520" className="size-full" fill="none">
          <defs>
            <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={CENTER} cy={CENTER} r="200" fill="url(#hv-glow)" />
          <circle cx={CENTER} cy={CENTER} r="242" stroke="rgb(148 163 184 / 0.16)" strokeDasharray="2 7" />
          {ticks.map((tick, index) => (
            <line key={index} {...tick} stroke="rgb(148 163 184 / 0.28)" />
          ))}
          <circle cx={CENTER} cy={CENTER} r="170" stroke="rgb(148 163 184 / 0.2)" />
          <circle cx={CENTER} cy={CENTER} r="92" stroke="rgb(59 130 246 / 0.35)" />
        </svg>
      </div>

      <div className="parallax absolute inset-0" style={{ "--depth": 0.9 }}>
        <svg viewBox="0 0 520 520" className="size-full" fill="none">
          <defs>
            <linearGradient id="hv-core" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          {nodes.map((node, index) => (
            <g key={node.label}>
              <line x1={CENTER} y1={CENTER} x2={node.x} y2={node.y} stroke="rgb(59 130 246 / 0.32)" />
              <line
                className="pulse"
                x1={CENTER}
                y1={CENTER}
                x2={node.x}
                y2={node.y}
                pathLength="100"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ "--d": `${index * 0.6}s` }}
              />
            </g>
          ))}
          {nodes.map((node) => (
            <g key={`${node.label}-node`}>
              <circle cx={node.x} cy={node.y} r="15" fill="#3b82f6" fillOpacity="0.12" />
              <circle cx={node.x} cy={node.y} r="5" fill="#0c1426" stroke="#60a5fa" strokeWidth="1.5" />
              <text
                x={node.lx}
                y={node.ly}
                textAnchor={node.anchor}
                className="font-mono"
                fontSize="10.5"
                letterSpacing="1.4"
                fill="#94a3b8"
              >
                {node.label}
              </text>
            </g>
          ))}
          <rect x="214" y="214" width="92" height="92" rx="20" fill="#101a30" stroke="url(#hv-core)" strokeWidth="1.5" />
          <rect x="226" y="226" width="68" height="68" rx="14" stroke="rgb(148 163 184 / 0.18)" />
          <text
            x={CENTER}
            y="271"
            textAnchor="middle"
            className="font-display"
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.5"
            fill="#f8fafc"
          >
            TD
          </text>
        </svg>
      </div>

      <div className="parallax absolute inset-0" style={{ "--depth": 1.7 }}>
        <div className="hero-panel absolute top-[-7%] right-[-6%] w-48 xl:w-52">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <span className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-400 uppercase">Projet · étapes</span>
            <span className="size-1.5 rounded-full bg-success shadow-[0_0_8px_rgb(52_211_153/0.9)]" />
          </div>
          <ul className="space-y-2 px-4 py-3 font-mono text-[0.72rem]">
            {steps.map((step, index) => (
              <li
                key={step}
                className="hero-step flex items-center justify-between text-ink-300"
                style={{ "--d": `${1200 + index * 180}ms` }}
              >
                <span>{step}</span>
                <span className={index < 3 ? "text-cyan-400" : "text-ink-400"}>{index < 3 ? "✓" : "…"}</span>
              </li>
            ))}
          </ul>
          <div className="mx-4 mb-4 h-1 overflow-hidden rounded-full bg-night-600">
            <div className="hero-progress h-full w-full bg-linear-to-r from-blue-500 to-cyan-400" />
          </div>
        </div>

        <div className="hero-panel absolute bottom-[-6%] left-[-4%] w-44 p-4 xl:w-48">
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-400 uppercase">Tableau de bord</p>
          <div className="mt-4 flex h-20 items-end gap-1.5">
            {bars.map((height, index) => (
              <span
                key={index}
                className={`hero-bar flex-1 rounded-t-[3px] ${index === 5 ? "bg-cyan-400" : "bg-blue-500/55"}`}
                style={{ height: `${height}%`, "--d": `${1300 + index * 90}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
