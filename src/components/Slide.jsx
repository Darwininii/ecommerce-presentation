import React from 'react';
import { motion } from 'framer-motion';

/**
 * Slide Component
 * 
 * Renders an individual slide with animated entrance/exit transitions.
 * Displays title, optional subtitle, main content, and optional bullet points.
 * 
 * @component
 * @example
 * ```jsx
 * <Slide 
 *   data={{
 *     id: 1,
 *     title: "My Title",
 *     subtitle: "Optional Subtitle",
 *     content: "Main content here",
 *     bulletPoints: ["Point 1", "Point 2"]
 *   }}
 *   isActive={true}
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - Slide data object
 * @param {number} props.data.id - Unique identifier for the slide
 * @param {string} props.data.title - Main title (required)
 * @param {string} [props.data.subtitle] - Optional subtitle
 * @param {string} props.data.content - Main content text (required)
 * @param {string[]} [props.data.bulletPoints] - Optional array of bullet points
 * @param {string} [props.data.type] - Slide type (intro, content, outro)
 * @param {boolean} props.isActive - Whether this slide is currently visible
 * 
 * Features:
 * - Smooth fade-in animation from bottom
 * - Staggered bullet point animations
 * - Responsive text sizing
 * - Glassmorphism design
 * - Gradient text effects
 * 
 * @returns {JSX.Element} Animated slide component
 */
const Slide = ({ data, isActive }) => {
    return (
        <div className={`flex flex-col items-center justify-center h-full w-full p-4 md:p-8 text-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 pointer-events-none'}`}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl border border-white/20"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    {data.title}
                </h2>

                {data.subtitle && (
                    <h3 className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 font-light tracking-wide">
                        {data.subtitle}
                    </h3>
                )}

                <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8">
                    {data.content}
                </p>

                {data.bulletPoints && (
                    <ul className="text-left inline-block space-y-3 bg-black/20 p-6 rounded-xl max-w-2xl">
                        {data.bulletPoints.map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ x: -20, opacity: 0 }}
                                animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="flex items-start text-gray-300 text-sm md:text-base"
                            >
                                <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </ul>
                )}
                {/* Imagen abajo del contenido Inicial */}
                {data.image && (
                    <div className="text-left inline-block space-y-3 bg-black/20 p-6 rounded-xl max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3 }}
                            className="w-[180px]"  // ← tamaño fijo y pequeño
                        >
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-auto object-contain rounded-lg shadow-md"
                            />
                        </motion.div>
                    </div>
                )}
            </motion.div >
        </div >
    );
};

export default Slide;
