"use client";

import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen flex flex-col-reverse sm:flex-row items-center justify-center px-5 shadow-lg bg-gradient-to-br from-purple-300 via-white to-green-400"
    >
      {/* Text Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sm:w-1/2 w-full flex flex-col items-start justify-center text-left space-y-6 p-10"
      >
        <h1 className="text-3xl sm:text-5xl leading-tight text-gray-800">
          Exceptional{" "}
          <span className="font-bold bg-gradient-to-b from-green-500 to-purple-500 text-transparent bg-clip-text">
            Freelance
          </span>{" "}
          talent for your <span className="font-bold">next</span> big{" "}
          <span className="bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text font-bold">
            project
          </span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Connect with top-tier freelancers who deliver high-quality work, on time, every time. Whether it’s
          design, development, or content, we’ve got the perfect expert for you.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-green-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md"
        >
          Hire our team
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sm:w-1/2 w-full flex items-center justify-center mb-8 sm:mb-0"
      >
        <motion.img
          src="/teamImage.png"
          alt="team"
          className="w-full max-w-md sm:max-w-full h-auto object-contain"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Intro;
