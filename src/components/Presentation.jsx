import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';
import Controls from './Controls';
import { slides } from '../data/slides';

/**
 * Presentation Component
 * 
 * Main container component that orchestrates the entire slide presentation.
 * Manages the current slide state, handles keyboard navigation, and renders
 * slides with smooth transitions using Framer Motion.
 * 
 * @component
 * @example
 * ```jsx
 * import Presentation from './components/Presentation';
 * 
 * function App() {
 *   return <Presentation />;
 * }
 * ```
 * 
 * Features:
 * - Keyboard navigation (Arrow keys, Space)
 * - Smooth slide transitions with AnimatePresence
 * - Progress tracking
 * - Background visual effects
 * 
 * State Management:
 * - Uses useState to track current slide index (0-based)
 * - useCallback for optimized navigation functions
 * - useEffect for keyboard event listeners
 * 
 * Navigation:
 * - Right Arrow / Space: Next slide
 * - Left Arrow: Previous slide
 * - Validates bounds to prevent navigation beyond limits
 * 
 * @returns {JSX.Element} The complete presentation interface
 */
const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Touch navigation state
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px) to trigger navigation
    const minSwipeDistance = 50;

    /**
     * Navigate to the next slide
     * 
     * Uses useCallback for performance optimization to prevent
     * unnecessary re-renders. Validates that we're not at the last slide
     * before incrementing.
     * 
     * @function
     * @returns {void}
     */
    const nextSlide = useCallback(() => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(prev => prev + 1);
        }
    }, [currentSlide]);

    /**
     * Navigate to the previous slide
     * 
     * Uses useCallback for performance optimization. Validates that
     * we're not at the first slide before decrementing.
     * 
     * @function
     * @returns {void}
     */
    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    }, [currentSlide]);

    /**
     * Touch event handlers for swipe navigation
     * Detects horizontal swipe gestures on touch devices
     */
    const onTouchStart = (e) => {
        setTouchEnd(null); // Reset touch end
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        // Left swipe = next slide, Right swipe = previous slide
        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    /**
     * Keyboard navigation effect
     * Handles arrow keys and spacebar for navigation
     */
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

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-dark text-white"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            {/* Slides Container */}
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    {slides.map((slide, index) => (
                        index === currentSlide && (
                            <div key={slide.id} className="absolute inset-0 w-full h-full">
                                <Slide data={slide} isActive={index === currentSlide} />
                            </div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <Controls
                current={currentSlide}
                total={slides.length}
                onNext={nextSlide}
                onPrev={prevSlide}
            />
        </div>
    );
};

export default Presentation;
