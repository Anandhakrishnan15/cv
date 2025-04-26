import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const ProjectCard = memo(({ project }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="image-gallery">
      {project.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={project.name}
          className="project-image"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <Link to={`/projects/${project.id}`} className="view-project-link">
      View Project
    </Link>
  </motion.div>
));

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="featured-projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <p>Check out some of my best work.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default memo(FeaturedProjects);
