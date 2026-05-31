"use client"
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-red-500/30">
      <Navbar />

      <main className="flex-1 w-full relative">
        {/* HERO SECTION */}
        <section className="relative pt-[160px] pb-20 px-4 min-h-screen flex flex-col items-center justify-start z-10 w-full overflow-hidden">

          {/* Torch Spotlight Effect */}
          <div className="absolute top-[105px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-0 overflow-hidden" style={{ width: '100vw' }}>
            {/* Emitter bar — bright source line under nav */}
            <div
              style={{
                width: '20vw',
                maxWidth: '520px',
                height: '3px',
                borderRadius: '999px',
                background: '#ff2525',
                boxShadow: '0 0 12px rgba(255, 37, 37, 0.8), 0 0 28px rgba(255, 37, 37, 0.35)',
                zIndex: 2,
              }}
            />
            {/* Trapezoid light cone — same red tones, softer opacity & blur */}
            <div
              className="mix-blend-screen"
              style={{
                width: '100vw',
                maxWidth: '980px',
                height: '450px',
                marginTop: '-118px',
                clipPath: 'polygon(44% 0%, 56% 0%, 92% 100%, 8% 100%)',
                background: 'linear-gradient(180deg, #FE6464 0%, #F45353 32%, rgba(244, 83, 83, 0.35) 58%, transparent 100%)',
                opacity: 0.14,
                filter: 'blur(48px)',
              }}
            />
          </div>

          <div
            className="relative z-10 flex flex-col items-center w-full max-w-[1000px] mx-auto"
            style={{
              // Heights
              ['--tagline-h' as string]: '70px',
              ['--title-h' as string]: '210px',
              ['--desc-h' as string]: '180px',
              // Y Positions for horizontal lines
              ['--line-1-y' as string]: '0px',
              ['--line-2-y' as string]: '70px',
              ['--line-3-y' as string]: '280px',
              ['--line-4-y' as string]: '460px',
              // Width boundaries
              ['--inner-w' as string]: '640px',
              ['--outer-w' as string]: '920px',
              // Styling
              ['--grid-line' as string]: 'rgba(255, 255, 255, 0.08)',
              ['--grid-fade-h' as string]: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              ['--grid-fade-v' as string]: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          >
            {/* Blueprint grid lines */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {/* INNER vertical guides */}
              <div className="absolute left-1/2 w-px bg-white/5" style={{ top: '-100px', bottom: '-200px', transform: 'translateX(calc(var(--inner-w) / -2))', WebkitMaskImage: 'var(--grid-fade-v)', maskImage: 'var(--grid-fade-v)' }} />
              <div className="absolute left-1/2 w-px bg-white/5" style={{ top: '-100px', bottom: '-200px', transform: 'translateX(calc(var(--inner-w) / 2))', WebkitMaskImage: 'var(--grid-fade-v)', maskImage: 'var(--grid-fade-v)' }} />

              {/* OUTER vertical guides */}
              <div className="absolute left-1/2 w-px bg-white/5" style={{ top: '-100px', bottom: '-200px', transform: 'translateX(calc(var(--outer-w) / -2))', WebkitMaskImage: 'var(--grid-fade-v)', maskImage: 'var(--grid-fade-v)' }} />
              <div className="absolute left-1/2 w-px bg-white/5" style={{ top: '-100px', bottom: '-200px', transform: 'translateX(calc(var(--outer-w) / 2))', WebkitMaskImage: 'var(--grid-fade-v)', maskImage: 'var(--grid-fade-v)' }} />

              {/* Horizontal guides */}
              {[
                { top: 'var(--line-1-y)', key: '1' },
                { top: 'var(--line-2-y)', key: '2' },
                { top: 'var(--line-3-y)', key: '3' },
                { top: 'var(--line-4-y)', key: '4' },
              ].map(({ top, key }) => (
                <div
                  key={key}
                  className="absolute left-1/2 -translate-x-1/2 h-px w-[150vw]"
                  style={{
                    top,
                    background: 'var(--grid-line)',
                    WebkitMaskImage: 'var(--grid-fade-h)',
                    maskImage: 'var(--grid-fade-h)',
                  }}
                />
              ))}
            </div>

            {/* Red diamond intersection markers (Rhombus) */}

            {/* Top Outer Diamonds (Intersection of Line 2 and Outer Verticals) */}
            <div className="absolute w-[6px] h-[6px] bg-[#d11c1c] rotate-45 pointer-events-none shadow-[0_0_12px_rgba(255,0,0,1)]" style={{ top: 'var(--line-2-y)', left: '50%', transform: 'translate(calc(var(--outer-w) / -2 - 3px), -50%) rotate(45deg)' }} />
            <div className="absolute w-[6px] h-[6px] bg-[#d11c1c] rotate-45 pointer-events-none shadow-[0_0_12px_rgba(255,0,0,1)]" style={{ top: 'var(--line-2-y)', left: '50%', transform: 'translate(calc(var(--outer-w) / 2 - 3px), -50%) rotate(45deg)' }} />

            {/* Middle Outer Diamonds (Intersection of Line 3 and Outer Verticals) */}
            <div className="absolute w-[6px] h-[6px] bg-[#d11c1c] rotate-45 pointer-events-none shadow-[0_0_12px_rgba(255,0,0,1)]" style={{ top: 'var(--line-3-y)', left: '50%', transform: 'translate(calc(var(--outer-w) / -2 - 3px), -50%) rotate(45deg)' }} />
            <div className="absolute w-[6px] h-[6px] bg-[#d11c1c] rotate-45 pointer-events-none shadow-[0_0_12px_rgba(255,0,0,1)]" style={{ top: 'var(--line-3-y)', left: '50%', transform: 'translate(calc(var(--outer-w) / 2 - 3px), -50%) rotate(45deg)' }} />

            {/* Bottom Inner Diamonds (Intersection of Line 4 and Inner Verticals) */}
            <div className="absolute w-[6px] h-[6px] bg-[#d11c1c] rotate-45 pointer-events-none shadow-[0_0_12px_rgba(255,0,0,1)]" style={{ top: 'var(--line-4-y)', left: '50%', transform: 'translate(calc(var(--inner-w) / -2 - 3px), -50%) rotate(45deg)' }} />
            <div className="absolute w-[6px] h-[6px] bg-[#d11c1c] rotate-45 pointer-events-none shadow-[0_0_12px_rgba(255,0,0,1)]" style={{ top: 'var(--line-4-y)', left: '50%', transform: 'translate(calc(var(--inner-w) / 2 - 3px), -50%) rotate(45deg)' }} />

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center justify-center relative mx-auto"
              style={{ height: 'var(--tagline-h)', width: 'var(--inner-w)' }}
            >
              <p className="text-sm md:text-lg font-medium text-zinc-100">Built In Rwanda - Transforming Africa</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="flex items-center justify-center w-full relative"
              style={{ height: 'var(--title-h)' }}
            >
              {/* Blurred ghost copy — Layer Blur 19 */}
              <h1
                aria-hidden="true"
                className="absolute text-8xl sm:text-9xl md:text-[172px] font-medium text-[#9D1402] tracking-tighter scale-y-[1.1] select-none pointer-events-none"
                style={{ filter: 'blur(19px)', opacity: 0.6 }}
              >
                INGOGA
              </h1>
              {/* Sharp top layer */}
              <h1 className="relative text-8xl sm:text-9xl md:text-[172px] font-medium text-[#9D1402] tracking-tighter scale-y-[1.1] select-none" style={{ textShadow: '0 0 50px rgba(220, 20, 20, 0.5)' }}>
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
              <p className="text-[15px] md:text-[17px] text-zinc-300 leading-[1.8] font-medium text-center">
                We engineer advanced AI ecosystems, digital<br className="hidden sm:block" />health platforms, and emergency safety systems<br className="hidden sm:block" />that transform how nations operate, respond,<br className="hidden sm:block" />and thrive.
              </p>
            </motion.div>

            {/* Buttons inside grid */}
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
          <div className="w-full relative py-8 mt-24 border-y border-white/5 bg-[#080808]/40 backdrop-blur-sm z-10 overflow-hidden">
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

        {/* INNOVATION SECTION */}
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
            <div className="w-[120%] h-[48px] rounded-l-full bg-[#111] border-t border-l border-t-white/10 border-l-white/5 border-b border-b-black shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex items-center pl-6 ml-0">
              <div className="w-[85%] h-[4px] bg-black rounded-full relative flex items-center overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute left-0 h-[6px] rounded-full w-[40%] bg-linear-to-r from-[#f03a3a] via-[#a11a1a] to-transparent"
                ></motion.div>
                <div className="absolute left-0 h-[6px] rounded-full w-[55%] bg-linear-to-r from-[#f03a3a] via-[#a11a1a] to-transparent opacity-30"></div>
              </div>
            </div>

            {/* Pill 2 */}
            <div className="w-[120%] h-[48px] rounded-l-full bg-[#111] border-t border-l border-t-white/10 border-l-white/5 border-b border-b-black shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex items-center pl-6 ml-[18%]">
              <div className="w-[85%] h-[4px] bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative flex items-center overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 0.5 }}
                  className="absolute left-0 h-[6px] rounded-full w-[30%] bg-linear-to-r from-[#e82525] via-[#a81a1a] to-transparent"
                ></motion.div>
                <div className="absolute left-0 h-[6px] rounded-full w-[45%] bg-linear-to-r from-[#322323] via-[#181212] to-transparent opacity-30"></div>
              </div>
            </div>

            {/* Pill 3 */}
            <div className="w-[120%] h-[48px] rounded-l-full bg-[#111] border-t border-l border-t-white/10 border-l-white/5 border-b border-b-black shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex items-center pl-6 ml-[32%]">
              <div className="w-[85%] h-[4px] bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative flex items-center overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "linear", delay: 1 }}
                  className="absolute left-0 h-[6px] rounded-full w-[50%] bg-linear-to-r from-[#e82525] via-[#a81a1a] to-transparent"
                ></motion.div>
                <div className="absolute left-0 h-[6px] rounded-full w-[35%] bg-linear-to-r from-[#e82525] via-[#a81a1a] to-transparent opacity-30"></div>
              </div>
            </div>

            {/* Pill 4 */}
            <div className="w-[120%] h-[48px] rounded-l-full bg-[#111] border-t border-l border-t-white/10 border-l-white/5 border-b border-b-black shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex items-center pl-6 ml-[18%]">
              <div className="w-[85%] h-[4px] bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative flex items-center overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "linear", delay: 0.2 }}
                  className="absolute left-0 h-[6px] rounded-full w-[35%] bg-linear-to-r from-[#e82525] via-[#a81a1a] to-transparent"
                ></motion.div>
                <div className="absolute left-0 h-[6px] rounded-full w-[40%] bg-linear-to-r from-[#322323] via-[#181212] to-transparent opacity-30"></div>
              </div>
            </div>

            {/* Pill 5 */}
            <div className="w-[120%] h-[48px] rounded-l-full bg-[#111] border-t border-l border-t-white/10 border-l-white/5 border-b border-b-black shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex items-center pl-6 ml-[5%]">
              <div className="w-[85%] h-[4px] bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)] relative flex items-center overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "linear", delay: 1.5 }}
                  className="absolute left-0 h-[6px] rounded-full w-[45%] bg-linear-to-r from-[#e82525] via-[#a81a1a] to-transparent"
                ></motion.div>
                <div className="absolute left-0 h-[6px] rounded-full w-[45%] bg-linear-to-r from-[#322323] via-[#181212] to-transparent opacity-30"></div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3 — "What we are building" */}
        <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto border-t border-zinc-900/50">
          <div className="flex justify-between items-end mb-16 gap-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4 text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">What we are building</h2>
              <p className="text-zinc-400 text-lg max-w-lg">
                Independent platforms and companies solving complex problems through technology.
              </p>
            </motion.div>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="hidden sm:flex text-zinc-400 hover:text-white text-sm font-bold transition items-center gap-2 group border border-zinc-800 px-6 py-3 rounded-md"
            >
              View All products <span className="text-xs group-hover:translate-x-1 transition-transform -rotate-45">→</span>
            </motion.a>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
          >
            {[
              {
                title: "UBUZIMA DIGITAL SYSTEM",
                desc: "A modern digital health platform focused on clinical workflows, decision support, and intelligent care delivery. Built for real-world complexity, designed for clinicians who need clarity and precision.",
                tag: "Visit UDS →",
                img: "/UDS.jpg"
              },
              {
                title: "NEXUN INC.",
                desc: "Advanced AI systems, medical automation, and emerging research in intelligence, energy, and next-generation computation. NEXUN Inc. builds the future layer by layer..",
                tag: "Visit NEXUN →",
                img: "/NEXUN.jpg"
              },
              {
                title: "RESAS",
                desc: "A high-precision safety and response platform combining sensors, real-time software, and intelligent automation. Built for speed and accuracy — every second counts when lives are on the line.",
                tag: "Visit RESAS →",
                img: "/RESAS.png"
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group p-6 bg-[#080808] border border-zinc-800 rounded-lg flex flex-col justify-between gap-12 transition-all duration-500"
              >
                <div className="space-y-8">
                  <div className="h-16 flex items-center">
                    <img src={product.img} alt={product.title} className="max-h-full max-w-[160px] object-contain rounded-md" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-4 tracking-wider uppercase">{product.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{product.desc}</p>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-700 text-white text-[13px] font-medium hover:bg-zinc-900 transition w-fit">
                  {product.tag}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* LATEST BLOGS SECTION */}
        <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto border-t border-zinc-900/50">
          <div className="flex justify-between items-center mb-16">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >Our Latest Blogs</motion.h2>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-lg border border-zinc-800 hover:bg-zinc-900 text-sm font-medium transition text-white"
            >
              View All blogs <span className="text-xs -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">→</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Blog - Left */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-7 group cursor-pointer flex flex-col bg-[#0a0a0a] border border-zinc-800/50 rounded-xl overflow-hidden"
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="/Heart-Beat-Measure.jpg"
                  alt="AI Health"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6 space-y-8 flex-1 flex flex-col">
                <div>
                  <span className="inline-block px-5 py-2 bg-[#1a0808] text-[#e84c4c] text-[13px] font-medium rounded-md mb-8">AI & Health</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight transition-colors">
                    How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    A deep dive into how intelligent systems are reducing diagnostic errors and improving patient outcomes across under-resourced healthcare settings on the continent.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-white text-sm font-light mt-auto">
                  <span>John Doe</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                  <span>8min read</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                  <span>May 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Side Blogs - Right */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {[
                {
                  tag: "Africa-Tech",
                  title: "Why Rwanda Is Becoming Africa's Deep-Tech Capital",
                  desc: "The policy, infrastructure, and talent conditions that make Kigali the ideal base for building the next generation of intelligent systems.",
                  author: "John Doe • 8min read • May 2025"
                },
                {
                  tag: "Company",
                  title: "The Founding Vision: Why We Built Ingoga",
                  desc: "The founding story — why Rwanda, why now, and what we're building toward over the next decade.",
                  author: "John Doe • 8min read • May 2025"
                }
              ].map((blog, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="group cursor-pointer p-10 bg-[#0a0a0a] border border-zinc-800/50 rounded-xl flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 h-1/2"
                >
                  <div className="space-y-6">
                    <span className="inline-block px-5 py-2 bg-[#1a0808] text-[#e84c4c] text-[13px] font-medium rounded-md mb-4">
                      {blog.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed">
                      {blog.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-white text-sm font-light mt-8">
                    <span>John Doe</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                    <span>8min read</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                    <span>May 2025</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 px-8 md:px-16 max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-12">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white"
            >Meet Our team</motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-700 hover:bg-zinc-900 text-[14px] font-medium transition text-white"
            >
              Meet the entire team <span className="text-xs -rotate-45">→</span>
            </motion.button>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { name: "Sylvia M", role: "Management", img: "/Girl.jpg", text: "Align transformed our project management " },
              { name: "Patrick Ngonga", role: "Founder & CEO", img: "/Man.jpg", text: "Leading African deep-tech innovation" },
              { name: "Herbert Heshima", role: "Chief Technology Officer", img: "/Boy.jpg", text: "Leading technical innovation" },
              { name: "Diane Ngoga", role: "Chief Information Security Officer", img: "/Girl.jpg", text: "Ensuring data protection & security" }
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="cursor-pointer group relative rounded-xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/20"></div>

                {/* Glass Info Card */}
                <div className="absolute inset-x-2 bottom-2 p-4 rounded-xl bg-transparent border border-white/10 flex flex-col justify-end">
                  <p className="text-white font-medium text-sm md:text-lg leading-tight mb-6">
                    {member.text}
                  </p>
                  <div className="space-y-1 mb-3">
                    <p className="text-white font-semibold text-[16px] md:text-[18px]">{member.name}</p>
                    <p className="text-gray-400 text-[13px] md:text-[14px]">{member.role}</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-5">
                    <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white transition">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white transition">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white transition">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
          >What Our Customers Think</motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-white/90 text-lg mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            The brilliant minds behind Africa's next generation of<br className="hidden md:block" />intelligent health and evolving systems
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left px-28"
          >
            {[
              { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
              { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
              { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
              { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
              { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
              { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ borderColor: 'white' }}
                className="cursor-pointer border-l-2 border-t-2 border-white/10 rounded-l-2xl rounded-r-none rounded-b-none p-6 bg-[#050505] transition duration-500 flex flex-col justify-between gap-6"
              >
                <p className="text-zinc-400 text-[15px] leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-zinc-800 overflow-hidden shrink-0 border border-zinc-900/50">
                    <img src="/Boy.jpg" alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[15px] mb-1">{t.author}</p>
                    <p className="text-zinc-500 text-[12px] leading-tight">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>



        {/* FAQ SECTION — Editorial Ticker Design */}
        <section className="py-32 w-full relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            {/* Header Row */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-end mb-20 border-b border-white/10 pb-12"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                  Everything You Need to know,<br></br> All in One Place
                </h2>
              </div>
              <p className="text-zinc-500 text-base max-w-md self-end leading-relaxed pb-1">
                Whether our clinic platform, Noux, or MEDIX — we have
                answers. Click any question to expand the full context.
              </p>
            </motion.div>

            {/* FAQ Items — Ticker/Table Style */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { q: "Why does pricing go up each year?", a: "Our system is built for resilience. You can contact support for detailed breakdowns of our features and integrations tailored specifically to your clinical needs or institutional standards." },
                { q: "What innovations have you built?", a: "We engineer advanced AI ecosystems, digital health platforms, and emergency safety systems that transform how nations operate, respond, and thrive." },
                { q: "What is your process model?", a: "Our process model is centered around agile development, continuous feedback, and iterative deployment to ensure maximum client satisfaction and platform stability." },
                { q: "Can I use Medix offline on my PC?", a: "Yes. Medix supports offline functionality with local data caching. Data is synced automatically once a connection is restored, ensuring continuity of care." },
                { q: "Do you use local AWS servers for global data?", a: "We leverage a multi-region cloud architecture to ensure low-latency access and data sovereignty across all African regions where our platforms are deployed." },
                { q: "How to book a demo call for my clinic?", a: "Visit our contact page or click 'Partner with us' to schedule a tailored 30-minute discovery call with one of our solution architects." },
              ].map((item, i) => (
                <motion.details
                  key={i}
                  variants={fadeInUp}
                  className="group border-t border-white/8 cursor-pointer"
                >
                  <summary className="list-none outline-none py-7 flex items-start gap-6 md:gap-10">
                    {/* Number Rail */}
                    <span className="text-[11px] font-mono text-red-500/60 pt-1 shrink-0 w-6 text-right tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Question */}
                    <div className="flex-1 flex justify-between items-center gap-4">
                      <span className="text-white font-semibold text-lg md:text-2xl tracking-tight group-open:text-red-400 transition-colors duration-300">
                        {item.q}
                      </span>
                      {/* Animated Plus → Cross */}
                      <div className="relative w-5 h-5 shrink-0 opacity-40 group-open:opacity-100 transition-opacity">
                        <span className="absolute top-1/2 left-0 w-full h-px bg-white -translate-y-1/2 transition-transform duration-300" />
                        <span className="absolute top-1/2 left-0 w-full h-px bg-white -translate-y-1/2 rotate-90 group-open:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </summary>

                  {/* Answer — slides in beneath number rail */}
                  <div className="pl-[calc(1.5rem+2.5rem)] md:pl-[calc(1.5rem+3.5rem)] pb-8">
                    <div className="flex gap-6">
                      <div className="w-px bg-red-500/30 shrink-0" />
                      <p className="text-zinc-400 text-base leading-[1.8] max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </motion.div>

            {/* Footer CTA Row */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12 mt-4"
            >
              <p className="text-zinc-500 text-sm">Still have questions? Reach out directly.</p>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide relative overflow-hidden transition-all duration-300"
                style={{
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  backgroundColor: 'transparent',
                }}
              >
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact our support team →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 px-6 max-w-5xl mx-auto mb-20 text-center"
        >
          <div className=" border border-zinc-800 rounded-xl p-16 relative overflow-hidden backdrop-blur-sm bg-zinc-950/40">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to manage your<br />team like a pro?</h2>
              <p className="text-zinc-400 mb-10 text-md max-w-lg mx-auto leading-relaxed">
                Ingoga helps you bring more forward momentum, tracking everything from a single central hub seamlessly.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer px-8 py-4 rounded-full text-white font-medium text-[16px] tracking-wide relative overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#030303',
                  boxShadow: 'inset 0 0 20px 2px rgba(157,20,2,0.5)',
                  border: '3px solid rgba(157,20,2, 0.6)',
                }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div >
  );
}
