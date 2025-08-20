"use client";

import Beams from "@/components/beams";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex bg-black">
      
      <div style={{ width: '100%', height:"800px", position: 'relative' }}>
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
    <h1 className=" absolute top-65 left-146 text-5xl  text-white items-center flex justify-center font-bold">Raisul Rayat</h1>
    <p className="absolute top-80 left-116 text-2xl text-white">Tech Enthusiast - I build meaningful web apps that solve <br/>real problems and constantly level up by exploring new tech and ideas</p>
     </div>
    </div>
    
  );
}
