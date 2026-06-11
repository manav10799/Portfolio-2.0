import { motion, useReducedMotion } from "framer-motion";
import RidgeParticles from "../components/RidgeParticles.jsx";
import { SITE } from "../data/content.js";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Intro"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <RidgeParticles />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 border border-line bg-surface/60 px-3 py-1.5 font-mono text-step--1 text-muted backdrop-blur-sm"
        >
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-accent" />
          {SITE.status.toUpperCase()}
        </motion.p>

        <h1 className="font-display text-step-6 leading-[0.95] font-semibold tracking-tight">
          {SITE.tagline.map((text, i) => (
            <span key={text} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                custom={i}
                variants={line}
                initial={reduced ? false : "hidden"}
                animate="show"
              >
                {i === SITE.tagline.length - 1 ? (
                  <>
                    THAT FEEL <span className="text-accent">ALIVE.</span>
                  </>
                ) : (
                  text
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl font-mono text-step--1 leading-relaxed text-muted"
        >
          {SITE.name.toUpperCase()} — {SITE.role.toUpperCase()}
          <br />
          {SITE.sub}
        </motion.p>
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-0 right-0 z-10 flex items-end justify-between px-4 md:px-8"
        aria-hidden="true"
      >
        <span className="hidden font-mono text-step--1 text-muted sm:block">
          {SITE.coords}
        </span>
        <div className="flex items-center gap-3 font-mono text-step--1 text-muted">
          SCROLL
          <span className="flex h-8 w-5 items-start justify-center border border-line p-1">
            <span className="scroll-cue-dot h-1.5 w-1.5 bg-accent" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
