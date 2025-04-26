import { motion } from "framer-motion";
import { useMemo, Suspense, lazy } from "react";
import "../pages/Contacts/Contact.css";

// Lazy load the icons dynamically
const LazyFaWhatsapp = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaWhatsapp }))
);
const LazyFaLinkedin = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaLinkedin }))
);
const LazyFaInstagram = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaInstagram }))
);
const LazyFaEnvelope = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaEnvelope }))
);

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SocialIcons = () => {
  const socialLinks = useMemo(
    () => [
      {
        href: "https://wa.me/917510749518",
        icon: <LazyFaWhatsapp />,
        className: "whatsapp",
        label: "WhatsApp",
      },
      {
        href: "https://www.linkedin.com/in/anandha-krishnan-5b0a36248",
        icon: <LazyFaLinkedin />,
        className: "linkedin",
        label: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/captain_anandhu_/",
        icon: <LazyFaInstagram />,
        className: "instagram",
        label: "Instagram",
      },
      {
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=kanandha207@gmail.com&su=Hello&body=Hi%20there!",
        icon: <LazyFaEnvelope />,
        className: "email",
        label: "Email",
      },
    ],
    []
  );

  return (
    <motion.div
      className="social-icons"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map(({ href, icon, className, label }) => (
        <Suspense
          fallback={<div className="icon-placeholder"></div>}
          key={className}
        >
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`icon ${className}`}
            variants={fadeVariant}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            aria-label={label}
          >
            {icon}
          </motion.a>
        </Suspense>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
