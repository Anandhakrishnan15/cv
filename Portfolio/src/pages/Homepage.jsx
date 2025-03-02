import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
// import Navbar from "./Navbar";
import HeroSection from "../components/Hero/Hero_Intro";
import AboutMeHome from "./About/AboutMeHome";
import Skills from "./skills/Skills";
import CursoeSkilss from "./skills/cursoeSkilss";
import FeaturedProjects from "./Projects/FeaturedProjects";
// import AboutMe from "./AboutMe";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import Footer from "./Footer";

const Homepage = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="bg-transparent text-white">
      {/* <Navbar /> */}
      <HeroSection controls={controls} />
      {/* <AboutMe controls={controls} />
      <Skills controls={controls} />
      <Projects controls={controls} />
      <Contact controls={controls} />
      <Footer /> */}
      {/* About Me */}
      <AboutMeHome controls={controls} />
      {/* Skills */}
      <Skills />
      {/* <motion.section
        className="py-20 px-6 text-center bg-gray-800 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h3 className="text-4xl font-bold mb-6">My Tech Stack & Expertise</h3>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React", "Node.js", "MongoDB", "Express.js"].map((tech, index) => (
            <motion.span
              key={tech}
              className="bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section> */}
      {/* Projects */}
      <CursoeSkilss />
      <FeaturedProjects/>
      {/* Contact */}
      <motion.section
        id="contact"
        className="py-20 px-6 text-center bg-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h3 className="text-3xl font-bold">Contact Me</h3>
        <p className="mt-4">Let's discuss your project!</p>
      </motion.section>
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p>© 2025 Anandhakrishnan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
