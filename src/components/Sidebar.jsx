import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
  InstagramIcon,
  GmailIcon,
  LeetcodeIcon,
} from "./BrandIcons";
import { sidebarLinks } from "../data/config";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
  instagram: InstagramIcon,
  gmail: GmailIcon,
  leetcode: LeetcodeIcon,
  mail: Mail,
};

export default function Sidebar() {
  return (
    <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="glass flex flex-col items-center gap-1 rounded-full p-2.5">
        {sidebarLinks.map((link, i) => {
          const Icon = iconMap[link.icon] ?? Mail;
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              whileHover={{ scale: 1.12 }}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-cyan-glow"
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-void-card px-2.5 py-1.5 font-mono text-[11px] text-ink-dim opacity-0 shadow-lg shadow-black/30 transition-opacity duration-200 group-hover:opacity-100">
                {link.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    </aside>
  );
}
