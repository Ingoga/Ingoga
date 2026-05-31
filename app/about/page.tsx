"use client"
import { motion } from "framer-motion";
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
  { value: "000+", label: "Active Projects" },
  { value: "000+", label: "Clients Served" },
  { value: "00+", label: "Team members" },
  { value: "0", label: "Year of Excellence" }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section - Exactly as in image */}
        <section className="relative pt-32 pb-20 px-8 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
          {/* Dot Pattern - Top Center */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-32 h-32 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <defs>
                <pattern id="dots-top" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#666" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots-top)" />
            </svg>
          </div>

          {/* Dot Pattern - Bottom Left */}
          <div className="absolute bottom-32 left-20 w-48 h-48 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <defs>
                <pattern id="dots-left" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#555" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots-left)" />
            </svg>
          </div>

          {/* Dot Pattern - Bottom Right */}
          <div className="absolute bottom-32 right-20 w-48 h-48 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <defs>
                <pattern id="dots-right" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#555" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots-right)" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
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
        <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
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
              className="space-y-6 order-1 lg:order-2"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Hey!</h3>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium transition-all duration-300 text-sm"
              >
                Meet with us →
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
                    {stat.value}
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
        <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Who we are */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-7xl font-bold text-zinc-800 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Who we are</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We are a team of engineers, designers, and domain experts building intelligent systems that transform how nations operate, respond, and thrive.
              </p>
            </motion.div>

            {/* Center Image - Rectangle 11 */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src="/Rectangle 10.png"
                  alt="Medical Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-7xl font-bold text-zinc-800 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">MISSION</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                To build world-class technology solutions that address Africa's most critical challenges in healthcare, safety, and infrastructure — proving that innovation knows no borders.
              </p>
            </motion.div>
          </div>

          {/* Core Values & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-7xl font-bold text-zinc-800 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Core Values</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Excellence in execution. Integrity in every interaction. Innovation without compromise. We believe in building systems that work reliably in the real world, not just in demos.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-7xl font-bold text-zinc-800 mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">VISION</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                To become Africa's leading deep-tech company, setting the standard for intelligent systems that empower nations, save lives, and drive sustainable development across the continent.
              </p>
            </motion.div>
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
