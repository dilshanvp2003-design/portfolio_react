import { motion } from "framer-motion";
import { Globe, LayoutTemplate, Server, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data/config";

const iconMap = { Globe, LayoutTemplate, Server, BarChart3 };

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-glow">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            What I can do for you
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-void-border bg-void-card p-6"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-glow/0 to-violet-glow/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-glow/30 group-hover:to-violet-glow/30 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-cyan-glow" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-dim">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
