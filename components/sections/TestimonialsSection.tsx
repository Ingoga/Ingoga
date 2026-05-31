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
    <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto text-center">
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
      >What Our Customers Think</motion.h2>
      <motion.p
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="text-white/90 text-lg mb-16 max-w-2xl mx-auto leading-relaxed"
      >
        The brilliant minds behind Africa's next generation of<br className="hidden md:block" />intelligent health and evolving systems
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left px-28"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ borderColor: 'white' }}
            className="cursor-pointer border-l-2 border-t-2 border-white/10 rounded-l-2xl rounded-r-none rounded-b-none p-6 bg-[#050505] transition duration-500 flex flex-col justify-between gap-6"
          >
            <p className="text-zinc-400 text-[15px] leading-relaxed">{t.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-zinc-800 overflow-hidden shrink-0 border border-zinc-900/50">
                <img src="/Boy.jpg" alt={t.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-[15px] mb-1">{t.author}</p>
                <p className="text-zinc-500 text-[12px] leading-tight">{t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
