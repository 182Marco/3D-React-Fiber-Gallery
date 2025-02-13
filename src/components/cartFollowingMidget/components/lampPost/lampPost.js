import { useGLTF } from "@react-three/drei";
import { useLampPost } from "./lampPost.hook";

const LampPost = props => {
  const h = useLampPost();
  return (
    <group ref={h.group} {...props} dispose={null}>
      <mesh
        geometry={h.nodes.Cylinder096.geometry}
        material={h.materials["Black.012"]}
      />
      <mesh
        geometry={h.nodes.Cylinder096_1.geometry}
        material={h.materials["Yellow.007"]}
      >
        <meshBasicMaterial color={[1.2, 1.2, 0.6]} toneMapped={false} />
      </mesh>
    </group>
  );
};

useGLTF.preload("./model/lampPost.gltf");

export { LampPost };
