import { useEffect } from "react";

// Pointer parallax: writes two CSS variables once per frame, never React state.
export default function usePointerParallax(ref) {
  useEffect(() => {
    const node = ref.current;
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!node || !media.matches) {
      return undefined;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    function apply() {
      frame = 0;
      node.style.setProperty("--px", x.toFixed(3));
      node.style.setProperty("--py", y.toFixed(3));
    }

    function onMove(event) {
      const rect = node.getBoundingClientRect();
      x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    }

    function onLeave() {
      x = 0;
      y = 0;
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    }

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [ref]);
}
