"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import type { Skill } from "@/types";

interface ParallaxTextProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden whitespace-nowrap flex flex-nowrap m-0 leading-[0.8]">
            <motion.div className="flex whitespace-nowrap flex-nowrap uppercase text-6xl md:text-9xl font-black tracking-tighter text-outline" style={{ x }}>
                <span className="block mr-[30px]">{children} </span>
                <span className="block mr-[30px]">{children} </span>
                <span className="block mr-[30px]">{children} </span>
                <span className="block mr-[30px]">{children} </span>
            </motion.div>
        </div>
    );
}

interface SkillsMarqueeProps {
    skills: Skill[];
}

export function SkillsMarquee({ skills }: SkillsMarqueeProps) {
    // Join skills into a massive string
    const skillString = skills.map(s => s.name).join(" • ");

    return (
        <section className="py-24 overflow-hidden relative z-10 bg-ochre/10 backdrop-blur-sm border-y border-ochre/20">
            <ParallaxText baseVelocity={-2}>{skillString}</ParallaxText>
            <ParallaxText baseVelocity={2}>{skillString}</ParallaxText>
        </section>
    );
}
