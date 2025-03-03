import { motion } from "framer-motion";
import { projects } from "./FeaturedProjects";
import CursoeSkilss from "../skills/CursoeSkilss";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <CursoeSkilss />
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/10 backdrop-blur-lg backdrop-brightness-75 border border-white/20 shadow-lg rounded-xl p-4 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-white-600 text-sm mt-2">{project.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Link to={`/projects/${project.id}`}>View Details</Link>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
