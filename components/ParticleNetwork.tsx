"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { NEON_PALETTE } from "@/lib/theme";
import type { Project, Skill } from "@/types";

interface ParticleData {
  id: string;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  type: "project" | "skill";
}

function MovingParticles({ projects, skills }: { projects: Project[]; skills: Skill[] }) {
  const { viewport, mouse } = useThree();
  const particles = useMemo(() => {
    const p: ParticleData[] = [];
    const all = [...projects, ...skills];
    all.forEach((item, i) => {
      p.push({
        id: item.id,
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        type: i < projects.length ? "project" : "skill",
      });
    });
    return p;
  }, [projects, skills]);

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    particles.forEach((p, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;

      // Update position based on velocity
      p.position.add(p.velocity);

      // Bounce off boundaries
      if (Math.abs(p.position.x) > 10) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 7) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 5) p.velocity.z *= -1;

      // Mouse influence
      const mousePos = new THREE.Vector3(mouse.x * viewport.width / 2, mouse.y * viewport.height / 2, 0);
      const dist = p.position.distanceTo(mousePos);
      if (dist < 3) {
        const force = new THREE.Vector3().subVectors(p.position, mousePos).normalize().multiplyScalar(0.02);
        p.position.add(force);
      }

      mesh.position.copy(p.position);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  });

  return (
    <>
      {particles.map((p, i) => (
        <mesh
          key={p.id}
          ref={(el) => { meshRefs.current[i] = el; }}
          onClick={() => {
            const project = projects.find((proj) => proj.id === p.id);
            if (project) {
              window.open(project.links.liveUrl || project.links.githubUrl, "_blank");
            }
          }}
        >
          <sphereGeometry args={[p.type === "project" ? 0.3 : 0.15, 16, 16]} />
          <meshStandardMaterial
            color={p.type === "project" ? NEON_PALETTE.green : NEON_PALETTE.purple}
            emissive={p.type === "project" ? NEON_PALETTE.green : NEON_PALETTE.purple}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </>
  );
}

export function ParticleNetwork({ projects, skills }: { projects: Project[]; skills: Skill[] }) {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color={NEON_PALETTE.cyan} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color={NEON_PALETTE.purple} />
        <MovingParticles projects={projects} skills={skills} />
      </Canvas>
    </div>
  );
}
