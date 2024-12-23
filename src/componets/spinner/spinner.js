import { useSpinner } from "./spinner.hook";
import { useControls, button } from "leva";

const Spinner = ({ speed }) => {
  const u = useSpinner(speed);
  const c = useControls("torus", {
    position: {
      value: { x: 0, y: 0, z: 0 },
      min: -10,
      max: 10,
      step: 0.01,
    },
    color: {
      value: "#ff6347", // Colore predefinito (tomato)
      label: "Color",
    },
    wireframe: false,
    click: button(() => console.log(`marcom ---> clicked: `)),
    scale: { options: [1, 2, 3, 4, 5, 6] },
  });

  return (
    <>
      <mesh
        //    ref={u.meshRef}
        position={[c.position.x, c.position.y, c.position.z]}
        scale={c.scale}
      >
        {/* Smaller and thinner torus (radius 0.5, thickness 0.1) */}
        <torusGeometry args={[0.5, 0.1, 16, 100]} />
        <meshStandardMaterial
          roughness={0.3} // Less rough surface for softer reflections
          metalness={0.7} // More metallic surface for a shiny effect
          color={c.color}
          wireframe={c.wireframe}
        />
      </mesh>
    </>
  );
};

export { Spinner };
