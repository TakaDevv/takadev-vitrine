import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { company } from "../../data/company.js";
import { mainNavigation } from "../../data/navigation.js";
import Button from "../common/Button.jsx";
import Container from "../common/Container.jsx";
import logo from "../../assets/logo-takadev.png";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuButtonRef = useRef(null);

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  // Slides away while reading down, comes back as soon as the visitor scrolls up.
  useEffect(() => {
    let last = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 480);
        last = y;
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

    document.documentElement.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const solid = scrolled || open;
  const tucked = hidden && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,transform] duration-500 ease-premium ${
          tucked ? "-translate-y-full focus-within:translate-y-0" : ""
        } ${
          solid
            ? "border-line bg-night-800/90 shadow-[0_10px_30px_-24px_rgb(11_22_48/0.5)] backdrop-blur-md"
            : "theme-dark border-transparent bg-transparent"
        }`}
      >
        <Container
          className={`flex items-center justify-between gap-4 transition-[height] duration-300 ease-premium ${
            scrolled ? "h-16" : "h-16 lg:h-20"
          }`}
        >
          {/* The official logo has a white ground: it sits on a white plate over the navy hero. */}
          <Link
            to="/"
            className={`shrink-0 rounded-[10px] bg-white transition-[padding,box-shadow] duration-300 ease-premium ${
              solid ? "px-0 py-0" : "px-3 py-2 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.6)]"
            }`}
          >
            <img
              src={logo}
              alt="EPE TAKADEV SPA, filiale du CERIST — accueil"
              width="800"
              height="140"
              className="h-7 w-auto sm:h-8 lg:h-9"
            />
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center">
              {mainNavigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className="nav-link inline-flex h-11 items-center rounded-md px-3 text-[0.94rem] font-medium text-ink-400 transition-colors duration-150 hover:text-ink-50 aria-[current=page]:text-ink-50"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <Button to="/contact" arrow className="min-h-10 px-4 text-sm">
                Parlons de votre projet
              </Button>
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-line-strong text-ink-50 transition-colors hover:border-blue-400 lg:hidden"
              aria-expanded={open}
              aria-controls="navigation-mobile"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
              <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            </button>
          </div>
        </Container>
        <span aria-hidden="true" className="scroll-progress" />
      </header>

      {/* Sibling of the header: its backdrop-filter would otherwise trap this fixed panel. */}
      <div
        id="navigation-mobile"
        inert={!open}
        className={`mobile-menu fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-night-900 lg:hidden ${
          open ? "is-open" : ""
        }`}
      >
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
        <Container className="relative flex min-h-full flex-col justify-between gap-10 py-8">
          <nav aria-label="Navigation mobile">
            <ul className="divide-y divide-line border-y border-line">
              {mainNavigation.map((item, index) => (
                <li key={item.to} className="menu-item" style={{ "--i": index }}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className="group flex min-h-16 items-center justify-between gap-4 font-display text-2xl font-semibold tracking-tight text-ink-300 transition-colors aria-[current=page]:text-ink-50"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-ink-400 group-aria-[current=page]:text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu-item grid gap-5" style={{ "--i": mainNavigation.length }}>
            <Button to="/contact" arrow className="w-full">
              Parlons de votre projet
            </Button>
            <p className="text-sm leading-relaxed text-ink-400">
              <a href={company.phoneHref} className="link-u text-ink-50">
                {company.phoneDisplay}
              </a>
              <span aria-hidden="true"> · </span>
              <a href={`mailto:${company.email}`} className="link-u break-all text-ink-50">
                {company.email}
              </a>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
