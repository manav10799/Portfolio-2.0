import Reveal from "./Reveal.jsx";

export default function SectionHeading({ index, title, hint }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-step--1 text-accent">{index}</span>
        <h2 className="font-display text-step-4 font-medium tracking-tight uppercase">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-line" />
        {hint && (
          <span className="font-mono text-step--1 text-muted">{hint}</span>
        )}
      </div>
    </Reveal>
  );
}
