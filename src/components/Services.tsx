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
          (card as HTMLElement).offsetLeft + (card as HTMLElement).offsetWidth / 2 - container.offsetLeft;
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
    <section className=" py-14 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our <span className="text-green-500">Services</span>
      </h2>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide py-4">
        <div className="flex gap-6 min-w-max px-1">
          {services.map((item, i) => (
            <div
              key={i}
              className={`service-card w-[260px] flex-shrink-0 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 p-6 flex flex-col items-center text-center group ${
                i === centerIndex
                  ? "scale-105 shadow-lg z-10"
                  : "scale-95 opacity-80"
              }`}
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-green-50 flex items-center justify-center shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
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
