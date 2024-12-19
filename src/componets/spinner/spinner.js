import { useSpinner } from "./spinner.hook";

const Spinner = ({ speed }) => {
  const u = useSpinner(speed);
  return (
    <mesh ref={u.meshRef}>
      {/* Smaller and thinner torus (radius 0.5, thickness 0.1) */}
      <torusGeometry args={[0.5, 0.1, 16, 100]} />{" "}
      <meshStandardMaterial
        color="#00FFFF" // Cyan color (light blue)
        emissive="#00FFFF" // Add emissive effect to make it glow
        roughness={0.3} // Less rough surface for softer reflections
        metalness={0.7} // More metallic surface for a shiny effect
      />
    </mesh>
  );
};

export { Spinner };
