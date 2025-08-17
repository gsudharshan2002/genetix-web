"use client";

import React from "react";
import { motion } from "framer-motion";

import { Tooltip } from "react-tooltip";

export default function TechStack() {
  const sections = {
    Frontend: [
      { name: "React.js", desc: "UI library for building components" },
      { name: "Next.js", desc: "Server-side rendering framework for React" },
      { name: "TypeScript", desc: "JS with static typing" },
      { name: "JAMstack", desc: "Modern web architecture" },
    ],
    Backend: [
      { name: "Node.js", desc: "JS runtime for backend services" },
      { name: "Spring Boot", desc: "Java-based backend framework" },
      { name: "Go", desc: "Fast, compiled language for backend" },
      { name: "Python", desc: "Versatile language for backend & AI" },
    ],
    AI_ML: [
      { name: "Python", desc: "Main language for AI/ML" },
      { name: "TensorFlow", desc: "ML framework by Google" },
      { name: "PyTorch", desc: "ML framework by Facebook" },
      { name: "OpenAI API", desc: "Access AI models via API" },
    ],
    DevOps: [
      { name: "Docker", desc: "Containerization platform" },
      { name: "Kubernetes", desc: "Container orchestration system" },
      { name: "GraphQL", desc: "API query language" },
      { name: "Kafka", desc: "Streaming data platform" },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto my-16 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Tech{" "}
        <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
          Stack
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(sections).map(([title, items], i) => (
          <motion.div
            key={title}
            className="relative perspective"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Card */}
            <motion.div
              className="bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-xl p-6 shadow-xl cursor-pointer transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105"
            >
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4">
                {title.replace("_", " & ")}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {items.map((tech, j) => (
                  <motion.li
                    key={tech.name}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-200 to-green-300 text-green-900 hover:from-purple-400 hover:to-green-500 hover:text-white transition-all duration-300 relative"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3, delay: j * 0.05 }}
                    data-tooltip-id={`tooltip-${title}-${j}`}
                    data-tooltip-content={tech.desc}
                  >
                    {tech.name}
                    <Tooltip id={`tooltip-${title}-${j}`} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </div>
  );
}
