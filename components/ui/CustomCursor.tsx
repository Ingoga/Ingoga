"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // High-performance elastic tracking physics
  const outerSpringConfig = { damping: 28, stiffness: 340, mass: 0.5 };
  const haloSpringConfig = { damping: 22, stiffness: 480, mass: 0.3 };

  const smoothOuterX = useSpring(cursorX, outerSpringConfig);
  const smoothOuterY = useSpring(cursorY, outerSpringConfig);

  const smoothHaloX = useSpring(cursorX, haloSpringConfig);
  const smoothHaloY = useSpring(cursorY, haloSpringConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) {
        setIsVisible(false);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* LAYER 1: Large Outer Soft Ambient Aura (Small by default, expands nicely on hover) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-9998 hidden md:block mix-blend-screen"
        style={{
          x: smoothOuterX,
          y: smoothOuterY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "rgba(230, 37, 5, 0.05)",
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          backgroundColor: isHovered ? "rgba(230, 37, 5, 0.2)" : "rgba(230, 37, 5, 0.05)",
        }}
        transition={{ duration: 0.5, ease: LUXURY_EASE }}
      />

      {/* LAYER 2: Medium Focus Halo (Adds the elegant solid target weight) */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-9999 hidden md:block backdrop-blur-[0.5px]"
        style={{
          x: smoothHaloX,
          y: smoothHaloY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "rgba(230, 37, 5, 0.25)",
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          backgroundColor: isHovered ? "rgba(230, 37, 5, 0.4)" : "rgba(230, 37, 5, 0.25)",
        }}
        transition={{ duration: 0.4, ease: LUXURY_EASE }}
      />

      {/* LAYER 3: Core Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-10000 hidden md:block shadow-[0_0_8px_rgba(230,37,5,0.5)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#E62505",
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3, ease: LUXURY_EASE }}
      />
    </>
  );
}