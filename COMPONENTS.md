# 📖 Documentación de Componentes

Esta guía detalla cada componente de la aplicación, su propósito, uso y cómo reutilizarlos en futuros proyectos.

## 📑 Tabla de Contenidos

1. [Presentation Component](#presentation-component)
2. [Slide Component](#slide-component)
3. [Controls Component](#controls-component)
4. [Slides Data](#slides-data)
5. [Patrones de Diseño](#patrones-de-diseño)
6. [Guía de Reutilización](#guía-de-reutilización)

---

## 🎬 Presentation Component

**Ubicación**: `src/components/Presentation.jsx`

### Propósito

Componente contenedor principal que orquesta toda la presentación. Maneja:
- Estado del slide actual
- Navegación entre slides
- Eventos de teclado
- Renderizado condicional de slides

### Arquitectura

```javascript
const Presentation = () => {
  // Estado: índice del slide actual
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Callbacks para navegación
  const nextSlide = useCallback(() => { ... });
  const prevSlide = useCallback(() => { ... });
  
  // Event listeners para teclado
  useEffect(() => { ... });
  
  return (
    // Layout con efectos de fondo
    // AnimatePresence para transiciones
    // Renderizado de Slide y Controls
  );
};
```

### Características Clave

#### 1. **State Management**
```javascript
const [currentSlide, setCurrentSlide] = useState(0);
```
- Mantiene el índice del slide actual (0-based)
- Único source of truth para la navegación

#### 2. **Navegación con useCallback**
```javascript
const nextSlide = useCallback(() => {
  if (currentSlide < slides.length - 1) {
    setCurrentSlide(prev => prev + 1);
  }
}, [currentSlide]);
```
- **¿Por qué useCallback?**: Evita recrear funciones en cada render
- **Validación**: Previene navegación fuera de límites
- **Actualización funcional**: `prev => prev + 1` evita stale closures

#### 3. **Event Handling**
```javascript
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [nextSlide, prevSlide]);
```
- **Cleanup**: Remueve listeners al desmontar
- **Dependencias**: Incluye callbacks para evitar stale references

#### 4. **AnimatePresence**
```javascript
<AnimatePresence mode="wait">
  {slides.map((slide, index) => (
    index === currentSlide && (
      <div key={slide.id}>
        <Slide data={slide} isActive={true} />
      </div>
    )
  ))}
</AnimatePresence>
```
- **mode="wait"**: Espera a que salga el slide anterior antes de entrar el nuevo
- **key={slide.id}**: Identifica únicamente cada slide para animaciones
- **Renderizado condicional**: Solo renderiza el slide activo

### Efectos de Fondo

```javascript
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
  <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
</div>
```
- **pointer-events-none**: No interfiere con interacciones
- **blur-[120px]**: Efecto de desenfoque suave
- **Posicionamiento absoluto**: No afecta el layout

### Reutilización

Para usar en otro proyecto:

```javascript
import Presentation from './components/Presentation';
import { slides } from './data/mySlides';

function App() {
  return <Presentation slides={slides} />;
}
```

**Modificaciones necesarias**:
1. Pasar `slides` como prop en lugar de importar directamente
2. Hacer el componente más genérico aceptando configuración

---

## 🎨 Slide Component

**Ubicación**: `src/components/Slide.jsx`

### Propósito

Renderiza el contenido de un slide individual con animaciones de entrada/salida.

### Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `data` | Object | Datos del slide (title, subtitle, content, bulletPoints) |
| `isActive` | Boolean | Si el slide está actualmente visible |

### Estructura de Data

```javascript
{
  id: 1,
  title: "Título del Slide",
  subtitle: "Subtítulo opcional",
  content: "Contenido principal del slide",
  bulletPoints: ["Punto 1", "Punto 2"], // Opcional
  type: "content" // intro, content, outro
}
```

### Animaciones

#### 1. **Contenedor Principal**
```javascript
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```
- **initial**: Estado inicial (abajo y transparente)
- **animate**: Animación basada en `isActive`
- **transition**: Duración y tipo de easing

#### 2. **Bullet Points**
```javascript
<motion.li
  initial={{ x: -20, opacity: 0 }}
  animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
  transition={{ delay: 0.3 + (index * 0.1) }}
>
```
- **Staggered animation**: Cada punto aparece con delay incremental
- **Delay calculado**: `0.3 + (index * 0.1)` crea efecto cascada

### Estilos Responsivos

```javascript
className="text-3xl md:text-5xl lg:text-6xl"
```
- **Mobile**: text-3xl (1.875rem)
- **Tablet**: text-5xl (3rem)
- **Desktop**: text-6xl (3.75rem)

### Glassmorphism

```javascript
className="bg-white/10 backdrop-blur-lg border border-white/20"
```
- **bg-white/10**: Fondo blanco con 10% opacidad
- **backdrop-blur-lg**: Desenfoque del fondo
- **border-white/20**: Borde sutil

### Reutilización

```javascript
// Ejemplo básico
<Slide 
  data={{
    title: "Mi Slide",
    content: "Contenido"
  }}
  isActive={true}
/>

// Con todas las opciones
<Slide 
  data={{
    id: 1,
    title: "Título",
    subtitle: "Subtítulo",
    content: "Descripción detallada",
    bulletPoints: ["A", "B", "C"],
    type: "content"
  }}
  isActive={currentIndex === 0}
/>
```

---

## 🎮 Controls Component

**Ubicación**: `src/components/Controls.jsx`

### Propósito

Proporciona controles de navegación y feedback visual del progreso.

### Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `current` | Number | Índice del slide actual (0-based) |
| `total` | Number | Total de slides |
| `onNext` | Function | Callback para ir al siguiente slide |
| `onPrev` | Function | Callback para ir al slide anterior |

### Componentes Internos

#### 1. **Barra de Progreso**
```javascript
const progress = ((current + 1) / total) * 100;

<div style={{ width: `${progress}%` }} />
```
- **Cálculo**: `(current + 1) / total * 100`
- **Ejemplo**: Slide 5 de 22 = (5+1)/22 * 100 = 27.27%
- **Transición suave**: `transition-all duration-500`

#### 2. **Botones de Navegación**
```javascript
<button
  onClick={onPrev}
  disabled={current === 0}
  className={`... ${current === 0 ? 'opacity-30 cursor-not-allowed' : '...'}`}
>
```
- **Disabled state**: Cuando está en el primer/último slide
- **Feedback visual**: Opacidad reducida cuando disabled
- **Posicionamiento fijo**: `fixed bottom-6 left-4`

#### 3. **Contador**
```javascript
<span>{current + 1} / {total}</span>
```
- **+1**: Convierte de 0-based a 1-based para usuarios
- **Centrado**: `left-1/2 -translate-x-1/2`

### Posicionamiento

```javascript
// Botón izquierdo
className="fixed left-4 md:left-8 bottom-6"

// Botón derecho  
className="fixed right-4 md:right-8 bottom-6"

// Contador
className="fixed bottom-6 left-1/2 -translate-x-1/2"
```

### Iconos con Lucide

```javascript
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';

<ArrowBigLeftDash className="text-white" size={25} />
```
- **size**: Tamaño del icono en píxeles
- **className**: Estilos de Tailwind aplicables

### Estados Interactivos

```javascript
hover:bg-white/20      // Hover: fondo más opaco
hover:scale-110        // Hover: escala aumentada
active:scale-95        // Click: escala reducida
```

### Reutilización

```javascript
// Ejemplo básico
<Controls
  current={0}
  total={10}
  onNext={() => setIndex(i => i + 1)}
  onPrev={() => setIndex(i => i - 1)}
/>

// Con validación
<Controls
  current={slideIndex}
  total={slides.length}
  onNext={() => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  }}
  onPrev={() => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  }}
/>
```

---

## 📊 Slides Data

**Ubicación**: `src/data/slides.js`

### Estructura

```javascript
export const slides = [
  {
    id: 1,                    // Identificador único
    title: "Título",          // Título principal (requerido)
    subtitle: "Subtítulo",    // Subtítulo (opcional)
    content: "Descripción",   // Contenido principal (requerido)
    bulletPoints: [...],      // Lista de puntos (opcional)
    type: "intro"            // Tipo de slide (opcional)
  }
];
```

### Tipos de Slides

- **intro**: Slide de introducción
- **content**: Slide de contenido regular
- **outro**: Slide de conclusión

### Mejores Prácticas

1. **IDs únicos**: Usar números secuenciales
2. **Títulos concisos**: Máximo 60 caracteres
3. **Contenido claro**: 2-3 oraciones
4. **Bullet points**: 3-5 puntos máximo
5. **Consistencia**: Mantener estructura similar

### Ejemplo Completo

```javascript
{
  id: 1,
  title: "Historia del Comercio Electrónico",
  subtitle: "Evolución y Futuro",
  content: "Conoce la historia del comercio electrónico, cómo ha evolucionado desde sus inicios hasta hoy, y qué nos depara el futuro.",
  type: "intro"
},
{
  id: 2,
  title: "Los Orígenes",
  subtitle: "Años 20 y 30",
  content: "El primer paso hacia el ecommerce fueron las ventas por catálogo en Estados Unidos.",
  bulletPoints: [
    "Comodidad para el consumidor",
    "Evitar ir a tiendas físicas",
    "Precursor de la compra a distancia"
  ],
  type: "content"
}
```

---

## 🏗️ Patrones de Diseño

### 1. **Container/Presentational Pattern**

- **Presentation**: Container (lógica)
- **Slide**: Presentational (UI)
- **Controls**: Presentational (UI)

### 2. **Composition Pattern**

```javascript
<Presentation>
  <Slide />
  <Controls />
</Presentation>
```

### 3. **Render Props Pattern**

Potencial mejora:
```javascript
<Presentation
  renderSlide={(data, isActive) => (
    <CustomSlide data={data} isActive={isActive} />
  )}
/>
```

### 4. **Custom Hooks Pattern**

Extraer lógica:
```javascript
function useSlideNavigation(totalSlides) {
  const [current, setCurrent] = useState(0);
  
  const next = useCallback(() => {
    if (current < totalSlides - 1) {
      setCurrent(c => c + 1);
    }
  }, [current, totalSlides]);
  
  const prev = useCallback(() => {
    if (current > 0) {
      setCurrent(c => c - 1);
    }
  }, [current]);
  
  return { current, next, prev };
}
```

---

## 🔄 Guía de Reutilización

### Escenario 1: Presentación Corporativa

```javascript
// 1. Crear tus slides
const corporateSlides = [
  {
    id: 1,
    title: "Q4 Results",
    content: "Revenue increased by 25%",
    bulletPoints: ["Sales up", "Costs down", "Profit margin improved"]
  }
];

// 2. Usar componentes
<Presentation slides={corporateSlides} />
```

### Escenario 2: Tutorial Interactivo

```javascript
// Agregar navegación programática
const [step, setStep] = useState(0);

<Presentation 
  currentSlide={step}
  onSlideChange={setStep}
/>

<button onClick={() => setStep(s => s + 1)}>
  Next Step
</button>
```

### Escenario 3: Galería de Imágenes

```javascript
const imageSlides = images.map((img, i) => ({
  id: i,
  title: img.title,
  content: <img src={img.url} alt={img.alt} />,
  type: "image"
}));

<Presentation slides={imageSlides} />
```

---

## 🎓 Conceptos Clave

### React Hooks Utilizados

1. **useState**: Estado del slide actual
2. **useEffect**: Event listeners de teclado
3. **useCallback**: Optimización de callbacks

### Framer Motion

1. **AnimatePresence**: Transiciones de montaje/desmontaje
2. **motion.div**: Componentes animados
3. **Variants**: Estados de animación

### Tailwind CSS

1. **Utility Classes**: Estilos inline
2. **Responsive Design**: Breakpoints (sm, md, lg)
3. **Custom Theme**: Variables CSS personalizadas

---

**📝 Nota**: Esta documentación está diseñada para ser un recurso vivo. Actualízala conforme el proyecto evolucione.
