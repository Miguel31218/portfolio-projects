/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo de página: blanco puro por diseño.
        surface: "#F6F6F7",
        "surface-hover": "#EFEFF0",
        border: "#E4E4E7",
        // Texto principal (títulos) y texto secundario (descripciones).
        text: "#373A3C",
        muted: "#828385",
        // Acento de marca: se usa en todos los CTA, hovers y badges del sitio.
        amber: "#F5A623",
        "amber-dim": "#B9791A",
        // Acento reservado para "Ciencia de Datos" (más oscuro que en el
        // tema anterior, para que siga siendo legible sobre fondo blanco).
        mint: "#0D9488",
        "mint-dim": "#A7D9CB",
        // Negro casi puro: se usa solo para overlays oscuros sobre imágenes
        // y texto sobre botones claros — ya no es el fondo de la página.
        ink: "#0B0D12",
        // Acentos puntuales pedidos explícitamente: saludo del Hero y
        // check de verificación junto al nombre. Úsalos solo ahí.
        pink: "#FF1447",
        verified: "#1DA1F2",
        // Acento del Hero: botón principal, texto resaltado y spotlight
        // del fondo de puntos.
        lavender: "#B0B3FF",
        lilac: "#CCB2FF",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
