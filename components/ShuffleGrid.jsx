"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Imágenes de relleno (picsum.photos, servicio estable y gratuito).
// Reemplaza cada "src" por tus propias capturas de proyecto cuando las
// tengas — el mecanismo de shuffle no cambia.
const squareData = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/portfolio-${i + 1}/400/400`,
}));

function shuffle(array) {
  const result = [...array];
  let currentIndex = result.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }
  return result;
}

function Square({ src }) {
  return (
    <motion.div
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="h-full w-full"
      style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
    />
  );
}

export default function ShuffleGrid() {
  const timeoutRef = useRef(null);
  // Arranca con el orden fijo (sin Math.random) para que el primer render
  // del servidor y el del navegador coincidan exactamente — si se
  // mezclara acá, React tira un error de hidratación (#423) y toda la
  // interactividad de la página se rompe.
  const [order, setOrder] = useState(squareData);

  useEffect(() => {
    const reshuffle = () => {
      setOrder(shuffle(squareData));
      timeoutRef.current = setTimeout(reshuffle, 3000);
    };
    // Se dispara de inmediato (solo en el navegador, después de la
    // hidratación) y luego se reprograma cada 3s.
    reshuffle();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="grid h-[320px] grid-cols-4 grid-rows-4 gap-1 sm:h-[380px] md:h-[450px]">
      {order.map((sq) => (
        <Square key={sq.id} src={sq.src} />
      ))}
    </div>
  );
}
