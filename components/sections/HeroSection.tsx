"use client"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { api, mediaUrl } from "../../lib/api";
import { DEFAULT_HERO, DEFAULT_PARTNERS } from "../../lib/defaults";
import { useRef, useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { DEFAULT_ACTIVITIES, Activity } from "./RecentActivitiesSection";


const FAN_LAYOUT = [
  { rotate: -32, y: -45, zIndex: 1 },
  { rotate: -24, y: -32, zIndex: 2 },
  { rotate: -16, y: -20, zIndex: 3 },
  { rotate: -8, y: -10, zIndex: 4 },
  { rotate: 0, y: 0, zIndex: 5 },
] as const;

const HOVER_LIFT = -24;

function HeroActivities() {
  const { data: activities = DEFAULT_ACTIVITIES } = useQuery({
    queryKey: ["recent-activities"],
    queryFn: () => api.recentActivities.list(),
  });

  const [cards, setCards] = useState<Activity[]>([...DEFAULT_ACTIVITIES].slice(0, 5).reverse());

  useEffect(() => {
    if (activities) {
      const merged = [...activities];
      let i = 0;
      while (merged.length < 5 && i < DEFAULT_ACTIVITIES.length) {
        if (!merged.find((a) => a.id === DEFAULT_ACTIVITIES[i].id)) {
          merged.push(DEFAULT_ACTIVITIES[i]);
        }
        i++;
      }
      setCards(merged.slice(0, 5).reverse());
    }
  }, [activities]);

  const selected = cards[cards.length - 1];

  const handleCardClick = (index: number) => {
    if (index === cards.length - 1) return;
    setCards((prev) => {
      const next = [...prev];
      const frontIndex = next.length - 1;
      const temp = next[index];
      next[index] = next[frontIndex];
      next[frontIndex] = temp;
      return next;
    });
  };

  return (
    <>
      <div className="absolute top-28 left-4 md:top-36 md:left-14 z-50 pointer-events-none">
        <div className="relative w-[280px] h-[248px] md:w-[380px] md:h-[320px]">
          {cards.map((activity, i) => {
            const layout = FAN_LAYOUT[i] ?? FAN_LAYOUT[FAN_LAYOUT.length - 1];
            const isFront = i === cards.length - 1;

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 48, rotate: 0 }}
                animate={{
                  opacity: 1,
                  x: "-50%",
                  y: layout.y,
                  rotate: layout.rotate,
                }}
                whileHover={{
                  x: "-50%",
                  y: HOVER_LIFT,
                  rotate: layout.rotate,
                }}
                onClick={() => handleCardClick(i)}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute left-1/2 bottom-0 w-[180px] h-[240px] md:w-[220px] md:h-[280px] cursor-pointer rounded-[20px] overflow-hidden border bg-[#111] pointer-events-auto ${isFront
                  ? "border-[#E62505]/70 shadow-[0_0_28px_rgba(230,37,5,0.35)]"
                  : "border-white/15 shadow-2xl"
                  }`}
                style={{
                  transformOrigin: "bottom center",
                  zIndex: layout.zIndex,
                }}
              >
                <img
                  src={mediaUrl(activity.image)}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-black/45 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  {activity.category && (
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-[#E62505] text-white uppercase tracking-wide mb-2 inline-block">
                      {activity.category}
                    </span>
                  )}
                  <p className="text-white text-[11px] md:text-xs font-bold line-clamp-2 leading-tight drop-shadow-md">
                    {activity.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-50 w-[260px] md:w-[320px] rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto group"
        >
          <div className="relative h-32 md:h-40 overflow-hidden">
            <img src={mediaUrl(selected.image)} alt={selected.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/20 to-transparent pointer-events-none" />
          </div>
          <div className="p-5 space-y-3 relative z-10 bg-[#0a0a0a]/90 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[10px] text-white/50">
              <span>{selected.date}</span>
              <span className="ml-auto text-[#E62505]/80 font-medium truncate max-w-[100px]">
                {selected.tag}
              </span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-2">
              {selected.title}
            </h3>
            <p className="text-[11px] md:text-xs text-white/60 leading-relaxed line-clamp-3">
              {selected.excerpt}
            </p>
            <div className="pt-2 flex items-center justify-between">
              {selected.exploreLink ? (
                <Link
                  href={selected.exploreLink}
                  target={selected.exploreLink.startsWith("http") ? "_blank" : undefined}
                  className="text-[11px] font-semibold text-[#E62505] flex items-center gap-1 hover:gap-2 transition-all duration-300"
                >
                  Explore <ChevronRight size={12} />
                </Link>
              ) : (
                <button className="text-[11px] font-semibold text-[#E62505] flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  Explore <ChevronRight size={12} />
                </button>
              )}
              <div className="flex gap-1">
                {cards.map((c) => (
                  <div key={c.id} className={`w-1.5 h-1.5 rounded-full ${c.id === selected.id ? 'bg-[#E62505]' : 'bg-white/20'}`} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-500, 500], [5, -5]);
  const rotateY = useTransform(smoothX, [-500, 500], [-5, 5]);
  const translateX = useTransform(smoothX, [-500, 500], [-20, 20]);
  const translateY = useTransform(smoothY, [-500, 500], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const customEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const { data: hero } = useQuery({
    queryKey: ["homepage", "hero"],
    queryFn: () => api.homepage.hero(),
  });

  const { data: partners = [] } = useQuery({
    queryKey: ["partners"],
    queryFn: () => api.partners.list(50),
  });

  const subheading = hero?.subheading || DEFAULT_HERO.subheading;
  const brandTitle = hero?.heading || DEFAULT_HERO.heading;
  const content = hero?.content || DEFAULT_HERO.content;
  const button1 = hero?.button1 || DEFAULT_HERO.button1;
  const button2 = hero?.button2 || DEFAULT_HERO.button2;

  const partnerNames =
    partners.length > 0 ? partners.map((p) => p.name) : DEFAULT_PARTNERS;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full flex flex-col items-center justify-start z-10 transition-colors duration-300 bg-transparent"
    >
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ x: translateX, y: translateY, rotateX, rotateY, width: '100vw', maxWidth: '1100px', perspective: 1000 }}
          className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none z-0 flex flex-col items-center"
        >
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.98, 1.01, 0.98] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            style={{
              width: '25vw',
              maxWidth: '580px',
              height: '5px',
              borderRadius: '999px',
              background: '#FF3300',
              marginTop: '105px',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 0 40px 10px rgba(255, 51, 0, 0.4)'
            }}
          />
          <motion.img
            src="/Torch-light.png"
            alt=""
            aria-hidden="true"
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            className="w-[68%] mx-auto block dark:mix-blend-screen opacity-100 transition-opacity duration-300"
            style={{
              marginTop: '-16px',
              position: 'relative',
              zIndex: 0,
            }}
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-[1000px] mx-auto mt-20 md:mt-24 h-[500px]">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, ease: customEasing }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/10 to-transparent origin-center"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: customEasing, delay: 0.1 }} className="absolute top-0 left-[calc(50%-200px)] w-px h-[60px] bg-black/20 dark:bg-white/10 hidden md:block origin-top"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: customEasing, delay: 0.1 }} className="absolute top-0 right-[calc(50%-200px)] w-px h-[60px] bg-black/20 dark:bg-white/10 hidden md:block origin-top"></motion.div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.2 }} className="absolute top-[60px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/20 to-transparent origin-center"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.3 }} className="absolute top-[-20px] left-[20px] md:left-[40px] lg:left-[80px] w-px h-[560px] bg-linear-to-b from-transparent via-black/20 dark:via-white/20 to-transparent hidden sm:block origin-top"></motion.div>
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.3 }} className="absolute top-[-20px] right-[20px] md:right-[40px] lg:right-[80px] w-px h-[560px] bg-linear-to-b from-transparent via-black/20 dark:via-white/20 to-transparent hidden sm:block origin-top"></motion.div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2, ease: customEasing, delay: 0.4 }} className="absolute top-[500px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-px bg-linear-to-r from-transparent via-black/20 dark:via-white/20 to-transparent hidden md:block origin-center"></motion.div>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} className="absolute top-[60px] left-[20px] md:left-[40px] lg:left-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 -translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity }} className="w-full h-full" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} className="absolute top-[60px] right-[20px] md:right-[40px] lg:right-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-full h-full" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }} className="absolute top-[500px] left-[20px] md:left-[40px] lg:left-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-full h-full" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.2 }} className="absolute top-[500px] right-[20px] md:right-[40px] lg:right-[80px] w-1.5 h-1.5 bg-red-600 rotate-45 translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
              <motion.div animate={{ boxShadow: ['0 0 8px rgba(230,37,5,0.4)', '0 0 16px rgba(230,37,5,0.8)', '0 0 8px rgba(230,37,5,0.4)'] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="w-full h-full" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center relative mx-auto w-full max-w-[400px]"
            style={{ height: '60px' }}
          >
            <p className="text-[14px] md:text-[16px] font-medium text-foreground/80 tracking-wide">{subheading}</p>
          </motion.div>

          <div className="flex flex-col items-center justify-evenly w-full" style={{ height: '440px' }}>
            <div className="flex items-center justify-center w-full overflow-hidden">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: customEasing, delay: 0.3 }}
              className="text-6xl sm:text-9xl md:text-[136px] font-semibold text-[#E62505] select-none text-center tracking-tight"
            >
              {brandTitle}
            </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center relative mx-auto px-4 md:px-10 w-full max-w-[600px]"
            >
              <p className="text-[14px] md:text-[17px] text-foreground/80 font-medium text-center leading-relaxed whitespace-pre-line">
                {content}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: customEasing }}
              className="relative w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 z-10"
            >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer px-6 py-4.5 rounded-full font-medium text-[15px] md:text-[16px] tracking-wide relative overflow-hidden transition-all duration-300 shadow-[inset_0_0_15px_1px_rgba(230,37,5,0.4)] border-3 border-red-500/50 bg-background text-foreground"
              >
                <span className="relative z-10">{button1 || "Explore our Products"}</span>
                <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer px-6 py-4.5 rounded-full font-medium text-[15px] md:text-[16px] tracking-wide relative overflow-hidden transition-all duration-300 shadow-[inset_0_0_15px_1px_rgba(230,37,5,0.4)] border-3 border-red-500/50 bg-background text-foreground"
              >
                <span className="relative z-10">{button2 || "Partner with us"}</span>
                <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
              </motion.button>
            </Link>
            </motion.div>
          </div>
        </div>
        <HeroActivities />
      </div>

      <div className="w-full relative py-12 border-y border-black/5 dark:border-white/5 bg-black/5 dark:bg-[#080808]/40 backdrop-blur-sm z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[14px] md:text-[16px] font-bold text-foreground text-center mb-8 md:mb-12">
            Trusted by {partnerNames.length}+ Companies
          </p>

          <div className="relative flex overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-background to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-background to-transparent z-10"></div>

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
              className="flex space-x-12 md:space-x-24 items-center whitespace-nowrap min-w-full"
            >
              {[...partnerNames, ...partnerNames].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="cursor-pointer text-xl md:text-3xl font-bold text-foreground/30 hover:text-foreground transition-all duration-500 select-none tracking-tighter"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
