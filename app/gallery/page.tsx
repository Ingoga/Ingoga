"use client"
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import HeroWithScroll from "../../components/sections/HeroWithScroll";
import NavigationDots from "../../components/ui/NavigationDots";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CTASection from "../../components/sections/CTASection";
import { api, mediaUrl } from "../../lib/api";

const slotAspects = [
  "aspect-400/495",
  "aspect-400/249",
  "aspect-400/249",
  "aspect-400/495",
  "aspect-400/240",
  "aspect-400/240",
  "aspect-400/240",
];

const slotPlayOverlay = [false, false, false, true, false, true, false];

export default function GalleryPage() {
  const [activePage, setActivePage] = useState(0);

  const { data: hero } = useQuery({
    queryKey: ["gallery", "hero"],
    queryFn: () => api.gallery.hero(),
  });

  const { data: galleryItems } = useQuery({
    queryKey: ["gallery", "items"],
    queryFn: () => api.gallery.items(50),
  });

  const slotImages = useMemo(() => {
    const items = galleryItems?.data ?? [];
    return items.map((item) => mediaUrl(item.imageUrl)).filter(Boolean);
  }, [galleryItems]);

  const heroTitle = hero?.heading || "";
  const heroDescription = hero?.content || "";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroWithScroll
          title={heroTitle}
          description={heroDescription}
        />
        <div className="max-w-[1400px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-hidden rounded-md ${slotAspects[0]}`}
              >
                {slotImages[0] && (
                  <img src={slotImages[0]} alt="Gallery Image 1" className="w-full h-full object-cover" />
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative overflow-hidden rounded-md ${slotAspects[1]}`}
              >
                {slotImages[1] && (
                  <img src={slotImages[1]} alt="Gallery Image 2" className="w-full h-full object-cover" />
                )}
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative overflow-hidden rounded-md ${slotAspects[2]}`}
              >
                {slotImages[2] && (
                  <img src={slotImages[2]} alt="Gallery Image 3" className="w-full h-full object-cover" />
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`relative overflow-hidden rounded-md ${slotAspects[3]} group cursor-pointer`}
              >
                {slotImages[3] && (
                  <img src={slotImages[3]} alt="Gallery Image 4" className="w-full h-full object-cover" />
                )}
                {slotPlayOverlay[3] && slotImages[3] && (
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-black fill-black" />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`relative overflow-hidden rounded-md ${slotAspects[4]}`}
              >
                {slotImages[4] && (
                  <img src={slotImages[4]} alt="Gallery Image 5" className="w-full h-full object-cover" />
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`relative overflow-hidden rounded-md ${slotAspects[5]} group cursor-pointer`}
              >
                {slotImages[5] && (
                  <img src={slotImages[5]} alt="Gallery Image 6" className="w-full h-full object-cover" />
                )}
                {slotPlayOverlay[5] && slotImages[5] && (
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-black fill-black" />
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`relative overflow-hidden rounded-md ${slotAspects[6]} group cursor-pointer`}
              >
                {slotImages[6] && (
                  <img src={slotImages[6]} alt="Gallery Image 7" className="w-full h-full object-cover" />
                )}
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
