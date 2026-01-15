"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface ExperienceTimelineProps {
    experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Songline (The Path) */}
            <motion.div
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan transform -translate-x-1/2"
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    boxShadow: [
                        "0 0 10px rgba(0, 255, 255, 0.2)",
                        "0 0 20px rgba(0, 255, 255, 0.5)",
                        "0 0 10px rgba(0, 255, 255, 0.2)"
                    ]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="space-y-12">
                {experiences.map((job, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${isLeft ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Card */}
                            <div className="w-full md:w-1/2 pl-8 md:pl-0">
                                <GlassCard className="p-6 relative group border-l-4 border-ochre/50 hover:border-neon-cyan/80 transition-colors duration-500">
                                    {/* Connection Dot */}
                                    <motion.div
                                        className={`absolute top-1/2 w-4 h-4 rounded-full bg-neon-cyan border-4 border-black z-10 hidden md:block
                    ${isLeft
                                                ? "-left-[calc(2rem_+_2px)] translate-x-[-50%]" // Adjusted for spacing
                                                : "-right-[calc(2rem_+_18px)] translate-x-[50%]"
                                            }
                  `}
                                        style={{
                                            left: isLeft ? "auto" : "-42px", // Hardcoded fix for simplicity
                                            right: isLeft ? "-42px" : "auto",
                                        }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            backgroundColor: ["#00ffff", "#ffffff", "#00ffff"]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2
                                        }}
                                    />
                                    {/* Mobile Dot */}
                                    <motion.div
                                        className="absolute left-[-2rem] top-8 w-4 h-4 rounded-full bg-neon-cyan border-4 border-black z-10 md:hidden"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2
                                        }}
                                    />

                                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                        <h3 className="text-xl font-bold text-neon-light">
                                            {job.role}
                                        </h3>
                                        <span className="text-sm font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded">
                                            {job.startDate} — {job.endDate}
                                        </span>
                                    </div>

                                    <div className="text-neon-purple font-medium mb-4">
                                        {job.company}
                                    </div>

                                    <p className="text-neon-light/90 text-sm leading-relaxed mb-4">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs font-mono text-neon-light/70 border border-cream/20 px-2 py-1 rounded-full hover:bg-cream/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
