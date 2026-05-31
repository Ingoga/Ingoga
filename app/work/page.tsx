"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroWithScroll from "../../components/sections/HeroWithScroll";
import CTASection from "../../components/sections/CTASection";

const projects = [
  {
    id: 1,
    name: "NEXUN",
    company: "NEXUN INC.",
    description: "NEXUN is a next-generation AI-powered automation and intelligence platform designed to revolutionize energy and next-generation communities. NEXUN Inc builds the future layer by layer.",
    image: "/NEXUN.jpg",
    features: [
      "Cloud satellite automation",
      "AI-powered decision support",
      "Offline-first architecture",
      "Multi-facility management"
    ],
    link: "#"
  },
  {
    id: 2,
    name: "UDS",
    company: "Universal Digital Systems",
    description: "A comprehensive digital health platform connecting patients, providers, and facilities across Africa.",
    image: "/UDS.jpg",
    features: [
      "Electronic health records",
      "Telemedicine integration",
      "Pharmacy management",
      "Lab & diagnostics"
    ],
    link: "#"
  },
  {
    id: 3,
    name: "RESAS",
    company: "Rwanda Emergency Services",
    description: "AI-powered emergency response system for rapid dispatch and coordination.",
    image: "/RESAS.png",
    features: [
      "Real-time dispatch",
      "GPS tracking",
      "Resource optimization",
      "Multi-agency coordination"
    ],
    link: "#"
  }
];

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />

      <main className="flex-1 w-full">
        <HeroWithScroll
          title={
            <>
              Three Platforms, One Vision
            </>
          }
          description={
            <>
              Independent companies solving complex problems in digital<br className="hidden md:block" />
              health, AI systems, and emergency safety — each built to stand<br className="hidden md:block" />
              alone, stronger together.
            </>
          }
        />

        {/* Our Past Work Section */}
        <section id="work-section" className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Title and Description */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold"
              >
                Our Past Work
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 text-base leading-relaxed"
              >
                From underground talents to established names, I've played tracks that connect with listeners on a deeper level, bringing each artist's vision to life.
              </motion.p>
            </div>

            {/* Right - Project Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
            >
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].name}
                className="w-full h-full object-contain p-12"
              />
            </motion.div>
          </div>

          {/* Project Details */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Empty space or image */}
            <div></div>

            {/* Right - Project Info */}
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {projects[activeProject].name}
                </h3>
                <p className="text-zinc-500 text-sm">
                  {projects[activeProject].company}
                </p>
              </div>

              <p className="text-zinc-400 text-base leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="space-y-3">
                {projects[activeProject].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="text-green-500 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={projects[activeProject].link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-700 rounded-md text-white text-sm hover:border-zinc-500 transition-colors"
              >
                Visit {projects[activeProject].name}
                <span>→</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-3 mt-16">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-white w-8' 
                    : 'bg-zinc-700 hover:bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
