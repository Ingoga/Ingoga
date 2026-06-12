"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { X, Calendar, Tag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { api, mediaUrl, RecentActivity } from "../../lib/api";

// ─── Types ─────────────────────────────────────────────────────────────────
export type Activity = RecentActivity;

// ─── Default Static Activities ──────────────────────────────────────────────
export const DEFAULT_ACTIVITIES: Activity[] = [
  {
    id: "1",
    title: "AI Health Summit – Kigali Innovation City",
    category: "Conference",
    date: "May 28, 2026",
    location: "Kigali, Rwanda",
    excerpt: "Ingoga co-hosted the largest AI health symposium in East Africa, bringing together 500+ clinicians, engineers, and policymakers.",
    description:
      "Ingoga Technologies co-hosted the landmark AI Health Summit at Kigali Innovation City, convening over 500 clinicians, engineers, and policymakers from 14 countries. Our UDS platform was showcased live, demonstrating real-time clinical decision support and AI-assisted diagnostics. The summit resulted in three new partnership MOUs with regional ministries of health and laid the groundwork for a continental AI health data standard.",
    image: "/Frame 1000011743 (1).png",
    tag: "Partnership",
    highlight: true,
  },
  {
    id: "2",
    title: "RESAS Emergency Drill – Ministry of Internal Security",
    category: "Field Operation",
    date: "April 15, 2026",
    location: "Gasabo District, Rwanda",
    excerpt: "A live simulation exercise using RESAS, our intelligent safety & response platform, in coordination with national emergency services.",
    description:
      "In partnership with the Rwanda National Police and Ministry of Internal Security, Ingoga executed a large-scale emergency response drill using the RESAS platform. Over 200 first responders were equipped with RESAS-enabled devices, enabling real-time incident tracking, predictive hazard analysis, and coordinated dispatching. The exercise confirmed a 40% improvement in response coordination time compared to traditional systems.",
    image: "/Frame 1000011744.png",
    tag: "Technology",
  },
  {
    id: "3",
    title: "NEXUN Research Grant Awarded by Timbuktoo Hub",
    category: "Funding",
    date: "March 10, 2026",
    location: "Virtual / Pan-African",
    excerpt: "NEXUN Inc. received a $250,000 deep-tech research grant from the Timbuktoo Healthtech Hub for advanced AI systems development.",
    description:
      "NEXUN Inc., Ingoga's AI research arm, was selected from over 1,200 applicants across Africa to receive a $250,000 deep-tech research grant from the Timbuktoo Healthtech Hub. The grant will fund advanced work in medical automation, large language model fine-tuning for clinical NLP, and next-generation computation architectures. Research outcomes will feed directly into the NEXUN and UDS product ecosystems over the next 18 months.",
    image: "/Frame 1000011745 (1).png",
    tag: "Award",
  },
  {
    id: "4",
    title: "UDS Pilot Launch – University Teaching Hospital",
    category: "Product Launch",
    date: "February 20, 2026",
    location: "CHUK, Kigali",
    excerpt: "Ubuzima Digital System officially entered pilot at Rwanda's largest teaching hospital, digitizing clinical workflows for 1,200+ patients monthly.",
    description:
      "Ubuzima Digital System (UDS) officially launched its clinical pilot at the Centre Hospitalier Universitaire de Kigali (CHUK), Rwanda's largest teaching hospital. The deployment digitizes patient registration, clinical notes, lab orders, and prescriptions for an estimated 1,200 patients per month. Preliminary data shows a 35% reduction in documentation time and near-zero prescription transcription errors. The pilot is scheduled to run for six months before a full rollout.",
    image: "/Rectangle 10.png",
    tag: "Milestone",
    highlight: true,
  },
  {
    id: "5",
    title: "Ingoga @ Africa Development Bank Tech Innovation Forum",
    category: "Speaking Engagement",
    date: "January 12, 2026",
    location: "Abidjan, Côte d'Ivoire",
    excerpt: "CEO Patrick Ngoga presented Ingoga's vision for African deep-tech self-sufficiency at the ADB Technology Innovation Forum.",
    description:
      "Patrick Ngonga, Founder & CEO of Ingoga Technologies, was a keynote speaker at the Africa Development Bank's inaugural Technology Innovation Forum in Abidjan. His presentation, 'Building Africa's Digital Brain,' outlined a roadmap for deep-tech self-sufficiency across the continent, covering AI infrastructure, health data sovereignty, and public safety systems. The talk drew over 1,000 in-person attendees and was streamed to 8,000+ viewers across Africa.",
    image: "/Frame 1000011746.png",
    tag: "Leadership",
  },
  {
    id: "6",
    title: "Strategic Partnership with Rwanda ICT Chamber",
    category: "Partnership",
    date: "December 5, 2025",
    location: "Kigali, Rwanda",
    excerpt: "Ingoga signed a landmark MOU with the Rwanda ICT Chamber to collaborate on national digital infrastructure and AI capacity building.",
    description:
      "Ingoga Technologies and the Rwanda ICT Chamber signed a landmark Memorandum of Understanding to collaborate on national digital infrastructure projects and AI workforce development. The partnership includes a joint training program for 500 Rwandan software engineers in AI/ML, co-development of a national health data interoperability standard, and shared advocacy for ICT-friendly regulatory frameworks across East Africa. The signing ceremony was attended by the Minister of ICT.",
    image: "/Frame 1000011747.png",
    tag: "Partnership",
  },
];

// ─── Modal ──────────────────────────────────────────────────────────────────
export function ActivityModal({
  activity,
  onClose,
}: {
  activity: Activity;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-2xl bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Image */}
          <div className="relative w-full h-56 md:h-72 overflow-hidden">
            <img
              src={mediaUrl(activity.image)}
              alt={activity.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0d] via-black/30 to-transparent" />
            {/* Category pill */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E62505] text-white">
                {activity.category}
              </span>
              {activity.highlight && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                  Featured
                </span>
              )}
            </div>
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {activity.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {activity.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{activity.location}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5">
                <Tag size={13} />
                {activity.tag}
              </span>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {activity.description}
            </p>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E62505] hover:bg-[#cc1f04] text-white text-sm font-medium transition-colors"
              >
                Close <X size={13} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Activity Card ───────────────────────────────────────────────────────────
export function ActivityCard({
  activity,
  onClick,
  index,
}: {
  activity: Activity;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 120, scale: 0.88 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -120, scale: 0.88 }}
      transition={{
        type: "spring",
        damping: 24,
        stiffness: 220,
        delay: index * 0.06,
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className="group relative shrink-0 w-[260px] md:w-[300px] cursor-pointer"
    >
      {/* Glow on hover */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(230,37,5,0.35) 0%, rgba(255,100,50,0.15) 100%)",
          filter: "blur(1px)",
        }}
      />

      <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-white/8 group-hover:border-[#E62505]/40 transition-all duration-500 shadow-lg">
        {/* Image */}
        <div className="relative w-full h-40 overflow-hidden">
          <motion.img
            src={mediaUrl(activity.image)}
            alt={activity.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-black/10 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#E62505] text-white uppercase tracking-wide shadow-lg">
              {activity.category}
            </span>
          </div>

          {/* Highlight dot */}
          {activity.highlight && (
            <div className="absolute top-3 right-3">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-[#E62505] shadow-[0_0_8px_rgba(230,37,5,0.8)]"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2.5">
          <div className="flex items-center gap-2 text-[11px] text-white/40">
            <Calendar size={11} />
            <span>{activity.date}</span>
            <span className="ml-auto flex items-center gap-1 text-[#E62505]/70 font-medium">
              <Tag size={10} />
              {activity.tag}
            </span>
          </div>

          <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-[#ff5533] transition-colors duration-300">
            {activity.title}
          </h3>

          <p className="text-[12px] text-white/50 leading-relaxed line-clamp-2">
            {activity.excerpt}
          </p>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#E62505] group-hover:gap-2.5 transition-all duration-300 pt-1">
            Read more <ArrowRight size={11} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RecentActivitiesSection() {
  const { data: activities = DEFAULT_ACTIVITIES } = useQuery({
    queryKey: ["recent-activities"],
    queryFn: () => api.recentActivities.list(),
  });

  const [queue, setQueue] = useState<Activity[]>(activities);
  const [selected, setSelected] = useState<Activity | null>(null);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setQueue(activities);
  }, [activities]);

  // Auto-rotate: move head card to the tail
  const rotate = useCallback(() => {
    setQueue((prev) => {
      if (prev.length === 0) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  useEffect(() => {
    if (paused || selected || queue.length <= 1) return;
    intervalRef.current = setInterval(rotate, 3200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, selected, rotate, queue.length]);

  const handlePrev = () => {
    setQueue((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  };

  const handleNext = () => rotate();

  // Visible window: show 3-4 cards
  const visible = queue.slice(0, 4);

  return (
    <>
      {/* ── Modal ── */}
      {selected && (
        <ActivityModal activity={selected} onClose={() => setSelected(null)} />
      )}

      {/* ── Section ── */}
      <section
        className="relative w-full py-20 md:py-28 overflow-hidden border-t border-white/5 bg-background"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] bg-[#E62505]/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Decorative line accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-linear-to-r from-transparent via-[#E62505]/50 to-transparent origin-center"
        />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-[#E62505] shadow-[0_0_8px_rgba(230,37,5,0.8)]"
                />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E62505]">
                  Live Feed
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Recent Activities
              </h2>
              <p className="mt-3 text-foreground/50 text-sm md:text-base max-w-sm">
                Stay updated with the latest events, milestones, and breakthroughs from Ingoga.
              </p>
            </motion.div>

            {/* Navigation controls */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#E62505]/50 bg-white/5 hover:bg-[#E62505]/10 flex items-center justify-center text-foreground/60 hover:text-[#E62505] transition-all duration-300"
                aria-label="Previous activity"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#E62505]/50 bg-white/5 hover:bg-[#E62505]/10 flex items-center justify-center text-foreground/60 hover:text-[#E62505] transition-all duration-300"
                aria-label="Next activity"
              >
                <ChevronRight size={16} />
              </button>
              {/* Auto-indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs text-foreground/40">
                <motion.div
                  animate={
                    paused
                      ? { opacity: 0.3 }
                      : { opacity: [0.4, 1, 0.4] }
                  }
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#E62505]"
                />
                {paused ? "Paused" : "Auto"}
              </div>
            </motion.div>
          </div>

          {/* Cards track */}
          <div className="relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex gap-5 overflow-visible">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((activity, i) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    index={i}
                    onClick={() => setSelected(activity)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Queue position dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 mt-8"
          >
            {activities.map((a, i) => {
              const isActive = visible.some((v) => v.id === a.id);
              return (
                <motion.button
                  key={a.id}
                  onClick={() => {
                    // Rotate until this activity is at the front
                    setQueue((prev) => {
                      const idx = prev.findIndex((p) => p.id === a.id);
                      if (idx <= 0) return prev;
                      return [...prev.slice(idx), ...prev.slice(0, idx)];
                    });
                  }}
                  animate={{
                    width: isActive ? 24 : 8,
                    backgroundColor: isActive
                      ? "rgba(230,37,5,1)"
                      : "rgba(255,255,255,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full cursor-pointer shrink-0"
                  aria-label={`Go to activity ${i + 1}`}
                />
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
