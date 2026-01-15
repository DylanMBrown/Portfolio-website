"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useAppStore } from "@/lib/graffiti-store";
import { projects } from "@/lib/personal";

export function ProjectModal() {
  const { activeProjectId, setActiveProjectId } = useAppStore();
  const project = projects.find((p) => p.id === activeProjectId);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setActiveProjectId(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900 border-2 border-amber-600 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setActiveProjectId(null)}
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
          >
            <X size={24} />
          </button>

          {project.image && (
            <div className="mb-4 rounded-lg overflow-hidden border-2 border-amber-600/50 shadow-lg shadow-amber-600/20">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={256}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <h2 className="text-3xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-gray-300 mb-4">{project.description}</p>
          {project.longDescription && (
            <p className="text-gray-400 mb-6">{project.longDescription}</p>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1 rounded-full text-sm bg-gray-800 text-amber-400 border border-amber-600/50"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
