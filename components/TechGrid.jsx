"use client";

import { motion } from "framer-motion";
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

export default function TechGrid() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {stack.map(({ name, Icon }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 14, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
          className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F39F6]/40 hover:bg-white hover:shadow-lg hover:shadow-[#4F39F6]/10"
        >
          <Icon
            size={26}
            className="shrink-0 text-[#0A0A0A]/70 transition-all duration-300 group-hover:scale-110 group-hover:text-[#4F39F6]"
          />
          <span className="text-center font-mono text-[9px] leading-tight text-muted">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
