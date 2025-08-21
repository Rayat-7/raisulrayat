"use client";

import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', percentage: 95 },
    { name: 'Backend Development', percentage: 88 },
    { name: 'UI/UX Design', percentage: 92 }
  ];

  const traits = ['Problem Solver', 'Creative Thinker', 'Team Player', 'Tech Enthusiast'];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate developer who loves creating innovative solutions and exploring cutting-edge technologies. 
              My journey in tech is driven by curiosity and the desire to make a meaningful impact through code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in modern web development, I focus on building scalable applications that solve real-world problems 
              while maintaining excellent user experience and clean, maintainable code.
            </p>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <span key={trait} className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-black rounded-xl p-8 border border-gray-800">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;