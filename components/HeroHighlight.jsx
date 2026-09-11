"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

// Fondo de puntos + "spotlight" ámbar que sigue al cursor. Adaptado del
// patrón de Aceternity UI (ui.aceternity.com/components/hero-highlight)
// a la paleta clara del sitio, sin dependencias extra de Tailwind: los
// puntos se dibujan con radial-gradient directo en inline style.
export function HeroHighlight({ children, className = "", containerClassName = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 80%)`;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border ${containerClassName}`}
      onMouseMove={handleMouseMove}
    >
      {/* Capa base: puntos tenues, siempre visibles */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #37393c22 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Capa coloreada: solo visible dentro del círculo que sigue al mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage: "radial-gradient(circle, #F5A623 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

// Texto con barrido de color animado al entrar en pantalla.
export function Highlight({ children, className = "" }) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={`relative rounded-sm bg-gradient-to-r from-amber/50 to-amber/30 px-1 pb-0.5 ${className}`}
    >
      {children}
    </motion.span>
  );
}
