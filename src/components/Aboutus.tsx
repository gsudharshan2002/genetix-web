"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16 px-8 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
            About Us
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            We are a passionate group of students with extraordinary tech skills in web development,
            backend systems (like n8n), automation, and freelancing services.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Despite not being recognized by companies, we never gave up. Instead, we decided to use our
            talent to help individuals and businesses with affordable and reliable tech solutions.
          </p>
          <h3 className="text-xl font-semibold text-purple-600 mt-6">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 text-md mt-2 space-y-2">
            <li>Our process includes 5 powerful phases: Architecture, Logic & Design, Comparison & Optimization, Testing, and Delivery.</li>
            <li>We believe in simplicity and efficiency – using the least stack to do the most.</li>
            <li>We constantly improve during testing to deliver the best product.</li>
            <li>We manage, maintain, and deliver with care.</li>
          </ul>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="mt-6">
            <button className="bg-gradient-to-r from-green-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
        >
          <img
            src="./aboutus.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
