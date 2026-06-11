"use client"
import { motion } from "framer-motion";

const customEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 1.2, ease: customEasing }
};

export default function InnovationSection() {
  return (
    <section className="py-16 md:py-24 w-full px-6 md:px-16 mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 relative z-10 transition-colors duration-300">
      {/* Left Text Block */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false }}
        className="flex-1 flex flex-col gap-4 md:gap-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground tracking-[-0.03em] mb-2 leading-tight">
          We Do Not Follow Innovation.<br className="hidden md:block" />We Redefine It.
        </h2>
        <p className="text-foreground/80 font-medium leading-[1.7] text-[15px] md:text-[17px] pr-0 lg:pr-8">
          Ingoga Technologies Group is a pioneering technology company<br className="hidden md:block" />
          building intelligent systems that address critical challenges in<br className="hidden md:block" />
          healthcare, safety, and digital infrastructure across Africa.
        </p>

        <div className="mt-4 border-l-4 border-black/10 dark:border-[#ebebeb] pl-4 md:pl-6 flex flex-col gap-3 md:gap-4">
          <p className="text-foreground text-[14px] md:text-[15px] font-bold leading-[1.6]">
            "Africa deserves world-class technology built by Africans, for<br className="hidden xl:block" />
            Africans. Our vision is to create intelligent systems that empower<br className="hidden xl:block" />
            nations, save lives, and drive sustainable development."
          </p>
          <p className="text-[13px] md:text-[13.5px] font-bold text-foreground tracking-wide mt-1">
            - Patrick Ngoga, CEO & Founder
          </p>
        </div>
      </motion.div>

      {/* Right Graphical Abstract element */}
      <div
        className="flex-1 w-full max-w-[500px] flex flex-col gap-[20px] md:gap-[28px] justify-center relative xl:translate-x-12 overflow-hidden py-4"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
        }}
      >
        {/* Pill 1 */}
        <div
          className="w-[140%] h-[50px] md:h-[60px] rounded-full flex items-center px-6 md:px-8 relative bg-black/5 dark:bg-transparent"
          style={{
            marginLeft: '0%',
            background: 'var(--card-bg)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.2)',
            border: '1px solid var(--card-border)'
          }}
        >
          <div
            className="w-full h-[6px] md:h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "45%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: customEasing }}
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
          className="w-[140%] h-[50px] md:h-[60px] rounded-full flex items-center px-6 md:px-8 relative bg-black/5 dark:bg-transparent"
          style={{
            marginLeft: '20%',
            background: 'var(--card-bg)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.2)',
            border: '1px solid var(--card-border)'
          }}
        >
          <div
            className="w-full h-[6px] md:h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "40%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: customEasing, delay: 0.1 }}
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
          className="w-[140%] h-[50px] md:h-[60px] rounded-full flex items-center px-6 md:px-8 relative bg-black/5 dark:bg-transparent"
          style={{
            marginLeft: '35%',
            background: 'var(--card-bg)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.2)',
            border: '1px solid var(--card-border)'
          }}
        >
          <div
            className="w-full h-[6px] md:h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "50%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: customEasing, delay: 0.2 }}
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
          className="w-[140%] h-[50px] md:h-[60px] rounded-full flex items-center px-6 md:px-8 relative bg-black/5 dark:bg-transparent"
          style={{
            marginLeft: '20%',
            background: 'var(--card-bg)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.2)',
            border: '1px solid var(--card-border)'
          }}
        >
          <div
            className="w-full h-[6px] md:h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "35%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: customEasing, delay: 0.3 }}
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
          className="w-[140%] h-[50px] md:h-[60px] rounded-full flex items-center px-6 md:px-8 relative bg-black/5 dark:bg-transparent"
          style={{
            marginLeft: '0%',
            background: 'var(--card-bg)',
            boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 15px 30px rgba(0,0,0,0.2)',
            border: '1px solid var(--card-border)'
          }}
        >
          <div
            className="w-full h-[6px] md:h-[8px] rounded-full relative"
            style={{
              background: '#000000',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 1), 0 1px 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "30%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: customEasing, delay: 0.4 }}
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
