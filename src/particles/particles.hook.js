import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const useParticles = () => {
  const texture = useLoader(THREE.TextureLoader, "./img/snow.jpg");
  const verticesAmount = 2000;
  const verticesCordinatesAmount = verticesAmount * 3;
  const positionAr = new Float32Array(verticesCordinatesAmount);
  positionAr.forEach((_, i, a) => (a[i] = (Math.random() - 0.5) * 10));
  // to center particles in x = 0
  // then * 10 to spread the particles

  const particles = useRef();

  useFrame((_, deltaTime) => {
    particles.current.rotation.y -= deltaTime * 0.03;
    particles.current.rotation.x += deltaTime * 0.03;
  });

  return {
    positionAr,
    texture,
    verticesCordinatesAmount,
    particles,
  };
};

export { useParticles };
