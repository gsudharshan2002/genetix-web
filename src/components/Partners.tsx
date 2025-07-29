import React from "react";

import {partnerLogos} from "@/Data";

const Partners = () => {
 return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Our Partners</h2>

      {/* Scroll container */}
      <div className="overflow-hidden relative">
        {/* Scrolling wrapper */}
        <div
          className="flex animate-slide gap-30 whitespace-nowrap"
          style={{
            animation: "slide 30s linear infinite",
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {partnerLogos.concat(partnerLogos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-auto h-30 object-contain inline-block"
            />
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
