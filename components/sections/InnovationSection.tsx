"use client"
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
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
        viewport={{ once: false }}
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
        className="flex-1 w-full max-w-[500px] flex flex-col gap-[28px] justify-center relative xl:translate-x-12 overflow-hidden py-4"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
        }}
      >
        {/* Pill 1 */}
        <div 
          className="w-[140%] h-[60px] rounded-full flex items-center px-8 relative"
          style={{
            marginLeft: '0%',
            background: 'linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.8)',
            border: '1px solid rgba(0,0,0,1)'
          }}
        >
          <div 
            className="w-full h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "45%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute h-full rounded-full"
              style={{
                left: '0',
                background: '#B31B11',
                boxShadow: '0 0 12px rgba(179, 27, 17, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
              }}
            ></motion.div>
          </div>
        </div>

        {/* Pill 2 */}
        <div 
          className="w-[140%] h-[60px] rounded-full flex items-center px-8 relative"
          style={{
            marginLeft: '20%',
            background: 'linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.8)',
            border: '1px solid rgba(0,0,0,1)'
          }}
        >
          <div 
            className="w-full h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "40%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
              className="absolute h-full rounded-full"
              style={{
                background: '#381C1A',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.5)'
              }}
            ></motion.div>
          </div>
        </div>

        {/* Pill 3 */}
        <div 
          className="w-[140%] h-[60px] rounded-full flex items-center px-8 relative"
          style={{
            marginLeft: '35%',
            background: 'linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.8)',
            border: '1px solid rgba(0,0,0,1)'
          }}
        >
          <div 
            className="w-full h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "50%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="absolute h-full rounded-full"
              style={{
                background: '#B31B11',
                boxShadow: '0 0 12px rgba(179, 27, 17, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
              }}
            ></motion.div>
          </div>
        </div>

        {/* Pill 4 */}
        <div 
          className="w-[140%] h-[60px] rounded-full flex items-center px-8 relative"
          style={{
            marginLeft: '20%',
            background: 'linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.8)',
            border: '1px solid rgba(0,0,0,1)'
          }}
        >
          <div 
            className="w-full h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "35%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="absolute h-full rounded-full"
              style={{
                background: '#381C1A',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.5)'
              }}
            ></motion.div>
          </div>
        </div>

        {/* Pill 5 */}
        <div 
          className="w-[140%] h-[60px] rounded-full flex items-center px-8 relative"
          style={{
            marginLeft: '0%',
            background: 'linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.8)',
            border: '1px solid rgba(0,0,0,1)'
          }}
        >
          <div 
            className="w-full h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "30%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
              className="absolute h-full rounded-full"
              style={{
                background: '#381C1A',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.5)'
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
