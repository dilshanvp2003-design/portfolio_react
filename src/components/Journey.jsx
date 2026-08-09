import Reveal from "./Reveal";
import { journey } from "../data/config";

export default function Journey() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow">
            Journey
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            My growth as a developer
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-void-border bg-void-border sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07} className="h-full">
              <div className="group relative h-full bg-void-card p-6 transition-colors duration-300 hover:bg-void-soft">
                <span className="font-mono text-xs text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-sm font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-dim">
                  {step.desc}
                </p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-glow to-violet-glow transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
