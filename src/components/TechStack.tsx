import React from 'react';

export default function TechStack() {
  const sections = {
    Frontend: ['React.js', 'Next.js', 'TypeScript', 'JAMstack'],
    Backend: ['Node.js', 'Spring Boot', 'Go', 'Python'],
    AI_ML: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API'],
    DevOps: ['Docker', 'Kubernetes', 'GraphQL', 'Kafka'],
  };

  return (
    <div className="max-w-5xl mx-auto my-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-10">
        Tech <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Stack</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(sections).map(([title, items]) => (
          <div
            key={title}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              {title.replace('_', ' & ')}
            </h2>
            <ul className="space-y-2">
              {items.map((tech) => (
                <li
                  key={tech}
                  className="inline-block bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
