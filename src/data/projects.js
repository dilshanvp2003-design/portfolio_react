// Add, remove or edit project cards here.
// Set github / demo to "#" if a link isn't ready yet.
import balanImage from "../assets/images/balan.png";
import ledgerImage from "../assets/images/ledger.png";
import dostVideo from "../assets/videos/dost video.mp4";
import bookVideo from "../assets/videos/book.mp4";
import shoeImage from "../assets/images/shoe.jpeg";
import sapImage from "../assets/images/sap.jpeg";
import sinetImage from "../assets/images/sinet.jpeg";


export const projects = [
{
  name: "StreamX",
  category: "Full Stack WebSite",
  description:
    "A Netflix-style trailer streaming platform for Malayalam cinema, with a language-organised browse page .",
  tech: ["React", "Django", "MongoDB"],
  github: "https://github.com/dilshanvp2003-design/StreamX",
  demo: "https://stream-x-olive.vercel.app/",
  image: balanImage,
},
{
  name: "Shoe Site",
  category: "HTML & CSS",
  description:
    "A responsive shoe website built using HTML and CSS, featuring a modern layout, product sections, attractive styling, and a user-friendly design.",
  tech: ["HTML", "CSS"],
  github: "https://github.com/dilshanvp2003-design/shoe-site",
  demo: "https://dilshanvp2003-design.github.io/shoe-site/",
  image: shoeImage,
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

{
  name: "SAP",
  category: "HTML & CSS",
  description:
    "A responsive SAP website built using HTML and CSS with a clean, modern layout and user-friendly design.",
  tech: ["HTML", "CSS"],
  github: "https://github.com/dilshanvp2003-design/sap",
  demo: "https://dilshanvp2003-design.github.io/sap/",
  image: sapImage,
},
{
  name: "SINET Project",
  category: "HTML & CSS",
  description:
    "A responsive website built using HTML and CSS with a clean layout, modern design, and user-friendly interface.",
  tech: ["HTML", "CSS"],
  github: "https://github.com/dilshanvp2003-design/sinet-project",
  demo: "https://dilshanvp2003-design.github.io/sinet-project/",
  image: sinetImage,
},
];
