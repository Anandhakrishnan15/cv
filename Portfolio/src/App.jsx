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
import { ToastContainer } from "react-toastify";
import DocsWrapper from "./components/DocsWrapper";

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
              {/* Static Pages */}
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />

              {/* Modular Component Pages */}
              <Route path="/docs/:component" element={<DocsWrapper />} />

              {/* 404 Not Found Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {/* Footer */}
          <footer className="py-6 text-center bg-gray-900 flex items-center justify-center gap-3">
            <img
              src="/logorb.png"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
            <p className="text-white">
              © {new Date().getFullYear()} Anandhakrishnan. All Rights Reserved.
            </p>
          </footer>
        </Router>
        <ToastContainer position="bottom-right" theme="dark" />
      </div>
    </HelmetProvider>
  );
}

export default App;
