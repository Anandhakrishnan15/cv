import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const titles = {
  "/": "Home | Anandhakrishnan",
  "/about": "About Me | Anandhakrishnan",
  "/contact": "Contact | Anandhakrishnan",
  "/projects": "Projects | Anandhakrishnan",
  404: "404 - Page Not Found | Anandhakrishnan",
};

const DynamicTitle = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.startsWith("/projects/")) {
      const projectId = location.pathname.split("/")[2]; // Get the dynamic project ID
      return `Project: ${projectId} | Anandhakrishnan`;
    }
    return titles[location.pathname] || titles["404"];
  };

  useEffect(() => {
    document.title = getTitle();
  }, [location]);

  return (
    <Helmet>
      <title>{getTitle()}</title>
    </Helmet>
  );
};

export default DynamicTitle;
