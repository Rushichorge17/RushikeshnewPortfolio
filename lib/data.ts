import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Imaginify from "@/public/Imaginify.png";
import JourneyJot from "@/public/JourneyJot.png";
import AuthNinja from "@/public/AuthNinja.png";
import Goldgym from "@/public/Goldgym.png";
import Gatherguru from "@/public/Gatherguru.png";
import GocarHub from "@/public/GocarHub.png"
import Visualizepro from "@/public/Visualizepro.png"
import Realtynest from "@/public/Realtynest.png"
import NoughtAndCrossRoads from "@/public/NoughtAndCrossRoads.png"
import Todos from "@/public/Todos.png"
import  MonitorPro from "@/public/MonitorPro.png"
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
    tags: ["React", "Tailwind", "API"],
    imageUrl: Goldgym,
    url:"https://goldsgymfitness.vercel.app/"
  },
  {
    title: "GocarHub",
    description:
      "Create a GatherGuru-like Event Web App with HTML forms, Stripe, Tailwind CSS, Clerk auth, Next.js on Vercel, error handling, related events, collaborations, accessibility, and sleek UI.",
    tags: ["React", "Next.js","Api", "Tailwind",],
    imageUrl: GocarHub,
    url: "https://gocarhub.netlify.app"
  },
  {
    title: "MonitorPro",
    description:
      "Create a GatherGuru-like Event Web App with HTML forms, Stripe, Tailwind CSS, Clerk auth, Next.js on Vercel, error handling, related events, collaborations, accessibility, and sleek UI.",
    tags: ["Nextjs","Tailwind","Figma"],
    imageUrl: MonitorPro,
    url:"https://monitorpro.vercel.app/"
  },
  {
    title: "Visualizepro",
    description:
      "Create a GatherGuru-like Event Web App with HTML forms, Stripe, Tailwind CSS, Clerk auth, Next.js on Vercel, error handling, related events, collaborations, accessibility, and sleek UI.",
    tags: ["Html","css","javascript"],
    imageUrl: Visualizepro,
    url:"https://visualizepro.netlify.app"
  },
  {
    title: "Realtynest",
    description:
      "Create a GatherGuru-like Event Web App with HTML forms, Stripe, Tailwind CSS, Clerk auth, Next.js on Vercel, error handling, related events, collaborations, accessibility, and sleek UI.",
      tags: ["Html","css","javascript"],
      imageUrl: Realtynest,
    url:"https://realtynest.netlify.app/"
  },
  {
    title: "NoughtAndCrossRoads",
    description:
      "Create a GatherGuru-like Event Web App with HTML forms, Stripe, Tailwind CSS, Clerk auth, Next.js on Vercel, error handling, related events, collaborations, accessibility, and sleek UI.",
    tags: ["React", "Next.js", "Mongodb", "Tailwind", "stripe"],
    imageUrl:NoughtAndCrossRoads,
    url:"https://noughtandcrossroads.netlify.app/"
  },
  {
    title: "ListifyTaskTracker",
    description:
      "Create a GatherGuru-like Event Web App with HTML forms, Stripe, Tailwind CSS, Clerk auth, Next.js on Vercel, error handling, related events, collaborations, accessibility, and sleek UI.",
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
