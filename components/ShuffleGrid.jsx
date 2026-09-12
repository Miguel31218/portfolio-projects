"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Cloud, BarChart3, Database } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSupabase,
  SiPython,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiDatabricks,
  SiDocker,
  SiApachespark,
  SiPandas,
} from "react-icons/si";

// AWS y Power BI no tienen logo disponible en Simple Icons: Amazon y
// Microsoft restringen la redistribución de sus marcas y la librería los
// excluye por eso. Uso un ícono genérico de Lucide en su lugar, con el
// mismo tratamiento visual que el resto, para no romper la cuadrícula.
// PySpark tampoco tiene logo propio: uso el de Apache Spark, el proyecto
// del que es la API en Python.
const stack = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Python", Icon: SiPython },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Vercel", Icon: SiVercel },
  { name: "AWS", Icon: Cloud },
  { name: "Databricks", Icon: SiDatabricks },
  { name: "Power BI", Icon: BarChart3 },
  { name: "SQL", Icon: Database },
  { name: "Docker", Icon: SiDocker },
  { name: "PySpark", Icon: SiApachespark },
  { name: "pandas", Icon: SiPandas },
];

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

function TechCard({ name, Icon }) {
  return (
    <motion.div
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="group flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-surface p-2 transition-colors duration-300 hover:border-accent/40 hover:bg-white hover:shadow-lg hover:shadow-accent/10"
    >
      <Icon
        size={24}
        className="shrink-0 text-[#0A0A0A]/70 transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
      />
      <span className="text-center font-mono text-[9px] leading-tight text-muted">{name}</span>
    </motion.div>
  );
}

export default function ShuffleGrid() {
  const timeoutRef = useRef(null);
  // Arranca con el orden fijo (sin Math.random) para que el primer render
  // del servidor y el del navegador coincidan exactamente — si se
  // mezclara acá, React tira un error de hidratación (#423) y toda la
  // interactividad de la página se rompe.
  const [order, setOrder] = useState(stack);

  useEffect(() => {
    const reshuffle = () => {
      setOrder(shuffle(stack));
      timeoutRef.current = setTimeout(reshuffle, 3000);
    };
    // Se dispara de inmediato (solo en el navegador, después de la
    // hidratación) y luego se reprograma cada 3s.
    reshuffle();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="grid h-[320px] grid-cols-4 grid-rows-4 gap-1 sm:h-[380px] md:h-[450px]">
      {order.map((item) => (
        <TechCard key={item.name} {...item} />
      ))}
    </div>
  );
}
