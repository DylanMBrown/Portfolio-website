"use client";

import { useRef, useState } from "react";
import { Text, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAppStore } from "@/lib/graffiti-store";
import { ABORIGINAL_PALETTE } from "@/lib/aboriginal-theme";
import type { GraffitiMessage } from "@/types/graffiti";
import { GraffitiInputOverlay } from "@/components/ui/GraffitiInputOverlay";

export function GraffitiWall() {
  const { messages } = useAppStore();
  const wallRef = useRef<THREE.Mesh>(null);
  const [inputPosition, setInputPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleWallClick = (event: any) => {
    event.stopPropagation();
    const point = event.point;
    setInputPosition({ x: point.x, y: point.y - 2 });
  };

  return (
    <>
      <group>
        <mesh
          ref={wallRef}
          position={[0, 2, 0]}
          receiveShadow
          onClick={handleWallClick}
        >
          <boxGeometry args={[20, 4, 0.5]} />
          <meshStandardMaterial
            color={ABORIGINAL_PALETTE.charcoal}
            roughness={0.9}
          />
        </mesh>

        {messages.map((msg) => (
          <GraffitiTag
            key={msg.id}
            message={msg}
            position={[msg.x, msg.y + 2.1, 0.3]}
          />
        ))}

        {inputPosition && (
          <group position={[inputPosition.x, inputPosition.y + 2, 0.3]}>
            <Text
              position={[0, 0, 0]}
              fontSize={0.3}
              color={ABORIGINAL_PALETTE.ochre}
              anchorX="center"
              anchorY="middle"
            >
              Click here to add graffiti
            </Text>
          </group>
        )}
      </group>

      {inputPosition && (
        <GraffitiInputOverlay
          position={inputPosition}
          onClose={() => setInputPosition(null)}
        />
      )}
    </>
  );
}

function GraffitiTag({
  message,
  position,
}: {
  message: GraffitiMessage;
  position: [number, number, number];
}) {
  const colorMap: Record<string, string> = {
    ochre: ABORIGINAL_PALETTE.ochre,
    terracotta: ABORIGINAL_PALETTE.terracotta,
    sienna: ABORIGINAL_PALETTE.sienna,
    cream: ABORIGINAL_PALETTE.cream,
  };

  return (
    <Text
      position={position}
      fontSize={0.3}
      color={colorMap[message.color] || ABORIGINAL_PALETTE.cream}
      anchorX="center"
      anchorY="middle"
    >
      {message.tag}
    </Text>
  );
}
