import { useEffect, useRef } from "react";

let observer;

// One shared observer for the whole site; each element reveals once, then is released.
function getObserver() {
  if (observer || typeof IntersectionObserver === "undefined") {
    return observer;
  }
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  return observer;
}

export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const io = getObserver();
    if (!node) {
      return undefined;
    }
    if (!io) {
      node.classList.add("is-visible");
      return undefined;
    }
    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
