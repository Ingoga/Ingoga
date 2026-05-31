"use client"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import TeamSection from "../../components/sections/TeamSection";
import CTASection from "../../components/sections/CTASection";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const stats = [
  { value: 100, suffix: "+", label: "Active Projects" },
  { value: 100, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "+", label: "Team members" },
  { value: 1, suffix: "st", label: "Pan-African Group" }
];


function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section - Exactly as in image */}
        <section className="relative pt-48 pb-24 px-8 flex flex-col items-center justify-center min-h-[100vh] overflow-hidden">
          {/* Dot Pattern - Top Center */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-32 h-32 opacity-30 -rotate-45">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <defs>
                <pattern id="dots-top" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#666" />
                </pattern>
              </defs>
              <rect width="60" height="60" fill="url(#dots-top)" />
            </svg>
          </div>

          {/* Dot Pattern - Bottom Left */}
          <div className="absolute bottom-48 left-20 w-48 h-48 opacity-20 -rotate-45">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <defs>
                <pattern id="dots-left" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#666" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots-left)" />
            </svg>
          </div>

          {/* Dot Pattern - Bottom Right */}
          <div className="absolute bottom-48 right-20 w-48 h-48 opacity-20 -rotate-45">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <defs>
                <pattern id="dots-right" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#666" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots-right)" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              We Redefine What Emerging<br />Nations Can Build
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Ingoga Technologies Group is a pioneering deep-tech company<br className="hidden md:block" />
              headquartered in Kigali, Rwanda — engineering intelligent systems for<br className="hidden md:block" />
              healthcare, safety, and infrastructure.
            </p>
          </motion.div>

          {/* Scroll Indicator - Chevron Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition-colors cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-zinc-400"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </motion.button>
          </motion.div>
        </section>

        {/* Hey Section with Rectangle 10 Image */}
        <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image (Rectangle 10) */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/Rectangle 11.png"
                  alt="Healthcare Technology"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4 order-1 lg:order-2"
            >
              <div>
                <h3 className="text-3xl font-semibold text-white mb-2">Hey!</h3>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  We are Ingoga Technologies
                </h2>
              </div>

              <p className="text-zinc-400 text-base leading-relaxed">
                Ingoga Technologies Group is an African deep-tech company building intelligent systems that solve real-world problems. We specialize in developing cutting-edge digital health platforms, AI-powered emergency response systems, and intelligent infrastructure solutions.
              </p>

              <p className="text-zinc-400 text-base leading-relaxed">
                Founded in Rwanda, we're on a mission to prove that world-class technology can be built in Africa, for Africa — and eventually, for the world. Our platforms are designed to work in resource-constrained environments while delivering enterprise-grade performance and reliability.
              </p>

              <p className="text-zinc-400 text-base leading-relaxed">
                We integrate with AI tools, frameworks and the best of our core business, growing at a rapid pace. We're backed by leading investors and supported by a team of world-class engineers, designers, and domain experts.
              </p>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer mt-6 px-8 py-3 bg-[#570D04] rounded-md text-white font-medium transition-all duration-300 text-sm"
              >
                Meet with us <span className="-rotate-45">→</span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-8 border-y border-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us - Mission, Vision, Values with Rectangle 11 */}
        <section className="py-32 px-8 md:px-16 max-w-8xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-20"
          >
            About Us
          </motion.h2>

          <div className="cursor-pointer grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left Column - Who we are & Core Values */}
            <div className="space-y-20">
              {/* Who we are */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">1</span>
                  <h3 className="text-2xl md:text-4xl font-bold">Who we are</h3>
                </div>
                
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  Ingoga Technologies Group is a deep-tech company developing intelligent systems for healthcare, safety, energy, and digital infrastructure.
                </p>
              </motion.div>

              {/* Core Values */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">3</span>
                  <h3 className="text-2xl md:text-4xl font-bold">Core Values</h3>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Ingoga Technologies Group has core values and those are innovation, excellence, integrity, and pure impact in both africa and Rwanda
                </p>
              </motion.div>
            </div>

            {/* Center Image - Rectangle 11 */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="/Rectangle 10.png"
                  alt="Medical Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Right Column - Mission & Vision */}
            <div className="space-y-20">
              {/* Mission */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">2</span>
                  <h3 className="text-2xl md:text-4xl font-bold">MISSION</h3>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  To engineer advanced AI ecosystems, emergency automation technologies, and digital platforms that transform organizations and improve lives across Africa and beyond.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">4</span>
                  <h3 className="text-2xl md:text-4xl font-bold">VISION</h3>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  To be the leading Pan-African deep tech powerhouse that redefines global innovation through breakthrough technologies for the world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section - Using existing component */}
        <TeamSection />

        {/* CTA Section - Using existing component */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
