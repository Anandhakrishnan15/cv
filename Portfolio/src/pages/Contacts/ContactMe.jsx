import "./Contact.css"; // Updated styles
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import SocialIcons from "../../components/SocialIcons";

const ContactMe = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Parent container animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Individual elements animation
  const fadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="contact-me"
      className="contact-section"
      ref={ref} // Attach the ref to track viewport visibility
      initial="hidden"
      animate={controls}
      variants={fadeVariant}
    >
      {/* Animated Heading */}
      <motion.h2 variants={fadeVariant}>Contact Me</motion.h2>

      <p>Let's discuss your project!</p>

      <div className="contact-info">
        <p className="phone-number">📞 +91 XXXXX XXXXX</p>

        {/* Social Icons with staggered animation */}
        {/* <motion.div
          className="social-icons"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {[
            {
              href: "https://wa.me/91XXXXXXXXXX",
              icon: <FaWhatsapp />,
              className: "whatsapp",
            },
            {
              href: "https://www.linkedin.com/in/yourprofile",
              icon: <FaLinkedin />,
              className: "linkedin",
            },
            {
              href: "https://www.instagram.com/yourprofile",
              icon: <FaInstagram />,
              className: "instagram",
            },
            {
              href: "mailto:your.email@example.com",
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
        </motion.div> */}
        <SocialIcons/>
      </div>
    </motion.section>
  );
};

export default ContactMe;

