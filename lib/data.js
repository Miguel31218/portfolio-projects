// -----------------------------------------------------------------------
// Toda la información editable del portafolio vive aquí.
// Edita este archivo para actualizar tus proyectos, skills y contacto
// sin tocar el código de los componentes.
// -----------------------------------------------------------------------

export const profile = {
  name: "Miguel Chavez",
  role: "Full Stack Developer — SaaS & AI Automation",
  location: "Lima, Perú",
  greeting: "Hi, I'm Miguel",
  bio: "I build end-to-end SaaS products: React interfaces, Node.js backends, and AI-powered automation on WhatsApp.",
};

// Categorías de proyectos mostradas en la sección "Proyectos".
// accent: "amber" para trabajo ya construido, "mint" para ciencia de datos
// (reserva el mismo código de color que usa el resto del sitio para
// distinguir "hoy" de "próximamente").
export const projectCategories = [
  { id: "saas", label: "Software as a Service (SaaS)", shortLabel: "SaaS", accent: "amber" },
  { id: "web", label: "Desarrollo Web", shortLabel: "Desarrollo Web", accent: "amber" },
  { id: "data", label: "Ciencia de Datos", shortLabel: "Ciencia de Datos", accent: "mint" },
];

export const projects = [
  {
    category: "saas",
    title: "Lynksit",
    description:
      "Plataforma SaaS B2B para pequeños negocios en Latinoamérica: catálogos de producto integrados a WhatsApp y automatización de ventas con agentes de IA configurables por tipo de industria.",
    tech: ["React", "Vite", "Node.js", "Express", "Supabase"],
    github: "https://github.com/tu-usuario/lynksit",
    demo: "https://lynksit.app",
    featured: true,
    status: null,
  },
  {
    category: "web",
    title: "Proyecto Dos",
    description:
      "Describe aquí el problema que resuelve, tu rol y el resultado obtenido. Sé específico: métricas o impacto real generan más confianza que adjetivos.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/tu-usuario/proyecto-dos",
    demo: "",
    featured: false,
    status: null,
  },
  {
    category: "web",
    title: "Proyecto Tres",
    description:
      "Otra pieza de tu portafolio. Reemplaza este texto con un caso real cuando lo tengas listo para publicar.",
    tech: ["React", "Supabase", "Tailwind CSS"],
    github: "https://github.com/tu-usuario/proyecto-tres",
    demo: "",
    featured: false,
    status: null,
  },
  {
    category: "data",
    title: "Panel de métricas de ventas",
    description:
      "Dashboard en desarrollo para analizar conversión y comportamiento de clientes a partir de los datos generados por Lynksit.",
    tech: ["Python", "SQL", "Pandas"],
    github: "",
    demo: "",
    featured: false,
    status: "En construcción",
  },
  {
    category: "data",
    title: "Modelo de segmentación de clientes",
    description:
      "Clasificación de negocios según patrones de uso, pensado para priorizar soporte y detectar riesgo de cancelación (churn).",
    tech: ["Python", "scikit-learn", "SQL"],
    github: "",
    demo: "",
    featured: false,
    status: "Planeado",
  },
  {
    category: "data",
    title: "Reportes automatizados",
    description:
      "Pipeline para generar reportes periódicos de negocio directamente desde Supabase hacia dashboards interactivos.",
    tech: ["Python", "SQL", "Looker Studio"],
    github: "",
    demo: "",
    featured: false,
    status: "Planeado",
  },
];

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript / TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Python", category: "Datos" },
  { name: "SQL", category: "Datos" },
  { name: "Pandas", category: "Datos" },
  { name: "Git / GitHub", category: "Herramientas" },
  { name: "Vercel", category: "Herramientas" },
  { name: "Railway", category: "Herramientas" },
];

export const contact = {
  email: "tu-correo@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  whatsapp: "https://wa.me/51900000000",
};
