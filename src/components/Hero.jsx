import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Circle } from "lucide-react";
import { profile } from "../data/config";
import OrbitVisual from "./OrbitVisual";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 2 + Math.random() * 3,
  duration: 5 + Math.random() * 6,
  delay: Math.random() * 5,
  violet: i % 3 === 0,
}));

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black_10%,transparent_75%)]" />

      {/* gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] animate-blob rounded-full bg-cyan-glow/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-[380px] w-[380px] animate-blob rounded-full bg-violet-glow/20 blur-[110px]"
        style={{ animationDelay: "3s" }}
      />

      {/* floating particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute animate-float rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.violet ? "#a78bfa" : "#3ee6e0",
            opacity: 0.5,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: p.violet
              ? "0 0 8px #a78bfa"
              : "0 0 8px #3ee6e0",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-dim/30 bg-cyan-glow/5 px-4 py-1.5 font-mono text-xs text-cyan-glow"
          >
            <Circle className="h-2 w-2 animate-pulseSlow fill-cyan-glow text-cyan-glow" />
            {profile.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-display text-2xl font-medium text-ink-dim sm:text-3xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-dim"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-violet-glow px-6 py-3 font-mono text-sm font-medium text-void transition-transform hover:scale-[1.03] hover:shadow-glowCyan"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-void-border px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-cyan-dim/50 hover:text-cyan-glow"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-void-border px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-violet-dim/50 hover:text-violet-glow"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* right column — orbiting tech stack visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <OrbitVisual />
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-violet-glow/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-2xl bg-cyan-glow/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
