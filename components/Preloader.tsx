"use client";
import React, { useEffect, useState } from "react";
import TextType from "./Texttype";


interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 800); // wait for fade before unmount
    }, 3000); // total duration (typing + pause)
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-1000 ${
        !isVisible ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <TextType
        text={["Raisul Rayat"]}
        typingSpeed={110}
        pauseDuration={1000}
        deletingSpeed={50}
        cursorBlinkDuration={0.5}
        loop={true} // type, delete, repeat
        showCursor={true}
        cursorCharacter="_"
        className="text-xl md:text-3xl bg-gradient-to-tr from-sky-900 via-sky-500 to-sky-900 bg-clip-text text-transparent lg:text-3xl  tracking-[0.2em] "
        textColors={["#22c2e2", "#22d3ee", "#a78bfa"]} // cycles colors
      />
    </div>
  );
};

export default Preloader;











// import React, { useState, useEffect } from "react";

// interface PreloaderProps {
//   onComplete: () => void;
// }

// const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const showTimer = setTimeout(() => {
//       setIsAnimating(true);
//     }, 1800); // hold text for ~1.8s

//     const hideTimer = setTimeout(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         onComplete();
//       }, 800); // smoother fade out
//     }, 2600);

//     return () => {
//       clearTimeout(showTimer);
//       clearTimeout(hideTimer);
//     };
//   }, [onComplete]);

//   return (
//     <div
//       className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-1000 ${
//         !isVisible ? "opacity-0 scale-105" : "opacity-100 scale-100"
//       }`}
//       style={{ pointerEvents: !isVisible ? "none" : "all" }}
//     >
//       <h1
//         className={`text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.2em] text-white transition-all duration-1000 ${
//           isAnimating
//             ? "opacity-0 translate-y-6 scale-110"
//             : "opacity-100 translate-y-0 scale-100"
//         }`}
//       >
//         <span className="font-light">Raisul</span>{" "}
//         <span className="text-cyan-500 font-semibold">Rayat</span>
//       </h1>
//     </div>
//   );
// };

// export default Preloader;















// import React, { useState, useEffect } from 'react';

// interface PreloaderProps {
//   onComplete: () => void;
// }

// const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const showTimer = setTimeout(() => {
//       setIsAnimating(true);
//     }, 2000); // Show name for 2 seconds

//     const hideTimer = setTimeout(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         onComplete();
//       }, 1000); // Wait for fade out animation to complete
//     }, 2800); // Start fade out after 2.8 seconds

//     return () => {
//       clearTimeout(showTimer);
//       clearTimeout(hideTimer);
//     };
//   }, [onComplete]);

//   return (
//     <div 
//       className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-1000 ${
//         !isVisible ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
//       }`}
//       style={{ pointerEvents: !isVisible ? 'none' : 'all' }}
//     >
//       <h1 
//         className={`text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-wider transition-all duration-1000 ${
//           isAnimating ? 'opacity-0 transform scale-110' : 'opacity-100 transform scale-100'
//         }`}
//       >
//         Raisul <span className='text-cyan-600'>Rayat</span>
//       </h1>
//     </div>
//   );
// };

// export default Preloader;