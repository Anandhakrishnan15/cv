import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height); // Add extra padding to reach last dot
    }
  }, []);
  

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full font-sans bg-white dark:bg-transparent md:px-10"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-[2.5rem] md:text-[4rem] font-bold leading-tight mb-6 text-black dark:text-white">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          Here's a timeline of my learning, development, and professional
          milestones.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start gap-6 md:gap-10 pt-10 md:pt-40 relative"
          >
            {/* Timeline Marker and Title */}
            <div className="sticky top-40 z-40 flex items-start md:items-center gap-4 md:w-[400px]">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-white dark:bg-black border-2 border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                </div>
              </div>
              <title className="hidden md:block text-4xl font-extrabold bg-gradient-to-r bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-transparent bg-clip-text tracking-tight leading-tight">
                {item.title}
              </title>
            </div>

            {/* Timeline Content */}
            <div className="pl-12 md:pl-0 pr-4 w-full">
              <h3 className="md:hidden text-2xl font-bold mb-2 text-neutral-500 dark:text-neutral-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline Line */}
        <div
          className="absolute left-[34px] md:left-[18px] top-0 w-[2px] z-10"
          style={{ height }}
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
