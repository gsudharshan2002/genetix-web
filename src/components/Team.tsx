import { useState } from "react";
import { heros } from "@/Data";

const Team = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % heros.length);
  };
  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + heros.length) % heros.length);
  };

  return (
    <section className="bg-white w-full max-w-9xl mx-auto p-6 rounded-xl shadow-lg border border-gray-100">
      <h4 className="text-3xl font-bold text-center mb-10 text-gray-800 tracking-wide underline underline-offset-4 decoration-green-500">
        Our Team
      </h4>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          onClick={prev}
          className="bg-green-100 text-green-800 px-4 py-2 rounded-full border border-green-200 hover:bg-green-200 transition"
        >
          ←
        </button>
        <button
          onClick={next}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          →
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="md:w-1/4 w-full text-center md:text-left space-y-4 pl-8 ">
          
            <h5 className="text-2xl text-center font-semibold text-gray-900">
                {heros[index].name}
            </h5>
            <p className="text-green-600 font-medium text-lg">
                {heros[index].role}
            </p>
            <p className="text-gray-600 leading-relaxed">
                {heros[index].about}
            </p>
        </div>

        <div className="md:w-3/4 w-full flex justify-center">
          <img
            src={heros[index].image}
            alt={heros[index].name}
            className="max-h-[300px] w-auto rounded-2xl shadow-md border border-gray-200 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
