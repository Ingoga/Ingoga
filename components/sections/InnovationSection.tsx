"use client"
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function InnovationSection() {
  return (
    <section className="py-24 w-full px-16 mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
      {/* Left Text Block */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="flex-1 flex flex-col gap-6"
      >
        <h2 className="text-4xl md:text-[48px] font-bold text-white tracking-[-0.03em] mb-2">
          We Do Not Follow Innovation.<br />We Redefine It.
        </h2>
        <p className="text-zinc-300 font-medium leading-[1.7] text-[15px] md:text-[17px] pr-8">
          Ingoga Technologies Group is a pioneering technology company<br className="hidden md:block" />
          building intelligent systems that address critical challenges in<br className="hidden md:block" />
          healthcare, safety, and digital infrastructure across Africa.
        </p>

        <div className="mt-4 border-l-4 border-[#ebebeb] pl-6 flex flex-col gap-4">
          <p className="text-white text-[14.5px] md:text-[15px] font-bold leading-[1.6]">
            "Africa deserves world-class technology built by Africans, for<br className="hidden xl:block" />
            Africans. Our vision is to create intelligent systems that empower<br className="hidden xl:block" />
            nations, save lives, and drive sustainable development."
          </p>
          <p className="text-[13.5px] font-bold text-white tracking-wide mt-1">
            - Patrick Ngoga, CEO & Founder
          </p>
        </div>
      </motion.div>

      {/* Right Graphical Abstract element */}
      <div
        className="flex-1 w-full max-w-[500px] flex flex-col gap-[22px] justify-center relative xl:translate-x-12 overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
          maskImage: 'linear-gradient(to right, black 65%, transparent 100%)'
        }}
      >
        {/* Pill 1 */}
        <div 
          className="w-[120%] h-[56px] rounded-l-full flex items-center pl-7 ml-0"
          style={{
            background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 6px 5px rgba(0, 0, 0, 0.03), 0 12px 30px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div 
            className="w-[86%] h-[8px] rounded-full relative overflow-hidden"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 2px 6px rgba(0, 0, 0, 0.9)'
            }}
          >
            <div 
              className="absolute left-0 h-full rounded-full"
              style={{
                width: '60%',
                background: 'linear-gradient(90deg, #ff3300 0%, #ff6b3d 50%, #ffb399 100%)',
                boxShadow: '0 0 18px rgba(255, 51, 0, 0.9), 0 0 35px rgba(255, 51, 0, 0.5)'
              }}
            ></div>
          </div>
        </div>

        {/* Pill 2 */}
        <div 
          className="w-[120%] h-[56px] rounded-l-full flex items-center pl-7 ml-[18%]"
          style={{
            background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 6px 5px rgba(0, 0, 0, 0.03), 0 12px 30px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div 
            className="w-[86%] h-[8px] rounded-full relative overflow-hidden"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 2px 6px rgba(0, 0, 0, 0.9)'
            }}
          >
            <div 
              className="absolute right-0 h-full rounded-full"
              style={{
                width: '50%',
                background: 'linear-gradient(90deg, #cc2200 0%, #ff3300 30%, #ff6b3d 100%)',
                boxShadow: '0 0 18px rgba(255, 51, 0, 0.9), 0 0 35px rgba(255, 51, 0, 0.5)'
              }}
            ></div>
          </div>
        </div>

        {/* Pill 3 */}
        <div 
          className="w-[120%] h-[56px] rounded-l-full flex items-center pl-7 ml-[35%]"
          style={{
            background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 6px 5px rgba(0, 0, 0, 0.03), 0 12px 30px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div 
            className="w-[86%] h-[8px] rounded-full relative overflow-hidden"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 2px 6px rgba(0, 0, 0, 0.9)'
            }}
          >
            <div 
              className="absolute right-0 h-full rounded-full"
              style={{
                width: '42%',
                background: 'linear-gradient(90deg, #cc3300 0%, #ff5522 50%, #ff9966 100%)',
                boxShadow: '0 0 16px rgba(255, 85, 34, 0.8), 0 0 30px rgba(255, 85, 34, 0.4)'
              }}
            ></div>
          </div>
        </div>

        {/* Pill 4 */}
        <div 
          className="w-[120%] h-[56px] rounded-l-full flex items-center pl-7 ml-[18%]"
          style={{
            background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 6px 5px rgba(0, 0, 0, 0.03), 0 12px 30px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div 
            className="w-[86%] h-[8px] rounded-full relative overflow-hidden"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 2px 6px rgba(0, 0, 0, 0.9)'
            }}
          >
            <div 
              className="absolute left-[35%] h-full rounded-full"
              style={{
                width: '45%',
                background: 'linear-gradient(90deg, #5a4040 0%, #4a3535 50%, #3a2828 100%)',
                boxShadow: '0 0 8px rgba(90, 64, 64, 0.4)'
              }}
            ></div>
          </div>
        </div>

        {/* Pill 5 */}
        <div 
          className="w-[120%] h-[56px] rounded-l-full flex items-center pl-7 ml-0"
          style={{
            background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 6px 5px rgba(0, 0, 0, 0.03), 0 12px 30px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div 
            className="w-[86%] h-[8px] rounded-full relative overflow-hidden"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.1), inset 0 2px 6px rgba(0, 0, 0, 0.9)'
            }}
          >
            <div 
              className="absolute left-[40%] h-full rounded-full"
              style={{
                width: '48%',
                background: 'linear-gradient(90deg, #5a4040 0%, #4a3535 50%, #3a2828 100%)',
                boxShadow: '0 0 8px rgba(90, 64, 64, 0.4)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
