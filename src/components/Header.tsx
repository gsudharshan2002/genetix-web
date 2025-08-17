"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl px-6 py-4 flex items-center justify-between shadow-md backdrop-blur-md bg-white/30 rounded-full"
    >
      {/* Logo */}
      <Link href="/" className="flex w-[100px] h-[20px] items-center space-x-2">
        <Image
          src="/genetixlogo-removebg-preview.png"
          alt="Genetix Logo"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
      </Link>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex items-center justify-center space-x-6 font-semibold text-sm text-black py-3"
      >
        <Link href="/" className="hover:text-green-600 hover:scale-105 transition-transform duration-200">
          Features
        </Link>
        <Link href="/" className="hover:text-green-600 hover:scale-105 transition-transform duration-200">
          Industries
        </Link>
        <Link href="/services" className="hover:text-green-600 hover:scale-105 transition-transform duration-200">
          Resources
        </Link>
        <Link href="/projects" className="hover:text-green-600 hover:scale-105 transition-transform duration-200">
          Company
        </Link>
      </motion.nav>

      {/* Request Demo Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Link href="/contact">
          <button className="text-md bg-green-500 hover:bg-black text-white p-3 rounded-full transition duration-200 shadow-md hover:scale-105">
            Request a Demo
          </button>
        </Link>
      </motion.div>
    </motion.header>
  );
}
