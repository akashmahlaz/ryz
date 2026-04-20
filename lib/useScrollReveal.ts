"use client";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function useScrollReveal(delay?: number) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("visible"), delay);
          } else {
            el.classList.add("visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, delay]);
  return ref;
}
