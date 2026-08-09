import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, LineChart } from "lucide-react";
import Reveal from "./Reveal";
import { profile, aboutStats } from "../data/config";

const icons = [Code2, Layers, Smartphone, LineChart];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow">
            About
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Who I am
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-dim">
              {profile.about}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-ink-dim">
              <span className="rounded-full border border-void-border px-3 py-1.5">
                {profile.education.diploma} · {profile.education.diplomaSchool}
              </span>
              <span className="rounded-full border border-void-border px-3 py-1.5">
                {profile.education.degree}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutStats.map((stat, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={stat.label} delay={0.15 + i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="glass group relative overflow-hidden rounded-2xl p-5"
                  >
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-glow/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-glow/20" />
                    <Icon className="h-6 w-6 text-cyan-glow" strokeWidth={1.75} />
                    <p className="mt-4 font-display text-sm font-semibold text-ink">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-mono text-xs text-ink-dim">
                      {stat.value}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
