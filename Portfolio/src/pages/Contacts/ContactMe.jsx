import "./Contact.css"; // Updated styles
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
        <a href="tel:+917510749518" className="phone-number">
          📞 +91 7510749518
        </a>

        {/* Social Icons with staggered animation */}
        <SocialIcons />
      </div>
    </motion.section>
  );
};

export default ContactMe;

