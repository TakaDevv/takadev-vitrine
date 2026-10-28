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

function PageFallback() {
  return (
    <p className="px-6 pt-40 pb-24 text-center text-ink-400" role="status">
      Chargement de la page…
    </p>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

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
