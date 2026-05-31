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
      <div className="border border-zinc-800 rounded-xl p-16 relative overflow-hidden backdrop-blur-sm bg-zinc-950/40">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to manage your<br />team like a pro?
          </h2>
          <p className="text-zinc-400 mb-10 text-md max-w-lg mx-auto leading-relaxed">
            Ingoga helps you bring more forward momentum, tracking everything from a single central hub seamlessly.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer px-8 py-4 rounded-full text-white font-medium text-[16px] tracking-wide relative overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: '#030303',
              boxShadow: 'inset 0 0 20px 2px rgba(157,20,2,0.5)',
              border: '3px solid rgba(157,20,2, 0.6)',
            }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
