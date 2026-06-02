"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import HeroWithScroll from "../../components/sections/HeroWithScroll";
import NavigationDots from "../../components/ui/NavigationDots";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CTASection from "../../components/sections/CTASection";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function GalleryPage() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroWithScroll
          title="Inside Ingoga Technologies"
          description="The people, places, and moments behind Africa's next generation of intelligent systems."
        />

        {/* Explicit 3-Column Image Gallery */}
        <div className="max-w-[1400px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-lg aspect-3/4"
              >
                <img src="/Frame 1000011744.png" alt="Gallery Image 1" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-lg aspect-video"
              >
                <img src="/Frame 1000011747.png" alt="Gallery Image 2" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-lg aspect-17/9"
              >
                <img src="/Frame 1000011741.png" alt="Gallery Image 3" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative overflow-hidden rounded-xl aspect-3/4"
              >
                <img src="/Frame 1000011743 (1).png" alt="Gallery Image 4" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative overflow-hidden rounded-xl aspect-video"
              >
                <img src="/Frame 1000011742.png" alt="Gallery Image 5" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative overflow-hidden rounded-xl aspect-video group cursor-pointer"
              >
                <img src="/Frame 1000011745 (1).png" alt="Gallery Image 6" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-black fill-black" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative overflow-hidden rounded-xl aspect-4/3 group cursor-pointer"
              >
                <img src="/Frame 1000011746.png  " alt="Gallery Image 7" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-black fill-black" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Progress Indicator */}
        <NavigationDots 
          total={3} 
          activeIndex={activePage} 
          onChange={setActivePage} 
          className="mb-24 mt-16" 
        />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
