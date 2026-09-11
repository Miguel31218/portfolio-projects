const accentMap = {
  amber: {
    glow: "from-amber/15",
    dot: "bg-amber/70",
    text: "text-amber/25",
  },
  mint: {
    glow: "from-mint/15",
    dot: "bg-mint/70",
    text: "text-mint/25",
  },
};

// Mockup de ventana de navegador con degradado sutil y la inicial del
// proyecto de fondo. Reemplaza con <Image> cuando tengas capturas reales:
// solo sustituye el contenido de <div className="relative flex-1 ..."> por
// <Image src={project.image} alt={project.title} fill className="object-cover" />
export default function MockupPreview({ title, accent = "amber" }) {
  const styles = accentMap[accent] ?? accentMap.amber;

  return (
    <div className="flex h-full w-full flex-col bg-ink">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#3A3F4B]" />
        <span className="h-2 w-2 rounded-full bg-[#3A3F4B]" />
        <span className="h-2 w-2 rounded-full bg-[#3A3F4B]" />
      </div>
      <div
        className={`relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br ${styles.glow} to-transparent`}
      >
        <span
          className={`font-display text-7xl font-semibold ${styles.text} select-none`}
          aria-hidden="true"
        >
          {title.charAt(0)}
        </span>
        <span className={`absolute right-4 top-4 h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      </div>
    </div>
  );
}
