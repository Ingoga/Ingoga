"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { api } from "../../lib/api";
import { DEFAULT_HERO, DEFAULT_PARTNERS } from "../../lib/defaults";
import { useEffect, useRef } from "react";
const generateWavePath = (isAlternate: boolean) => {
  const wavelength = 100;
  const amplitude = 40;
  let d = "M0 40 ";
  for (let i = 0; i < 4800; i += wavelength) {
    const yOffset = isAlternate ? 40 + amplitude : 40 - amplitude;
    d += `Q ${i + wavelength / 4} ${yOffset} ${i + wavelength / 2} 40 T ${i + wavelength} 40 `;
  }
  return d.trim();
};


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-500, 500], [5, -5]);
  const rotateY = useTransform(smoothX, [-500, 500], [-5, 5]);
  const translateX = useTransform(smoothX, [-500, 500], [-20, 20]);
  const translateY = useTransform(smoothY, [-500, 500], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const customEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const { data: hero } = useQuery({
    queryKey: ["homepage", "hero"],
    queryFn: () => api.homepage.hero(),
  });

  const { data: partners = [] } = useQuery({
    queryKey: ["partners"],
    queryFn: () => api.partners.list(50),
  });

  const subheading = hero?.subheading || DEFAULT_HERO.subheading;
  const brandTitle = hero?.heading || DEFAULT_HERO.heading;
  const content = hero?.content || DEFAULT_HERO.content;
  const button1 = hero?.button1 || DEFAULT_HERO.button1;
  const button2 = hero?.button2 || DEFAULT_HERO.button2;

  const partnerNames =
    partners.length > 0 ? partners.map((p) => p.name) : DEFAULT_PARTNERS;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full flex flex-col items-center justify-start z-10 overflow-hidden transition-colors duration-300 bg-background"
    >
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Oblique Diagonal Waves Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Rotated container makes all waves appear diagonal like Jet template */}
          <div
            style={{
              position: 'absolute',
              inset: '-50%',
              transform: 'rotate(-18deg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ x: [0, -2400] }}
                transition={{
                  duration: 18 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: 'absolute',
                  top: `${i * 8}%`,
                  width: '9600px',
                  height: '120px',
                  opacity: 0.18 - i * 0.01,
                }}
              >
                <svg width="9600" height="120" viewBox="0 0 9600 120" fill="none">
                  <path
                    d={generateWavePath(i % 2 !== 0)}
                    stroke={i % 3 === 0 ? "#E62505" : i % 3 === 1 ? "#CC1A00" : "#ff3300"}
                    strokeWidth={1.5 + (i % 4) * 0.8}
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[#E62505]/10 blur-[120px] rounded-full" />
        </div>
        <motion.div
          style={{ x: translateX, y: translateY, rotateX, rotateY, width: '100vw', maxWidth: '1100px', perspective: 1000 }}
          className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none z-0 flex flex-col items-center"
        >
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.98, 1.01, 0.98] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            style={{
              width: '25vw',
              maxWidth: '580px',
              height: '5px',
              borderRadius: '999px',
              background: '#FF3300',
              marginTop: '105px',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 0 40px 10px rgba(255, 51, 0, 0.4)'
            }}
          />
          <motion.img
            src="/Torch-light.png"
            alt=""
            aria-hidden="true"
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            className="w-[68%] mx-auto block dark:mix-blend-screen opacity-100 transition-opacity duration-300"
            style={{
              marginTop: '-16px',
              position: 'relative',
              zIndex: 0,
            }}
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-[1000px] mx-auto ">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, ease: customEasing }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/10 to-transparent origin-center"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: customEasing, delay: 0.1 }} className="absolute top-0 left-[calc(50%-180px)] w-px h-[60px] bg-black/10 dark:bg-white/10 hidden md:block origin-top"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: customEasing, delay: 0.1 }} className="absolute top-0 right-[calc(50%-180px)] w-px h-[60px] bg-black/10 dark:bg-white/10 hidden md:block origin-top"></motion.div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.2 }} className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[2000px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/10 to-transparent origin-center"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.3 }} className="absolute top-[-20px] left-[20px] md:left-[80px] w-px h-[540px] bg-linear-to-b from-transparent via-black/20 dark:via-white/10 to-transparent hidden sm:block origin-top"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.3 }} className="absolute top-[-20px] right-[20px] md:right-[80px] w-px h-[540px] bg-linear-to-b from-transparent via-black/20 dark:via-white/10 to-transparent hidden sm:block origin-top"></motion.div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.4 }} className="absolute top-[400px] left-1/2 -translate-x-1/2 w-[2000px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/10 to-transparent hidden md:block origin-center"></motion.div>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} className="absolute top-[60px] left-[20px] md:left-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 -translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity }} className="w-full h-full" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} className="absolute top-[60px] right-[20px] md:right-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-full h-full" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }} className="absolute top-[400px] left-[20px] md:left-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-full h-full" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }} className="absolute top-[400px] right-[20px] md:right-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="w-full h-full" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center relative mx-auto"
            style={{ height: '60px', width: '360px', maxWidth: '100%' }}
          >
            <p className="text-[14px] md:text-[16px] font-medium text-foreground/80 tracking-wide">{subheading}</p>
          </motion.div>

          <div
            className="flex items-center justify-center w-full overflow-hidden"
            style={{ height: '200px' }}
          >
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: customEasing, delay: 0.3 }}
              className="text-6xl sm:text-9xl md:text-[152px] font-medium text-[#E62505] select-none text-center tracking-tight"
              style={{ textShadow: '0px 0px 40px rgba(230,37,5,0.4)' }}
            >
              {brandTitle}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center relative mx-auto px-4 md:px-10"
            style={{ height: '140px', width: '600px', maxWidth: '100%' }}
          >
            <p className="text-[14px] md:text-[17px] text-foreground/80 font-medium text-center leading-relaxed whitespace-pre-line">
              {content}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: customEasing }}
            className="absolute w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 z-10 top-[440px] md:top-[480px]"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer px-6 py-4.5 rounded-full font-medium text-[15px] md:text-[16px] tracking-wide relative overflow-hidden transition-all duration-300 shadow-[inset_0_0_15px_1px_rgba(230,37,5,0.4)] border-3 border-red-500/50 bg-background text-foreground"
              >
                <span className="relative z-10">{button1 || "Explore our Products"}</span>
                <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer px-6 py-4.5 rounded-full font-medium text-[15px] md:text-[16px] tracking-wide relative overflow-hidden transition-all duration-300 shadow-[inset_0_0_15px_1px_rgba(230,37,5,0.4)] border-3 border-red-500/50 bg-background text-foreground"
              >
                <span className="relative z-10">{button2 || "Partner with us"}</span>
                <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
              </motion.button>
            </Link>
          </motion.div>
          <div className="h-[56px] w-full" />
        </div>
      </div>

      <div className="w-full relative py-12 border-y border-black/5 dark:border-white/5 bg-black/5 dark:bg-[#080808]/40 backdrop-blur-sm z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[14px] md:text-[16px] font-bold text-foreground text-center mb-8 md:mb-12">
            Trusted by {partnerNames.length}+ Companies
          </p>

          <div className="relative flex overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-background to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-background to-transparent z-10"></div>

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
              className="flex space-x-12 md:space-x-24 items-center whitespace-nowrap min-w-full"
            >
              {[...partnerNames, ...partnerNames].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="cursor-pointer text-xl md:text-3xl font-bold text-foreground/30 hover:text-foreground transition-all duration-500 select-none tracking-tighter"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
