import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const titles = {
  "/": "Anandhakrishnan | Full-Stack Developer",
  "/about": "About Me | Anandhakrishnan",
  "/contact": "Contact | Anandhakrishnan",
  "/projects": "Projects | Anandhakrishnan",
  404: "404 - Page Not Found | Anandhakrishnan",
};

const descriptions = {
  "/": "Welcome to my portfolio! I'm a full-stack developer specializing in MERN stack web development.",
  "/about":
    "Learn more about me, my experience, and my journey as a web developer.",
  "/contact":
    "Get in touch with me for collaborations, projects, and inquiries.",
  "/projects":
    "Explore my projects showcasing my expertise in web development.",
  404: "Oops! The page you are looking for does not exist.",
};

const DynamicTitle = () => {
  const location = useLocation();

  // Memoize title calculation to avoid unnecessary recalculations
  const title = useMemo(() => {
    if (location.pathname.startsWith("/projects/")) {
      const projectId = location.pathname.split("/")[2]; // Extract project ID
      return `Project: ${projectId} | Anandhakrishnan`;
    }
    return titles[location.pathname] || titles[404];
  }, [location.pathname]);

  const description = useMemo(
    () => descriptions[location.pathname] || descriptions[404],
    [location.pathname]
  );

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://yourwebsite.com${location.pathname}`}
      />
    </Helmet>
  );
};

export default DynamicTitle;
