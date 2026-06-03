"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const faqs = [
  { 
    q: "What stage is Ingoga Technologies at?", 
    a: "Ingoga Technologies is currently in the growth stage, with multiple operational products including UDS, NEXUN, and RESAS. We're actively scaling our platforms across African markets while continuing to innovate and expand our technology stack."
  },
  { 
    q: "What markets are you targeting?", 
    a: "We primarily target African healthcare systems, government institutions, and emergency response organizations. Our focus is on Rwanda, East Africa, and expanding across the continent to provide intelligent systems that address critical infrastructure challenges."
  },
  { 
    q: "What is the revenue model?", 
    a: "Our revenue model combines SaaS subscriptions for our digital health platforms, enterprise licensing for AI systems, and custom implementation services. We offer tiered pricing based on organization size and feature requirements, with dedicated support packages."
  },
  { 
    q: "Are you currently raising funding?", 
    a: "Yes, we are actively seeking strategic partnerships and investment to accelerate our expansion across Africa. We're looking for investors who share our vision of building world-class technology solutions for African challenges."
  },
  { 
    q: "Do you work with NGOs or non-profit organizations?", 
    a: "Absolutely. We have special partnership programs for NGOs and non-profit organizations working in healthcare, emergency response, and digital infrastructure. We offer flexible pricing and dedicated support to maximize social impact."
  },
  { 
    q: "How do I get in touch with your team?", 
    a: "You can reach us through our contact page, email us directly at hello@ingoga.tech, or schedule a call through our 'Partner with us' button. Our team typically responds within 24 hours to all inquiries."
  },
];

// Typewriter component with proper effect
function TypewriterText({ text, isActive }: { text: string; isActive: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isActive && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 15); // Speed of typing
      
      return () => clearTimeout(timeout);
    }
  }, [isActive, currentIndex, text]);

  // Reset when closed
  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      setCurrentIndex(0);
    }
  }, [isActive]);

  return (
    <span className="inline">
      {displayedText}
      {isActive && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[2px] h-5 bg-red-500 ml-1 align-middle"
        />
      )}
    </span>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 w-full relative overflow-hidden bg-background transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Left Column - Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 tracking-tight">
              Everything You Need to know,<br className="hidden lg:block"></br> All in One Place
            </h2>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Discover quick and comprehensive answers to common questions about our platform, services, and features
            </p>
          </motion.div>

          {/* Right Column - FAQ List */}
          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-black/10 dark:border-white/10"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-6 flex items-center justify-between gap-6 group cursor-pointer"
                  >
                    <span className={`
                      text-base md:text-lg lg:text-xl font-medium transition-colors duration-300
                      ${isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}
                    `}>
                      {faq.q}
                    </span>

                    {/* Plus/Minus Icon */}
                    <div className="relative shrink-0 w-6 h-6">
                      <motion.span
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={isOpen ? 'text-red-500' : 'text-foreground/50 group-hover:text-foreground/80'}
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </motion.span>
                    </div>
                  </button>

                  {/* Answer with Typewriter Effect */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-4 md:pr-12">
                          <p className="text-foreground/60 text-sm md:text-base lg:text-lg leading-relaxed">
                            <TypewriterText text={faq.a} isActive={isOpen} />
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
