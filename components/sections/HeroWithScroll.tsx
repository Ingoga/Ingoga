"use client"
import { motion } from "framer-motion";
import DotPattern from "../ui/DotPattern";
import ScrollDownButton from "../ui/ScrollDownButton";

interface HeroWithScrollProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  showDots?: boolean;
}

export default function HeroWithScroll({ title, description, showDots = true }: HeroWithScrollProps) {
  return (
    <section className="relative pt-48 pb-24 px-8 flex flex-col items-center justify-center min-h-[100vh] overflow-hidden">
      {showDots && (
        <>
          <DotPattern position="top-center" size="sm" opacity={0.5} />
          <DotPattern position="bottom-left" size="lg" opacity={0.5} />
          <DotPattern position="bottom-right" size="lg" opacity={0.5} />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          {title}
        </h1>
        <div className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </div>
      </motion.div>

      <ScrollDownButton />
    </section>
  );
}
