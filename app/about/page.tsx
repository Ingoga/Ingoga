"use client"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import TeamSection from "../../components/sections/TeamSection";
import CTASection from "../../components/sections/CTASection";
import HeroWithScroll from "../../components/sections/HeroWithScroll";
import { api } from "../../lib/api";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

interface IngogaFields {
  whoWeAre: string;
  mission: string;
  vision: string;
  coreValues: string;
}

function parseIngogaContent(content?: string): IngogaFields {
  if (!content) {
    return { whoWeAre: "", mission: "", vision: "", coreValues: "" };
  }
  try {
    const parsed = JSON.parse(content);
    if (parsed && typeof parsed === "object" && "mission" in parsed) {
      return {
        whoWeAre: parsed.whoWeAre || "",
        mission: parsed.mission || "",
        vision: parsed.vision || "",
        coreValues: parsed.coreValues || "",
      };
    }
  } catch {
    // fall through
  }
  return {
    whoWeAre: content,
    mission: "",
    vision: "",
    coreValues: "",
  };
}

function parseParagraphs(content?: string): string[] {
  if (!content) return [];
  return content.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function AboutPage() {
  const { data: hero } = useQuery({
    queryKey: ["about", "hero"],
    queryFn: () => api.about.hero(),
  });

  const { data: whoWeAre } = useQuery({
    queryKey: ["about", "who-we-are"],
    queryFn: () => api.about.whoWeAre(),
  });

  const { data: ingoga } = useQuery({
    queryKey: ["about", "ingoga"],
    queryFn: () => api.about.ingoga(),
  });

  const stats = useMemo(() => {
    if (!ingoga?.stats?.length) return [];
    return ingoga.stats.map((stat) => ({
      value: stat.value,
      suffix: stat.suffix,
      label: stat.label,
    }));
  }, [ingoga]);

  const whoWeAreParagraphs = useMemo(
    () => parseParagraphs(whoWeAre?.content),
    [whoWeAre],
  );

  const ingogaFields = useMemo(
    () => parseIngogaContent(ingoga?.content),
    [ingoga],
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full">
        <HeroWithScroll
          title={hero?.heading || ""}
          description={hero?.content || ""}
        />

        {/* Hey Section with Rectangle 10 Image */}
        <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image (Rectangle 10) */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/Rectangle 11.png"
                  alt="Healthcare Technology"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4 order-1 lg:order-2"
            >
              <div>
                {whoWeAre?.subheading && (
                  <h3 className="text-3xl font-semibold text-white mb-2">{whoWeAre.subheading}</h3>
                )}
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  {whoWeAre?.heading || ""}
                </h2>
              </div>

              {whoWeAreParagraphs.map((paragraph, index) => (
                <p key={index} className="text-zinc-400 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer mt-6 px-8 py-3 bg-[#570D04] rounded-md text-white font-medium transition-all duration-300 text-sm"
              >
                Meet with us <span className="-rotate-45">→</span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-8 border-y border-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us - Mission, Vision, Values with Rectangle 11 */}
        <section className="py-32 px-8 md:px-16 max-w-8xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-20"
          >
            About Us
          </motion.h2>

          <div className="cursor-pointer grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left Column - Who we are & Core Values */}
            <div className="space-y-20">
              {/* Who we are */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">1</span>
                  <h3 className="text-2xl md:text-4xl font-bold">Who we are</h3>
                </div>
                
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  {ingogaFields.whoWeAre}
                </p>
              </motion.div>

              {/* Core Values */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">3</span>
                  <h3 className="text-2xl md:text-4xl font-bold">Core Values</h3>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {ingogaFields.coreValues}
                </p>
              </motion.div>
            </div>

            {/* Center Image - Rectangle 11 */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-4/5 shadow-2xl">
                <img
                  src="/Rectangle 10.png"
                  alt="Medical Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Right Column - Mission & Vision */}
            <div className="space-y-20">
              {/* Mission */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">2</span>
                  <h3 className="text-2xl md:text-4xl font-bold">MISSION</h3>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {ingogaFields.mission}
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-center items-center justify-center">
                  <span className="text-5xl md:text-8xl font-medium text-zinc-800/80">4</span>
                  <h3 className="text-2xl md:text-4xl font-bold">VISION</h3>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {ingogaFields.vision}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section - Using existing component */}
        <TeamSection scope="all" />

        {/* CTA Section - Using existing component */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
