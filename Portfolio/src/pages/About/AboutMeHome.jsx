import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import profile from "../../assets/profile.jpg";

const AboutMeHome = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 px-6 text-center relative bg-gradient-to-b from-transparent to-white/10 backdrop-blur-xl rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Profile Image Container with Animated Border */}
      <motion.div
        className="relative w-64 h-64 mx-auto mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-indigo-400"
          animate={
            inView
              ? {
                  opacity: [1, 0.5, 1],
                  boxShadow: [
                    "0px 0px 10px #6366F1",
                    "0px 0px 20px #6366F1",
                    "0px 0px 10px #6366F1",
                  ],
                }
              : { opacity: 0 }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full rounded-full object-cover border-4 border-indigo-500 shadow-md"
        />
      </motion.div>

      {/* Heading */}
      <motion.h3
        className="text-3xl font-bold text-white-900"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        About Me
      </motion.h3>

      {/* Description */}
      <motion.p
        className="mt-4 max-w-2xl mx-auto text-lg bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        Passionate MERN stack developer crafting seamless, scalable, and
        interactive web solutions. Bringing ideas to life with modern
        technologies.
      </motion.p>

      {/* "Know More" Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <Link
          to="/about"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
        >
          Know More →
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default AboutMeHome;
