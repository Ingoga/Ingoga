"use client"
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-[160px] pb-12 px-4 min-h-screen flex flex-col items-center justify-start z-10 w-full overflow-hidden">
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
          className="w-[65%] mix-blend-screen mx-auto block"
          style={{
            marginTop: '-16px',
            position: 'relative',
            zIndex: 0,
          }}
        />
      </div>

      <div
        className="relative z-10 flex flex-col items-center w-full max-w-[1000px] mx-auto"
        style={{
          ['--tagline-h' as string]: '70px',
          ['--title-h' as string]: '210px',
          ['--desc-h' as string]: '180px',
          ['--line-4-y' as string]: '460px',
          ['--inner-w' as string]: '640px',
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent"></div>
        
        <div className="absolute top-[100px] left-[100px] w-px h-[80px] bg-linear-to-b from-zinc-700 to-transparent"></div>
        <div className="absolute top-[100px] left-[100px] w-[40px] h-px bg-linear-to-r from-zinc-700 to-transparent"></div>
        
        <div className="absolute top-[100px] right-[100px] w-px h-[80px] bg-linear-to-b from-zinc-700 to-transparent"></div>
        <div className="absolute top-[100px] right-[100px] w-[40px] h-px bg-linear-to-l from-zinc-700 to-transparent"></div>
        
        <div className="absolute top-[280px] left-[80px] w-px h-[100px] bg-linear-to-b from-transparent via-zinc-700 to-transparent"></div>
        <div className="absolute top-[280px] right-[80px] w-px h-[100px] bg-linear-to-b from-transparent via-zinc-700 to-transparent"></div>
        
        <div className="absolute bottom-[80px] left-[120px] w-px h-[60px] bg-linear-to-t from-zinc-700 to-transparent"></div>
        <div className="absolute bottom-[80px] left-[120px] w-[30px] h-px bg-linear-to-r from-zinc-700 to-transparent"></div>
        
        <div className="absolute bottom-[80px] right-[120px] w-px h-[60px] bg-linear-to-t from-zinc-700 to-transparent"></div>
        <div className="absolute bottom-[80px] right-[120px] w-[30px] h-px bg-linear-to-l from-zinc-700 to-transparent"></div>
        
        <div className="absolute top-[100px] left-[100px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]"></div>
        <div className="absolute top-[100px] right-[100px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]"></div>
        <div className="absolute bottom-[80px] left-[120px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]"></div>
        <div className="absolute bottom-[80px] right-[120px] w-2 h-2 bg-red-600 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center relative mx-auto"
          style={{ height: 'var(--tagline-h)', width: 'var(--inner-w)' }}
        >
          <p className="text-sm md:text-xl font-medium text-zinc-100">Built In Rwanda - Transforming Africa</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center w-full"
          style={{ height: 'var(--title-h)' }}
        >
          <h1 className="text-8xl sm:text-9xl md:text-[136px] font-semibold text-[#9D1402] select-none text-center">
            INGOGA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center relative mx-auto px-10"
          style={{ height: 'var(--desc-h)', width: 'var(--inner-w)' }}
        >
          <p className="text-[16px] md:text-lg text-zinc-300 font-medium text-center">
            We engineer advanced AI ecosystems, digital<br className="hidden sm:block" />health platforms, and emergency safety systems<br className="hidden sm:block" />that transform how nations operate, respond,<br className="hidden sm:block" />and thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="absolute w-full flex flex-col sm:flex-row items-center justify-center gap-10 z-10"
          style={{ top: 'calc(var(--line-4-y) + 20px)' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer px-6 py-4 rounded-full text-white font-medium text-[16px] tracking-wide relative overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: '#030303',
              boxShadow: 'inset 0 0 18px 2px rgba(157,20,2,0.5)',
              border: '3px solid rgba(157,20,2, 0.6)',
            }}
          >
            Explore our Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer px-6 py-4 rounded-full text-white font-medium text-[16px] tracking-wide relative overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: '#030303',
              boxShadow: 'inset 0 0 18px 2px rgba(157,20,2,0.5)',
              border: '3px solid rgba(157,20,2, 0.6)',
            }}
          >
            Partner with us
          </motion.button>
        </motion.div>
      </div>

      {/* TRUSTED BY SECTION */}
      <div className="w-full relative py-8 mt-34 border-y border-white/5 bg-[#080808]/40 backdrop-blur-sm z-10 overflow-hidden">
        <div className="absolute top-0 left-8 w-4 h-px bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
        <div className="absolute top-0 right-8 w-4 h-px bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
        <div className="absolute bottom-0 left-8 w-4 h-px bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
        <div className="absolute bottom-0 right-8 w-4 h-px bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>

        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-[16px] font-bold text-white text-center mb-12">
            Trusted by 3+ Companies
          </p>

          <div className="relative flex overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#050505] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#050505] to-transparent z-10"></div>

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
              className="flex space-x-24 items-center whitespace-nowrap min-w-full"
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
                  className="cursor-pointer text-2xl md:text-3xl font-bold text-white/30 hover:text-white transition-all duration-500 select-none tracking-tighter"
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
