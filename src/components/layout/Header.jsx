import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo-takadev.png";
import { mainNavigation } from "../../data/navigation.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";

function linkClass(isActive, mobile = false) {
  const base = mobile
    ? "block rounded-lg px-2 py-3 text-base font-semibold"
    : "inline-flex min-h-11 items-center rounded-md px-2 text-sm font-semibold";
  const color = isActive ? "text-brand" : "text-ink hover:text-night";
  return `${base} ${color} transition-colors`;
}

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const menuButtonRef = useRef(null);

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    function onChange() {
      if (media.matches) {
        setOpen(false);
      }
    }
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link to="/" className="min-w-0 shrink" aria-label="EPE TAKADEV SPA, accueil">
          <img
            src={logo}
            alt=""
            width="800"
            height="140"
            className="h-10 w-auto max-w-full object-contain sm:h-12"
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNavigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => linkClass(isActive)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden sm:block">
            <Button to="/contact">Demander un devis</Button>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-night lg:hidden"
            aria-expanded={open}
            aria-controls="navigation-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          </button>
        </div>
      </Container>

      <nav
        id="navigation-mobile"
        aria-label="Navigation mobile"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <Container className="flex flex-col gap-3 py-4">
          <ul>
            {mainNavigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => linkClass(isActive, true)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <Button to="/contact" className="w-full">
              Demander un devis
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
