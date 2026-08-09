import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/config";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-void-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm text-ink">
            {profile.name} 
          </p>
          <p className="font-mono text-xs text-ink-faint">{profile.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            aria-label="GitHub"
            className="text-ink-dim transition-colors hover:text-cyan-glow"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            aria-label="LinkedIn"
            className="text-ink-dim transition-colors hover:text-cyan-glow"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="text-ink-dim transition-colors hover:text-cyan-glow"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <motion.button
          whileHover={{ y: -3 }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-void-border text-ink-dim transition-colors hover:border-cyan-dim/50 hover:text-cyan-glow"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      </div>
    </footer>
  );
}
