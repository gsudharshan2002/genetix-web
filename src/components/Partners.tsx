"use client";

import { motion } from "framer-motion";
import { partnerLogos } from "@/Data";

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">
        Our <span className="text-green-500">Partners</span>
      </h2>

      <div className="overflow-hidden relative p-10">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {partnerLogos.concat(partnerLogos).map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-auto h-20 object-contain inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
