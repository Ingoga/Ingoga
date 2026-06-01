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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
            {/* Left Column - Title and Image */}
            <div className="space-y-8">
              {/* Title with decorative line */}
              <div className="space-y-6">
                <div className="w-44 h-[1px] bg-zinc-700"></div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold leading-tight"
                >
                  Our Past Work
                </motion.h2>
              </div>

              {/* Project Image */}
              <motion.div
                key={`image-${activeProject}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center"
              >
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Right Column - Description and Project Details */}
            <div className="space-y-16">
              {/* Top Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-zinc-400 text-base leading-relaxed"
              >
                From underground talents to established names, I've shaped tracks that connect with listeners on a deeper level, bringing each artist's vision to life.
              </motion.p>

              {/* Project Details */}
              <motion.div
                key={`details-${activeProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Project Name */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-3">
                    {projects[activeProject].name}
                  </h3>
                  <p className="text-zinc-500 text-sm tracking-wide">
                    {projects[activeProject].company}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-zinc-400 text-base leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {projects[activeProject].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visit Button */}
                <motion.a
                  href={projects[activeProject].link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-800 rounded-md text-white text-sm hover:border-zinc-600 transition-colors mt-4"
                >
                  Visit {projects[activeProject].name}
                  <span>→</span>
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-2 mt-20">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-white w-6' 
                    : 'bg-zinc-700 hover:bg-zinc-600 w-2'
                }`}
                aria-label={`View project ${index + 1}`}
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
