import { useEffect, useRef, useState } from "react";

// Frame for a demo: fixed ratio, blueprint background, animation only while on screen.
export default function DemoStage({ label, ratio = "aspect-[16/10]", className = "", children }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setPlaying(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} role="img" aria-label={label} className={`@container relative overflow-clip bg-[#eef3fd] ${ratio} ${className}`}>
      <div
        aria-hidden="true"
        className={`demo-stage absolute inset-0 flex items-center justify-center p-[1.3em] text-[2.5cqw] ${playing ? "is-playing" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
