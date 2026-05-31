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
    <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto border-t border-zinc-900/50">
      <div className="flex justify-between items-center mb-16">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight"
        >Our Latest Blogs</motion.h2>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-lg border border-zinc-800 hover:bg-zinc-900 text-sm font-medium transition text-white"
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
          className="lg:col-span-7 group cursor-pointer flex flex-col bg-[#0a0a0a] border border-zinc-800/50 rounded-xl overflow-hidden"
        >
          <div className="w-full aspect-video overflow-hidden">
            <img
              src="/Heart-Beat-Measure.jpg"
              alt="AI Health"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition duration-700"
            />
          </div>
          <div className="p-6 space-y-8 flex-1 flex flex-col">
            <div>
              <span className="inline-block px-5 py-2 bg-[#1a0808] text-[#e84c4c] text-[13px] font-medium rounded-md mb-8">AI & Health</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight transition-colors">
                How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                A deep dive into how intelligent systems are reducing diagnostic errors and improving patient outcomes across under-resourced healthcare settings on the continent.
              </p>
            </div>
            <div className="flex items-center gap-4 text-white text-sm font-light mt-auto">
              <span>John Doe</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              <span>8min read</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              <span>May 2025</span>
            </div>
          </div>
        </motion.div>

        {/* Side Blogs - Right */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {sideBlogs.map((blog, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="group cursor-pointer p-10 bg-[#0a0a0a] border border-zinc-800/50 rounded-xl flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 h-1/2"
            >
              <div className="space-y-6">
                <span className="inline-block px-5 py-2 bg-[#1a0808] text-[#e84c4c] text-[13px] font-medium rounded-md mb-4">
                  {blog.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight transition-colors">
                  {blog.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {blog.desc}
                </p>
              </div>
              <div className="flex items-center gap-4 text-white text-sm font-light mt-8">
                <span>John Doe</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                <span>8min read</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                <span>May 2025</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
