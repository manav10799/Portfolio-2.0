import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { EXPERIENCE, CERTIFICATES } from "../data/content.js";

/* Career as a climbing route: a rail that draws itself as you scroll,
   newest camp at the top. */
export default function Experience() {
  const trailRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trailRef,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <SectionHeading index="04" title="The route so far" hint="// base camp → summit, in progress" />

      <div ref={trailRef} className="relative ml-2 md:ml-6">
        {/* static track + scroll-driven accent line */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-line" aria-hidden="true" />
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-px origin-top bg-accent"
          style={{ scaleY: scrollYProgress }}
          aria-hidden="true"
        />

        <ol className="space-y-16">
          {EXPERIENCE.map((job, i) => (
            <li key={job.id} className="relative pl-8 md:pl-12">
              <span
                className="absolute top-1.5 -left-[5px] h-[11px] w-[11px] border-2 border-accent bg-bg"
                aria-hidden="true"
              />
              <Reveal delay={i * 0.05}>
                <p className="font-mono text-step--1 text-accent">
                  CAMP {String(EXPERIENCE.length - i).padStart(2, "0")} · {job.timeline.toUpperCase()}
                </p>
                <h3 className="mt-2 font-display text-step-2 font-medium">
                  {job.position}{" "}
                  <span className="text-muted">@ {job.company}</span>
                </h3>
                <p className="mt-1 font-mono text-step--1 text-muted">{job.location}</p>
                <ul className="mt-4 max-w-2xl space-y-2">
                  {job.details.map((d) => (
                    <li key={d} className="flex gap-3 text-step-0 leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal delay={0.1} className="mt-16 ml-2 md:ml-6">
        <p className="font-mono text-step--1 text-muted">
          // CERTIFICATIONS:{" "}
          {CERTIFICATES.map((cert, i) => (
            <span key={cert.title}>
              <a
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="text-fg underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {cert.title}
              </a>
              {i < CERTIFICATES.length - 1 && " · "}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
