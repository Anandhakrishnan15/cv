import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Projects.css";

// Project Data
const projects = [
  {
    id: "girish-heat",
    name: "Girish Heat",
    description:
      "Developed the website and performed SEO optimization for better visibility.",
    details: `
      - Designed and developed a fully responsive website.
      - Implemented advanced SEO strategies to improve search ranking.
      - Integrated React for dynamic user experience.
      - Optimized backend performance using Node.js and Express.js.
      - Ensured cross-browser compatibility and mobile responsiveness.
    `,
    technologies: ["React", "Node.js", "SEO", "Express.js"],
    images: ["/girishHeatwebpage.png"],
    links: [{ label: "Visit Website", url: "https://girishheat.com" }],
  },
  {
    id: "girish-ego",
    name: "Girish Ego-Free Lace Ad",
    description:
      "Designed and optimized the website with SEO strategies to improve ranking.",
    details: `
      - Focused on improving UI/UX for better user engagement.
      - Integrated high-performance backend with the MERN stack.
      - Used technical SEO enhancements to boost organic traffic.
      - Developed dynamic layouts for improved responsiveness.
    `,
    technologies: ["MERN Stack", "SEO", "UI/UX"],
    images: ["/Girish-Ego_webpage.png"],
    links: [{ label: "Website", url: "https://girishego.com" }],
  },
  {
    id: "profile-page",
    name: "Profile Page",
    description: "Designed and developed a dynamic profile page for users.",
    details: `
      - Implemented user authentication and secure data storage.
      - Designed a sleek and modern UI for seamless navigation.
      - Built a backend using Node.js and MongoDB for data management.
      - Created a PDF download feature for user resumes.
    `,
    technologies: ["React", "Node.js", "MongoDB"],
    images: ["/sportsolution-page-pdf.png", "/ent-templat-pdf.png"],
    links: [
      {
        label: "sportsolution.Pdf",
        url: "https://drive.google.com/file/d/1Tn2PxGQkMhlhH3V9J3yDD9EuM-X2D7Tg/view?usp=drive_link",
      },
      {
        label: "ENT.Pdf",
        url: "https://drive.google.com/file/d/1Xmd6LL-bUSfZI1zmTrbo1YWd7hzmhyBG/view?usp=drive_link",
      },
    ],
  },
  {
    id: "web-advertisements",
    name: "Web Advertisements",
    description: "Created engaging web advertisements for various clients.",
    details: `
      - Designed visually appealing banner ads.
      - Optimized for fast loading and high engagement.
      - Implemented animations to increase user interaction.
      - Developed using modern web technologies.
    `,
    technologies: ["HTML", "CSS", "JavaScript", "Design"],
    // images: ["/images/web-ads.jpg"],
    images: [
      "/MS-office-Adv.png",
      "/whatsapp-Marketing-1.png",
      "/whatsapp-master-classAdd.png",
    ],
    links: [
      {
        label: "Ad Campaign 1",
        url: "https://www.qzdemo.in/anandhproject/whatsapp-marketting/whatsappmarkering.php",
      },
      {
        label: "Ad Campaign 2",
        url: "https://www.qzdemo.in/anandhproject/msoffice-ai/msoffice.php",
      },
      {
        label: "Ad Campaign 3",
        url: "https://www.qzdemo.in/anandhproject/whatsapp-masterclass/index.php",
      },
    ],
  },
];


const ProjectDetails = () => {
  const { projectId } = useParams();  
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide every 5 seconds
useEffect(() => {
  if (project.images && project.images.length > 1) {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }
}, [project.images]);;

  if (!project) {
    return <h2>Project Not Found</h2>;
  }


  const handleBackToProjects = () => {
    navigate("/projects"); // Ensure the correct path
    setTimeout(() => {
      const featuredSection = document.getElementById("featured-projects");
      if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Adjust delay if needed
  };

  return (
    <motion.div
      className="project-details-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Carousel */}
      <div className="image-carousel">
        {project.images && (
          <motion.img
            key={currentImage}
            src={project.images[currentImage]}
            alt={project.name}
            className="project-image"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      <h1>{project.name}</h1>
      <p className="description">{project.description}</p>
      <pre className="details">{project.details}</pre>

      <h3>Technologies Used</h3>
      <ul className="tech-list">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      {/* Links for Advertisements & Others */}
      {project.links && (
        <div className="project-links">
          <h3>Related Links</h3>
          <ul>
            {project.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Project PDF Link */}
      {project.pdf && (
        <a
          href={project.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-link"
        >
          📄 View Project PDF
        </a>
      )}

      <a onClick={handleBackToProjects} className="back-link">
        ← Back to Projects
      </a>
    </motion.div>
  );
};

export default ProjectDetails;
