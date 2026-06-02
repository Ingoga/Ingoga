"use client"
import { motion } from "framer-motion";
import HeroWithScroll from "../../components/sections/HeroWithScroll";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CTASection from "../../components/sections/CTASection";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroWithScroll 
          title="Inside Ingoga Technologies" 
          description="The people, places, and moments behind Africa's next generation of intelligent systems." 
        />

        {/* Masonry Image Gallery */}
        <div className="max-w-[1400px] mx-auto px-6 mb-20">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Column 1 items (simulated via CSS columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <img src="/Girl.jpg" alt="Gallery Image 1" className="w-full h-auto object-cover aspect-3/4" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <img src="/Heart-Beat-Measure.jpg" alt="Gallery Image 2" className="w-full h-auto object-cover aspect-video" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <img src="/Rectangle 10.png" alt="Gallery Image 3" className="w-full h-auto object-cover aspect-video" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <img src="/Man.jpg" alt="Gallery Image 4" className="w-full h-auto object-cover aspect-3/4" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <img src="/Rectangle 11.png" alt="Gallery Image 5" className="w-full h-auto object-cover aspect-4/3" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <img src="/Boy.jpg" alt="Gallery Image 6" className="w-full h-auto object-cover aspect-video" />
            </motion.div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mb-24">
          <div className="w-8 h-1.5 bg-white rounded-full"></div>
          <div className="w-2 h-1.5 bg-zinc-700 rounded-full border border-zinc-600"></div>
          <div className="w-2 h-1.5 bg-zinc-700 rounded-full border border-zinc-600"></div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
