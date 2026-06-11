import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { SKILL_GROUPS } from "../data/content.js";
import { ICON_CDN } from "../data/icons.js";

/* Skills as an inspectable toolkit: hover/focus a tool, the readout
   panel prints where it's been deployed. No bar charts were harmed. */
export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      {/* topo lines — quiet nod to the mountain theme */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
        fill="none"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M0 ${140 + i * 90} C 250 ${90 + i * 90}, 420 ${200 + i * 90}, 650 ${140 + i * 90} S 1000 ${80 + i * 90}, 1200 ${150 + i * 90}`}
            stroke="var(--line)"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading index="03" title="The toolkit" hint="// hover a tool to inspect" />

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-8">
            {SKILL_GROUPS.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 0.08}>
                <p className="mb-3 font-mono text-step--1 text-muted">
                  /{group.group.toLowerCase().replace(/ & /g, "-")}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill.code}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(skill)}
                        onFocus={() => setActive(skill)}
                        className={`flex items-center gap-2 border px-3 py-2 font-mono text-step--1 transition-all duration-200 ${
                          active?.code === skill.code
                            ? "-translate-y-0.5 border-accent bg-accent-dim text-fg"
                            : "border-line bg-surface text-muted hover:-translate-y-0.5 hover:border-accent hover:text-fg"
                        }`}
                      >
                        <img
                          src={`${ICON_CDN}${skill.code}/8b8b85`}
                          alt=""
                          width="14"
                          height="14"
                          loading="lazy"
                          className="h-3.5 w-3.5"
                        />
                        {skill.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* readout panel */}
          <Reveal delay={0.2}>
            <div
              aria-live="polite"
              className="sticky top-24 border border-line bg-surface p-5 font-mono text-step--1 leading-loose"
            >
              <p className="text-muted">
                <span className="text-accent">manav@toolkit</span>:~$ inspect
              </p>
              {active ? (
                <>
                  <p className="mt-3 text-step-1 font-bold text-fg">{active.name}</p>
                  <p className="mt-2 text-muted">
                    status: <span className="text-accent">loaded</span>
                  </p>
                  <p className="text-muted">
                    deployed_in:{" "}
                    {active.usedIn.length > 0 ? (
                      <span className="text-fg">{active.usedIn.join(", ")}</span>
                    ) : (
                      <span className="text-fg">production work</span>
                    )}
                  </p>
                </>
              ) : (
                <p className="mt-3 text-muted">
                  // hover or tab through the tools
                  <span className="animate-pulse text-accent"> ▍</span>
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
