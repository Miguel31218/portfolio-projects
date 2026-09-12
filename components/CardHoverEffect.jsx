"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// items: array de lo que sea (proyectos, tarjetas, etc.)
// renderItem(item, index): devuelve el contenido visual de cada tarjeta —
// este componente solo se encarga del halo que se desliza detrás, no
// prescribe cómo se ve la tarjeta en sí.
// itemClassName: clases extra por ítem (ej. el ancho especial que usa el
// carrusel en móvil). Puede ser un string o una función (item, index) => string.
export function CardHoverEffect({ items, renderItem, itemClassName = "", className = "", getKey }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={className}>
      {items.map((item, idx) => {
        const extraClass =
          typeof itemClassName === "function" ? itemClassName(item, idx) : itemClassName;

        return (
          <div
            key={getKey ? getKey(item, idx) : idx}
            className={`group relative rounded-xl p-2 ${extraClass}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="cardHoverHighlight"
                  className="absolute inset-0 rounded-xl bg-accent/[0.06] ring-1 ring-accent/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 h-full">{renderItem(item, idx)}</div>
          </div>
        );
      })}
    </div>
  );
}
