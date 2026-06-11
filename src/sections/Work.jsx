import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { PROJECTS } from "../data/content.js";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <SectionHeading index="02" title="Selected work" hint="// hover to open the case" />

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.12}>
            <TiltCard className="group h-full">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col border border-line bg-surface transition-colors duration-300 hover:border-accent"
                aria-label={`${project.name} — open live project`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    width="640"
                    height="360"
                    className="aspect-video w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* hover reveal: case-study highlights slide over the shot */}
                  <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-bg/90 p-5 backdrop-blur-sm transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <ul className="space-y-1.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="font-mono text-step--1 text-fg">
                          <span className="text-accent">▸</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-step-2 font-medium">
                      {project.name}
                    </h3>
                    <span className="font-mono text-step--1 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      VISIT ↗
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-step-0 leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-2 py-0.5 font-mono text-step--1 text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
