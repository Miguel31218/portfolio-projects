# Portafolio Personal

Portafolio web construido con Next.js (App Router), React, Tailwind CSS y Lucide React.

## Estructura del proyecto

```
portfolio/
├── app/
│   ├── layout.js        # Layout raíz: fuentes, metadata
│   ├── page.js           # Página principal: ensambla las secciones
│   └── globals.css       # Estilos base de Tailwind
├── components/
│   ├── Nav.jsx            # Barra de navegación
│   ├── Hero.jsx           # Sección hero con terminal simulado
│   ├── Projects.jsx       # Sección de proyectos web + SectionHeading reutilizable
│   ├── ProjectCard.jsx    # Tarjeta de proyecto reutilizable
│   ├── DataScience.jsx    # Sección "Próximamente" de ciencia de datos
│   ├── Skills.jsx         # Sección de habilidades técnicas
│   └── Contact.jsx        # Sección de contacto + footer
├── lib/
│   └── data.js            # TODO tu contenido editable: proyectos, skills, contacto
├── tailwind.config.js     # Paleta de colores y tipografías personalizadas
└── package.json
```

## 1. Editar tu contenido

Antes de nada, abre **`lib/data.js`** y reemplaza:
- `profile`: tu nombre, rol y bio.
- `webProjects`: tus proyectos reales (título, descripción, tecnologías, links de GitHub y demo).
- `dataProjects`: tus futuros proyectos de ciencia de datos.
- `skills`: tus tecnologías, agrupadas por categoría.
- `contact`: tu email, GitHub, LinkedIn y WhatsApp.

No necesitas tocar ningún componente para actualizar el contenido.

## 2. Instalación local

Requiere Node.js 18.17 o superior.

```bash
# 1. Entra a la carpeta del proyecto
cd portfolio

# 2. Instala dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

## 3. Subir a GitHub

```bash
git init
git add .
git commit -m "Primer commit: portafolio personal"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

## 4. Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **Add New → Project**.
3. Selecciona el repositorio que acabas de subir.
4. Vercel detecta automáticamente que es un proyecto Next.js — no necesitas cambiar ninguna configuración.
5. Haz clic en **Deploy**.

En un par de minutos tendrás tu portafolio en una URL pública (`tu-proyecto.vercel.app`). Cada vez que hagas `git push` a `main`, Vercel volverá a desplegar automáticamente.

## Notas

- El modo oscuro está activo por defecto y es el único tema (diseño "dark-mode profesional" como se pidió). Si más adelante quieres un toggle claro/oscuro, se puede añadir con la clase `dark` de Tailwind y un pequeño estado en `Nav.jsx`.
- Los iconos usados (`lucide-react`) ya están declarados en `package.json`, no requieren configuración adicional.
- Las animaciones respetan `prefers-reduced-motion` (ver `globals.css`).
