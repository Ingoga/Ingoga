"use client"
import { motion } from "framer-motion";
import Link from "next/link";

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
    img: "/UDS.jpg",
    slug: "/blog/uds"
  },
  {
    title: "NEXUN INC.",
    desc: "Advanced AI systems, medical automation, and emerging research in intelligence, energy, and next-generation computation. NEXUN Inc. builds the future layer by layer.",
    tag: "Visit NEXUN →",
    img: "/NEXUN.jpg",
    slug: "/blog/nexun"
  },
  {
    title: "RESAS",
    desc: "A high-precision safety and response platform combining sensors, real-time software, and intelligent automation. Built for speed and accuracy — every second counts when lives are on the line.",
    tag: "Visit RESAS →",
    img: "/RESAS.png",
    slug: "/blog/resas"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-6">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-4 text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">What we are building</h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-lg">
            Independent platforms and companies solving complex problems through technology.
          </p>
        </motion.div>
        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          className="flex text-foreground/70 hover:text-foreground text-sm font-bold transition items-center gap-2 group border border-black/20 dark:border-white/20 px-6 py-3 rounded-md"
        >
          View All products <span className="text-xs group-hover:translate-x-1 transition-transform -rotate-45">→</span>
        </motion.a>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left"
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="group p-6 bg-black/5 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-lg flex flex-col justify-between gap-8 md:gap-12 transition-all duration-500"
          >
            <div className="space-y-6 md:space-y-8">
              <div className="h-16 flex items-center">
                <img src={product.img} alt={product.title} className="max-h-full max-w-[160px] object-contain rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-black text-foreground mb-3 md:mb-4 tracking-wider uppercase">{product.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{product.desc}</p>
              </div>
            </div>
            <Link
              href={product.slug}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/20 dark:border-white/20 text-foreground text-[13px] font-medium hover:bg-black/10 dark:hover:bg-white/10 transition w-fit mt-4 md:mt-0"
            >
              {product.tag}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
