"use client";

import { useRef } from "react";
import { Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { projects } from "@/lib/personal";
import { ABORIGINAL_PALETTE } from "@/lib/aboriginal-theme";
import { useAppStore } from "@/lib/graffiti-store";

const PROJECT_COLORS: Record<string, string> = {
  "web-app": ABORIGINAL_PALETTE.ochre,
  "mobile-app": ABORIGINAL_PALETTE.terracotta,
  api: ABORIGINAL_PALETTE.sienna,
  tool: ABORIGINAL_PALETTE.charcoal,
  other: ABORIGINAL_PALETTE.desertSunset,
};

export function FloatingProjects() {
  const { setActiveProjectId } = useAppStore();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 5, -5]}>
      {projects.map((project, i) => {
        const angle = (i / projects.length) * Math.PI * 2;
        const radius = 6;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={project.id}>
            <Sphere
              position={[x, 0, z]}
              args={[0.8, 32, 32]}
              onClick={(e: any) => {
                e.stopPropagation();
                setActiveProjectId(project.id);
              }}
            >
              <meshStandardMaterial
                color={PROJECT_COLORS[project.category || "other"]}
                roughness={0.3}
                metalness={0.1}
              />
            </Sphere>
            <Text
              position={[x, 1.2, z]}
              fontSize={0.15}
              color={ABORIGINAL_PALETTE.cream}
              anchorX="center"
              anchorY="middle"
            >
              {project.title}
            </Text>
          </group>
        );
      })}
    </group>
  );
}
