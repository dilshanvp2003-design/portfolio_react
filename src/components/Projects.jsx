import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import Reveal from "./Reveal";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({ x: py * -6, y: px * 6 });
  };

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-2xl border border-void-border bg-void-card [perspective:1000px] hover:border-transparent"
      >
        {/* Hover Border Effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-glow/40 via-transparent to-violet-glow/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative m-[1px] rounded-2xl bg-void-card">

          {/* PROJECT IMAGE */}
          <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-void-soft to-void-card">
            
            {/* Background Grid */}
         {/* Background Grid */}
<div className="grid-bg absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110" />

{project.video ? (
  <a
    href={project.demo !== "#" ? project.demo : project.video}
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-10 block h-full w-full"
  >
    <video
      src={project.video}
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </a>
) : project.image ? (
  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="relative z-10 block h-full w-full"
  >
    <img
      src={project.image}
      alt={project.name}
      className="h-full w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </a>
) : (
  <Folder
    className="relative z-10 h-14 w-14 text-cyan-glow/70 transition-transform duration-500 group-hover:scale-110 group-hover:text-cyan-glow"
    strokeWidth={1.25}
  />
)}
          </div>

          {/* PROJECT DETAILS */}
          <div className="p-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-violet-glow">
              {project.category}
            </span>

            <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">
              {project.name}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-ink-dim">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-void-border px-2.5 py-1 font-mono text-[11px] text-ink-dim transition-colors duration-300 group-hover:border-cyan-dim/40 group-hover:text-cyan-glow"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-dim transition-colors hover:text-cyan-glow"
              >
                <GithubIcon className="h-4 w-4" />
                Code
              </a>

            <a
  href={project.demo !== "#" ? project.demo : project.video}
  target="_blank"
  rel="noopener noreferrer"
  className="group/link inline-flex items-center gap-1 font-mono text-xs text-ink-dim transition-colors hover:text-violet-glow"
>
  Live Demo
  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
</a>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* SECTION HEADER */}
        <div>
          <span className="font-mono text-sm text-cyan-glow">
            Projects
          </span>

          <h2 className="mt-2 font-display text-4xl font-bold text-ink">
            Things I've built
          </h2>

          <p className="mt-4 max-w-2xl text-ink-dim">
           
            <span className="font-mono text-cyan-glow">
             
            </span>
            
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}