"use client"
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

const testimonials = [
  { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
  { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
  { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
  { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
  { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
  { text: "The advanced analytics have given us better insight into project performance than ever", author: "David Foster", company: "Nexun Inc." },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto text-center transition-colors duration-300">
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
        className="text-foreground/90 text-base md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed"
      >
        The brilliant minds behind Africa's next generation of<br className="hidden md:block" />intelligent health and evolving systems
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left px-0 md:px-12 lg:px-28"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="cursor-pointer border-l-2 border-t-2 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 rounded-l-2xl rounded-r-none rounded-b-none p-6 md:p-8 bg-background transition-all duration-300 flex flex-col justify-between gap-6"
          >
            <p className="text-foreground/70 text-[14px] md:text-[15px] leading-relaxed">{t.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/10 dark:bg-zinc-800 overflow-hidden shrink-0 border border-black/10 dark:border-white/10">
                <img src="/Boy.jpg" alt={t.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-foreground font-bold text-[14px] md:text-[15px] mb-1">{t.author}</p>
                <p className="text-foreground/60 text-[11px] md:text-[12px] leading-tight">{t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
