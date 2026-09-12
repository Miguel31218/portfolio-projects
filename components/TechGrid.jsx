"use client";

import { motion, useReducedMotion } from "framer-motion";
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

const COLS = 4;
const ROWS = 4;

// Orden serpentina: fila 0 izq→der, fila 1 der→izq, fila 2 izq→der,
// fila 3 der→izq. waveOrder[k] = índice de celda (0-15) que le toca
// animarse en el paso k del recorrido.
const waveOrder = Array.from({ length: ROWS }, (_, row) => {
  const rowIndices = Array.from({ length: COLS }, (_, col) => row * COLS + col);
  return row % 2 === 0 ? rowIndices : rowIndices.reverse();
}).flat();

// Posición de cada celda dentro del recorrido (inverso de waveOrder).
const wavePosition = new Array(waveOrder.length);
waveOrder.forEach((cellIndex, position) => {
  wavePosition[cellIndex] = position;
});

const ENTRANCE_STEP = 0.04;
const ENTRANCE_DURATION = 0.4;
const ENTRANCE_TOTAL = (stack.length - 1) * ENTRANCE_STEP + ENTRANCE_DURATION;

const DOMINO_STEP = 0.12;
const DOMINO_DURATION = 0.8;
const DOMINO_PAUSE = 2; // pausa después de que termina la última tarjeta
const DOMINO_CYCLE = (stack.length - 1) * DOMINO_STEP + DOMINO_DURATION + DOMINO_PAUSE;
const DOMINO_REPEAT_DELAY = DOMINO_CYCLE - DOMINO_DURATION;

export default function TechGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-4 gap-3" style={{ perspective: "1200px" }}>
      {stack.map(({ name, Icon }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 14, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: ENTRANCE_DURATION, delay: i * ENTRANCE_STEP, ease: "easeOut" }}
          className="rounded-2xl"
        >
          {/* Este div interno lleva el giro 3D tipo dominó, separado de la
              animación de entrada de arriba para que no se pisen.
              transformStyle: preserve-3d + el perspective del contenedor
              padre son lo que le da profundidad real al giro en vez de un
              simple achatado en 2D. */}
          <motion.div
            animate={prefersReducedMotion ? undefined : { rotateX: [0, 360] }}
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: DOMINO_DURATION,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: DOMINO_REPEAT_DELAY,
                    delay: ENTRANCE_TOTAL + wavePosition[i] * DOMINO_STEP,
                  }
            }
            style={{ transformStyle: "preserve-3d" }}
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
        </motion.div>
      ))}
    </div>
  );
}
