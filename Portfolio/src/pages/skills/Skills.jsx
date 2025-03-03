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
    <motion.section
      ref={ref}
      className="py-20 px-6 text-center text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        My Tech Stack & Expertise
      </motion.h3>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((tech, index) => (
          <motion.span
            key={tech}
            className="bg-gray-700 bg-opacity-30 backdrop-blur-md px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
