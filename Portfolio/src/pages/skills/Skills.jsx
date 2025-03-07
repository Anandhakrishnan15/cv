import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Redux",
  "Tailwind CSS",
  "Next.js",
  "GraphQL",
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <section ref={ref} className="py-20 px-6 text-center text-white">
      {/* Title */}
      <motion.h3
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Tech Stack & Expertise
      </motion.h3>

      {/* Skill Grid */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((tech, index) => (
          <motion.span
            key={tech}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 12px rgba(255,255,255,0.2)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
