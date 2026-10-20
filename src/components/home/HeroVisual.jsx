export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <svg viewBox="0 0 640 520" className="h-auto w-full" fill="none">
        <rect width="640" height="520" rx="32" fill="var(--color-night)" />
        {Array.from({ length: 15 }, (_, index) => (
          <line
            key={`v-${index}`}
            x1={40 + index * 40}
            y1="0"
            x2={40 + index * 40}
            y2="520"
            stroke="white"
            strokeOpacity="0.06"
          />
        ))}
        {Array.from({ length: 12 }, (_, index) => (
          <line
            key={`h-${index}`}
            x1="0"
            y1={40 + index * 40}
            x2="640"
            y2={40 + index * 40}
            stroke="white"
            strokeOpacity="0.06"
          />
        ))}
        <circle cx="470" cy="150" r="108" stroke="var(--color-brand)" strokeOpacity="0.45" />
        <path
          d="M150 190 L300 120 L470 150 L360 280 L210 250 Z"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <circle cx="150" cy="190" r="8" fill="white" />
        <circle className="hero-node" cx="300" cy="120" r="10" fill="var(--color-brand)" />
        <circle cx="470" cy="150" r="8" fill="white" />
        <circle cx="360" cy="280" r="8" fill="var(--color-brand)" />
        <circle cx="210" cy="250" r="8" fill="white" />
        <rect x="48" y="332" width="340" height="140" rx="18" fill="white" fillOpacity="0.06" />
        <rect x="72" y="360" width="168" height="12" rx="6" fill="white" fillOpacity="0.9" />
        <rect x="72" y="390" width="112" height="12" rx="6" fill="var(--color-brand)" />
        <rect x="72" y="420" width="210" height="12" rx="6" fill="white" fillOpacity="0.35" />
        <rect x="430" y="332" width="72" height="64" rx="14" fill="white" fillOpacity="0.08" />
        <rect x="514" y="332" width="72" height="64" rx="14" fill="var(--color-brand)" />
        <rect x="430" y="408" width="72" height="64" rx="14" fill="white" fillOpacity="0.16" />
        <rect x="514" y="408" width="72" height="64" rx="14" fill="white" fillOpacity="0.08" />
      </svg>
    </div>
  );
}
