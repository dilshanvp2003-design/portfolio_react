import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-glow">
            Certificates
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Learning, verified
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-void-border bg-void-card p-6"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-glow/0 to-violet-glow/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-glow/25 group-hover:to-violet-glow/25 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 transition-transform duration-500 group-hover:scale-110">
                    <Award className="h-6 w-6 text-cyan-glow" strokeWidth={1.75} />
                  </div>

                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs text-ink-faint">
                    {cert.issuer} · {cert.date}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-dim">
                      <BadgeCheck className="h-3.5 w-3.5 text-violet-glow" />
                      Verified
                    </span>
                    <a
                      href={cert.credentialUrl}
                      className="inline-flex items-center gap-1 font-mono text-xs text-ink-dim transition-colors hover:text-cyan-glow"
                    >
                      View
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
