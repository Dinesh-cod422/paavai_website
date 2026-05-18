"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Dynamic Product-to-WebGL Configuration Map
interface ProductConfig {
  color: string;
  secondaryColor: string;
  accentColor: string;
  emissive: string;
  speed: number;
  particleColor: string;
  motif: "cube" | "flake" | "seed" | "droplet" | "lentil" | "ring";
  glowIntensity: number;
}

const productConfigs: Record<string, ProductConfig> = {
  jaggery: {
    color: "#7e5223",          // Warm brown cane sugar
    secondaryColor: "#c08a45",
    accentColor: "#f0c175",
    emissive: "#2b1803",
    speed: 0.8,
    particleColor: "#bda080",
    motif: "cube",
    glowIntensity: 0.4,
  },
  curry_masala: {
    color: "#b07328",          // Rich bronze masala
    secondaryColor: "#d99a42",
    accentColor: "#6b2f12",
    emissive: "#3a2107",
    speed: 0.6,
    particleColor: "#dfc19c",
    motif: "flake",
    glowIntensity: 0.5,
  },
  chilli_powder: {
    color: "#d32f2f",          // Fiery organic chilli red
    secondaryColor: "#ff7043",
    accentColor: "#7f0000",
    emissive: "#7f0000",
    speed: 1.8,
    particleColor: "#ff7f7f",
    motif: "ring",
    glowIntensity: 1.2,
  },
  sattu_maavu: {
    color: "#cca87a",          // Multigrain roasted tan
    secondaryColor: "#f0d7b8",
    accentColor: "#8d6b45",
    emissive: "#372714",
    speed: 0.4,
    particleColor: "#fbf3e7",
    motif: "seed",
    glowIntensity: 0.3,
  },
  sambar_podi: {
    color: "#e65100",          // Warm sambar ochre/orange
    secondaryColor: "#ffb74d",
    accentColor: "#8a2c00",
    emissive: "#5d1b00",
    speed: 1.0,
    particleColor: "#ffab91",
    motif: "flake",
    glowIntensity: 0.8,
  },
  urad_podi: {
    color: "#ddd8cd",          // Creamy off-white dal powder
    secondaryColor: "#f7f2e7",
    accentColor: "#6d6255",
    emissive: "#2b2925",
    speed: 0.5,
    particleColor: "#ffffff",
    motif: "lentil",
    glowIntensity: 0.3,
  },
  ghee: {
    color: "#ffc107",          // Pure glowing golden liquid ghee
    secondaryColor: "#fff0a6",
    accentColor: "#d89000",
    emissive: "#b57c00",
    speed: 2.2,                // Liquid viscosity
    particleColor: "#fff3e0",
    motif: "droplet",
    glowIntensity: 1.5,
  },
  turmeric: {
    color: "#ffeb3b",          // Bright golden turmeric root yellow
    secondaryColor: "#f9a825",
    accentColor: "#7d5b00",
    emissive: "#af8c00",
    speed: 1.3,
    particleColor: "#fffde7",
    motif: "seed",
    glowIntensity: 1.1,
  },
};

interface Scene3DProps {
  activeMesh: string; // Product id
  speedMultiplier: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function mixColor(seed: number, config: ProductConfig) {
  const palette = [config.color, config.secondaryColor, config.accentColor, config.particleColor];
  return palette[Math.floor(seededRandom(seed) * palette.length)];
}

function ParticleField({ color }: { color: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 900;

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (seededRandom(i + 1) - 0.5) * 16;
      arr[i * 3 + 1] = (seededRandom(i + 101) - 0.5) * 9;
      arr[i * 3 + 2] = -5 + seededRandom(i + 201) * 5;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.008;
      pointsRef.current.position.y = Math.sin(pointsRef.current.rotation.y * 4) * 0.16;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.36}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface IngredientPieceProps {
  config: ProductConfig;
  index: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

function IngredientPiece({ config, index, position, rotation, scale }: IngredientPieceProps) {
  const material = (
    <meshPhysicalMaterial
      color={mixColor(index + 31, config)}
      emissive={config.emissive}
      emissiveIntensity={config.glowIntensity * 0.18}
      roughness={config.motif === "droplet" ? 0.08 : 0.62}
      metalness={config.motif === "droplet" ? 0.45 : 0.05}
      clearcoat={config.motif === "droplet" ? 1 : 0.2}
      transparent
      opacity={0.88}
    />
  );

  if (config.motif === "droplet") {
    return (
      <group position={position} rotation={rotation} scale={scale}>
        <mesh scale={[0.55, 0.78, 0.55]}>
          <sphereGeometry args={[0.2, 18, 18]} />
          {material}
        </mesh>
        <mesh position={[0, 0.22, 0]} rotation={[Math.PI, 0, 0]} scale={[0.42, 0.7, 0.42]}>
          <coneGeometry args={[0.2, 0.42, 18]} />
          {material}
        </mesh>
      </group>
    );
  }

  if (config.motif === "cube") {
    return (
      <mesh position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[0.28, 0.24, 0.28]} />
        {material}
      </mesh>
    );
  }

  if (config.motif === "flake") {
    return (
      <mesh position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[0.38, 0.045, 0.2]} />
        {material}
      </mesh>
    );
  }

  if (config.motif === "lentil") {
    return (
      <mesh position={position} rotation={rotation} scale={[scale * 1.05, scale * 0.38, scale * 0.82]}>
        <sphereGeometry args={[0.2, 22, 12]} />
        {material}
      </mesh>
    );
  }

  if (config.motif === "ring") {
    return (
      <mesh position={position} rotation={rotation} scale={scale}>
        <torusGeometry args={[0.17, 0.035, 12, 28]} />
        {material}
      </mesh>
    );
  }

  return (
    <mesh position={position} rotation={rotation} scale={[scale * 0.8, scale * 1.15, scale * 0.8]}>
      <sphereGeometry args={[0.16, 18, 12]} />
      {material}
    </mesh>
  );
}

function ProductIngredientBackdrop({ activeMesh, speedMultiplier }: Scene3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const config = useMemo(() => {
    return productConfigs[activeMesh] || productConfigs.jaggery;
  }, [activeMesh]);

  const pieces = useMemo(() => {
    return Array.from({ length: 54 }, (_, index) => {
      return {
        position: [
          (seededRandom(index + 501) - 0.5) * 13.8,
          (seededRandom(index + 601) - 0.5) * 7.8,
          -3.8 + seededRandom(index + 1101) * 4.1,
        ] as [number, number, number],
        rotation: [
          seededRandom(index + 701) * Math.PI,
          seededRandom(index + 801) * Math.PI * 2,
          seededRandom(index + 901) * Math.PI,
        ] as [number, number, number],
        scale: 0.42 + seededRandom(index + 1001) * 0.54,
        drift: 0.35 + seededRandom(index + 1201) * 0.75,
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y += delta * config.speed * speedMultiplier * 0.035;
    groupRef.current.rotation.z = Math.sin(t * 0.12) * 0.025;
    groupRef.current.position.x = Math.sin(t * 0.08) * 0.24;
  });

  return (
    <group ref={groupRef}>
      {pieces.map((piece, index) => (
        <group
          key={`${activeMesh}-${index}`}
          position={[
            piece.position[0],
            piece.position[1] + Math.sin(index * 0.7) * piece.drift,
            piece.position[2],
          ]}
        >
          <IngredientPiece
            config={config}
            index={index}
            position={[0, 0, 0]}
            rotation={piece.rotation}
            scale={piece.scale}
          />
        </group>
      ))}
    </group>
  );
}

function MovingLights({ activeMesh }: { activeMesh: string }) {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);
  const light3 = useRef<THREE.PointLight>(null);
  
  const config = useMemo(() => {
    return productConfigs[activeMesh] || productConfigs.jaggery;
  }, [activeMesh]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Light 1: Orbiting gold sand halo in circular path
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.45) * 6;
      light1.current.position.y = Math.cos(t * 0.45) * 5;
      light1.current.position.z = 2 + Math.sin(t * 0.2) * 2;
    }
    
    // Light 2: Counter-orbiting leaf green organic halo in figure-8
    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.35) * 7;
      light2.current.position.y = Math.sin(t * 0.5) * 4;
      light2.current.position.z = -1 + Math.cos(t * 0.3) * 3;
    }

    // Light 3: Product-specific signature light sweeping directly behind the model
    if (light3.current) {
      light3.current.position.x = Math.sin(t * 0.6) * 5;
      light3.current.position.y = Math.cos(t * 0.4) * 6;
      light3.current.position.z = 1.5;
    }
  });

  return (
    <>
      {/* Light 1: A warm gold organic aura */}
      <pointLight ref={light1} intensity={5.0} distance={18} color="#d4af37" />
      
      {/* Light 2: A vibrant emerald green organic aura */}
      <pointLight ref={light2} intensity={4.0} distance={18} color="#30d158" />
      
      {/* Light 3: Intense signature light mapped to the product's natural colors */}
      <pointLight ref={light3} intensity={config.glowIntensity * 5.0} distance={20} color={config.color} />
    </>
  );
}

export default function Scene3D({ activeMesh, speedMultiplier }: Scene3DProps) {
  const currentConfig = useMemo(() => {
    return productConfigs[activeMesh] || productConfigs.jaggery;
  }, [activeMesh]);

  return (
    <Canvas
      camera={{ position: [0, 0, 7.0], fov: 54 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Product-colored spice dust */}
      <ParticleField color={currentConfig.particleColor} />

      {/* Earthy ambient lighting */}
      <ambientLight intensity={0.55} color="#1b1c18" />

      {/* Main directional golden lighting */}
      <directionalLight position={[4, 5, 3]} intensity={1.8} color="#ffe082" />

      {/* Dynamic sin-orbit liquid light show */}
      <MovingLights activeMesh={activeMesh} />

      {/* Product and food-related background ingredients */}
      <ProductIngredientBackdrop activeMesh={activeMesh} speedMultiplier={speedMultiplier} />
    </Canvas>
  );
}
