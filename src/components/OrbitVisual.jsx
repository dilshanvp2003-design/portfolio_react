import { motion } from "framer-motion";
import { techIcons } from "../data/techIcons.jsx";

// Split the 10 icons into an inner ring (4) and outer ring (6),
// matching the layout style of a central card surrounded by orbiting badges.
const inner = techIcons.slice(0, 4);
const outer = techIcons.slice(4);

function ringPositions(count, radius, startDeg = -90) {
  return Array.from({ length: count }, (_, i) => {
    const angle = ((startDeg + (360 / count) * i) * Math.PI) / 180;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });
}

function OrbitRing({ items, radius, duration, size = 480 }) {
  const positions = ringPositions(items.length, radius, items === inner ? -45 : -90);

  return (
   <motion.div
  className="absolute inset-0"
  style={{ width: size, height: size }}
  animate={
    typeof window !== "undefined" && window.innerWidth <= 767
      ? {}
      : { rotate: 360 }
  }
  transition={{ duration, repeat: Infinity, ease: "linear" }}
>
      {items.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(${positions[i].x}px, ${positions[i].y}px)`,
          }}
        >
          {/* counter-rotate so the icon stays upright while the ring spins */}
         <motion.div
  animate={
    typeof window !== "undefined" && window.innerWidth <= 767
      ? {}
      : { rotate: -360 }
  }
  transition={{ duration, repeat: Infinity, ease: "linear" }}
  className="group relative -translate-x-1/2 -translate-y-1/2"
>
            <div
              className="glass flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 hover:scale-110 sm:h-12 sm:w-12"
              style={{ boxShadow: `0 0 22px -6px ${tech.color}55` }}
            >
              {tech.render("h-5 w-5 sm:h-[22px] sm:w-[22px]")}
            </div>
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-void-card px-2 py-1 font-mono text-[10px] text-ink-dim opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {tech.name}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function OrbitVisual() {
  return (
    <div className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[440px] sm:w-[440px]">
      {/* faint concentric guide rings */}
      <div className="absolute h-[220px] w-[220px] rounded-full border border-void-border/70 sm:h-[260px] sm:w-[260px]" />
      <div className="absolute h-[340px] w-[340px] rounded-full border border-void-border/50 sm:h-[400px] sm:w-[400px]" />

     <OrbitRing items={inner} radius={95} duration={60} />
<OrbitRing items={outer} radius={175} duration={90} />

      {/* central status card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-2xl shadow-glowCyan sm:h-36 sm:w-36"
       
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-glow">
          Core Skills
        </span>
        <span className="mt-1.5 font-display text-2xl font-bold text-ink sm:text-3xl">
          15+
        </span>
        <span className="mt-0.5 font-mono text-[10px] text-ink-faint">Technologies</span>
      </motion.div>
    </div>
  );
}
