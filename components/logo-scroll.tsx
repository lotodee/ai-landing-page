"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

interface Logo {
  name: string;
  logo: React.ReactNode;
}

interface LogoScrollProps {
  logos: Logo[];
}

export default function LogoScroll({ logos }: LogoScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-12 overflow-hidden" ref={ref}>
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#667085] text-[16px]">
          Join 4,000+ companies already growing
        </p>
      </motion.div>

      <div className="relative">
        <Marquee speed={50} gradient={false} pauseOnHover>
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`logo-${index}`}
              className="flex items-center space-x-4 mx-12 text-gray-800" // Increased spacing
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl">{logo.logo}</div>{" "}
              <span className="text-xl font-medium">{logo.name}</span>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
