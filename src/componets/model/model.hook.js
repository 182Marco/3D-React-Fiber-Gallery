import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const useModel = () => ({
  //model: useLoader(GLTFLoader, "./model/dog.glb"),
  model: useGLTF("./model/dog.glb"),
});

export { useModel };
