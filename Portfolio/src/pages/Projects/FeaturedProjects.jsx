import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Chat App",
    description: "A real-time chat app with MERN stack & Socket.io.",
    image: "/images/chat-app.png",
    link: "https://your-chat-app-link.com",
  },
  {
    title: "Task Manager",
    description: "A task management tool with drag-and-drop feature.",
    image: "/images/task-manager.png",
    link: "https://your-task-manager-link.com",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React.js & animations.",
    image: "/images/portfolio.png",
    link: "https://your-portfolio-link.com",
  },
];

const freelancingProjects = [
  {
    title: "Nikithi Web Redesign",
    description:
      "Redesigned a website layout, improved UI/UX & responsiveness.",
    image: "/images/nikithi-project.png",
    link: "#",
  },
  {
    title: "Web Advertisements",
    description: "Created multiple web ad banners for clients.",
    image: "/images/web-ads.png",
    link: "#",
  },
  {
    title: "Custom Portfolio for Client",
    description: "Built a personal portfolio website for a client.",
    image: "/images/client-portfolio.png",
    link: "#",
  },
  {
    title: "Girish Heat",
    description: "Developed the website and performed SEO for Girish Heat.",
    image: "/images/girish-heat.png",
    link: "#",
  },
  {
    title: "Girish Ego",
    description:
      "Designed and optimized the website, along with SEO for Girish Ego    .",
    image: "/images/girish-ego-free.png",
    link: "#",
  },
];



const ProjectSection = ({ title, projects }) => (
  <section className="projects-container">
    <h2>{title}</h2>
    <motion.div
      className="projects-grid"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const FeaturedProjects = () => {
  return (
    <>
      <ProjectSection title="Featured Projects" projects={featuredProjects} />
      <ProjectSection
        title="Freelancing Projects"
        projects={freelancingProjects}
      />
    </>
  );
};

export default FeaturedProjects;
