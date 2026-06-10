"use client"
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroWithScroll from "../../components/sections/HeroWithScroll";
import NavigationDots from "../../components/ui/NavigationDots";
import CTASection from "../../components/sections/CTASection";
import { api, mediaUrl } from "../../lib/api";

function parseFeatures(description: string, tagline: string): string[] {
  const byNewline = description.split("\n").map((s) => s.trim()).filter(Boolean);
  if (byNewline.length > 1) return byNewline;
  return tagline ? [tagline] : byNewline;
}

export default function ProductsPage() {
  const [activeProject, setActiveProject] = useState(0);

  const { data: hero } = useQuery({
    queryKey: ["products", "hero"],
    queryFn: () => api.products.hero(),
  });

  const { data: featured } = useQuery({
    queryKey: ["products", "featured"],
    queryFn: () => api.products.featured(),
  });

  const projects = useMemo(() => {
    if (!featured?.length) return [];
    return featured.map((product, i) => ({
      id: i + 1,
      name: product.name,
      company: product.tagline,
      description: product.description,
      image: mediaUrl(product.logoUrl),
      features: parseFeatures(product.description, product.tagline),
      link: product.websiteUrl || "#",
    }));
  }, [featured]);

  const safeActiveProject = projects.length > 0 ? Math.min(activeProject, projects.length - 1) : 0;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full">
        <HeroWithScroll
          title={hero?.heading || ""}
          description={hero?.content || ""}
        />

        {/* Our Past Work Section */}
        <section id="work-section" className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
          {/* Top Section - Title and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">
            {/* Left - Title */}
            <div className="space-y-4">
              <div className="w-72 h-[2px] bg-white"></div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2.75rem] font-bold leading-tight"
              >
                Our Past Work
              </motion.h2>
            </div>

            {/* Right - Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-[18px] leading-relaxed"
            >
              From underground talents to established names, I've shaped tracks that connect with listeners on a deeper level, bringing each artist's vision to life.
            </motion.p>
          </div>

          {/* Bottom Section - Image and Project Details */}
          {projects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-0 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden min-h-[500px] shadow-2xl shadow-black/5 dark:shadow-white/5">
              <motion.div
                key={`image-${safeActiveProject}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white flex items-center justify-center h-full border-r border-black/5 dark:border-white/5"
              >
                {projects[safeActiveProject].image && (
                  <img 
                    src={projects[safeActiveProject].image} 
                    alt={projects[safeActiveProject].name}
                    className="w-full h-full object-contain p-8"
                  />
                )}
              </motion.div>

              <motion.div
                key={`details-${safeActiveProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-[#0a0a0a] p-12 flex flex-col justify-center space-y-8 h-full"
              >
                {/* Project Name */}
                <div>
                  <h3 className="text-[2.75rem] font-bold mb-2 leading-tight text-foreground">
                    {projects[safeActiveProject].name}
                  </h3>
                  <p className="text-foreground/60 text-md font-medium tracking-wide">
                    {projects[safeActiveProject].company}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-foreground/80 text-[15px] leading-relaxed">
                  {projects[safeActiveProject].description}
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {projects[safeActiveProject].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center shrink-0">
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-600 dark:text-red-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-foreground/80 text-[14.5px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Visit Button */}
                <motion.a
                  href={projects[safeActiveProject].link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-transparent border border-black/10 dark:border-white/10 rounded-md text-foreground text-[14px] font-bold hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(230,37,5,0.15)] transition-all duration-300 w-fit"
                >
                  Visit {projects[safeActiveProject].name}
                  <span className="text-foreground text-lg leading-none">→</span>
                </motion.a>
              </motion.div>
            </div>
          )}

          {/* Project Navigation Dots */}
          {projects.length > 0 && (
            <NavigationDots 
              total={projects.length}
              activeIndex={safeActiveProject}
              onChange={setActiveProject}
              className="mt-16"
            />
          )}
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
