import {
  siReact,
  siFlutter,
  siMysql,
  siDjango,
  siPython,
  siMongodb,
  siHtml5,
  siCss,
  siJavascript,
  siJquery,
  siTailwindcss,
  siPostgresql,
  siSqlite,
} from "simple-icons";

import {
  ChartPie,
  FileSpreadsheet,
  Code2,
} from "lucide-react";


function BrandSvg({ path, className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}


// Central place to add/remove technologies
export const techIcons = [

  // Frontend
  {
    name: "React",
    color: "#61DAFB",
    render: (c) => (
      <BrandSvg path={siReact.path} className={c} />
    ),
  },

  {
    name: "JavaScript",
    color: "#F7DF1E",
    render: (c) => (
      <BrandSvg path={siJavascript.path} className={c} />
    ),
  },

  {
    name: "HTML5",
    color: "#E34F26",
    render: (c) => (
      <BrandSvg path={siHtml5.path} className={c} />
    ),
  },

  {
    name: "CSS3",
    color: "#1572B6",
    render: (c) => (
      <BrandSvg path={siCss.path} className={c} />
    ),
  },

  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    render: (c) => (
      <BrandSvg path={siTailwindcss.path} className={c} />
    ),
  },

  {
    name: "jQuery",
    color: "#0769AD",
    render: (c) => (
      <BrandSvg path={siJquery.path} className={c} />
    ),
  },


  // Backend
  {
    name: "Python",
    color: "#3776AB",
    render: (c) => (
      <BrandSvg path={siPython.path} className={c} />
    ),
  },

  {
    name: "Django",
    color: "#3ee6e0",
    render: (c) => (
      <BrandSvg path={siDjango.path} className={c} />
    ),
  },

  {
    name: "Flutter",
    color: "#02569B",
    render: (c) => (
      <BrandSvg path={siFlutter.path} className={c} />
    ),
  },


  // Databases
  {
    name: "MySQL",
    color: "#4479A1",
    render: (c) => (
      <BrandSvg path={siMysql.path} className={c} />
    ),
  },

  {
    name: "MongoDB",
    color: "#47A248",
    render: (c) => (
      <BrandSvg path={siMongodb.path} className={c} />
    ),
  },

  {
    name: "PostgreSQL",
    color: "#4169E1",
    render: (c) => (
      <BrandSvg path={siPostgresql.path} className={c} />
    ),
  },

  {
    name: "SQLite",
    color: "#003B57",
    render: (c) => (
      <BrandSvg path={siSqlite.path} className={c} />
    ),
  },


  // Data / Business
  {
    name: "Power BI",
    color: "#F2C811",
    render: (c) => (
      <ChartPie
        className={c}
        strokeWidth={1.75}
      />
    ),
  },

  {
    name: "Excel",
    color: "#21A366",
    render: (c) => (
      <FileSpreadsheet
        className={c}
        strokeWidth={1.75}
      />
    ),
  },


  // GUI / Desktop
  {
    name: "Tkinter",
    color: "#3776AB",
    render: (c) => (
      <Code2
        className={c}
        strokeWidth={1.75}
      />
    ),
  },

];