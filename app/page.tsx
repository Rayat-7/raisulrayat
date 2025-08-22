"use client";

import React, { useState, useEffect, JSX } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';
import Beams from "@/components/beams";
import Preloader from "@/components/Preloader";
import AnimatedText from "@/components/AnimatedText";
import { 
  navigationItems, 
  projects, 
  skills, 
  experience, 
  currentlyLearning,
  contactInfo,
  aboutData,
  techIcons,
  Project,
  SkillGroup,
  Experience,
  NavigationItem,
  TechIcon
} from "@/lib/data";

// Add custom CSS for animations
const styles = `
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slide-down {
    animation: slide-down 0.6s ease-out;
  }
`;

interface TechTagProps {
  tech: string;
  index: number;
}

const TechTag: React.FC<TechTagProps> = ({ tech, index }) => {
  const techData: TechIcon | undefined = techIcons[tech];
  return (
    <AnimatedText delay={index * 100}>
      <span className="flex items-center gap-2 text-gray-500 text-xs md:text-sm font-light px-3 py-1 bg-gray-900/30 rounded-full border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
        {techData && (
          <span className={`text-sm ${techData.color}`}>
            {techData.icon}
          </span>
        )}
        {tech}
      </span>
    </AnimatedText>
  );
};

interface SkillItemProps {
  skill: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  const techData: TechIcon | undefined = techIcons[skill];
  return (
    <AnimatedText delay={index * 50}>
      <div className="flex items-center gap-2 text-gray-400 font-light py-2 text-sm md:text-base hover:text-cyan-400 transition-colors duration-300">
        {techData && (
          <span className={`text-lg ${techData.color}`}>
            {techData.icon}
          </span>
        )}
        {skill}
      </div>
    </AnimatedText>
  );
};

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Inject custom styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  const handlePreloaderComplete = (): void => {
    setIsLoading(false);
  };

  const renderContent = (): JSX.Element | null => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-8 mt-20">
            <div>
              <AnimatedText delay={0}>
                <p className="text-gray-300 text-right text-base md:text-lg leading-relaxed font-light mb-6">
                  {aboutData.intro}
                </p>
              </AnimatedText>
              <AnimatedText delay={200}>
                <p className="text-gray-300 text-right text-base md:text-lg leading-relaxed font-light">
                  {aboutData.description}
                </p>
              </AnimatedText>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <AnimatedText delay={400}>
                  <h3 className="text-white text-right text-lg md:text-xl font-light mb-4">Background</h3>
                </AnimatedText>
                <ul className="space-y-2 text-right text-gray-400 font-light text-sm md:text-base">
                  {aboutData.background.map((item: string, index: number) => (
                    <AnimatedText key={index} delay={500 + index * 100}>
                      <li>{item}</li>
                    </AnimatedText>
                  ))}
                </ul>
              </div>
              <div>
                <AnimatedText delay={400}>
                  <h3 className="text-white text-right text-lg md:text-xl font-light mb-4">Interests</h3>
                </AnimatedText>
                <ul className="space-y-2 text-right text-gray-400 font-light text-sm md:text-base">
                  {aboutData.interests.map((item: string, index: number) => (
                    <AnimatedText key={index} delay={500 + index * 100}>
                      <li>{item}</li>
                    </AnimatedText>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-3 ">
            <div className="space-y-8 overflow-auto scrollbar-hide">
              {projects.map((project: Project, index: number) => (
                <AnimatedText key={index} delay={index * 200}>
                  <div className="group overflow-auto scrollbar-hide">
                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex flex-col md:flex-row md:justify-end md:items-start gap-2">
                        <h3 className="text-white text-lg md:text-3xl lg:text-4xl font-light group-hover:text-cyan-400 transition-colors text-right">
                          {project.title}
                        </h3>
                        {/* <span className="text-gray-500 text-sm font-light md:text-right">{project.year}</span> */}
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {project.tech.map((tech: string, i: number) => (
                            <TechTag key={i} tech={tech} index={i} />
                          ))}
                        </div>
                        
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base md:text-right">
                          {project.description}
                        </p>
                        
                        <div className="md:flex md:justify-end">
                          <a
                            href={project.link}
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-light text-sm md:text-base"
                          >
                            View Project <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {index < projects.length - 1 && (
                      <div className="border-b border-gray-800 mt-6"></div>
                    )}
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        );

      case 'skills':
  return (
    <div className="space-y-8 text-right">
      {skills.map((skillGroup: SkillGroup, index: number) => (
        <div key={index} className="space-y-2">
          <AnimatedText delay={index * 200}>
            <div className="flex justify-end items-center gap-3 mb-2">
              <h3 className="text-white text-lg md:text-xl font-light tracking-wide">
                {skillGroup.category}
              </h3>
              <skillGroup.icon className="w-6 h-6 text-cyan-400 shrink-0" />
            </div>
          </AnimatedText>

          <div
            className="
              flex flex-wrap justify-end gap-4
              sm:gap-6
            "
          >
            {skillGroup.items.map((skill: string, i: number) => (
              <SkillItem key={i} skill={skill} index={i} />
            ))}
          </div>
        </div>
      ))}

      <AnimatedText delay={800}>
        <div
          className="
            mt-16 p-6 bg-gray-900/30 rounded-lg border border-gray-800
            hover:border-cyan-400/30 transition-colors duration-300
            space-y-4 text-right
          "
        >
          <h3 className="text-white text-lg md:text-xl font-light">
            Currently Learning
          </h3>
          <div
            className="
              flex flex-wrap justify-end gap-3 md:gap-4
            "
          >
            {currentlyLearning.map((skill: string, i: number) => (
              <AnimatedText key={i} delay={900 + i * 100}>
                <span
                  className="
                    flex items-center gap-2 text-cyan-400 text-xs md:text-sm font-light
                    border border-cyan-400 px-3 py-1.5
                    rounded-full hover:bg-cyan-400/10
                    transition-all duration-300
                  "
                >
                  {techIcons[skill] && (
                    <span
                      className={`text-base md:text-lg ${techIcons[skill].color}`}
                    >
                      {techIcons[skill].icon}
                    </span>
                  )}
                  {skill}
                </span>
              </AnimatedText>
            ))}
          </div>
        </div>
      </AnimatedText>
    </div>
  );

      case 'contact':
        return (
          <div className="space-y-8 text-right">
            <AnimatedText delay={0}>
              <div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's connect and discuss how we can create something amazing together.
                </p>
              </div>
            </AnimatedText>

            <div className="space-y-6 text-right ">
              <AnimatedText delay={200}>
                <div className="flex text-right items-center justify-end gap-4 p-4 rounded-lg bg-gray-900/20 border border-gray-800 hover:border-cyan-400/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-light text-sm md:text-base">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-400 font-light hover:text-cyan-400 transition-colors text-sm md:text-base">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </AnimatedText>
              
              <AnimatedText delay={300}>
                <div className="flex items-center gap-4 p-4 rounded-lg justify-end bg-gray-900/20 border border-gray-800 hover:border-cyan-400/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-light text-sm md:text-base">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-400 font-light hover:text-cyan-400 transition-colors text-sm md:text-base">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </AnimatedText>
              
              <AnimatedText delay={400}>
                <div className="flex items-center gap-4 p-4 rounded-lg justify-end bg-gray-900/20 border border-gray-800">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-light text-sm md:text-base">Location</p>
                    <p className="text-gray-400 font-light text-sm md:text-base">{contactInfo.location}</p>
                  </div>
                </div>
              </AnimatedText>
            </div>

            <AnimatedText delay={600}>
              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-white text-lg md:text-xl font-light mb-4">Find me online</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={contactInfo.github} className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-light text-sm md:text-base p-2 rounded-lg hover:bg-gray-900/30">
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href={contactInfo.linkedin} className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-light text-sm md:text-base p-2 rounded-lg hover:bg-gray-900/30">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </AnimatedText>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-8 text-right">
            {experience.map((exp: Experience, index: number) => (
              <AnimatedText key={index} delay={index * 200}>
                <div className="border-b border-gray-800 pb-6 last:border-b-0 hover:bg-gray-900/10 p-4 rounded-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <span className="text-gray-500 text-sm font-light bg-gray-900/30 px-2 py-1 rounded">{exp.period}</span>
                    <h3 className="text-white text-lg md:text-xl font-light">{exp.title}</h3>
                    
                  </div>
                  <p className="text-cyan-400 font-light mb-3 text-sm md:text-base">{exp.company}</p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{exp.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden scrollbar-hide">
      <div className="absolute inset-3 w-[98%] h-[97%] border-1 border-cyan-900">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#22c2e2"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="relative z-10 flex min-h-[98vh]">
        {/* Left Sidebar - 35% - STICKY */}
        <div className="w-full md:w-[35%] bg-transparent p-4 md:p-8 flex flex-col justify-between sticky top-0 h-screen">
          {/* Header */}
          <div>
            <AnimatedText delay={0}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white pb-0  p-2">Raisul Rayat</h1>
            </AnimatedText>
            <AnimatedText delay={200}>
              <p className="text-gray-400 font-light mb-8 p-3 md:mb-12 text-sm md:text-base">Web Developer & Aspiring Entrepreneur </p>
            </AnimatedText>

            {/* Navigation */}
            <nav>
              <ul className="space-y-4 md:space-y-5 p-3">
                {navigationItems.map((item: NavigationItem, index: number) => (
                  <li key={item.id}>
                    <AnimatedText delay={300 + index * 100}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`text-base md:text-lg font-light transition-all duration-300 hover:translate-x-2 ${
                          activeSection === item.id
                            ? 'text-white'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    </AnimatedText>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Footer */}
          <div className="hidden md:block">
            <AnimatedText delay={800}>
              <div className="text-gray-500 font-light text-sm space-y-1">
                <p>© Raisul Rayat</p>
              </div>
            </AnimatedText>
          </div>
        </div>

        {/* Right Content Area - 65% - SCROLLABLE */}
        <div className="w-full md:w-[65%] bg-transparent scrollbar-hide">
          <div className="h-screen overflow-y-auto scrollbar-hide">
            <div className="p-4 md:p-8 lg:p-12 min-h-full flex items-start">
              <div className="w-full max-w-4xl pt-3 md:pt-5">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;














// "use client";

// import React, { useState } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';
// import Beams from "@/components/beams";

// const page = () => {
//   const [activeSection, setActiveSection] = useState('about');

//   const navigationItems = [
//   { id: 'about', label: 'About' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'experience', label: 'Experience' },
//   { id: 'contact', label: 'Contact' }
// ];

// const projects = [
//   {
//     title: "Waste Management Dashboard",
//     year: "2024",
//     tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Map API"],
//     description:
//       "Smart waste bin monitoring dashboard with tooltips showing address, fullness, battery level, and connection. Built with real-time data simulation.",
//     link: "https://github.com/Rayat-7" // replace with actual repo if available
//   },
//   {
//     title: "Cyber Play Arena Booking App",
//     year: "2024",
//     tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "ShadCN"],
//     description:
//       "Web app for managing 30-minute gaming console slots. Features admin panel, real-time slot availability, and calendar-based booking.",
//     link: "https://github.com/Rayat-7" // replace with actual repo if available
//   },
//   {
//     title: "Meal Management CRUD App",
//     year: "2025",
//     tech: ["Next.js", "MySQL", "Neon DB", "Tailwind CSS"],
//     description:
//       "CRUD application for bachelors to manage meals, cooking schedules, shopping duties, and shared expenses. Built for a database course project.",
//     link: "https://github.com/Rayat-7" // replace with actual repo if available
//   },
//   {
//     title: "Inspection Report Marketplace",
//     year: "2025",
//     tech: ["Next.js", "Sanity CMS", "Neon PostgreSQL", "Prisma"],
//     description:
//       "Marketplace where inspectors upload commercial asset reports and buyers can purchase them. Features secure role-based access and modern UI.",
//     link: "https://github.com/Rayat-7" // replace with actual repo if available
//   },
//   {
//     title: "Todo App",
//     year: "2025",
//     tech: ["React", "TypeScript", "Prisma", "PostgreSQL", "ShadCN"],
//     description:
//       "Simple todo app built to master React Hooks (useState, useEffect) and practice CRUD operations with Prisma and PostgreSQL.",
//     link: "https://github.com/Rayat-7" // replace with actual repo if available
//   },
//   {
//     title: "Defense Prep SaaS (Idea Stage)",
//     year: "2025",
//     tech: ["Next.js", "AI (Gemini)", "PostgreSQL", "Tailwind CSS"],
//     description:
//       "AI-powered ISSB/Defense preparation platform with mock interviews, quiz modules, guidebooks, and a mentor chatbot. SaaS model with subscription.",
//     link: "https://github.com/Rayat-7" // replace with actual repo if available
//   }
// ];

// const skills = [
//   { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "ShadCN"] },
//   { category: "Backend", items: ["Node.js", "Prisma", "Express", "Python", "REST APIs"] },
//   { category: "Database", items: ["PostgreSQL", "MySQL", "Neon DB", "Firebase"] },
//   { category: "Tools & Cloud", items: ["Git", "Vercel", "Clerk", "Sanity CMS", "Figma", "VS Code"] }
// ];

// const experience = [
//   {
//     title: "BSc in Computer Science",
//     company: "United International University",
//     period: "Ongoing",
//     description:
//       "Currently pursuing my Bachelor's degree in Computer Science. Building strong foundations in software engineering, databases, and AI through academic and self-driven projects."
//   },
//   {
//     title: "Full Stack Developer (Projects)",
//     company: "Self-Driven Projects",
//     period: "2023 - Present",
//     description:
//       "Worked on real-world inspired applications including booking systems, dashboards, CRUD apps, and SaaS ideas. Focused on clean code, scalability, and solving real problems."
//   },
//   {
//     title: "Hackathons & Learning",
//     company: "Personal Growth",
//     period: "2022 - 2023",
//     description:
//       "Actively practiced with smaller apps and coursework projects. Learned Next.js, Prisma, PostgreSQL, and React Hooks by building practical applications step by step."
//   }
// ];


//   const renderContent = () => {
//     switch (activeSection) {
//       case 'about':
//         return (
//           <div className="space-y-8 mt-20">
//             <div>
//               <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-6">
//                 Born in 1994 in Dhaka, Bangladesh. I believe web development can be more diverse and inspiring. 
//                 With a mission to present the possibilities of modern web technologies, I am pursuing new expressions 
//                 through experiments and innovative solutions.
//               </p>
//               <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
//                 I'm a passionate developer who loves creating innovative solutions and exploring cutting-edge technologies. 
//                 My journey in tech is driven by curiosity and the desire to make a meaningful impact through code.
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-white text-lg md:text-xl font-light mb-4">Background</h3>
//                 <ul className="space-y-2 text-gray-400 font-light text-sm md:text-base">
//                   <li>Computer Science Graduate</li>
//                   <li>3+ Years of Experience</li>
//                   <li>Full-Stack Development</li>
//                   <li>UI/UX Design Interest</li>
//                   <li>Open Source Contributor</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-white text-lg md:text-xl font-light mb-4">Interests</h3>
//                 <ul className="space-y-2 text-gray-400 font-light text-sm md:text-base">
//                   <li>3D Web Development</li>
//                   <li>Interactive Design</li>
//                   <li>Performance Optimization</li>
//                   <li>Modern Web Technologies</li>
//                   <li>Creative Coding</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         );

//       case 'projects':
//         return (
//           <div className="space-y-3">
//             <div className="space-y-8">
//               {projects.map((project, index) => (
//                 <div key={index} className="group">
//                   <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
//                     <h3 className="text-white text-lg md:text-5xl font-light group-hover:text-cyan-400 transition-colors">
//                       {project.title}
//                     </h3>
//                     <span className="text-gray-500 text-sm font-light">{project.year}</span>
//                   </div>
                  
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {project.tech.map((tech, i) => (
//                       <span key={i} className="text-gray-500 text-xs md:text-sm font-light px-2 py-1">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <p className="text-gray-400 font-light mb-4 leading-relaxed text-sm md:text-base">
//                     {project.description}
//                   </p>
                  
//                   <a
//                     href={project.link}
//                     className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-light text-sm md:text-base"
//                   >
//                     View Project <ExternalLink size={14} />
//                   </a>
                  
//                   {index < projects.length - 1 && (
//                     <div className="border-b border-gray-800 mt-6"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         );

//       case 'skills':
//         return (
//           <div className="space-y-8">
//             {skills.map((skillGroup, index) => (
//               <div key={index}>
//                 <h3 className="text-white text-lg md:text-xl font-light mb-4">{skillGroup.category}</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {skillGroup.items.map((skill, i) => (
//                     <div key={i} className="text-gray-400 font-light py-2 text-sm md:text-base">
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
            
//             <div className="mt-12 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
//               <h3 className="text-white text-lg md:text-xl font-light mb-4">Currently Learning</h3>
//               <div className="flex flex-wrap gap-2">
//                 {["WebGL", "Rust", "AI/ML", "Web3"].map((skill, i) => (
//                   <span key={i} className="text-cyan-400 text-xs md:text-sm font-light border border-cyan-400 px-2 py-1 rounded">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 'contact':
//         return (
//           <div className="space-y-8">
//             <div>
//               <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-8">
//                 I'm always interested in new opportunities and exciting projects. 
//                 Let's connect and discuss how we can create something amazing together.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
//                 <div>
//                   <p className="text-white font-light text-sm md:text-base">Email</p>
//                   <a href="mailto:raisulrayat@example.com" className="text-gray-400 font-light hover:text-cyan-400 transition-colors text-sm md:text-base">
//                     raisulrayat@example.com
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
//                 <div>
//                   <p className="text-white font-light text-sm md:text-base">Phone</p>
//                   <a href="tel:+8801234567890" className="text-gray-400 font-light hover:text-cyan-400 transition-colors text-sm md:text-base">
//                     +880 123 456 7890
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
//                 <div>
//                   <p className="text-white font-light text-sm md:text-base">Location</p>
//                   <p className="text-gray-400 font-light text-sm md:text-base">Dhaka, Bangladesh</p>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8 border-t border-gray-800">
//               <h3 className="text-white text-lg md:text-xl font-light mb-4">Find me online</h3>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a href="https://github.com/rayat-7" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-light text-sm md:text-base">
//                   <Github size={18} />
//                   GitHub
//                 </a>
//                 <a href="https://linkedin.com/in/raisulrayat" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-light text-sm md:text-base">
//                   <Linkedin size={18} />
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//         );

//       case 'experience':
//         return (
//           <div className="space-y-8">
//             {experience.map((exp, index) => (
//               <div key={index} className="border-b border-gray-800 pb-6 last:border-b-0">
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
//                   <h3 className="text-white text-lg md:text-xl font-light">{exp.title}</h3>
//                   <span className="text-gray-500 text-sm font-light">{exp.period}</span>
//                 </div>
//                 <p className="text-cyan-400 font-light mb-3 text-sm md:text-base">{exp.company}</p>
//                 <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{exp.description}</p>
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">
//       <div className="absolute inset-3 w-[98%] h-[97%] border-1 border-cyan-900">
//         <Beams
//           beamWidth={2}
//           beamHeight={15}
//           beamNumber={12}
//           lightColor="#22c2e2"
//           speed={2}
//           noiseIntensity={1.75}
//           scale={0.2}
//           rotation={30}
//         />
//       </div>

//       <div className="relative z-10 flex min-h-[98vh]">
//         {/* Left Sidebar - 35% - STICKY */}
//         <div className="w-full md:w-[35%] bg-transparent p-4 md:p-8 flex flex-col justify-between sticky top-0 h-screen">
//           {/* Header */}
//           <div>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-2">Raisul Rayat</h1>
//             <p className="text-gray-400 font-light mb-8 md:mb-12 text-sm md:text-base">Designer & Developer</p>

//             {/* Navigation */}
//             <nav>
//               <ul className="space-y-4 md:space-y-6">
//                 {navigationItems.map((item) => (
//                   <li key={item.id}>
//                     <button
//                       onClick={() => setActiveSection(item.id)}
//                       className={`text-base md:text-lg font-light transition-colors duration-200 ${
//                         activeSection === item.id
//                           ? 'text-white'
//                           : 'text-gray-500 hover:text-gray-300'
//                       }`}
//                     >
//                       {item.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Footer */}
//           <div className="hidden md:block">
//             <div className="text-gray-500 font-light text-sm space-y-1">
//               <p>© Raisul Rayat</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Content Area - 65% - SCROLLABLE */}
//         <div className="w-full md:w-[65%] bg-transparent overflow-hidden">
//           <div className="h-screen overflow-y-auto">
//             <div className="p-4 md:p-8 lg:p-12 min-h-full flex items-start">
//               <div className="w-full max-w-4xl pt-3 md:pt-5">
//                 {renderContent()}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;









// "use client";

// import React, { useState } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';
// import Beams from "@/components/beams";

// const page = () => {
//   const [activeSection, setActiveSection] = useState('about');

//   const navigationItems = [
//     { id: 'about', label: 'Info' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'contact', label: 'Contact' },
//     { id: 'experience', label: 'Experience' }
//   ];

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       year: "2024",
//       tech: ["React", "Node.js", "MongoDB"],
//       description: "Full-stack e-commerce solution with payment integration and admin dashboard. Built with modern technologies for optimal performance.",
//       link: "#"
//     },
//     {
//       title: "Task Management App",
//       year: "2024",
//       tech: ["Next.js", "TypeScript", "Prisma"],
//       description: "Collaborative project management tool with real-time updates and team features. Designed for productivity and seamless collaboration.",
//       link: "#"
//     },
//     {
//       title: "AI Chat Interface",
//       year: "2023",
//       tech: ["React", "Python", "OpenAI"],
//       description: "Intelligent chatbot interface with natural language processing capabilities. Advanced AI integration for enhanced user interaction.",
//       link: "#"
//     },
//     {
//       title: "Weather Dashboard",
//       year: "2023",
//       tech: ["Vue.js", "Express", "API"],
//       description: "Real-time weather tracking application with interactive maps and forecasts. Clean interface with comprehensive weather data.",
//       link: "#"
//     }
//   ];

//   const skills = [
//     { category: "Frontend", items: ["React", "Vue.js", "Next.js", "TypeScript", "Three.js"] },
//     { category: "Backend", items: ["Node.js", "Python", "Express", "GraphQL", "REST APIs"] },
//     { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Prisma"] },
//     { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] }
//   ];

//   const experience = [
//     {
//       title: "Senior Frontend Developer",
//       company: "Tech Solutions Inc.",
//       period: "2023 - Present",
//       description: "Leading frontend development for enterprise applications. Working with React, TypeScript, and modern web technologies."
//     },
//     {
//       title: "Full Stack Developer",
//       company: "Digital Agency",
//       period: "2022 - 2023",
//       description: "Developed web applications and collaborated with design teams. Built scalable solutions using MERN stack."
//     },
//     {
//       title: "Junior Developer",
//       company: "Startup Co.",
//       period: "2021 - 2022",
//       description: "Started my professional journey building responsive websites and learning modern development practices."
//     }
//   ];

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'about':
//         return (
//           <div className="space-y-8">
//             <div>
//               <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
//                 Born in 1994 in Dhaka, Bangladesh. I believe web design can be more diverse and inspiring. 
//                 With a mission to present the possibilities of web design, I am pursuing new expressions 
//                 through experiments and thoughts.
//               </p>
//               <p className="text-gray-300 text-lg leading-relaxed font-light">
//                 I'm a passionate developer who loves creating innovative solutions and exploring cutting-edge technologies. 
//                 My journey in tech is driven by curiosity and the desire to make a meaningful impact through code.
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-white text-xl font-light mb-4">Background</h3>
//                 <ul className="space-y-2 text-gray-400 font-light">
//                   <li>Computer Science Graduate</li>
//                   <li>3+ Years of Experience</li>
//                   <li>Full-Stack Development</li>
//                   <li>UI/UX Design Interest</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-white text-xl font-light mb-4">Interests</h3>
//                 <ul className="space-y-2 text-gray-400 font-light">
//                   <li>3D Web Development</li>
//                   <li>Interactive Design</li>
//                   <li>Performance Optimization</li>
//                   <li>Open Source Projects</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         );

//       case 'projects':
//         return (
//           <div className="space-y-8">
//             <div className="grid gap-8">
//               {projects.map((project, index) => (
//                 <div key={index} className="border-b border-gray-800 pb-6 last:border-b-0">
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-white text-xl font-light">{project.title}</h3>
//                     <span className="text-gray-500 text-sm font-light">{project.year}</span>
//                   </div>
//                   <p className="text-gray-400 font-light mb-4 leading-relaxed">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, i) => (
//                       <span key={i} className="text-gray-500 text-sm font-light border border-gray-700 px-2 py-1 rounded">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <a
//                     href={project.link}
//                     className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-light"
//                   >
//                     View Project <ExternalLink size={16} />
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );

//       case 'skills':
//         return (
//           <div className="space-y-8">
//             {skills.map((skillGroup, index) => (
//               <div key={index}>
//                 <h3 className="text-white text-xl font-light mb-4">{skillGroup.category}</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {skillGroup.items.map((skill, i) => (
//                     <div key={i} className="text-gray-400 font-light py-2 border-b border-gray-800">
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case 'contact':
//         return (
//           <div className="space-y-8">
//             <div>
//               <p className="text-gray-300 text-lg leading-relaxed font-light mb-8">
//                 I'm always interested in new opportunities and exciting projects. 
//                 Let's connect and discuss how we can create something amazing together.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <Mail className="w-5 h-5 text-cyan-400" />
//                 <div>
//                   <p className="text-white font-light">Email</p>
//                   <a href="mailto:your.email@example.com" className="text-gray-400 font-light hover:text-cyan-400 transition-colors">
//                     your.email@example.com
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <Phone className="w-5 h-5 text-cyan-400" />
//                 <div>
//                   <p className="text-white font-light">Phone</p>
//                   <a href="tel:+15551234567" className="text-gray-400 font-light hover:text-cyan-400 transition-colors">
//                     +1 (555) 123-4567
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <MapPin className="w-5 h-5 text-cyan-400" />
//                 <div>
//                   <p className="text-white font-light">Location</p>
//                   <p className="text-gray-400 font-light">Dhaka, Bangladesh</p>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8 border-t border-gray-800">
//               <div className="flex gap-6">
//                 <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-light">
//                   <Github size={18} />
//                   GitHub
//                 </a>
//                 <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-light">
//                   <Linkedin size={18} />
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//         );

//       case 'experience':
//         return (
//           <div className="space-y-8">
//             {experience.map((exp, index) => (
//               <div key={index} className="border-b border-gray-800 pb-6 last:border-b-0">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-white text-xl font-light">{exp.title}</h3>
//                   <span className="text-gray-500 text-sm font-light">{exp.period}</span>
//                 </div>
//                 <p className="text-cyan-400 font-light mb-3">{exp.company}</p>
//                 <p className="text-gray-400 font-light leading-relaxed">{exp.description}</p>
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">
      
//         <div className="absolute inset-3  w-[98%] h-[97%]  border-1  border-cyan-900">
//         <Beams
//           beamWidth={2}
//           beamHeight={15}
//           beamNumber={12}
//           lightColor="#22c2e2"
//           speed={2}
//           noiseIntensity={1.75}
//           scale={0.2}
//           rotation={30}
//         />
//       </div>

//       <div className="relative z-10 flex min-h-[98vh]">
//         {/* Left Sidebar - 35% */}
//         <div className="w-[35%] bg-transparent   p-8 flex flex-col justify-between">
//           {/* Header */}
//           <div>
//             <h1 className="text-4xl md:text-5xl text-white font-light mb-2">Raisul Rayat</h1>
//             <p className="text-gray-400 font-light mb-12">Designer & Developer</p>

//             {/* Navigation */}
//             <nav>
//               <ul className="space-y-6">
//                 {navigationItems.map((item) => (
//                   <li key={item.id}>
//                     <button
//                       onClick={() => setActiveSection(item.id)}
//                       className={`text-lg font-light transition-colors duration-200 ${
//                         activeSection === item.id
//                           ? 'text-white'
//                           : 'text-gray-500 hover:text-gray-300'
//                       }`}
//                     >
//                       {item.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Footer */}
//           <div>
//             <div className="text-gray-500 font-light text-sm space-y-1">
//               <p>© Raisul Rayat</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Content Area - 65% */}
//         <div className="w-[65%] trs p-8 md:p-12 flex items-center">
//           <div className="w-full max-w-4xl">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//       </div>
      
      
   
//   );
// };

// export default page;





// // "use client";

// import AboutSection from "@/components/AboutSection";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/HeroSection";
// import Navbar from "@/components/Navbar";
// import ProjectsSection from "@/components/ProjectSection";
// import SkillsSection from "@/components/SkillsSection";


// // import React, { useState, useEffect } from 'react';
// // import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
// // import Beams from "@/components/beams";

// // // Navigation Component
// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isVisible, setIsVisible] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);

// //   useEffect(() => {
// //     const controlNavbar = () => {
// //       const currentScrollY = window.scrollY;
      
// //       if (currentScrollY < lastScrollY || currentScrollY < 50) {
// //         setIsVisible(true);
// //       } else {
// //         setIsVisible(false);
// //         setIsOpen(false);
// //       }
      
// //       setLastScrollY(currentScrollY);
// //     };

// //     window.addEventListener('scroll', controlNavbar);
// //     return () => window.removeEventListener('scroll', controlNavbar);
// //   }, [lastScrollY]);

// //   const navItems = [
// //     { name: 'About', href: '#about' },
// //     { name: 'Projects', href: '#projects' },
// //     { name: 'Skills', href: '#skills' },
// //     { name: 'Contact', href: '#contact' }
// //   ];

// //   return (
// //     <nav 
// //       className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
// //         isVisible ? 'translate-y-0' : '-translate-y-full'
// //       }`}
// //     >
// //       <div className="bg-black/90 backdrop-blur-lg border-b border-white/10">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center h-16">
// //             {/* Logo */}
// //             <div className="flex-shrink-0">
// //               <a href="#" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
// //                 RR
// //               </a>
// //             </div>

// //             {/* Desktop Navigation */}
// //             <div className="hidden md:block">
// //               <div className="ml-10 flex items-baseline space-x-8">
// //                 {navItems.map((item) => (
// //                   <a
// //                     key={item.name}
// //                     href={item.href}
// //                     className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
// //                     onClick={() => setIsOpen(false)}
// //                   >
// //                     {item.name}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Desktop Social Links */}
// //             <div className="hidden md:flex items-center space-x-4">
// //               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
// //                 <Github size={20} />
// //               </a>
// //               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
// //                 <Linkedin size={20} />
// //               </a>
// //               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
// //                 <Mail size={20} />
// //               </a>
// //             </div>

// //             {/* Mobile menu button */}
// //             <div className="md:hidden">
// //               <button
// //                 onClick={() => setIsOpen(!isOpen)}
// //                 className="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors"
// //               >
// //                 {isOpen ? <X size={24} /> : <Menu size={24} />}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <div className={`md:hidden transition-all duration-300 ease-in-out ${
// //           isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
// //         } overflow-hidden bg-black/95`}>
// //           <div className="px-2 pt-2 pb-3 space-y-1">
// //             {navItems.map((item) => (
// //               <a
// //                 key={item.name}
// //                 href={item.href}
// //                 className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 {item.name}
// //               </a>
// //             ))}
// //             {/* Mobile Social Links */}
// //             <div className="flex items-center space-x-4 px-3 py-2">
// //               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
// //                 <Github size={20} />
// //               </a>
// //               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
// //                 <Linkedin size={20} />
// //               </a>
// //               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
// //                 <Mail size={20} />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // // Hero Section Component
// // const HeroSection = () => {
// //   return (
// //     <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
// //       {/* Beams Background - Using your original component */}
// //       <div className="absolute inset-0 w-full h-full">
// //         <Beams
// //           beamWidth={2}
// //           beamHeight={15}
// //           beamNumber={12}
// //           lightColor="#22c2e2"
// //           speed={2}
// //           noiseIntensity={1.75}
// //           scale={0.2}
// //           rotation={30}
// //         />
// //       </div>
      
// //       {/* Hero Content */}
// //       <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
// //         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
// //           Raisul Rayat
// //         </h1>
// //         <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
// //           Tech Enthusiast - I build meaningful web apps that solve 
// //           <br className="hidden sm:block" />
// //           real problems and constantly level up by exploring new tech and ideas
// //         </p>
        
// //         {/* CTA Buttons */}
// //         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
// //           <a
// //             href="#projects"
// //             className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
// //           >
// //             View My Work
// //             <ExternalLink size={20} />
// //           </a>
// //           <a
// //             href="#contact"
// //             className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
// //           >
// //             Get In Touch
// //           </a>
// //         </div>
// //       </div>
      
// //       {/* Scroll Indicator */}
// //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
// //         <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center animate-pulse">
// //           <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // About Section
// // const AboutSection = () => (
// //   <section id="about" className="py-24 bg-gray-900">
// //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <div className="text-center mb-16">
// //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
// //         <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
// //       </div>
// //       <div className="grid md:grid-cols-2 gap-12 items-center">
// //         <div className="space-y-6">
// //           <p className="text-gray-300 text-lg leading-relaxed">
// //             I'm a passionate developer who loves creating innovative solutions and exploring cutting-edge technologies. 
// //             My journey in tech is driven by curiosity and the desire to make a meaningful impact through code.
// //           </p>
// //           <p className="text-gray-300 text-lg leading-relaxed">
// //             With expertise in modern web development, I focus on building scalable applications that solve real-world problems 
// //             while maintaining excellent user experience and clean, maintainable code.
// //           </p>
// //           <div className="flex flex-wrap gap-3">
// //             {['Problem Solver', 'Creative Thinker', 'Team Player', 'Tech Enthusiast'].map((trait) => (
// //               <span key={trait} className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
// //                 {trait}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="bg-black rounded-xl p-8 border border-gray-800">
// //           <div className="space-y-4">
// //             <div className="flex justify-between">
// //               <span className="text-gray-300">Frontend Development</span>
// //               <span className="text-cyan-400">95%</span>
// //             </div>
// //             <div className="w-full bg-gray-800 rounded-full h-2">
// //               <div className="bg-cyan-500 h-2 rounded-full w-[95%]"></div>
// //             </div>
// //             <div className="flex justify-between">
// //               <span className="text-gray-300">Backend Development</span>
// //               <span className="text-cyan-400">88%</span>
// //             </div>
// //             <div className="w-full bg-gray-800 rounded-full h-2">
// //               <div className="bg-cyan-500 h-2 rounded-full w-[88%]"></div>
// //             </div>
// //             <div className="flex justify-between">
// //               <span className="text-gray-300">UI/UX Design</span>
// //               <span className="text-cyan-400">92%</span>
// //             </div>
// //             <div className="w-full bg-gray-800 rounded-full h-2">
// //               <div className="bg-cyan-500 h-2 rounded-full w-[92%]"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Projects Section
// // const ProjectsSection = () => (
// //   <section id="projects" className="py-24 bg-black">
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <div className="text-center mb-16">
// //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
// //         <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
// //         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// //           Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
// //         </p>
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {[
// //           { 
// //             title: "E-Commerce Platform", 
// //             tech: ["React", "Node.js", "MongoDB"],
// //             description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
// //             gradient: "from-purple-500 to-pink-600"
// //           },
// //           { 
// //             title: "Task Management App", 
// //             tech: ["Next.js", "TypeScript", "Prisma"],
// //             description: "Collaborative project management tool with real-time updates and team features.",
// //             gradient: "from-blue-500 to-cyan-600"
// //           },
// //           { 
// //             title: "AI Chat Interface", 
// //             tech: ["React", "Python", "OpenAI"],
// //             description: "Intelligent chatbot interface with natural language processing capabilities.",
// //             gradient: "from-green-500 to-teal-600"
// //           }
// //         ].map((project, i) => (
// //           <div key={i} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 group">
// //             <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
// //               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
// //             </div>
// //             <div className="p-6">
// //               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
// //                 {project.title}
// //               </h3>
// //               <p className="text-gray-400 mb-4 leading-relaxed">
// //                 {project.description}
// //               </p>
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {project.tech.map((tech) => (
// //                   <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
// //                     {tech}
// //                   </span>
// //                 ))}
// //               </div>
// //               <div className="flex gap-3">
// //                 <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
// //                   <Github size={20} />
// //                 </button>
// //                 <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
// //                   <ExternalLink size={20} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Skills Section
// // const SkillsSection = () => (
// //   <section id="skills" className="py-24 bg-gray-900">
// //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <div className="text-center mb-16">
// //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
// //         <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
// //         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// //           I work with modern technologies to build scalable and efficient applications.
// //         </p>
// //       </div>
// //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {[
// //           { name: 'React', color: 'from-blue-400 to-blue-600' },
// //           { name: 'Node.js', color: 'from-green-400 to-green-600' },
// //           { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
// //           { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
// //           { name: 'Three.js', color: 'from-purple-400 to-purple-600' },
// //           { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
// //           { name: 'MongoDB', color: 'from-green-500 to-green-700' },
// //           { name: 'AWS', color: 'from-orange-400 to-orange-600' }
// //         ].map((skill) => (
// //           <div key={skill.name} className="group">
// //             <div className="text-center p-6 bg-black rounded-xl hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-cyan-500/50">
// //               <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
// //               <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Contact Section
// // const ContactSection = () => (
// //   <section id="contact" className="py-24 bg-black">
// //     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //       <div className="mb-16">
// //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
// //         <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
// //         <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
// //           I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can create something amazing together.
// //         </p>
// //       </div>
      
// //       <div className="grid md:grid-cols-3 gap-8 mb-12">
// //         <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
// //           <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
// //           <h3 className="text-white font-semibold mb-2">Email</h3>
// //           <p className="text-gray-400">your.email@example.com</p>
// //         </div>
// //         <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
// //           <Github className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
// //           <h3 className="text-white font-semibold mb-2">GitHub</h3>
// //           <p className="text-gray-400">github.com/yourusername</p>
// //         </div>
// //         <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
// //           <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
// //           <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
// //           <p className="text-gray-400">linkedin.com/in/yourusername</p>
// //         </div>
// //       </div>
      
// //       <a
// //         href="mailto:your.email@example.com"
// //         className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
// //       >
// //         <Mail size={20} />
// //         Start a Conversation
// //       </a>
// //     </div>
// //   </section>
// // );

// // // Footer
// // const Footer = () => (
// //   <footer className="py-8 bg-gray-900 border-t border-gray-800">
// //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <div className="text-center text-gray-400">
// //         <p>&copy; 2025 Raisul Rayat. All rights reserved.</p>
// //       </div>
// //     </div>
// //   </footer>
// // );

// // Main Portfolio Component
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black">
//       {/* <Navbar /> */}
//       <HeroSection />
//       <AboutSection />
//       <ProjectsSection />
//       <SkillsSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// }