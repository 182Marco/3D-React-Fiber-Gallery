import { useState } from "react";
import * as C from "../componets";
import * as D from "@react-three/drei";

const Scene = () => {
  const [hover, setHover] = useState(false);
  D.useCursor(hover);
  return (
    <>
      <ambientLight />
      <D.OrbitControls position={[0, 3, 3]} rotation={[-Math.PI, 0, 0]} />
      <mesh
        rotation={[0, 0, Math.PI]}
        position={[0, 0, 0]}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <planeGeometry args={[5, 5, 32, 32]} />
        <D.MeshDistortMaterial color="white" distort={0.3} speed={3} wireframe>
          <D.GradientTexture
            colors={["red", "blue", "yellow"]}
            stops={[0, 0.5, 1]}
          />
        </D.MeshDistortMaterial>
      </mesh>
      {/* <mesh>
        <boxGeometry args={[1, 1, 1, 32, 32, 32]} />
        <D.MeshWobbleMaterial color="red" factor={3} speed={0.3} wireframe />
        gelatinus material
      </mesh> */}
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1}>
        <boxGeometry args={[6, 6, 1]} />
        <D.MeshReflectorMaterial
          resolution={512}
          color="grey"
          blur={[1000, 100]}
          mixBlur={1}
          mirror={1} // reflect evironment map
        />
      </mesh> */}
    </>
  );
};

export { Scene };
