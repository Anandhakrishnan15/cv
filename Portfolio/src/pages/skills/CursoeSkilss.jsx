import React, { useEffect, useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const CarouselSkills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSkills = skills.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSkills);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSkills]);

  return (
    <section className="skills-container">
      <motion.h2
        className="skills-title text-[#f59e0b]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Tech Stack
      </motion.h2>

      <div className="carousel">
        {skills.map((skill, index) => {
          const angle = (index - activeIndex) * (360 / totalSkills);

          return (
            <motion.div
              key={skill.name}
              className="skill-box"
              style={{
                transform: `rotateY(${angle}deg) translateZ(400px)`,
              }}
              animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CarouselSkills;
