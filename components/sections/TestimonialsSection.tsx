"use client"
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { api, mediaUrl } from "../../lib/api";
import { DEFAULT_TESTIMONIALS } from "../../lib/defaults";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const variants = {
  active: {
    x: "0%",
    scale: 1,
    opacity: 1,
    zIndex: 20,
    rotateY: 0,
    filter: "blur(0px)",
  },
  left: {
    x: "-85%",
    scale: 0.85,
    opacity: 0.4,
    zIndex: 10,
    rotateY: 12,
    filter: "blur(2px)",
  },
  right: {
    x: "85%",
    scale: 0.85,
    opacity: 0.4,
    zIndex: 10,
    rotateY: -12,
    filter: "blur(2px)",
  },
  hiddenLeft: {
    x: "-130%",
    scale: 0.6,
    opacity: 0,
    zIndex: 0,
    rotateY: 20,
    filter: "blur(4px)",
  },
  hiddenRight: {
    x: "130%",
    scale: 0.6,
    opacity: 0,
    zIndex: 0,
    rotateY: -20,
    filter: "blur(4px)",
  }
};

export default function TestimonialsSection() {
  const { data: apiTestimonials = [] } = useQuery({
    queryKey: ["homepage", "testimonials"],
    queryFn: () => api.homepage.testimonials(),
  });

  const testimonials = useMemo(() => {
    if (apiTestimonials.length === 0) return DEFAULT_TESTIMONIALS;
    return apiTestimonials.map((t) => ({
      id: t.id,
      quote: t.quote,
      name: t.name,
      company: t.company,
      avatarUrl: mediaUrl(t.avatarUrl) || "/Boy.jpg",
    }));
  }, [apiTestimonials]);

  const carouselItems = useMemo(() => {
    let items = [...testimonials];
    if (items.length > 0) {
      // Ensure we have at least 5 items to make the 3D rotation perfectly smooth
      while (items.length < 5) {
        items = [...items, ...testimonials];
      }
    }
    return items.map((t, i) => ({ ...t, uniqueKey: `${t.id}-${i}` }));
  }, [testimonials]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, carouselItems.length]);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    const half = Math.floor(carouselItems.length / 2);
    if (offset > half) offset -= carouselItems.length;
    else if (offset < -half) offset += carouselItems.length;
    return offset;
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-background transition-colors duration-300">
      <div className="px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto text-center mb-10 md:mb-16">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground tracking-tight"
        >What Our Customers Think</motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-foreground/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          The brilliant minds behind Africa's next generation of<br className="hidden md:block" />intelligent health and evolving systems
        </motion.p>
      </div>

      <motion.div 
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="relative flex w-full flex-col items-center justify-center min-h-[400px] md:min-h-[450px]"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {carouselItems.map((t, index) => {
          const offset = getOffset(index);
          let state = "active";
          if (offset === -1) state = "left";
          else if (offset === 1) state = "right";
          else if (offset < -1) state = "hiddenLeft";
          else if (offset > 1) state = "hiddenRight";

          return (
            <motion.div
              key={t.uniqueKey}
              initial={false}
              animate={state}
              variants={variants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveIndex(index)}
              className="absolute w-[300px] md:w-[380px] cursor-pointer border-l-2 border-t-2 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 rounded-l-2xl rounded-r-none rounded-b-none p-6 md:p-12 bg-background shadow-2xl dark:shadow-white/5 flex flex-col justify-between gap-6"
            >
              <p className="text-foreground/80 text-[14px] md:text-[15px] leading-relaxed text-left">"{t.quote}"</p>
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 dark:bg-zinc-800 overflow-hidden shrink-0 border border-black/10 dark:border-white/10">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/Boy.jpg"; }}
                  />
                </div>
                <div>
                  <p className="text-foreground font-bold text-[14px] md:text-[15px] mb-1">{t.name}</p>
                  <p className="text-foreground/60 text-[11px] md:text-[12px] leading-tight">{t.company}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Custom Pagination Indicators */}
        <div className="absolute bottom-0 flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === index ? "w-8 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
