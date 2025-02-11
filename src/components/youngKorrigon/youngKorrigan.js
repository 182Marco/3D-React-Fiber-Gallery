import { useGLTF } from "@react-three/drei";
import { useYoungKorrigan } from "./youngKorrigan.hook";

const YoungKorrigan = props => {
  const h = useYoungKorrigan();
  return (
    <group ref={h.group} {...props} dispose={null}>
      <group rotation={[0, 0.03, 0]} scale={0.15}>
        <primitive object={h.nodes.root} />
        <skinnedMesh
          geometry={h.nodes.Jeune.geometry}
          material={h.materials["color_main.003"]}
          skeleton={h.nodes.Jeune.skeleton}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./model/youngKorrigan.gltf");

export { YoungKorrigan };
