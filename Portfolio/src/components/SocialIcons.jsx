import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "../pages/Contacts/Contact.css";

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
  return (
    <motion.div
      className="social-icons"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[
        {
          href: "https://wa.me/917510749518",
          icon: <FaWhatsapp />,
          className: "whatsapp",
        },
        {
          href: "https://www.linkedin.com/in/anandha-krishnan-5b0a36248",
          icon: <FaLinkedin />,
          className: "linkedin",
        },
        {
          href: "https://www.instagram.com/captain_anandhu_/",
          icon: <FaInstagram />,
          className: "instagram",
        },
        {
          href: "mailto:kanandha207@gmail.com",
          icon: <FaEnvelope />,
          className: "email",
        },
      ].map(({ href, icon, className }) => (
        <motion.a
          key={className}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`icon ${className}`}
          variants={fadeVariant}
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          {icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
