import { useRef, useEffect, useState } from "react";
import { services } from "@/Data";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll(".service-card");
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter =
          (card as HTMLElement).offsetLeft +
          (card as HTMLElement).offsetWidth / 2 -
          container.offsetLeft;
        const distance = Math.abs(center - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-14 mb-2 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our <span className="text-green-500">Services</span>
      </h2>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide py-6">
        <div className="flex gap-6 min-w-max px-1">
          {services.map((item, i) => (
            <div
              key={i}
              className={`service-card transition-all duration-300 ease-in-out flex flex-col justify-between  p-8 w-80 rounded-3xl flex-shrink-0 shadow-md group bg-white hover:bg-black ${
                centerIndex === i
                  ? "scale-105 border-2 border-green-500 shadow-sm"
                  : "scale-95" 
              }`}
            >
            
              <h5 className="group-hover:text-white text-xl font-extrabold mb-4 transition">
                {item.title}
              </h5>

          
              <div className="mb-4">
                <img
                  alt={item.title}
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  src={item.image}
                  className="transition-transform duration-300 group-hover:scale-105"
                  style={{ color: "transparent" }}
                />
              </div>

              {/* Description */}
              <p className="text-base font-medium text-gray-700 group-hover:text-white   transition-all">
                {item.description}
              </p>

              {/* Learn More */}
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold transition"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
