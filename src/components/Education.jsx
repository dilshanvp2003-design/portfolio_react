import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data/config";

const items = [
  {
    title: profile.education.diploma,
    school: profile.education.diplomaSchool,
    desc: "Focused, hands-on training across full-stack web development, databases and modern frameworks.",
  },
  {
    title: profile.education.degree,
    school: profile.education.degreeSchool,
    desc: "A foundation in structured thinking, communication and research that carries into how I write and document code.",
  },
];

const languages = [
  {
    name: "English",
    level: "Professional",
  },
  {
    name: "Hindi",
    level: "Fluent",
  },
  {
    name: "Malayalam",
    level: "Native",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Section heading */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow">
            Education
          </p>

          <h2 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Where it started
          </h2>
        </Reveal>

        {/* Education timeline */}
        <div className="relative mt-16 space-y-14 pl-10">

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-cyan-glow via-violet-glow to-transparent"
          />

          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.15}
              className="relative"
            >
              <span className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-void ring-2 ring-cyan-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glowCyan" />
              </span>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-3">

                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-violet-glow" />

                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 font-mono text-xs text-ink-faint">
                      {item.school}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Languages */}
        <Reveal delay={0.3}>
          <div className="mt-20">

            <div className="mb-6 flex items-center gap-3">
              <Languages className="h-5 w-5 text-violet-glow" />

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow">
                  Languages
                </p>

                <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
                  Communication
                </h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="glass group rounded-2xl p-5 transition-all duration-300 hover:border-cyan-dim/30"
                >
                  <div className="flex items-center justify-between">

                    <h4 className="font-display text-lg font-semibold text-ink">
                      {language.name}
                    </h4>

                    <span className="h-2 w-2 rounded-full bg-cyan-glow shadow-glowCyan" />

                  </div>

                  <p className="mt-2 font-mono text-xs text-ink-faint">
                    {language.level}
                  </p>

                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-void-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width:
                          language.name === "English"
                            ? "80%"
                            : language.name === "Hindi"
                            ? "85%"
                            : "100%",
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.1,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-glow to-violet-glow"
                    />
                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}