// glassCardCode.js

export const glassCardComponentCode = String.raw`
import { useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const GlassCard = ({
  title = "✨ 3D Glass Card + Mobile Motion",
  description = "All children scale and glow. Works on mouse and mobile tilt!",
  buttonText = "Try button",
  textColor = "text-white",
  headingColor = "text-2xl font-bold",
  buttonColor = "bg-black/30 hover:bg-black/50",
  buttonTextColor = "text-white",
  cardBg = "bg-black/30",
  borderColor = "border-white/20",
}) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateMax = 15;

    animate(rotateX, -((y - centerY) / centerY) * rotateMax, {
      type: "spring",
      stiffness: 150,
    });
    animate(rotateY, ((x - centerX) / centerX) * rotateMax, {
      type: "spring",
      stiffness: 150,
    });
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { type: "spring", stiffness: 150 });
    animate(rotateY, 0, { type: "spring", stiffness: 150 });
  };

  useEffect(() => {
    const handleOrientation = (event) => {
      const { beta, gamma } = event;
      if (window.innerWidth < 768 && beta !== null && gamma !== null) {
        const clamp = (val, min, max) => Math.max(Math.min(val, max), min);
        const tiltX = clamp((beta - 45) * 0.4, -10, 10);
        const tiltY = clamp(gamma * 0.4, -10, 10);

        animate(rotateX, tiltX, { type: "spring", stiffness: 80, damping: 15 });
        animate(rotateY, tiltY, { type: "spring", stiffness: 80, damping: 15 });
      }
    };

    window.addEventListener("deviceorientation", handleOrientation, true);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={\`relative z-10 backdrop-blur-md \${cardBg} border \${borderColor} rounded-2xl p-8 shadow-2xl max-w-md w-full\`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.04,
        transition: { type: "spring", stiffness: 200 },
      }}
    >
      <motion.div
        className={\`space-y-4 transition-all duration-300 \${textColor}\`}
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 150 },
        }}
      >
        <motion.h2
          className={headingColor}
          whileHover={{
            textShadow: "0px 5px 20px rgba(255,255,255,0.5)",
          }}
        >
          {title}
        </motion.h2>

        <motion.p
          className={\`text-sm \${textColor}\`}
          whileHover={{
            textShadow: "0px 3px 12px rgba(255,255,255,0.3)",
          }}
        >
          {description}
        </motion.p>

        <motion.button
          className={\`mt-2 px-4 py-2 rounded-lg transition \${buttonColor} \${buttonTextColor}\`}
          whileHover={{
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.3)",
            scale: 1.05,
          }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default GlassCard;
`;

export const glassCardUsageExample = String.raw`
<GlassCard
  title="🚀 Custom Card Title"
  description="Use props to control colors, text, and interaction."
  buttonText="Click Me"
  textColor="text-black"
  buttonTextColor="text-black"
  cardBg="bg-white/20"
  borderColor="border-black/30"
  buttonColor="bg-gray-200 hover:bg-gray-300"
/>
`;
