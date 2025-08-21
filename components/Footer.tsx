import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    link: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    link: "mailto:your.email@example.com",
    label: "Email",
  },
];

const Footer = () => (
  <footer className="bg-black border-t border-gray-800 py-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-gray-400 text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Raisul Rayat. All rights reserved.
      </div>
      <div className="flex gap-6">
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-cyan-400 hover:text-cyan-500 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);
export default Footer;