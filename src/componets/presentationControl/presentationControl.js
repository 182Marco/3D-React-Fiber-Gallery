import { PresentationControls } from "@react-three/drei";

const PresentationControl = () => {
  return (
    <PresentationControls global>
      <mesh>
        <boxGeometry args={[4, 4, 4]} />
        <meshBasicMaterial color="lightgreen" wireframe />
      </mesh>
    </PresentationControls>
  );
};

export { PresentationControl };
