"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/types";
import { Quote } from "lucide-react";

interface TestimonialSliderProps {
    testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000); // 8 seconds per slide

        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center text-center p-8 md:p-12 w-full"
                >
                    <Quote className="w-12 h-12 text-neon-cyan/20 mb-8" />

                    <p className="text-xl md:text-2xl text-neon-light/90 font-light leading-relaxed mb-8 italic">
                        &quot;{testimonials[currentIndex].content}&quot;
                    </p>

                    <div className="flex flex-col items-center gap-2">
                        {/* Avatar placeholder if no image */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan p-[2px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">
                                {testimonials[currentIndex].name.charAt(0)}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-white">
                                {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-sm text-neon-cyan/70 font-mono">
                                {testimonials[currentIndex].role}
                            </p>
                            <p className="text-xs text-neon-light/40 uppercase tracking-widest mt-1">
                                {testimonials[currentIndex].company}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-0 flex gap-2 justify-center w-full">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                            ? "w-8 bg-neon-cyan"
                            : "bg-white/10 hover:bg-white/30"
                            }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
