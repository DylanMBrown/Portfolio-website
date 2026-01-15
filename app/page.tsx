"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Globe2,
  Activity,
  ShieldCheck,
  Terminal as TerminalIcon
} from "lucide-react";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { GlassCard } from "@/components/ui/GlassCard";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsMarquee } from "@/components/ui/SkillsMarquee";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Typewriter } from "@/components/ui/Typewriter";
import { Terminal } from "@/components/ui/Terminal";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { projects, skills, testimonials } from "@/lib/personal";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Navigation />

      <main className="bg-black min-h-screen text-white overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <ParticleNetwork projects={featuredProjects} skills={skills} />

          <div className="container mx-auto px-4 relative z-10 pointer-events-none">
            <div className="max-w-5xl mx-auto text-center md:text-left">
              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 pointer-events-auto"
              >
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-xs font-mono text-neon-light/80 uppercase tracking-widest">Available for hire</span>
              </motion.div>

              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9] mix-blend-difference pointer-events-auto">
                Building
                <br />
                <span className="text-neon-cyan block md:inline">
                  <Typewriter
                    words={["Resilient", "Accessible", "Sovereign", "Intelligent"]}
                    speed={100}
                    delay={2500}
                  />
                </span>
                <br />
                Web Systems
              </h1>

              <p className="text-lg md:text-2xl text-cream/70 max-w-2xl font-mono mb-12 pointer-events-auto md:ml-2">
                [ Dylan Brown // Web Developer & IT Specialist ]
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto md:ml-4">
                <a
                  href="/contact"
                  className="group px-8 py-4 bg-neon-cyan text-black font-bold uppercase tracking-wider hover:bg-neon-purple hover:text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Let&apos;s Collaborate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/projects"
                  className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all hover:border-white/50 text-center"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-32 px-4 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                What I <span className="text-neon-cyan">Do</span>
              </h2>
              <p className="text-lg text-neon-light/60 max-w-2xl font-light">
                Bridging the gap between complex backend systems and beautiful, accessible user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title="Full-Stack Engineer"
                description="Building scalable web applications with Next.js and TypeScript. From database architecture to responsive frontend implementation, I ensure end-to-end quality."
                icon={Code2}
              />
              <ServiceCard
                title="System Reliability"
                description="Leveraging my healthcare IT background to build robust, fault-tolerant systems. I prioritize data integrity, security, and uptime in every solution."
                icon={ShieldCheck} // Replaced Activity with ShieldCheck for better context
              />
              <ServiceCard
                title="Digital Sovereignty"
                description="Empowering communities through technology. I specialize in systems that respect data ownership, cultural protocols, and accessible design for all users."
                icon={Globe2}
              />
            </div>
          </div>
        </section>

        {/* NERD CRED (TERMINAL) SECTION */}
        <section className="py-32 px-4 bg-[#050505] border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 text-neon-cyan font-mono text-sm border border-neon-cyan/20 px-3 py-1 rounded mb-4">
                <TerminalIcon className="w-4 h-4" />
                <span>dev_mode_active: true</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Powered by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">Modern Infrastructure</span>
              </h2>

              <p className="text-lg text-neon-light/70 leading-relaxed font-light">
                My development environment is more than just an editor. I run a sophisticated homelab setup and utilize AI agents to accelerate workflows, ensuring I can deliver complex solutions faster and with higher precision.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-white mb-1">Homelab</h4>
                  <p className="text-sm text-neon-light/50">Self-hosted infrastructure</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-white mb-1">AI Augmented</h4>
                  <p className="text-sm text-neon-light/50">Next-gen workflows</p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                <Terminal className="relative" />
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORKS */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                Selected <span className="text-neon-cyan">Works</span>
              </h2>
              <a href="/projects" className="hidden md:flex items-center gap-2 text-neon-cyan hover:text-white transition-colors font-mono">
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bento Grid Layout - Keeping existing structure but maybe refining spacing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative ${index === 0 ? "md:col-span-2 md:row-span-1" : ""
                    }`}
                >
                  <GlassCard className="h-full w-full border border-white/5 hover:border-neon-cyan/30 transition-colors" hover>
                    <ProjectCard project={project} />
                  </GlassCard>
                </div>
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <a href="/projects" className="inline-flex items-center gap-2 text-neon-cyan font-bold uppercase tracking-wider">
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS (TRUST) */}
        <section className="py-32 px-4 bg-gradient-to-t from-[#0a0a0a] to-black">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted Collaboration</h2>
            <div className="w-20 h-1 bg-neon-cyan/30 mx-auto rounded-full" />
          </div>

          <TestimonialSlider testimonials={testimonials} />

          {/* Logos Placeholder - represented as text for now as cleaner than broken images */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-xl font-black text-white uppercase tracking-widest">NSW Health</span>
            <span className="text-xl font-black text-white uppercase tracking-widest">TAFE NSW</span>
            <span className="text-xl font-black text-white uppercase tracking-widest">NDIS</span>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Ready to <span className="text-neon-cyan">Upgrade</span>?
            </h2>
            <p className="text-xl text-neon-light/60 max-w-2xl mx-auto mb-12">
              Whether you need a full-stack application, an accessible community platform, or a robust system overhaul, I&apos;m ready to build it.
            </p>
            <a href="/contact" className="inline-block px-12 py-5 bg-white text-black font-black text-xl uppercase tracking-widest hover:bg-neon-cyan transition-colors hover:scale-105 transform duration-300 rounded-sm">
              Start a Conversation
            </a>
          </div>
        </section>

        <SkillsMarquee skills={skills} />
      </main>
    </>
  );
}
