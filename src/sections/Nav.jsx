import { useState } from "react";
import { SITE } from "../data/content.js";

const LINKS = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "skills", href: "#skills" },
  { label: "route", href: "#experience" },
  { label: "signal", href: "#contact" },
];

export default function Nav() {
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  const toggleTheme = () => {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    // canvas + anything reading token colors re-syncs on this
    window.dispatchEvent(new Event("themechange"));
    setLight(next);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8"
      >
        <a
          href="#main"
          className="font-mono text-step--1 font-bold tracking-widest text-fg"
        >
          MA<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 font-mono text-step--1 text-muted transition-colors duration-200 hover:text-accent"
                >
                  /{l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            className="ml-2 flex h-8 w-8 items-center justify-center border border-line font-mono text-step--1 text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            {light ? "☾" : "☀"}
          </button>
        </div>
      </nav>
      <span className="sr-only">{SITE.name}</span>
    </header>
  );
}
