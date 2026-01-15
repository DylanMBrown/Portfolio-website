"use client";

import { ParticleNetwork } from "@/components/ParticleNetwork";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsMarquee } from "@/components/ui/SkillsMarquee";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { projects, skills } from "@/lib/personal";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4); // Get 4 for bento grid
  const coreSkills = skills.slice(0, 6);

  return (
    <>
      <NoiseOverlay />
      <Navigation />

      <main>
        <section className="relative h-screen bg-gradient-to-b from-[#1a1a1a] to-black overflow-hidden flex items-center">
          <ParticleNetwork projects={featuredProjects} skills={coreSkills} />

          <div className="absolute inset-0 z-10 container mx-auto px-4 flex flex-col justify-center pointer-events-none">
            <div className="max-w-5xl">
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9] mix-blend-difference pointer-events-auto">
                Building
                <br />
                <span className="text-ochre">Intelligent</span>
                <br />
                Web Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cream/60 max-w-2xl font-mono mb-8 pointer-events-auto">
                [ Dylan Brown // Full Stack Developer ]
              </p>

              <div className="flex gap-4 pointer-events-auto">
                <a
                  href="/projects"
                  className="px-8 py-4 bg-ochre text-charcoal font-bold uppercase tracking-wider hover:bg-terracotta transition-all hover:scale-105"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-16">
              Selected <span className="text-ochre">Works</span>
            </h2>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative ${index === 0 ? "md:col-span-2 md:row-span-1" : ""
                    }`}
                >
                  <GlassCard className="h-full w-full" hover>
                    <ProjectCard project={project} />
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SkillsMarquee skills={skills} />
      </main>
    </>
  );
}
