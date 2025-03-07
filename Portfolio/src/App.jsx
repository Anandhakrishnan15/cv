import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import AboutMe from "./pages/About/About_Me";
import Contact from "./pages/Contacts/Contact";
import Homepage from "./pages/Homepage";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import NotFound from "./components/NotFound";
import DynamicTitle from "./components/DynamicTitle";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-indigo-500 selection:text-blue-100">
        {/* Background Gradient */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-black to-indigo-700"></div>

        {/* Main Container */}
        <Router>
          <DynamicTitle /> {/* Dynamically change page titles */}
          <Nav />
          <main className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
              <Route path="*" element={<NotFound />} /> {/* 404 Page */}
            </Routes>
          </main>
          {/* Footer */}
          <footer className="py-6 text-center bg-gray-900">
            <p>
              © {new Date().getFullYear()} Anandhakrishnan. All Rights Reserved.
            </p>
          </footer>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
