import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Example skills array
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  // Memoized animation variant
  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.08,
          duration: 0.6,
          ease: "easeOut",
        },
      }),
    }),
    []
  );

  return (
    <section ref={ref} className="py-20 px-6 text-center text-white ">
      {/* Title */}
      <motion.h3
        className="text-4xl font-bold mb-6 text-[#f59e0b]"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Tech Stack & Expertise
      </motion.h3>

      {/* Skill Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((tech, index) => (
          <motion.span
            key={tech}
            className="bg-white bg-opacity-10 backdrop-blur-md px-6 py-3 rounded-lg text-lg font-medium text-white shadow-md hover:shadow-xl transition-all"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.25)",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
