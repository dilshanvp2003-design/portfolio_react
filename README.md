# Dilshan — Developer Portfolio

A dark, glassmorphism, futuristic developer portfolio built with React, Tailwind CSS, Framer Motion and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to GitHub Pages, Vercel, Netlify, etc.

## Editing content

Everything is centralized so you don't need to touch component code to update text:

- `src/data/config.js` — name, tagline, about text, resume link, email, social links, services, journey steps, about stats
- `src/data/skills.js` — skill groups and levels ("Primary" / "Working Knowledge")
- `src/data/projects.js` — project cards (name, description, tech, GitHub link, live demo link)

## Structure

```
src/
  components/
    Navbar.jsx      Sticky glass navbar, active-section indicator, mobile menu
    Hero.jsx         Hero with animated code editor, particles, gradient blobs
    About.jsx        About + glass stat cards
    Skills.jsx        Interactive tilt skill cards, grouped by category
    Education.jsx    Vertical animated timeline
    Projects.jsx      Project showcase with 3D tilt + gradient border hover
    Services.jsx      4 service cards
    Journey.jsx        Career journey strip
    Contact.jsx        Animated contact form + social links
    Footer.jsx          Minimal footer + back-to-top
    CursorGlow.jsx     Mouse-follow ambient glow
    Reveal.jsx          Scroll-reveal wrapper (Framer Motion)
    BrandIcons.jsx      GitHub / LinkedIn icons (kept as inline SVG since
                        newer lucide-react versions dropped brand icons)
  data/
    config.js
    skills.js
    projects.js
```

## Notes

- Colors, fonts and animation tokens live in `tailwind.config.js`.
- Respects `prefers-reduced-motion`.
- Update `profile.resumeUrl`, `profile.email` and `profile.socials` in
  `src/data/config.js` before you publish this.
