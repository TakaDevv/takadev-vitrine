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
    window.scrollTo(0, 0);
    document.getElementById("contenu")?.focus();
  }, [pathname]);

  return null;
}

function PageFallback() {
  return (
    <p className="px-6 py-24 text-muted" role="status">
      Chargement de la page…
    </p>
  );
}

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-surface">
      <ScrollToTop />
      <SkipLink />
      <Header />
      <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
