"use client"
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 max-w-5xl mx-auto mb-20 text-center"
    >
      <div className="glass-card rounded-2xl p-16 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to manage your<br />team like a pro?
          </h2>
          <p className="text-foreground/70 mb-10 text-md max-w-lg mx-auto leading-relaxed">
            Ingoga helps you bring more forward momentum, tracking everything from a single central hub seamlessly.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer px-8 py-4 rounded-full font-medium text-[16px] tracking-wide relative overflow-hidden transition-all duration-300 shadow-[inset_0_0_15px_1px_rgba(230,37,5,0.4)] border-3 border-red-500/50 bg-background text-foreground"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
