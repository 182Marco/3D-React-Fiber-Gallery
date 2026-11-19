import * as THREE from "three";
import { useCustomModel } from "./customModel.hook";

const CustomModel = () => {
  const u = useCustomModel();
  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={u.positionArray.length / 3}
          itemSize={3}
          array={u.positionArray}
        />
        <bufferAttribute
          attach="attributes-uv"
          count={u.uvCoordinates.length / 2}
          itemSize={2}
          array={u.uvCoordinates}
        />
      </bufferGeometry>
      <meshBasicMaterial side={THREE.DoubleSide} map={u.texture} />
    </mesh>
  );
};

export { CustomModel };
