import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../components/threed-card";
import "./Projects.css";
import { projects } from "./projectData";

const ProjectCard3D = ({ project, index }) => {
  return (
    <div className="perspective-1000">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 14,
          duration: 0.6,
          delay: index * 0.1,
        }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-[320px] sm:max-w-sm px-2 mb-6"
      >
        <CardContainer
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm mx-auto"
          containerClassName="py-0"
        >
          <CardBody className="relative overflow-hidden rounded-xl">
            {project.images.length > 1 ? (
              <div className="flex justify-center flex-wrap gap-2 px-2 pt-4">
                {project.images.slice(0, 2).map((img, idx) => (
                  <CardItem
                    key={idx}
                    as="img"
                    src={img}
                    alt={`${project.name} image ${idx + 1}`}
                    className="object-cover w-[47%] h-36 rounded-md shadow-md"
                    translateZ={50 - idx * 10}
                    rotateY={idx === 0 ? "-5deg" : "5deg"}
                  />
                ))}
              </div>
            ) : (
              <CardItem
                as="img"
                src={project.images[0]}
                alt={project.name}
                className="object-cover h-44 w-full rounded-t-xl"
                translateZ={60}
                rotateX="4deg"
              />
            )}

            <CardItem
              as="h3"
              className="text-base font-semibold mt-4 px-4 text-center"
              translateZ={40}
            >
              {project.name}
            </CardItem>

            <CardItem
              as="p"
              className="text-sm mt-2 px-4 text-gray-600 dark:text-gray-300 text-center"
              translateZ={30}
            >
              {project.description}
            </CardItem>

            <CardItem
              as="div"
              className="w-full flex justify-center my-4"
              translateZ={20}
            >
              <Link
                to={`/projects/${project.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
              >
                View Project
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
};

const FeaturedProjects3D = () => {
  return (
    <section id="featured-projects" className="featured-projects px-6 py-10">
      <motion.h2
        className="section-title text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <p className="mb-10 text-gray-700 dark:text-gray-300 text-center max-w-xl mx-auto">
        Check out some of my best work — built with modern web technologies and
        polished user experiences.
      </p>

      <div className="flex flex-wrap justify-center gap-y-8">
        {projects.map((project, index) => (
          <ProjectCard3D key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default memo(FeaturedProjects3D);
