import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TerminalSquare } from "lucide-react";
import { navLinks, profile } from "../data/config";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
            scrolled ? "glass py-2.5 shadow-glowCyan/10 shadow-lg" : "py-2"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
          >
           
            <span>
              Dilshan
              <span className="text-cyan-glow">.</span>Vp
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="group relative px-4 py-2 font-mono text-[13px] text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-glow to-violet-glow transition-transform duration-300 group-hover:scale-x-100 ${
                    active === link.href ? "scale-x-100" : ""
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-cyan-dim/40 bg-cyan-glow/5 px-4 py-2 font-mono text-[13px] text-cyan-glow transition-all hover:bg-cyan-glow/10 hover:shadow-glowCyan"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="text-ink"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-6 md:hidden"
          >
            <div className="glass mt-2 flex flex-col rounded-2xl p-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="border-b border-void-border py-3 font-mono text-sm text-ink-dim last:border-none hover:text-cyan-glow"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={profile.resumeUrl}
                className="mt-3 rounded-full border border-cyan-dim/40 bg-cyan-glow/5 px-4 py-2 text-center font-mono text-sm text-cyan-glow"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
