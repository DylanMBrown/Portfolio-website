"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ABORIGINAL_PALETTE } from "@/lib/aboriginal-theme";
import type { Project, Skill } from "@/types";

interface Particle {
  id: string;
  position: [number, number, number];
  velocity: [number, number, number];
  type: "project" | "skill";
  data: Project | Skill;
}

interface ParticleNetworkProps {
  projects: Project[];
  skills: Skill[];
}

const animationConfig = {
  hoverScale: 1.3,
  hoverDuration: 0.4,
  floatSpeed: 0.8,
  connectionOpacity: 0.3,
  particleRotation: 0.2,
  mouseInfluence: 0.3,
  springStiffness: 200,
  springDamping: 20,
};

export function ParticleNetwork({ projects, skills }: ParticleNetworkProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connections, setConnections] = useState<[number, number][]>([]);
  const [hoveredParticle, setHoveredParticle] = useState<string | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const projectParticles: Particle[] = projects.map((p) => ({
      id: p.id,
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ],
      type: "project",
      data: p,
    }));

    const skillParticles: Particle[] = skills.map((s) => ({
      id: s.id,
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3,
      ],
      velocity: [
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015,
      ],
      type: "skill",
      data: s,
    }));

    setParticles([...projectParticles, ...skillParticles]);

    const newConnections: [number, number][] = [];
    projects.forEach((project, i) => {
      project.techStack.forEach((tech) => {
        const matchingSkill = skills.find((s) => s.name === tech.name);
        if (matchingSkill) {
          const skillIndex = projects.length + skills.indexOf(matchingSkill);
          newConnections.push([i, skillIndex]);
        }
      });
    });
    setConnections(newConnections);
  }, [projects, skills]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [projects, skills]);

  const handleParticleClick = (particleId: string) => {
    const project = projects.find((p) => p.id === particleId);
    if (project) {
      window.open(project.links.liveUrl || project.links.githubUrl, "_blank");
    }
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} color={ABORIGINAL_PALETTE.ochre} />
      <pointLight
        position={[10, 10, 10]}
        intensity={1}
        color={ABORIGINAL_PALETTE.cream}
      />

      {particles.map((particle) => (
        <mesh
          key={particle.id}
          position={particle.position}
          scale={
            hoveredParticle === particle.id ? animationConfig.hoverScale : 1
          }
          onClick={() => handleParticleClick(particle.id)}
          onPointerOver={() => setHoveredParticle(particle.id)}
          onPointerOut={() => setHoveredParticle(null)}
        >
          <sphereGeometry
            args={[particle.type === "project" ? 0.4 : 0.25, 32, 32]}
          />
          <meshStandardMaterial
            color={
              particle.type === "project"
                ? ABORIGINAL_PALETTE.terracotta
                : particle.type === "skill"
                  ? ABORIGINAL_PALETTE.sienna
                  : ABORIGINAL_PALETTE.desertSunset
            }
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </Canvas>
  );
}
