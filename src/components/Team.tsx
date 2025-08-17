"use client";

import { useState } from "react";
import { heros } from "@/Data";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Team = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % heros.length);
  };
  const prev = () => {
    setIndex((prev) => (prev - 1 + heros.length) % heros.length);
  };

  return (
    <section className="py-10 sm:py-16 bg-white px-4 sm:px-8 w-full">
      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mb-12">
        <button
          onClick={prev}
          className="bg-blue-100 text-green-800 px-6 py-3 rounded-full border border-green-200 hover:bg-green-200 transition shadow-md text-xl"
        >
          ←
        </button>
        <button
          onClick={next}
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition shadow-md text-xl"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
        <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
          <AnimatePresence mode="wait">
            <motion.img
              key={heros[index].name}
              src={heros[index].image}
              alt={heros[index].name}
              loading="lazy"
              decoding="async"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-xl border border-gray-200 object-cover"
              style={{ color: "transparent" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={heros[index].name + "-text"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug text-center sm:text-left lg:text-left">
                {heros[index].about}
              </h2>

              <span className="inline-flex items-center gap-2 text-xl text-gray-600">
                <FaLinkedin className="text-blue-600 transition-transform hover:scale-125" />
                <a
                  href={heros[index].linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </span>

              <div className="mt-10 border-l-4 border-green-600 pl-6">
                <h5 className="text-2xl font-bold text-gray-900">{heros[index].name}</h5>
                <p className="text-green-600 text-lg font-medium">{heros[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Team;
