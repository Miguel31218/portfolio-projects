"use client";

// ⚠️ Este componente NO está en uso actualmente — el Hero volvió al grid
// de fotos (ver ShuffleGrid.jsx). Se deja guardado aquí tal cual, por si
// más adelante quieres volver a la versión con íconos del stack en vez
// de fotos. Para reactivarlo: en Hero.jsx, cambia el import de
// ShuffleGrid por TechGridSaved y usa <TechGridSaved /> en vez de
// <ShuffleGrid />.

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

const SHUFFLE_INTERVAL = 3500; // ms — cada cuánto se reordenan las tarjetas

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
      key={name}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="group flex aspect-[16/17] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white hover:shadow-lg hover:shadow-accent/10"
    >
      <Icon
        size={26}
        className="shrink-0 text-[#0A0A0A]/70 transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
      />
      <span className="text-center font-mono text-[9px] leading-tight text-muted">{name}</span>
    </motion.div>
  );
}

export default function TechGridSaved() {
  const timeoutRef = useRef(null);
  const [order, setOrder] = useState(stack);

  useEffect(() => {
    const reshuffle = () => {
      setOrder(shuffle(stack));
      timeoutRef.current = setTimeout(reshuffle, SHUFFLE_INTERVAL);
    };
    // Se dispara de inmediato (igual que el código original) y luego se
    // reprograma solo cada SHUFFLE_INTERVAL — así el primer reordenamiento
    // se ve enseguida, no recién a los 3.5s.
    reshuffle();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-1">
      {order.map((item) => (
        <TechCard key={item.name} {...item} />
      ))}
    </div>
  );
}
