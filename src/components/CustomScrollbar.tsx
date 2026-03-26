import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const [isHovered, setIsHovered] = useState(false);
  
  // High-End momentum smoothing (Buttery feel)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate Thumb height and position (Directly on the edge)
  const thumbY = useTransform(smoothProgress, [0, 1], ["0%", "calc(100% - 120px)"]);

  // Track height based on scroll progress
  return (
    <div 
      className="fixed right-0 top-0 bottom-0 z-[9999] group pointer-events-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: isHovered ? '16px' : '4px' }}
    >
      {/* Decorative Track Line (Ultra-thin IDE line) */}
      <div className={`absolute right-[0px] top-0 bottom-0 w-[0.5px] bg-zinc-800/30 transition-all duration-500 ${isHovered ? 'bg-[#4ade8033]' : ''}`} />

      {/* Luxury Scroll Thumb */}
      <motion.div
        style={{ 
          top: thumbY,
          height: '120px',
          width: isHovered ? '6px' : '1.5px',
          right: isHovered ? '4px' : '0px'
        }}
        className={`absolute rounded-full transition-all duration-300 ease-out flex items-center justify-center overflow-hidden`}
      >
        {/* Background / Body of thumb — High-contrast metal/green */}
        <div className={`w-full h-full transition-colors duration-300 ${isHovered ? 'bg-[#4ade80]' : 'bg-zinc-600/80'} relative`}>
          {/* Subtle Inner Glow on Hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20" />
          )}
        </div>
      </motion.div>

      {/* Aesthetic Micro-Glow on the Edge */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute top-0 bottom-0 right-0 w-[40px] bg-gradient-to-l from-[#4ade801a] to-transparent pointer-events-none -z-10"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomScrollbar;
