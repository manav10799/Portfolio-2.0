import { SITE } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-6 font-mono text-step--1 text-muted sm:flex-row sm:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name.toUpperCase()}
        </p>
        <p>
          BUILT AT SEA LEVEL<span className="text-accent">,</span> DREAMING
          HIGHER ▲
        </p>
      </div>
    </footer>
  );
}
