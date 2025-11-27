# 📊 Ecommerce Presentation - Aplicación de Presentación Estilo Slides

Una aplicación web moderna de presentación estilo PowerPoint construida con React, Vite y Tailwind CSS. Presenta la historia completa del comercio electrónico con 22 slides interactivos y animados.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-7-646cff.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8.svg)

## 🎯 Características Principales

- ✨ **22 Slides Informativos**: Historia completa del e-commerce desde los años 20 hasta el presente
- 🎨 **Diseño Premium**: Tema oscuro con glassmorphism y gradientes vibrantes
- 🎭 **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- 📱 **Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- 👆 **Navegación Táctil**: Swipe izquierda/derecha en dispositivos móviles
- ⌨️ **Navegación Múltiple**: Teclado, botones en pantalla y gestos táctiles
- 🎯 **Barra de Progreso**: Indicador visual del avance en la presentación
- 🚀 **Rendimiento Optimizado**: Carga rápida y experiencia fluida

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.x | Framework UI principal |
| **Vite** | 7.x | Build tool y dev server |
| **Tailwind CSS** | 4.x | Framework de estilos utility-first |
| **Framer Motion** | Latest | Animaciones y transiciones |
| **Lucide React** | Latest | Biblioteca de iconos moderna |

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd ecommerce-presentation

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# La aplicación estará disponible en http://localhost:5173
```

## 🎮 Uso

### Navegación

- **Teclado**: 
  - `→` o `Espacio`: Siguiente slide
  - `←`: Slide anterior
- **Táctil (Móvil/Tablet)**:
  - Swipe izquierda: Siguiente slide
  - Swipe derecha: Slide anterior
  - Threshold mínimo: 50px para evitar swipes accidentales
- **Botones en Pantalla**: 
  - Flechas laterales en la parte inferior
  - Contador central muestra posición actual

### Controles Visuales

- **Barra de Progreso**: Parte superior - muestra el avance
- **Botones de Navegación**: Laterales inferiores - flechas grandes
- **Contador**: Centro inferior - "X / 22"

## 📁 Estructura del Proyecto

```
ecommerce-presentation/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Slide.jsx       # Componente individual de slide
│   │   ├── Controls.jsx    # Controles de navegación
│   │   └── Presentation.jsx # Contenedor principal
│   ├── data/               # Datos de la aplicación
│   │   ├── slides.js       # Contenido de los 22 slides
│   │   └── ecommerce.txt   # Fuente de información
│   ├── App.jsx             # Componente raíz
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales y tema
├── public/                 # Archivos estáticos
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias
└── README.md              # Este archivo
```

## 🧩 Arquitectura de Componentes

### Jerarquía de Componentes

```
App
└── Presentation
    ├── Slide (renderizado condicionalmente)
    └── Controls
        ├── Progress Bar
        ├── Left Button
        ├── Right Button
        └── Counter
```

### Flujo de Datos

1. **Presentation** mantiene el estado del slide actual
2. **Controls** recibe callbacks para cambiar slides
3. **Slide** recibe datos y estado de visibilidad
4. Las animaciones se activan basadas en `isActive`

## 🎨 Personalización

### Modificar Colores del Tema

Edita `src/index.css`:

```css
@theme {
  --color-primary: #3b82f6;    /* Azul principal */
  --color-secondary: #8b5cf6;  /* Púrpura */
  --color-accent: #06b6d4;     /* Cyan */
  --color-dark: #0f172a;       /* Fondo oscuro */
  --color-light: #f1f5f9;      /* Texto claro */
}
```

### Agregar Nuevos Slides

Edita `src/data/slides.js`:

```javascript
export const slides = [
  // ... slides existentes
  {
    id: 23,
    title: "Tu Nuevo Slide",
    subtitle: "Subtítulo opcional",
    content: "Contenido principal del slide",
    bulletPoints: [
      "Punto 1",
      "Punto 2",
      "Punto 3"
    ],
    type: "content"
  }
];
```

### Modificar Animaciones

En `src/components/Slide.jsx`, ajusta los parámetros de Framer Motion:

```javascript
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ 
    duration: 0.8,  // Duración de la animación
    ease: "easeOut" // Tipo de easing
  }}
>
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 📱 Responsividad

La aplicación está optimizada para:

- 📱 **Móviles**: 320px - 767px
- 📱 **Tablets**: 768px - 1023px
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Screens**: 1920px+

### Breakpoints de Tailwind

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚀 Optimizaciones de Rendimiento

- ✅ **Code Splitting**: Vite divide automáticamente el código
- ✅ **Lazy Loading**: Componentes cargados bajo demanda
- ✅ **CSS Purging**: Tailwind elimina estilos no usados
- ✅ **Minificación**: Código minificado en producción
- ✅ **Tree Shaking**: Eliminación de código muerto

## 🔄 Reutilización en Otros Proyectos

### Como Template de Presentación

1. **Clonar el proyecto**
2. **Modificar `slides.js`** con tu contenido
3. **Ajustar colores** en `index.css`
4. **Personalizar animaciones** según necesidad

### Componentes Reutilizables

#### `<Slide />`
Componente genérico para mostrar contenido con animaciones.

```javascript
import Slide from './components/Slide';

<Slide 
  data={{
    title: "Mi Título",
    subtitle: "Mi Subtítulo",
    content: "Mi contenido",
    bulletPoints: ["Punto 1", "Punto 2"]
  }}
  isActive={true}
/>
```

#### `<Controls />`
Sistema de navegación completo.

```javascript
import Controls from './components/Controls';

<Controls
  current={0}
  total={10}
  onNext={() => console.log('Next')}
  onPrev={() => console.log('Prev')}
/>
```

## 🎓 Conceptos Aprendidos

Este proyecto demuestra:

- ✅ **State Management**: Manejo de estado con hooks
- ✅ **Component Composition**: Composición de componentes
- ✅ **Responsive Design**: Diseño adaptable
- ✅ **Animation**: Animaciones con Framer Motion
- ✅ **Event Handling**: Manejo de eventos de teclado
- ✅ **Modern CSS**: Tailwind CSS v4 y custom properties
- ✅ **Build Tools**: Configuración de Vite

## 📚 Recursos Adicionales

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 🐛 Troubleshooting

### La aplicación no inicia

```bash
# Limpiar caché y reinstalar
rm -rf node_modules
rm -rf .vite
npm install
npm run dev
```

### Estilos no se aplican

```bash
# Limpiar caché de Tailwind
rm -rf node_modules/.vite
npm run dev
```

### Errores de importación

Verifica que todas las dependencias estén instaladas:
```bash
npm install
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.
Correo: darwninoe@gmail.com

---

**Hecho con ❤️ usando React, Vite y Tailwind CSS**
