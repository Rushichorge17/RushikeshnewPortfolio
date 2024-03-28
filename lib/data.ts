import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Imaginify from "@/public/Imaginify.png";
import JourneyJot from "@/public/JourneyJot.png";
import AuthNinja from "@/public/AuthNinja.png";
import Goldgym from "@/public/Goldgym.png";
import Gatherguru from "@/public/Gatherguru.png";
import CarHub from "@/public/CarHub.png";
import Visualizepro from "@/public/Visualizepro.png";
import Realtynest from "@/public/Realtynest.png";
import NoughtAndCrossRoads from "@/public/NoughtAndCrossRoads.png";
import Todos from "@/public/Todos.png";
import  MonitorPro from "@/public/MonitorPro.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const servicesData = [
  {
    title: "Web Developer",
    description:
      "Development of custom web pages. Using current technologies and libraries of the labor field.",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Responsive Design",
    description:
      "Expert in responsive design with CSS,Tailwind, and other frameworks, ensuring adaptable web interfaces for optimal user experience.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "SAAS Application",

    description:
      " I build  user-friendly SaaS platform streamlining invoicing for small businesses ",
    icon: React.createElement(FaReact),
  },
] as const;

export const projectsData = [
  {
    title: "Imaginify",
    description:
      "Developing a SaaS app for channel-specific image transformations.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Stripe"],
    imageUrl: Imaginify,
    url:"https://imaginifystudio.vercel.app/"
  },
  {
    title: "JourneyJot Balogwebsite",
    description:
      "Utilizing React Router, Tailwind CSS, OAuth, Redux, MongoDB with Express.js, and Firebase for a streamlined web solution.",
    tags: ["Mongodb", "Express", "React", "Nodejs"],
    imageUrl: JourneyJot,
    url:"https://journeyjot-x2f3.onrender.com/"
  },
  {
    title: "AuthNinja",
    description:
      "AuthNinja is a Next.js-based authentication system with OAuth support for Google and GitHub. It offers advanced security features like two-factor authentication and user roles for seamless access control.",
    tags: ["React", "Next.js", "NextAuthjs", "Typescript"],
    imageUrl: AuthNinja,
    url:"https://authninja.vercel.app/"
   
  },
  {
    title: "Gather-Guru",
    description:
    "Create a GatherGuru-like Event Web App with HTML forms, Stripe, Tailwind CSS, Clerk auth, Next.js on Vercel, error handling, related events, collaborations, accessibility, and sleek UI.",
  tags: ["React", "Next.js", "Mongodb", "Tailwind", "stripe"],
  imageUrl: Gatherguru,
  url:"https://gather-guru.vercel.app/"
  },
  {
    title: "Golds Gym Fitness",
    description:
      "Rendering JSX and implementing exercise details. Dynamic routingwith React Router. Fetching exercise data and integrating APIs. Responsive design for mobile.",
    tags: ["Javascript","React", "Tailwind", "API"],
    imageUrl: Goldgym,
    url:"https://goldsgymfitness.vercel.app/"
  },
  {
    title: "GocarHub",
    description:
      "The project focuses on creating a car showcase platform using Next.js, covering features like advanced search, server-side rendering, and responsive design. It's ideal for React developers looking to enhance their skills.",
    tags: ["React","Typescript", "Next.js","Api", "Tailwind",],
    imageUrl:CarHub,
    url: "https://gocarhub.netlify.app"
  },
  {
    title: "MonitorPro",
    description:
      "The project builds a responsive website using Next.js, Tailwind CSS, and Figma. It emphasizes modern development practices, focusing on modularity and responsiveness.",
    tags: ["Nextjs","Typescript","Tailwind","Figma" ,"Css",],
    imageUrl: MonitorPro,
    url:"https://monitorpro.vercel.app/"
  },
  {
    title: "Visualizepro",
    description:
      " The project enhances a website clone of Apple's platform, emphasizing CSS animations, addressing battery drain concerns, and optimizing HTML, JavaScript, and CSS usage for dynamic web experiences.",
    tags: ["Html","css","javascript"],
    imageUrl: Visualizepro,
    url:"https://visualizepro.netlify.app"
  },
  {
    title: "Realtynest",
    description:

    "This project is an enhanced animation website that incorporates CSS animations to enhance its visual appeal, elevating its professional presentation.",      tags: ["Html","css","javascript"],
      imageUrl: Realtynest,
    url:"https://realtynest.netlify.app/"
  },
  {
    title: "NoughtAndCrossRoads",
    description:
      "NoughtAndCrossRoads is simple X or O  game two player can play at a time",
    tags: ["Html","Css","Javascript"],
    imageUrl:NoughtAndCrossRoads,
    url:"https://noughtandcrossroads.netlify.app/"
  },
  {
    title: "ListifyTaskTracker",
    description:
    "ListifyTaskTracker is an advanced todo application designed to efficiently manage daily tasks with ease and convenience."  ,
      tags: ["React",  "Javascript"],
    imageUrl:Todos,
    url:"https://listifytasktracker.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Shadcn Ui",
  "Framer Motion",
  "Figma",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "Python",
  "Java",
  "Git",
  "JWT",
  "Postman",
] as const;
