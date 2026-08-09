// Add, remove or edit project cards here.
// Set github / demo to "#" if a link isn't ready yet.
import balanImage from "../assets/images/balan.png";
import ledgerImage from "../assets/images/ledger.png";
import dostVideo from "../assets/videos/dost video.mp4";
import bookVideo from "../assets/videos/book.mp4";


export const projects = [
{
  name: "StreamX",
  category: "Full Stack WebSite",
  description:
    "A Netflix-style trailer streaming platform for Malayalam cinema, with a language-organised browse page and a seeded catalogue of Malayalam film trailers.",
  tech: ["React", "Django", "MongoDB"],
  github: "https://github.com/dilshanvp2003",
  demo: "https://stream-x-olive.vercel.app/",
  image: balanImage,
},
 {
    name: "Ledgr",
    category: "React Frontend",
    description:
      "A modern fintech frontend website built with React, featuring smooth animations, interactive 3D elements, smart payments, digital wallet, rewards, security, pricing, and developer-focused sections.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/dilshanvp2003-design/ledger",
    demo: "https://ledger-7ute.vercel.app/",
    image: ledgerImage,
  },
{
  name: "Dost",
  category: "Django Web Application",
  description:
    "A business management web application built for Dost, featuring account management, billing, and PDF generation.",
  tech: ["Django", "HTML", "CSS"],
  github: "https://github.com/dilshanvp2003-design/dost",
  demo: "#",
  video: dostVideo,
},
{
  name: "Book System",
  category: "Django Web Application",
  description:
    "A book management system built with Django, featuring book management, user accounts, and database integration.",
  tech: ["HTML", "CSS", "Django", "MySQL"],
  github: "#",
  demo: "#",
  video: bookVideo,
},
];
