import { useGLTF } from "@react-three/drei";
import { useAnkou } from "./ankou.hook";

const Ankou = props => {
  const h = useAnkou();
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

useGLTF.preload("./model/ankouChart.gltf");

export { Ankou };
