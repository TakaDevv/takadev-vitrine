import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import SkipLink from "./SkipLink.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) {
      return;
    }
    previous.current = pathname;
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("contenu")?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}

// Buttons lean a few pixels toward a fine pointer, then settle back when it leaves.
function useMagneticButtons() {
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) {
      return undefined;
    }

    let current = null;

    function release() {
      if (current) {
        current.classList.remove("is-magnet");
        current.style.removeProperty("--mx");
        current.style.removeProperty("--my");
        current = null;
      }
    }

    function onMove(event) {
      const button = event.target.closest?.(".btn");
      if (button !== current) {
        release();
      }
      if (!button || button.disabled) {
        return;
      }
      current = button;
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      button.classList.add("is-magnet");
      button.style.setProperty("--mx", `${(x * 10).toFixed(1)}px`);
      button.style.setProperty("--my", `${(y * 8).toFixed(1)}px`);
    }

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", release);
    return () => {
      release();
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", release);
    };
  }, []);
}

// Writes `--p` on every [data-parallax] element once per frame while scrolling; CSS does the rest.
function useScrollParallax(pathname) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!media.matches) {
      return undefined;
    }

    let frame = 0;

    function update() {
      frame = 0;
      const half = window.innerHeight / 2;
      for (const node of document.querySelectorAll("[data-parallax]")) {
        // Measure the parent: the node's own box already carries the transform this writes.
        const rect = node.parentElement.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) {
          continue;
        }
        const progress = (half - (rect.top + rect.height / 2)) / (half + rect.height / 2);
        node.style.setProperty("--p", Math.max(-1, Math.min(1, progress)).toFixed(3));
      }
    }

    function schedule() {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    }

    // Lazy pages mount after this effect: measure again once they are in place.
    const late = setTimeout(schedule, 600);
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      clearTimeout(late);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
}

function PageFallback() {
  return (
    <p className="px-6 pt-40 pb-24 text-center text-ink-400" role="status">
      Chargement de la page…
    </p>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useMagneticButtons();
  useScrollParallax(pathname);

  return (
    <div className="flex min-h-svh flex-col bg-night-900">
      <ScrollToTop />
      <SkipLink />
      <Header />
      <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={<PageFallback />}>
          <div key={pathname} className="page-enter">
            <Outlet />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
