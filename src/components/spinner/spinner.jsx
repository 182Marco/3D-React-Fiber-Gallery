import { useSpinner } from "./spinner.hook";

const Spinner = ({ speed }) => {
  const u = useSpinner(speed);

  return (
    <>
      <ambientLight />
      <mesh ref={u.meshRef}>
        {/* Smaller and thinner torus (radius 0.5, thickness 0.1) */}
        <torusGeometry args={[0.5, 0.1, 16, 100]} />
        <meshStandardMaterial
          roughness={0.3} // Less rough surface for softer reflections
          metalness={0.7} // More metallic surface for a shiny effect
          color="#00F9FF"
        />
      </mesh>
    </>
  );
};

export { Spinner };
