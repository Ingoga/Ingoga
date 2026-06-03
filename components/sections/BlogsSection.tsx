"use client"
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const sideBlogs = [
  {
    tag: "Africa-Tech",
    title: "Why Rwanda Is Becoming Africa's Deep-Tech Capital",
    desc: "The policy, infrastructure, and talent conditions that make Kigali the ideal base for building the next generation of intelligent systems.",
    author: "John Doe • 8min read • May 2025"
  },
  {
    tag: "Company",
    title: "The Founding Vision: Why We Built Ingoga",
    desc: "The founding story — why Rwanda, why now, and what we're building toward over the next decade.",
    author: "John Doe • 8min read • May 2025"
  }
];

export default function BlogsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-6">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
        >Our Latest Blogs</motion.h2>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition text-foreground"
        >
          View All blogs <span className="text-xs -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">→</span>
        </motion.a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured Blog - Left */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="lg:col-span-7 group cursor-pointer flex flex-col bg-black/5 dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl overflow-hidden"
        >
          <div className="w-full aspect-video overflow-hidden">
            <img
              src="/Heart-Beat-Measure.jpg"
              alt="AI Health"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition duration-700"
            />
          </div>
          <div className="p-6 md:p-8 space-y-6 md:space-y-8 flex-1 flex flex-col">
            <div>
              <span className="inline-block px-4 md:px-5 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-[13px] font-medium rounded-md mb-6 md:mb-8">AI & Health</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight transition-colors">
                How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa
              </h3>
              <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                A deep dive into how intelligent systems are reducing diagnostic errors and improving patient outcomes across under-resourced healthcare settings on the continent.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-foreground/80 text-sm font-light mt-auto pt-4 md:pt-0">
              <span>John Doe</span>
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
              <span>8min read</span>
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
              <span>May 2025</span>
            </div>
          </div>
        </motion.div>

        {/* Side Blogs - Right */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
          {sideBlogs.map((blog, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="group cursor-pointer p-6 md:p-10 bg-black/5 dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl flex flex-col justify-between hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 h-auto lg:h-1/2"
            >
              <div className="space-y-4 md:space-y-6">
                <span className="inline-block px-4 md:px-5 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-[13px] font-medium rounded-md mb-2 md:mb-4">
                  {blog.tag}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 leading-tight transition-colors">
                  {blog.title}
                </h3>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  {blog.desc}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-foreground/80 text-sm font-light mt-6 md:mt-8">
                <span>John Doe</span>
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                <span>8min read</span>
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                <span>May 2025</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
