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

const faqs = [
  { q: "Why does pricing go up each year?", a: "Our system is built for resilience. You can contact support for detailed breakdowns of our features and integrations tailored specifically to your clinical needs or institutional standards." },
  { q: "What innovations have you built?", a: "We engineer advanced AI ecosystems, digital health platforms, and emergency safety systems that transform how nations operate, respond, and thrive." },
  { q: "What is your process model?", a: "Our process model is centered around agile development, continuous feedback, and iterative deployment to ensure maximum client satisfaction and platform stability." },
  { q: "Can I use Medix offline on my PC?", a: "Yes. Medix supports offline functionality with local data caching. Data is synced automatically once a connection is restored, ensuring continuity of care." },
  { q: "Do you use local AWS servers for global data?", a: "We leverage a multi-region cloud architecture to ensure low-latency access and data sovereignty across all African regions where our platforms are deployed." },
  { q: "How to book a demo call for my clinic?", a: "Visit our contact page or click 'Partner with us' to schedule a tailored 30-minute discovery call with one of our solution architects." },
];

export default function FAQSection() {
  return (
    <section className="py-32 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        {/* Header Row */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-end mb-20 border-b border-white/10 pb-12"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Everything You Need to know,<br /> All in One Place
            </h2>
          </div>
          <p className="text-zinc-500 text-base max-w-md self-end leading-relaxed pb-1">
            Whether our clinic platform, Noux, or MEDIX — we have
            answers. Click any question to expand the full context.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {faqs.map((item, i) => (
            <motion.details
              key={i}
              variants={fadeInUp}
              className="group border-t border-white/8 cursor-pointer"
            >
              <summary className="list-none outline-none py-7 flex items-start gap-6 md:gap-10">
                {/* Number Rail */}
                <span className="text-[11px] font-mono text-red-500/60 pt-1 shrink-0 w-6 text-right tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Question */}
                <div className="flex-1 flex justify-between items-center gap-4">
                  <span className="text-white font-semibold text-lg md:text-2xl tracking-tight group-open:text-red-400 transition-colors duration-300">
                    {item.q}
                  </span>
                  {/* Animated Plus → Cross */}
                  <div className="relative w-5 h-5 shrink-0 opacity-40 group-open:opacity-100 transition-opacity">
                    <span className="absolute top-1/2 left-0 w-full h-px bg-white -translate-y-1/2 transition-transform duration-300" />
                    <span className="absolute top-1/2 left-0 w-full h-px bg-white -translate-y-1/2 rotate-90 group-open:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </summary>

              {/* Answer */}
              <div className="pl-16 md:pl-20 pb-8">
                <div className="flex gap-6">
                  <div className="w-px bg-red-500/30 shrink-0" />
                  <p className="text-zinc-400 text-base leading-[1.8] max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </div>
            </motion.details>
          ))}
        </motion.div>

        {/* Footer CTA Row */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12 mt-4"
        >
          <p className="text-zinc-500 text-sm">Still have questions? Reach out directly.</p>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide relative overflow-hidden transition-all duration-300"
            style={{
              border: '1px solid rgba(239, 68, 68, 0.35)',
              backgroundColor: 'transparent',
            }}
          >
            <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            Contact our support team →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
