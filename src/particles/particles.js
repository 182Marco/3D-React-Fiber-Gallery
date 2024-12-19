import { useParticles } from "./particles.hook";

const Particles = () => {
  const u = useParticles();

  return (
    <points ref={u.particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={u.verticesCordinatesAmount}
          itemSize={3}
          array={u.positionAr}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        alphaMap={u.texture}
        transparent
        depthTest={false}
      />
    </points>
  );
};

export { Particles };
