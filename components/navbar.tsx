"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="w-full py-4 px-6 md:px-12 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={50 } height={50} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8 ml-[13rem] text-nowrap mr-4">
        <Link href="#" className="text-white hover:text-blue-300 transition-colors">
          Models
        </Link>0
        <Link href="#" className="text-white hover:text-blue-300 transition-colors">
          Pricing
        </Link>
        <Link href="#" className="text-white hover:text-blue-300 transition-colors">
          About Us
        </Link>
        <Link href="#" className="text-white hover:text-blue-300 transition-colors">
          Contact Us
        </Link>
        <Link href="#" className="text-white hover:text-blue-300 transition-colors">
          Custom Models
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <Button variant="outline" className="bg-transparent text-white hover:text-white border-white hover:bg-white/10">
          Login
        </Button>
        <Button className="bg-white text-[#010b20] hover:bg-white/90">Get Started Now</Button>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu  */}
      {isOpen && (
        <motion.div
          className="fixed top-16 left-0 right-0 bg-[#010b20] p-6 z-50 lg:hidden flex flex-col space-y-4 border-t border-white/10 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="#" className="text-white hover:text-blue-300 transition-colors">
            Models
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 transition-colors">
            Contact Us
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 transition-colors">
            Custom Models
          </Link>
          <div className="flex flex-col space-y-2 pt-4">
            <Button variant="outline" className="bg-transparent text-white bg-t border-white hover:text-white hover:bg-white/10 w-full">
              Login
            </Button>
            <Button className="bg-white text-[#010b20] hover:bg-white/90 w-full">Get Started Now</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

