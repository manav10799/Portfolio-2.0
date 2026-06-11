import { useRef, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { SITE, SOCIALS } from "../data/content.js";

const BURST_COUNT = 10;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const timers = useRef([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (sent) return;
    const data = new FormData(e.target);
    const subject = encodeURIComponent(
      `Signal from ${data.get("name") || "your portfolio"}`
    );
    const body = encodeURIComponent(data.get("message") || "");
    setSent(true);
    // small beat so the burst lands before the mail client steals focus
    timers.current.push(
      setTimeout(() => {
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      }, 650),
      setTimeout(() => setSent(false), 3500)
    );
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <SectionHeading index="05" title="Send a signal" hint="// response time: faster than my recovery runs" />

      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <p className="font-display text-step-3 font-medium leading-snug">
            Got a product that needs to{" "}
            <span className="text-accent">feel alive</span>? Or a trail
            recommendation?
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-block font-mono text-step-0 text-muted underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
          >
            {SITE.email}
          </a>
          <ul className="mt-10 space-y-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 font-mono text-step--1 text-muted transition-colors hover:text-accent"
                >
                  <span className="h-px w-6 bg-line transition-all duration-300 group-hover:w-10 group-hover:bg-accent" />
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block font-mono text-step--1 text-muted">
                $ whoami
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="w-full border border-line bg-surface px-4 py-3 text-step-0 text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block font-mono text-step--1 text-muted">
                $ cat message.txt
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                required
                placeholder="What are we building?"
                className="w-full resize-y border border-line bg-surface px-4 py-3 text-step-0 text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="relative border border-accent bg-accent px-8 py-3 font-mono text-step--1 font-bold text-accent-contrast transition-colors duration-300 hover:bg-transparent hover:text-accent"
            >
              {sent ? "SIGNAL SENT ●" : "TRANSMIT →"}
              {sent &&
                Array.from({ length: BURST_COUNT }, (_, i) => (
                  <span
                    key={i}
                    className="burst-particle"
                    style={{ "--burst-angle": `${(360 / BURST_COUNT) * i}deg` }}
                    aria-hidden="true"
                  />
                ))}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
