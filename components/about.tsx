"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As an enthusiastic fresher in{" "}
        <span className="font-bold text-blue-600">MERN stack development</span>,
        I&apos;m driven by a passion for crafting{" "}
        <span className="font-bold text-green-600">
          seamless and innovative web solutions
        </span>
        . Through my educational background and personal projects, I&apos;ve
        gained foundational knowledge in{" "}
        <span className="font-bold text-yellow-600">
          MongoDB, Express, React, and Node.js
        </span>
        . While my experience is limited, I&apos;m{" "}
        <span className="font-bold text-purple-600">
          eager to learn and grow in both front-end and back-end development
        </span>
        . In a recent project, I focused on designing{" "}
        <span className="font-bold text-teal-600">user interfaces</span> and
        implementing basic functionalities to improve user experiences. I&apos;m
        driven by the opportunity to create{" "}
        <span className="font-bold text-orange-600">
          dynamic and scalable web applications
        </span>{" "}
        that make a positive impact.
        <span className="italic">
          While I have some familiarity with React.js and Next.js, I&apos;m
          committed to continuous learning and staying updated on emerging
          technologies.
        </span>{" "}
        I&apos;m currently seeking an entry-level position as a software
        developer where I can apply my skills, learn from experienced
        professionals, and contribute to meaningful projects. I&apos;m excited
        about the chance to{" "}
        <span className="font-bold text-purple-600">
          collaborate with talented teams
        </span>{" "}
        and{" "}
        <span className="font-bold text-blue-600">
          bring innovative ideas to life
        </span>
        .
      </p>
    </motion.section>
  );
}
