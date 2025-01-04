import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as C from "../componets";
import * as D from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const cubeRef = useRef();
  const layerRef = useRef();
  const [hover, setHover] = useState(false);
  D.useCursor(hover);

  useFrame(
    () =>
      (cubeRef.current.position.x = THREE.MathUtils.lerp(
        cubeRef.current.position.x,
        3,
        0.001
      ))
  );

  useFrame(() => {
    layerRef.current.material.distort = THREE.MathUtils.lerp(
      layerRef.current.material.distort,
      hover ? 0.3 : 0,
      0.02
    );
  }, [hover]);

  return (
    <>
      <ambientLight intensity={1} />
      <D.OrbitControls position={[0, 3, 3]} rotation={[-Math.PI, 0, 0]} />
      <mesh
        rotation={[0, 0, Math.PI]}
        position={[0, 0, 0]}
        ref={layerRef}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <planeGeometry args={[5, 5, 32, 32]} />
        <D.MeshDistortMaterial
          color="white"
          // distort={hover ? 0.3 : 0}
          speed={10}
          wireframe
        >
          <D.GradientTexture
            colors={["red", "blue", "yellow"]}
            stops={[0, 0.5, 1]}
          />
        </D.MeshDistortMaterial>
      </mesh>
      <mesh position={[0, -4, 0]} ref={cubeRef}>
        <boxGeometry args={[1, 1, 1, 4, 4, 4]} />
        <meshStandardMaterial color="green" wireframe />
      </mesh>
      {/* <mesh>
        <boxGeometry args={[1, 1, 1, 16, 32, 32]} />
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
