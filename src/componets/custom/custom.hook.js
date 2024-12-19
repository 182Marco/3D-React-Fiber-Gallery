import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const useCustom = () => ({
  texture: useLoader(THREE.TextureLoader, "./img/1.png"),
  positionArray: new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]),
  uvCoordinates: new Float32Array([0, 0, 0, 1, 0]),
});

export { useCustom };
