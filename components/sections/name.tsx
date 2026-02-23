import React from "react";
import { motion } from "framer-motion";

const Name = () => {
  return (
    <section
      style={{
        fontSize: "11.5vw",
        transform: "translateY(100%)",
        flexDirection: "row",
        gap: "265px",
      }}
      className="absolute flex items-center justify-center ml-4 z-20 w-full bg-transparent transition-all duration-300"
    >
      <motion.p
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        className="text-center font-semibold text-white uppercase tracking-tighter select-none leading-[0.9]"
      >
        Raisul
      </motion.p>
      <motion.p
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        className="text-center font-semibold uppercase tracking-tighter select-none leading-[0.9]"
      >
        Rayat
      </motion.p>
    </section>
  );
};

export default Name;
