import { OrbitControls } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useCascadingMeshes } from "./cascadingMeshes.hook";

const CascadingMeshes = () => {
  const u = useCascadingMeshes();

  return (
    <>
      <OrbitControls />
      {u.trail.map((e, i) => (
        <a.mesh key={e.key} scale={e.scale} position-x={-1 + i}>
          <boxGeometry />
          <meshBasicMaterial />
        </a.mesh>
      ))}
    </>
  );
};

export { CascadingMeshes };
