"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full py-12 md:space-y-2 md:pb-24 flex flex-col items-center justify-center text-center px-4">
      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.p
          className="text-[#7191FF] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Leverage on Automation
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          AI Models for <br /> Business Solutions
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 max-w-[42rem] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-white text-[#010b20] hover:bg-white/90 px-8 py-6 text-base font-medium rounded-md">
            Get Started Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

