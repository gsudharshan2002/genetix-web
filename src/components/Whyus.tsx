import { useState } from "react";
import { whyus } from "@/Data"; // Assuming whyus is an array of strings or objects with a description property
const Whyus = () => {

 

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % whyus.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + whyus.length) % whyus.length);
  };

  return (
    <div className=" w-full bg-white p-6 rounded shadow-md  mx-auto text-center">
      <h4 className="text-3xl  ">Why People love</h4>
      <h4 className="text-2xl font-bold font-stretch-90% bg-gradient-to-b from-green-500 to-purple-500
      bg-clip-text text-transparent mb-4">Working with us</h4>
      <p className="text-gray-700 mb-6 min-h-[80px] w-2/4 mx-auto">"" {whyus[index]} ""</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Whyus;
