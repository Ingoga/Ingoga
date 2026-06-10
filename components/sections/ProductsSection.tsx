"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { mediaUrl, resolveFeaturedProducts } from "../../lib/api";
import { DEFAULT_PRODUCTS, PRODUCT_FALLBACK_IMAGES } from "../../lib/defaults";

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

export default function ProductsSection() {
  const { data: featured = [] } = useQuery({
    queryKey: ["homepage", "featured-products"],
    queryFn: resolveFeaturedProducts,
  });

  const products = useMemo(() => {
    if (featured.length === 0) return DEFAULT_PRODUCTS;
    return featured.map((product, i) => ({
      title: product.name,
      desc: product.description,
      tag: `Visit ${product.name.split(" ")[0]} →`,
      img: mediaUrl(product.logoUrl) || PRODUCT_FALLBACK_IMAGES[i % PRODUCT_FALLBACK_IMAGES.length],
      slug: product.websiteUrl || "/products",
    }));
  }, [featured]);

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
          href="/products"
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
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-full max-w-[160px] object-contain rounded-md"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = PRODUCT_FALLBACK_IMAGES[i % PRODUCT_FALLBACK_IMAGES.length];
                    if (!target.src.endsWith(fallback)) target.src = fallback;
                  }}
                />
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
