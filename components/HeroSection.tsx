"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Beams from "@/components/beams";
import { GradientButton } from './ui/gradient-button';
import BlurText from './blur-text';
import { motion } from 'framer-motion';

const values = {
  x: 100,
  color: "#f00"
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black  overflow-hidden flex items-center justify-center">
        <div className=' relative w-full min-h-screen border-2 flex items-start justify-start bg-white z-4  border-cyan-400'>
            <div className="absolute inset-0 w-full h-full">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={22}
          lightColor="#22c2e2"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20  px-4 sm:px-6 lg:px-8 max-w-5xl ">
        {/* <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
          Raisul Rayat
        </h1> */}
        <BlurText
  text="Raisul Rayat"
  delay={250}
  animateBy="words"
  direction="top"
  className="text-5xl  items-center justify-center sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight"
/>
       <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
 className="text-xl animate-in sm:text-xl md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
          Tech Enthusiast - I build meaningful web apps that solve 
          <br className="hidden sm:block" />
          real problems and constantly level up by exploring new tech and ideas
        </motion.div>

         {/* <BlurText
  text=" Tech Enthusiast - I build meaningful web apps that solve "
  delay={250}
  animateBy="words"
  direction="top"
  className="text-xl sm:text-xl md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
/> */}
        
        {/* CTA Buttons */}
        <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
 className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="bg-white  px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
            
          </a>
           <div className="flex gap-8">
      
      <GradientButton variant="variant">Get in Touch</GradientButton>
    </div>
          
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
        </div>
      {/* Beams Background - Using your original component */}
      
    </section>
  );
};

export default HeroSection;