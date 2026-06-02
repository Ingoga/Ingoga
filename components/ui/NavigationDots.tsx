"use client";

import React from "react";

interface NavigationDotsProps {
  total: number;
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export default function NavigationDots({
  total,
  activeIndex,
  onChange,
  className = "mt-16",
}: NavigationDotsProps) {
  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            activeIndex === index
              ? "bg-white w-6"
              : "border border-white hover:border-white/60 w-2"
          }`}
          aria-label={`View item ${index + 1}`}
        />
      ))}
    </div>
  );
}
