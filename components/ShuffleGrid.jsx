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

function generateSquares() {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="h-full w-full"
      style={{ backgroundImage: `url(${sq.src})`, backgroundSize: "cover" }}
    />
  ));
}

export default function ShuffleGrid() {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares);

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="grid h-[320px] grid-cols-4 grid-rows-4 gap-1 sm:h-[380px] md:h-[450px]">
      {squares}
    </div>
  );
}
