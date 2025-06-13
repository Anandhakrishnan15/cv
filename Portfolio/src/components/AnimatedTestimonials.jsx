"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Font Awesome
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import md5 from "blueimp-md5";

export const AnimatedTestimonials = ({ autoplay = true }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("testimonials");
    if (stored) {
      setTestimonials(JSON.parse(stored));
    }
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!testimonials.length) {
    return (
      <p className="text-center py-10 text-gray-500">Loading testimonials...</p>
    );
  }
  const getImageSrc = (testimonial) => {
    if (testimonial.src) return testimonial.src;
    if (testimonial.Email) {
      const hash = md5(testimonial.Email.trim().toLowerCase());
      return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    }
    return "/default-avatar.png"; // Your local fallback if no email
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src || index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={getImageSrc(testimonial)}
                    alt={testimonial.Name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].Name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].Email}
            </p>

            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote?.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            <div className="mt-4 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={
                    i < parseInt(testimonials[active].Rating || 0)
                      ? "#facc15"
                      : "none"
                  }
                  viewBox="0 0 24 24"
                  stroke="#facc15"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.48 3.499c.27-.823 1.47-.823 1.74 0l1.286 3.943a1 1 0 00.95.69h4.15c.864 0 1.223 1.104.527 1.64l-3.36 2.444a1 1 0 00-.364 1.118l1.285 3.943c.27.823-.683 1.506-1.39 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.707.388-1.66-.295-1.39-1.118l1.286-3.943a1 1 0 00-.364-1.118L4.317 9.772c-.696-.536-.337-1.64.527-1.64h4.15a1 1 0 00.95-.69l1.286-3.943z"
                  />
                </svg>
              ))}
            </div>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <FaArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <FaArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
