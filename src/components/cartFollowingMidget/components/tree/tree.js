import * as D from "@rea ct-three/drei";
import { useTree } from "./tree.hook";

const Tree = props => {
  const h = useTree();
  return (
    <group ref={h.group} {...props} dispose={null}>
      <mesh
        geometry={h.nodes["tree-spruce"].geometry}
        material={h.materials.color_main}
      />
    </group>
  );
};

export { Tree };

D.useGLTF.preload("./models/tree-spruce/model.gltf");
