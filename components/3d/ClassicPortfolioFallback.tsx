"use client";

import Link from "next/link";
import { projects, skills, socialLinks } from "@/utils/data";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export function ClassicPortfolioFallback() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Navigation />

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black"
        >
          <div className="text-center space-y-8 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Building Digital <br className="hidden md:block" /> Experiences
            </h1>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed dark:text-gray-400">
              Aboriginal Web Dev, IT, AI/LLM, Homelaber, Networker. Passionate
              about crafting accessible, pixel-perfect user interfaces and
              robust backends.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
                href="#projects"
              >
                View Projects
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-primary"
                href="#contact"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technical Skills
            </h2>
            <SkillsSection skills={skills} />
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Get In Touch
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </>
  );
}
