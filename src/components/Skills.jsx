import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

function SkillCard({ skill }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: tilt.x || tilt.y ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
      className="glass group relative rounded-xl p-4 [perspective:800px] hover:shadow-glowCyan"
    >
      <p className="font-display text-sm font-semibold text-ink">{skill.name}</p>
      <span
        className={`mt-2 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
          skill.level === "Primary"
            ? "bg-cyan-glow/10 text-cyan-glow"
            : "bg-violet-glow/10 text-violet-glow"
        }`}
      >
        {skill.level}
      </span>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-void-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: skill.level === "Primary" ? "90%" : "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-glow to-violet-glow"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-glow">
            Skills
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Tools I build with
          </h2>
        </Reveal>

        <div className="mt-12 space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
