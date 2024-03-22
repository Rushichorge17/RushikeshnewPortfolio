"use client"
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Declare module to suppress TypeScript error
declare module "react-vertical-timeline-component";

// Component definition
export default function Services() {
  // Define services data directly inside the component
  const servicesData = [
    {
      title: "Web Developer",
      description:
        "Development of custom web pages. Using current technologies and libraries of the labor field.",
      // Assuming LuGraduationCap is a valid icon component
    //   icon: <LuGraduationCap />,
    },
    {
      title: "Responsive Design",
      description:
        "Expert in responsive design with CSS, Tailwind, and other frameworks, ensuring adaptable web interfaces for optimal user experience.",
      // Assuming CgWorkAlt is a valid icon component
    //   icon: <CgWorkAlt />,
    },
    {
      title: "SAAS Application",
      description:
        "I build user-friendly SaaS platforms streamlining invoicing for small businesses.",
      // Assuming FaReact is a valid icon component
    //   icon: <FaReact />,
    },
  ];

  return (
    <section id="services" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Services</SectionHeading>
      <VerticalTimeline>
        {servicesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            iconStyle={{ background: "#2a4365", color: "#fff" }}
            // icon={item.icon}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
