import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import { Helmet } from "react-helmet-async";

const FaExclamationTriangle = lazy(() =>
  import("react-icons/fa").then((mod) => ({
    default: mod.FaExclamationTriangle,
  }))
);

const NotFound = () => {
  // Memoized Floating Icon Animation (Avoids re-renders)
  const floatingAnimation = useMemo(
    () => ({
      animate: { y: [0, -20, 0] },
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    }),
    []
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 relative overflow-hidden text-center">
      {/* SEO Optimization */}
      <Helmet>
        <title>404 - Page Not Found | Anandhakrishnan</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to the homepage."
        />
      </Helmet>

      {/* Animated Floating Icons */}
      <Suspense
        fallback={
          <div className="absolute top-10 left-10 text-purple-500 text-5xl opacity-30">
            ⚠️
          </div>
        }
      >
        <motion.div
          className="absolute top-10 left-10 text-purple-500 text-5xl opacity-30"
          {...floatingAnimation}
        >
          <FaExclamationTriangle aria-hidden="true" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-indigo-500 text-5xl opacity-30"
          {...floatingAnimation}
        >
          <FaExclamationTriangle aria-hidden="true" />
        </motion.div>
      </Suspense>

      {/* 404 Text */}
      <h1 className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
        404
      </h1>

      {/* Message */}
      <p className="text-gray-300 text-lg mt-4 max-w-lg">
        Sorry, we can't find the page you're looking for.
      </p>

      {/* Button */}
      <Link to="/" className="mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition focus:ring focus:ring-indigo-400"
          aria-label="Go to homepage"
        >
          Go Home
        </motion.button>
      </Link>
    </div>
  );
};

export default NotFound;
