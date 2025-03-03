import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import About_Me from "./pages/About/About_Me";
import Contact from "./pages/Contacts/Contact";
import Homepage from "./pages/Homepage";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import NotFound from "./components/NotFound";
import DynamicTitle from "./components/DynamicTitle";
import { HelmetProvider } from "react-helmet-async";
;

function App() {
  return (
    <HelmetProvider>
      <div className="overflow -x-hidden text-netural-300 antialiased selection:bg-indigo-500 selection:text-blue-100">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="container mx-auto ">
          <Router>
            <DynamicTitle /> {/* Dynamically change page titles */}
            <Nav />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About_Me />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
              <Route path="*" element={<NotFound />} /> {/* 404 Page */}
            </Routes>
            {/* Footer */}
            <footer className="py-6 text-center bg-gray-900">
              <p>© 2025 Anandhakrishnan. All Rights Reserved.</p>
            </footer>
          </Router>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;

