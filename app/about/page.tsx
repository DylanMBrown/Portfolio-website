"use client";
import React from "react"; // Added for React.useState/useEffect if needed
import type { Metadata } from "next";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  personalInfo,
  experience,
  education,
  interests,
  values,
  socialLinks,
} from "@/lib/personal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { GradientText } from "@/components/ui/GradientText";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { GlassCard } from "@/components/ui/GlassCard"; // Import GlassCard for Values

// Metadata cannot be exported from a "use client" component.
// We'll move metadata to a layout or a separate server component file if strictly needed,
// but for a single page file in Next.js App Router, if we need "use client", we usually split the client part.
// However, since we are doing a quick update, I will comment out the metadata export here as it will error in a client component.
// The user can add metadata in layout.tsx or a wrapper. This is a common pattern trade-off.

/*
export const metadata: Metadata = {
  title: "About Me | Dylan Brown - Web Developer",
  description:
    "Learn about Dylan Brown's journey from Aboriginal Student Support and Healthcare to Web Development. Specialist in digital sovereignty and community systems.",
};
*/

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <>
      <NoiseOverlay />
      <Navigation />

      <main className="pt-24 min-h-screen bg-black overflow-hidden">
        {/* Hero / Bio */}
        <section className="py-20 px-4 relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
              {/* Profile Image - Enhanced */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-shrink-0 mx-auto lg:mx-0 relative group"
              >
                {/* Rotating Border Effect */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-black/50 shadow-2xl shadow-neon-cyan/20">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Bio Content */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-4 leading-tight">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Me</span>
                  </h1>
                  <h2 className="text-2xl text-neon-light/60 font-mono flex items-center justify-center lg:justify-start gap-3">
                    <span className="w-8 h-[2px] bg-neon-cyan/50 inline-block" />
                    {personalInfo.title}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6 text-lg text-neon-light/80 leading-relaxed font-light max-w-3xl"
                >
                  <p>
                    I am an <strong className="text-neon-cyan font-medium">Emerging Web Developer</strong> and proud Aboriginal man, leveraging my diverse background in
                    Healthcare IT and Student Support to build accessible, intelligent web solutions.
                  </p>
                  <p>
                    My journey hasn&apos;t been linear. I spent years in <strong className="text-white font-medium">NSW Health</strong> managing complex patient systems
                    (PowerChart, FIRSTNET) and leading teams in <strong className="text-white font-medium">Aboriginal Student Support</strong> at TAFE NSW.
                    These roles taught me the critical importance of user empathy, data integrity, and system reliability—skills I now apply to code.
                  </p>
                  <p>
                    Currently, I&apos;m diving deep into <strong className="text-neon-cyan font-medium">AI Agents</strong>,
                    <strong className="text-neon-cyan font-medium"> Homelab Infrastructure</strong>, and <strong className="text-neon-cyan font-medium">Digital Sovereignty</strong>.
                    I believe technology should empower community, not just serve algorithms.
                  </p>
                </motion.div>

                {/* Tech Stack Badges - Enhanced */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="pt-6"
                >
                  <h3 className="text-sm font-mono text-neon-light/40 uppercase tracking-widest mb-6">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {["Next.js", "TypeScript", "Python (AI)", "Docker", "Tailwind", "Supabase"].map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="px-5 py-2.5 border border-neon-cyan/20 bg-neon-cyan/5 rounded-full text-neon-light/90 text-sm font-medium hover:bg-neon-cyan/15 hover:border-neon-cyan/40 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-neon-cyan/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Songlines / Experience Timeline */}
        <section className="py-32 px-4 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                My <span className="text-neon-cyan">Journey</span>
              </h2>
              <p className="text-neon-light/60 font-mono max-w-2xl mx-auto text-lg">
                Tracing the path from Community Support to Healthcare Systems to Full Stack Engineering.
              </p>
            </motion.div>

            <ExperienceTimeline experiences={experience} />
          </div>
        </section>

        {/* Values */}
        <section className="py-32 px-4 bg-black relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-neon-purple/5 to-transparent opacity-50" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-center text-white mb-20 tracking-tight"
            >
              Core Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="h-full p-8 border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 group flex flex-col justify-between hover:-translate-y-2">
                    <div>
                      <div className="mb-6 w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-colors duration-300">
                        {/* Simple icon placeholder based on index or title could go here */}
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-neon-light/60 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer socialLinks={socialLinks} />
    </>
  );
}
