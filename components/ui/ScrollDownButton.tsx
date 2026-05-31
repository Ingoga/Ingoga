"use client"
import { motion } from "framer-motion";

interface ScrollDownButtonProps {
  targetSection?: string;
}

export default function ScrollDownButton({ targetSection }: ScrollDownButtonProps) {
  const handleScroll = () => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
    >
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="relative w-18 h-22 flex flex-col items-center justify-center gap-1 cursor-pointer group"
        onClick={handleScroll}
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 100%)',
          borderRadius: '43px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white/30 group-hover:text-zinc-500 transition-colors"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white group-hover:text-zinc-200 transition-colors -mt-6"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.button>
    </motion.div>
  );
}
