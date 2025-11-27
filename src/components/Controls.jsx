import React from 'react';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';

/**
 * Controls Component
 * 
 * Provides navigation controls and progress feedback for the presentation.
 * Includes a progress bar at the top, navigation buttons on the sides,
 * and a slide counter at the bottom center.
 * 
 * @component
 * @example
 * ```jsx
 * <Controls
 *   current={0}
 *   total={22}
 *   onNext={() => setSlide(s => s + 1)}
 *   onPrev={() => setSlide(s => s - 1)}
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {number} props.current - Current slide index (0-based)
 * @param {number} props.total - Total number of slides in presentation
 * @param {Function} props.onNext - Callback function to navigate to next slide
 * @param {Function} props.onPrev - Callback function to navigate to previous slide
 * 
 * Layout:
 * - Progress Bar: Fixed at top, shows visual progress
 * - Left Button: Fixed at bottom-left with ArrowBigLeftDash icon
 * - Right Button: Fixed at bottom-right with ArrowBigRightDash icon
 * - Counter: Fixed at bottom-center showing "X / Y"
 * 
 * Features:
 * - Disabled state when at first/last slide
 * - Hover and active state animations
 * - Responsive positioning (closer on mobile, further on desktop)
 * - Smooth progress bar transitions
 * - Glassmorphism design
 * 
 * Icons:
 * - Uses lucide-react for arrow icons
 * - Size: 25px for optimal visibility
 * 
 * @returns {JSX.Element} Complete navigation controls interface
 */
const Controls = ({ current, total, onNext, onPrev }) => {
    const progress = ((current + 1) / total) * 100;

    return (
        <>
            {/* Progress Bar - Top */}
            <div className="fixed top-0 left-0 w-full p-6 flex justify-center z-50">
                <div className="w-full max-w-3xl h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Left Navigation Button */}
            <button
                onClick={onPrev}
                disabled={current === 0}
                className={`fixed left-4 md:left-8 bottom-6 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/10 cursor-pointer z-50 ${current === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:scale-110 active:scale-95"
                    }`}
            >
                <ArrowBigLeftDash className="text-white" size={25} />
            </button>

            {/* Right Navigation Button */}
            <button
                onClick={onNext}
                disabled={current === total - 1}
                className={`fixed right-4 md:right-8 bottom-6 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/10 cursor-pointer z-50 ${current === total - 1
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:scale-110 active:scale-95"
                    }`}
            >
                <ArrowBigRightDash className="text-white" size={25} />
            </button>

            {/* Slide Counter - Bottom Center */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-gray-300 font-mono text-sm border border-white/10">
                    {current + 1} / {total}
                </span>
            </div>
        </>
    );
};

export default Controls;
