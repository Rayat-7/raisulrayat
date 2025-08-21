"use client";

import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'React', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', color: 'from-green-400 to-green-600' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
    { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Three.js', color: 'from-purple-400 to-purple-600' },
    { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'Vue.js', color: 'from-emerald-400 to-emerald-600' },
    { name: 'Docker', color: 'from-cyan-400 to-cyan-600' },
    { name: 'GraphQL', color: 'from-pink-400 to-pink-600' },
    { name: 'Firebase', color: 'from-amber-400 to-amber-600' }
  ];

  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Next.js"],
      description: "Modern UI frameworks and libraries"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "GraphQL", "MongoDB"],
      description: "Server-side technologies and databases"
    },
    {
      title: "Tools & Cloud",
      skills: ["AWS", "Docker", "Firebase", "Three.js"],
      description: "Development tools and cloud services"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I work with modern technologies to build scalable and efficient applications.
          </p>
        </div>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-black rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3 text-center">{category.title}</h3>
              <p className="text-gray-400 text-sm mb-4 text-center">{category.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="text-center p-6 bg-black rounded-xl hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-cyan-500/50 cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;