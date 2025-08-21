"use client";

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    { 
      title: "E-Commerce Platform", 
      tech: ["React", "Node.js", "MongoDB"],
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      gradient: "from-purple-500 to-pink-600",
      github: "#",
      live: "#"
    },
    { 
      title: "Task Management App", 
      tech: ["Next.js", "TypeScript", "Prisma"],
      description: "Collaborative project management tool with real-time updates and team features.",
      gradient: "from-blue-500 to-cyan-600",
      github: "#",
      live: "#"
    },
    { 
      title: "AI Chat Interface", 
      tech: ["React", "Python", "OpenAI"],
      description: "Intelligent chatbot interface with natural language processing capabilities.",
      gradient: "from-green-500 to-teal-600",
      github: "#",
      live: "#"
    },
    { 
      title: "Weather Dashboard", 
      tech: ["Vue.js", "Express", "API"],
      description: "Real-time weather tracking application with interactive maps and forecasts.",
      gradient: "from-orange-500 to-red-600",
      github: "#",
      live: "#"
    },
    { 
      title: "Portfolio Website", 
      tech: ["Next.js", "Three.js", "Tailwind"],
      description: "Interactive portfolio with 3D animations and smooth user experience.",
      gradient: "from-indigo-500 to-purple-600",
      github: "#",
      live: "#"
    },
    { 
      title: "Social Media App", 
      tech: ["React Native", "Firebase", "Redux"],
      description: "Cross-platform social networking app with real-time messaging and media sharing.",
      gradient: "from-pink-500 to-rose-600",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 group">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;