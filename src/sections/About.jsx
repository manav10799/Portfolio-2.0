import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { ABOUT } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <SectionHeading index="01" title={ABOUT.heading} hint="// the human behind the commits" />

      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          {ABOUT.lines.map((text, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={
                  i === 0
                    ? "font-display text-step-2 font-medium leading-snug"
                    : "text-step-0 leading-relaxed text-muted"
                }
              >
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* abstract ridge mark — echoes the hero particles */}
        <Reveal delay={0.2} className="hidden items-center md:flex">
          <svg
            viewBox="0 0 300 160"
            className="w-full"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M0 130 L55 60 L85 95 L130 30 L170 80 L215 45 L260 110 L300 70"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <path
              d="M0 145 L55 80 L85 112 L130 55 L170 100 L215 70 L260 128 L300 92"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            <circle cx="130" cy="30" r="3" fill="var(--accent)" />
            <text
              x="138"
              y="26"
              fill="var(--muted)"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
            >
              you are here
            </text>
          </svg>
        </Reveal>
      </div>

      {/* through the lens — grayscale until you look closer */}
      <Reveal delay={0.1} className="mt-16">
        <p className="mb-4 font-mono text-step--1 text-muted">
          // THROUGH THE LENS
        </p>
        <ul className="flex gap-4 overflow-x-auto pb-4">
          {ABOUT.photos.map((photo) => (
            <li key={photo.src} className="group shrink-0">
              <img
                src={photo.src}
                alt={`Mountain photography by Manav — ${photo.caption}`}
                loading="lazy"
                width="208"
                height="288"
                className="h-72 w-52 object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
              />
              <span className="mt-2 block font-mono text-step--1 text-muted transition-colors group-hover:text-accent">
                {photo.caption}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
