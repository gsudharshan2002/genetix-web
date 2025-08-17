"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white text-black pt-24 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-16">
          {/* Logo + Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-4"
          >
            <h3 className="text-3xl font-semibold mb-8 lg:mb-20">
              <img
                src="/genetixlogo-removebg-preview.png"
                alt="Genetix Logo"
                className="w-24 h-24 object-contain"
              />
            </h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaFacebook className="text-2xl text-green-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaX className="text-2xl text-green-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaInstagram className="text-2xl text-green-600" />
              </a>
            </div>
          </motion.div>

          {/* Menu Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="col-span-2">
            <p className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">Menu</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Home</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Popular</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">About</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Contact</a></li>
            </ul>
          </motion.div>

          {/* Category Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="col-span-2">
            <p className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">Category</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Design</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Mockup</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">View All</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Login</a></li>
            </ul>
          </motion.div>

          {/* Pages Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="col-span-2">
            <p className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">Pages</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">404</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Instructions</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">License</a></li>
            </ul>
          </motion.div>

          {/* Others */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="col-span-2">
            <p className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">Others</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Styleguide</a></li>
              <li><a className="text-lg hover:underline hover:text-purple-600 transition-colors" href="/">Changelog</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="border-t border-gray-700 mt-16 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400"
        >
          <p className="text-center sm:text-left">© 2023 Genetix. All rights reserved.</p>
          <div className="flex justify-center sm:justify-end gap-6 mt-4 sm:mt-0">
            <a href="/" className="hover:underline hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="/" className="hover:underline hover:text-purple-600 transition-colors border-l border-gray-600 pl-4">Terms & Conditions</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
