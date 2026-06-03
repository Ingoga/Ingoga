"use client"
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-[160px] pb-12 px-4 min-h-screen flex flex-col items-center justify-start z-10 w-full overflow-hidden transition-colors duration-300">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none z-0 flex flex-col items-center" style={{ width: '100vw', maxWidth: '1100px' }}>
        <div
          style={{
            width: '25vw',
            maxWidth: '580px',
            height: '5px',
            borderRadius: '999px',
            background: '#FF3300',
            marginTop: '105px',
            position: 'relative',
            zIndex: 2,
          }}
        />
        <img
          src="/Torch-light.png"
          alt=""
          aria-hidden="true"
          className="w-[65%] mx-auto block dark:mix-blend-screen opacity-100 transition-opacity duration-300"
          style={{
            marginTop: '-16px',
            position: 'relative',
            zIndex: 0,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1000px] mx-auto mt-[20px]">
        {/* Structural Grid */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Horizontal Line (above tagline) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/10 to-transparent"></div>
          
          {/* Inner Vertical Lines (framing tagline) */}
          <div className="absolute top-0 left-[calc(50%-180px)] w-px h-[60px] bg-black/10 dark:bg-white/10 hidden md:block"></div>
          <div className="absolute top-0 right-[calc(50%-180px)] w-px h-[60px] bg-black/10 dark:bg-white/10 hidden md:block"></div>

          {/* Middle Horizontal Line (with top diamonds) */}
          <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[2000px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/10 to-transparent"></div>

          {/* Outer Vertical Lines (framing INGOGA and description) */}
          <div className="absolute top-[-20px] left-[20px] md:left-[80px] w-px h-[540px] bg-linear-to-b from-transparent via-black/20 dark:via-white/10 to-transparent hidden sm:block"></div>
          <div className="absolute top-[-20px] right-[20px] md:right-[80px] w-px h-[540px] bg-linear-to-b from-transparent via-black/20 dark:via-white/10 to-transparent hidden sm:block"></div>

          {/* Bottom Horizontal Line (with bottom diamonds) */}
          <div className="absolute top-[400px] left-1/2 -translate-x-1/2 w-[2000px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/10 to-transparent hidden md:block"></div>

          {/* Diamonds */}
          <div className="absolute top-[60px] left-[20px] md:left-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(220,38,38,0.8)] z-20 hidden sm:block"></div>
          <div className="absolute top-[60px] right-[20px] md:right-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(220,38,38,0.8)] z-20 hidden sm:block"></div>
          <div className="absolute top-[400px] left-[20px] md:left-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(220,38,38,0.8)] z-20 hidden md:block"></div>
          <div className="absolute top-[400px] right-[20px] md:right-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(220,38,38,0.8)] z-20 hidden md:block"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center relative mx-auto"
          style={{ height: '60px', width: '360px', maxWidth: '100%' }}
        >
          <p className="text-[14px] md:text-[16px] font-medium text-foreground/80 tracking-wide">Built In Rwanda - Transforming Africa</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center w-full"
          style={{ height: '200px' }}
        >
          <h1 className="text-6xl sm:text-9xl md:text-[148px] font-medium text-[#E62505] select-none text-center tracking-tight"
              style={{ textShadow: '0px 0px 40px rgba(230,37,5,0.4)' }}
          >
            INGOGA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center relative mx-auto px-4 md:px-10"
          style={{ height: '140px', width: '700px', maxWidth: '100%' }}
        >
          <p className="text-[14px] md:text-[17px] text-foreground/80 font-medium text-center leading-relaxed">
            We engineer advanced AI ecosystems, digital<br className="hidden sm:block" />health platforms, and emergency safety systems<br className="hidden sm:block" />that transform how nations operate, respond,<br className="hidden sm:block" />and thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="absolute w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 z-10 top-[400px] md:top-[440px]"
        >
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer px-6 py-4.5 rounded-full font-medium text-[15px] md:text-[16px] tracking-wide relative overflow-hidden transition-all duration-300 shadow-[inset_0_0_15px_1px_rgba(230,37,5,0.4)] border-3 border-red-500/50 bg-background text-foreground"
          >
            Explore our Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer px-6 py-4.5 rounded-full font-medium text-[15px] md:text-[16px] tracking-wide relative overflow-hidden transition-all duration-300 shadow-[inset_0_0_15px_1px_rgba(230,37,5,0.4)] border-3 border-red-500/50 bg-background text-foreground"
          >
            Partner with us
          </motion.button>
        </motion.div>
      </div>

      <div className="w-full relative py-8 mt-56 sm:mt-42 border-y border-black/5 dark:border-white/5 bg-black/5 dark:bg-[#080808]/40 backdrop-blur-sm z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[14px] md:text-[16px] font-bold text-foreground text-center mb-8 md:mb-12">
            Trusted by 3+ Companies
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
              {[
                "Rwanda ICT Chamber",
                "Timbuktoo Healthtech Hub",
                "Africa Development Bank",
                "Ministry of Health",
                "Kigali Innovation City",
              ].map((logo, i) => (
                <span
                  key={i}
                  className="cursor-pointer text-xl md:text-3xl font-bold text-foreground/30 hover:text-foreground transition-all duration-500 select-none tracking-tighter"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
