import Image from "next/image";

const phases = [
  {
    title: "Phase 1: Architecture & Logic",
    description:
      "We plan system architecture, define core logic, and pick minimal tech stacks for optimal performance.",
    image: "/p1.jpg",
  },
  {
    title: "Phase 2: UI/UX & Design",
    description:
      "Crafting intuitive user interfaces using design systems and reusable components that match the business vision.",
    image: "/p2.jpg",
  },
  {
    title: "Phase 3: Testing & Improvement",
    description:
      "We rigorously test functionality, accessibility, and performance. Iterations are made based on feedback.",
    image: "/p3.jpg",
  },
  {
    title: "Phase 4: Assembly & Integration",
    description:
      "We integrate backend, frontend, third-party services, and deploy the app to staging with live data flow.",
    image: "/p4.jpg",
  },
  {
    title: "Phase 5: Hosting & Maintenance",
    description:
      "We launch to production, set up monitoring, backups, and provide affordable post-launch support.",
    image: "/p5.jpg",
  },
];

const Process = () => {
  return (
    <section className="bg-white py-24 px-10 lg:px-20  shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
        Our <span className="text-green-500">Process</span>
      </h2>

      <div className="space-y-20">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-10 md:gap-16`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={phase.image}
                alt={phase.title}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full max-h-[350px] shadow-md"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-2">
              <label className="block text-3xl font-extrabold mb-4 text-gray-800">
                <span className="bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
                  {phase.title}
                </span>
              </label>
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                <span className="text-green-600 font-semibold">→ </span>
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
