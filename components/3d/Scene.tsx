"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { GraffitiWall } from "./GraffitiWall";
import { FloatingProjects } from "./FloatingProjects";
import { LoadingSpinner } from "./LoadingSpinner";
import { useAppStore } from "@/lib/graffiti-store";
import { ABORIGINAL_PALETTE } from "@/lib/aboriginal-theme";
import { ClassicPortfolioFallback } from "./ClassicPortfolioFallback";

export function Scene3D() {
  const { isThreeDSupported } = useAppStore();

  if (!isThreeDSupported) {
    return <ClassicPortfolioFallback />;
  }

  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} color={ABORIGINAL_PALETTE.ochre} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          color={ABORIGINAL_PALETTE.desertSunset}
        />
        <Suspense fallback={<LoadingSpinner />}>
          <GraffitiWall />
          <FloatingProjects />
        </Suspense>
        <OrbitControls
          enableDamping
          maxPolarAngle={Math.PI / 2.1}
          minDistance={3}
          maxDistance={20}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
