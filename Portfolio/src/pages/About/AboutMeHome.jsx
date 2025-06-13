import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";

// Reusable animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // smooth bezier
    },
  },
};

const AboutMeHome = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 text-center bg-gradient-to-b from-transparent to-white/10 backdrop-blur-xl rounded-xl shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariant}
    >
      <motion.div
        className="relative w-64 h-64 mx-auto mb-4"
        variants={fadeInVariant}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-indigo-400"
          animate={{
            opacity: [1, 0.5, 1],
            boxShadow: [
              "0px 0px 10px #6366F1",
              "0px 0px 20px #6366F1",
              "0px 0px 10px #6366F1",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <img
          src={profile}
          alt="Profile"
          loading="lazy"
          className="w-full h-full rounded-full object-cover border-4 border-indigo-500 shadow-md"
        />
      </motion.div>

      <motion.h3
        className="text-3xl font-bold text-white-900"
        variants={fadeInVariant}
      >
        About Me
      </motion.h3>

      <motion.p
        className="mt-4 max-w-2xl mx-auto text-lg bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent"
        variants={fadeInVariant}
      >
        Passionate MERN stack developer crafting seamless, scalable, and
        interactive web solutions. Bringing ideas to life with modern
        technologies.
      </motion.p>

      <motion.div className="mt-6" variants={fadeInVariant}>
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
