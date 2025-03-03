import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-purple-500 text-5xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <FaExclamationTriangle />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-indigo-500 text-5xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <FaExclamationTriangle />
      </motion.div>

      {/* 404 Text */}
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
        404
      </h1>

      {/* Message */}
      <p className="text-white text-lg mt-4">
        Sorry, we can't find the page you're looking for.
      </p>

      {/* Button */}
      <Link to="/" className="mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Go Home
        </motion.button>
      </Link>
    </div>
  );
};

export default NotFound;
