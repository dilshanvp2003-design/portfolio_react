import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/config";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    e.target.reset();
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-glow">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let's Build Something Amazing
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-dim">
            Have a project, opportunity or idea? I'd love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass mt-12 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div
                  key={field.name}
                  className={field.name === "subject" ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={field.name}
                    className="mb-1.5 block font-mono text-xs text-ink-faint"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full rounded-lg border border-void-border bg-void-soft px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink-faint focus:border-cyan-dim/60"
                    style={
                      focused === field.name
                        ? { boxShadow: "0 0 0 3px rgba(62,230,224,0.12)" }
                        : {}
                    }
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs text-ink-faint"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full resize-none rounded-lg border border-void-border bg-void-soft px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink-faint focus:border-cyan-dim/60"
                  style={
                    focused === "message"
                      ? { boxShadow: "0 0 0 3px rgba(62,230,224,0.12)" }
                      : {}
                  }
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-glow to-violet-glow px-6 py-3.5 font-mono text-sm font-medium text-void transition-shadow hover:shadow-glowCyan sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {sent ? "Message Sent!" : "Send Message"}
            </motion.button>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={profile.socials.github}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-void-border text-ink-dim transition-all hover:border-cyan-dim/50 hover:text-cyan-glow hover:shadow-glowCyan"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-void-border text-ink-dim transition-all hover:border-cyan-dim/50 hover:text-cyan-glow hover:shadow-glowCyan"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.email}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-void-border text-ink-dim transition-all hover:border-violet-dim/50 hover:text-violet-glow hover:shadow-glowViolet"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
