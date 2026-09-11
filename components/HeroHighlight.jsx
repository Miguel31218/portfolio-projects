"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

// Fondo de puntos + "spotlight" lavanda que sigue al cursor, a todo lo
// ancho (sin borde ni esquinas redondeadas: cubre navbar + hero como un
// solo bloque visual).
export function HeroHighlight({ children, className = "", containerClassName = "", id }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 80%)`;

  return (
    <div
      id={id}
      className={`group relative w-full overflow-hidden ${containerClassName}`}
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
          backgroundImage: "radial-gradient(circle, #B0B3FF 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

// Texto con barrido de degradado lavanda → lila, animado al entrar en
// pantalla. Tono suave (con opacidad reducida) para que no compita con el
// texto oscuro por encima.
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
      className={`relative rounded-sm bg-gradient-to-r from-lavender/60 to-lilac/50 px-1 pb-0.5 ${className}`}
    >
      {children}
    </motion.span>
  );
}
