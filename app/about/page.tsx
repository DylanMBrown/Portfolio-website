import type { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "About Me | Dylan Brown - Web Developer",
  description:
    "Learn about Dylan Brown's journey from Aboriginal Student Support and Healthcare to Web Development. Specialist in digital sovereignty and community systems.",
};

export default function AboutPage() {
  return (
    <>
      <NoiseOverlay />
      <Navigation />

      <main className="pt-24 min-h-screen bg-black">
        {/* Hero / Bio */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0 mx-auto lg:mx-0 relative group">
                <div className="absolute inset-0 bg-neon-cyan rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-neon-cyan/30">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-4">
                    About <span className="text-neon-cyan">Me</span>
                  </h1>
                  <h2 className="text-2xl text-neon-light/60 font-mono">
                    {personalInfo.title} {"//"} {personalInfo.location}
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-neon-light/80 leading-relaxed font-light">
                  <p>
                    I am an <strong className="text-neon-cyan">Emerging Web Developer</strong> and proud Aboriginal man, leveraging my diverse background in
                    Healthcare IT and Student Support to build accessible, intelligent web solutions.
                  </p>
                  <p>
                    My journey hasn&apos;t been linear. I spent years in <strong className="text-white">NSW Health</strong> managing complex patient systems
                    (PowerChart, FIRSTNET) and leading teams in <strong className="text-white">Aboriginal Student Support</strong>.
                    These roles taught me the critical importance of user empathy, data integrity, and system reliability—skills I now apply to code.
                  </p>
                  <p>
                    Currently, I&apos;m diving deep into <strong className="text-neon-cyan">AI Agents</strong>,
                    <strong className="text-neon-cyan"> Homelab Infrastructure</strong>, and <strong className="text-neon-cyan">Digital Sovereignty</strong>.
                    I believe technology should empower community, not just serve algorithms.
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4">
                  <h3 className="text-sm font-mono text-neon-light/40 uppercase tracking-widest mb-4">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Next.js", "TypeScript", "Python (AI)", "Docker", "Tailwind"].map((tech) => (
                      <span key={tech} className="px-4 py-2 border border-neon-cyan/30 rounded text-neon-light/80 text-sm hover:bg-neon-cyan/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Songlines / Experience Timeline */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#1a1a1a]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                My <span className="text-neon-cyan">Journey</span>
              </h2>
              <p className="text-neon-light/60 font-mono max-w-2xl mx-auto">
                From Community Support to Healthcare Systems to Full Stack Engineering.
              </p>
            </div>

            <ExperienceTimeline experiences={experience} />
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-4 bg-black border-t border-neon-cyan/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gradient mb-16">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 border border-white/10 rounded-2xl hover:border-neon-cyan/50 focus-within:border-neon-cyan/50 transition-colors groupbg-gradient-to-br from-white/5 to-transparent"
                >
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-neon-light/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer socialLinks={socialLinks} />
    </>
  );
}
