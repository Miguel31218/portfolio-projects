import { Code2, Sparkles, PieChart } from "lucide-react";

// Cada "cubo" es un icono sobre una tarjeta con degradado cálido, sombra
// suave y su propia animación de flote (float-a/b/c, distinta duración y
// desfase para que no se muevan sincronizados). Las posiciones están
// escalonadas en diagonal para simular profundidad, como en la referencia.
export default function FloatingIcons() {
  return (
    <div
      className="relative hidden h-80 w-full md:block lg:h-96"
      aria-hidden="true"
    >
      <Cube
        icon={Code2}
        className="left-2 top-4 h-20 w-20 animate-float-a bg-gradient-to-br from-amber/20 to-amber/5 text-amber-dim lg:h-24 lg:w-24"
        iconSize={30}
      />
      <Cube
        icon={Sparkles}
        className="left-1/2 top-1/3 h-24 w-24 -translate-x-1/2 animate-float-b bg-gradient-to-br from-pink/20 to-pink/5 text-pink lg:h-28 lg:w-28 [animation-delay:0.6s]"
        iconSize={36}
      />
      <Cube
        icon={PieChart}
        className="bottom-4 right-4 h-20 w-20 animate-float-c bg-gradient-to-br from-amber-dim/25 to-amber-dim/5 text-amber-dim lg:h-24 lg:w-24 [animation-delay:1.2s]"
        iconSize={30}
      />
    </div>
  );
}

function Cube({ icon: Icon, className, iconSize }) {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-2xl border border-border shadow-lg shadow-amber/5 backdrop-blur-sm ${className}`}
    >
      <Icon size={iconSize} strokeWidth={1.5} />
    </div>
  );
}
