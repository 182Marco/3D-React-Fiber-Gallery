import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Custom = () => {
  const texture = useLoader(THREE.TextureLoader, "./img/1.png");

  const positionArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

  const uvCoordinates = new Float32Array([0, 0, 0, 1, 0]);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length / 3}
          itemSize={3}
          array={positionArray}
        />
        <bufferAttribute
          attach="attributes-uv"
          count={uvCoordinates.length / 2}
          itemSize={2}
          array={uvCoordinates}
        />
      </bufferGeometry>
      <meshBasicMaterial side={THREE.DoubleSide} map={texture} />
    </mesh>
  );
};

export { Custom };
