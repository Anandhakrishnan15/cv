import React, { useEffect, useRef, useState } from "react";
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

const CursoeSkilss = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSkills = skills.length;
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSkills);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSkills]);

  return (
    <section className="skills-container">
      <div className="carousel" ref={carouselRef}>
        {skills.map((skill, index) => {
          const angle = (index - activeIndex) * (360 / totalSkills);
          return (
            <motion.div
              key={index}
              className="skill-box"
              style={{
                transform: `rotateY(${angle}deg) translateZ(400px)`,
              }}
              animate={{ opacity: activeIndex === index ? 1 : 0.7 }}
              transition={{ duration: 1 }}
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

export default CursoeSkilss;
