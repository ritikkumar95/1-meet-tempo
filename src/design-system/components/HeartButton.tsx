"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeartButtonProps {
  saved?: boolean;
  onToggle?: (saved: boolean) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = { sm: 16, md: 20, lg: 24 };
const containerSize = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };

export function HeartButton({ saved: initialSaved = false, onToggle, className, size = "md" }: HeartButtonProps) {
  const [saved, setSaved] = useState(initialSaved);
  const [particles, setParticles] = useState(false);
  const prefersReduced = useReducedMotion();
  const iconSize = sizeMap[size];

  function handleToggle() {
    const next = !saved;
    setSaved(next);
    onToggle?.(next);

    if (next && !prefersReduced) {
      setParticles(true);
      setTimeout(() => setParticles(false), 400);
    }
  }

  return (
    <div className={cn("relative flex items-center justify-center", containerSize[size], className)}>
      {/* Particle burst */}
      {particles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-terracotta"
              initial={{ x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
              animate={{
                x: `calc(-50% + ${Math.cos((i * 60 * Math.PI) / 180) * 20}px)`,
                y: `calc(-50% + ${Math.sin((i * 60 * Math.PI) / 180) * 20}px)`,
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          ))}
        </div>
      )}

      <motion.button
        onClick={handleToggle}
        whileTap={prefersReduced ? {} : { scale: 0.85 }}
        animate={prefersReduced ? {} : saved ? { scale: [1, 1.35, 1] } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 12 }}
        className="relative z-10 flex items-center justify-center rounded-full transition-colors hover:bg-paper-dark/80"
        style={{ width: "100%", height: "100%" }}
        aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
        aria-pressed={saved}
      >
        <Heart
          size={iconSize}
          className={cn(
            "transition-colors duration-150",
            saved
              ? "fill-terracotta text-terracotta"
              : "fill-transparent text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          )}
        />
      </motion.button>
    </div>
  );
}
