"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "../../components/threed-card";
import "./Projects.css";

const projects = [
  {
    id: "girish-heat",
    name: "Girish Heat",
    description:
      "Developed the website and performed SEO optimization for better visibility.",
    details: "Used React, Node.js, and SEO strategies to enhance visibility.",
    images: ["/girishHeatwebpage.png"],
  },
  {
    id: "girish-ego",
    name: "Girish Ego",
    description:
      "Designed and optimized the website with SEO strategies to improve ranking.",
    details: "Worked on UI/UX, SEO, and backend enhancements using MERN stack.",
    images: ["/Girish-Ego_webpage.png"],
  },
  {
    id: "profile-page",
    name: "Profile Page",
    description: "Designed and developed a dynamic profile page for users.",
    details:
      "Implemented React, Node.js, and MongoDB to create a responsive and user-friendly profile page.",
    images: ["/sportsolution-page-pdf.png", "/ent-templat-pdf.png"],
  },
  {
    id: "web-advertisements",
    name: "Web Advertisements",
    description: "Created engaging web advertisements for various clients.",
    details:
      "Designed and optimized web banners using modern frontend technologies and creative strategies.",
    images: ["/MS-office-Adv.png", "/whatsapp-Marketing-1.png"],
  },
];

const ProjectCard3D = ({ project }) => {
  return (
    // Inside your map/project render:
<motion.div
  whileHover={{
    scale: 1.03,
    rotateX: 3,
    rotateY: 6,
  }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  // className="w-full max-w-sm"
>
    <CardContainer
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-96 cursor-pointer py-0"
      containerClassName="m-4 py-0"
    >
      <CardBody className="relative overflow-hidden rounded-xl">
        {project.images.length > 1 ? (
          <div className="flex justify-around">
            {project.images.slice(0, 2).map((img, idx) => (
              <CardItem
                key={idx}
                as="img"
                src={img}
                alt={`${project.name} image ${idx + 1}`}
                className="object-cover w-44 h-48 rounded-md shadow-lg"
                translateZ={50 - idx * 10}
                rotateY={idx === 0 ? "-10deg" : "10deg"}
              />
            ))}
          </div>
        ) : (
          <CardItem
            as="img"
            src={project.images[0]}
            alt={project.name}
            className="object-cover w-full h-48 rounded-t-xl"
            translateZ={60}
            rotateX="5deg"
          />
        )}

        <CardItem
          as="h3"
          className="text-lg font-bold mt-4 px-4"
          translateZ={40}
          rotateX="3deg"
        >
          {project.name}
        </CardItem>

        <CardItem
          as="p"
          className="text-sm mt-2 px-4 text-gray-600 dark:text-gray-300"
          translateZ={30}
        >
          {project.description}
        </CardItem>

        <CardItem
          as="div"
          className="flex w-a justify-center w-auto my-4"
          translateZ={20}
          rotateX={2}
        >
          <Link
            to={`/projects/${project.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            View Project
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
    </motion.div>
  );
};

const FeaturedProjects3D = () => {
  return (
    <section id="featured-projects" className="featured-projects px-6 py-10">
      <motion.h2
        className="section-title text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <p className="mb-10 text-gray-700 dark:text-gray-300">
        Check out some of my best work.
      </p>

      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <ProjectCard3D key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default memo(FeaturedProjects3D);
