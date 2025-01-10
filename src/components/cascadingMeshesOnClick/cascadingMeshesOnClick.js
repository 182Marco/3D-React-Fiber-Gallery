import { OrbitControls } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useCascadingMeshesOnClick } from "./cascadingMeshesOnClick.hook";

const CascadingMeshesOnClick = () => {
  const u = useCascadingMeshesOnClick();

  return (
    <>
      <OrbitControls />
      {u.trail.map((e, i) => (
        <a.mesh
          key={e.key}
          scale={e.scale}
          position-x={-1 + i}
          onPointerMissed={u.handleMiss}
        >
          <boxGeometry />
          <meshBasicMaterial />
        </a.mesh>
      ))}
    </>
  );
};

export { CascadingMeshesOnClick };
