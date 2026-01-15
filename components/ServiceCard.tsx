"use client";

import { GlassCard } from "./ui/GlassCard";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <GlassCard className="p-8 h-full flex flex-col items-start gap-4 hover:border-neon-cyan/50 transition-colors group">
            <div className="p-3 rounded-lg bg-neon-cyan/5 border border-neon-cyan/10 group-hover:bg-neon-cyan/10 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-neon-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{title}</h3>
            <p className="text-neon-light/70 leading-relaxed font-light">{description}</p>
        </GlassCard>
    );
}
