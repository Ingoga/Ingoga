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

const products = [
  {
    title: "UBUZIMA DIGITAL SYSTEM",
    desc: "A modern digital health platform focused on clinical workflows, decision support, and intelligent care delivery. Built for real-world complexity, designed for clinicians who need clarity and precision.",
    tag: "Visit UDS →",
    img: "/UDS.jpg"
  },
  {
    title: "NEXUN INC.",
    desc: "Advanced AI systems, medical automation, and emerging research in intelligence, energy, and next-generation computation. NEXUN Inc. builds the future layer by layer.",
    tag: "Visit NEXUN →",
    img: "/NEXUN.jpg"
  },
  {
    title: "RESAS",
    desc: "A high-precision safety and response platform combining sensors, real-time software, and intelligent automation. Built for speed and accuracy — every second counts when lives are on the line.",
    tag: "Visit RESAS →",
    img: "/RESAS.png"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto border-t border-zinc-900/50">
      <div className="flex justify-between items-end mb-16 gap-6">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-4 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">What we are building</h2>
          <p className="text-zinc-400 text-lg max-w-lg">
            Independent platforms and companies solving complex problems through technology.
          </p>
        </motion.div>
        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          className="hidden sm:flex text-zinc-400 hover:text-white text-sm font-bold transition items-center gap-2 group border border-zinc-800 px-6 py-3 rounded-md"
        >
          View All products <span className="text-xs group-hover:translate-x-1 transition-transform -rotate-45">→</span>
        </motion.a>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="group p-6 bg-[#080808] border border-zinc-800 rounded-lg flex flex-col justify-between gap-12 transition-all duration-500"
          >
            <div className="space-y-8">
              <div className="h-16 flex items-center">
                <img src={product.img} alt={product.title} className="max-h-full max-w-[160px] object-contain rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-4 tracking-wider uppercase">{product.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{product.desc}</p>
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-700 text-white text-[13px] font-medium hover:bg-zinc-900 transition w-fit">
              {product.tag}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
