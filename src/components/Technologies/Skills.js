import { DiJavascript } from "react-icons/di";
import { SiGit, SiSass, SiAdobephotoshop } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

export const Skills = [
  {
    slug: "react",
    Component: FaReact,
    title: "React",
    Description: () => <></>,
  },
  {
    slug: "javascript",
    Component: DiJavascript,
    title: "Javascript",
    Description: () => <></>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <></>,
  },
  {
    slug: "html",
    Component: FaHtml5,
    title: "HTML",
    Description: () => <></>,
  },
  {
    slug: "css",
    Component: FaCss3Alt,
    title: "CSS",
    Description: () => <></>,
  },
  {
    slug: "scss",
    Component: SiSass,
    title: "SCSS",
    Description: () => <></>,
  },
  {
    slug: "photoshop",
    Component: SiAdobephotoshop,
    title: "Photoshop",
    Description: () => <></>,
  },
];
