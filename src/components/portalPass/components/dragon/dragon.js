import { useDragon } from "./dragon.hook";
import { useGLTF } from "@react-three/drei";

const Dragon = props => {
  const h = useDragon();
  return (
    <group ref={h.group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={h.nodes.Root} />
          <group name="Dragon">
            <skinnedMesh
              name="Cube221"
              geometry={h.nodes.Cube221.geometry}
              material={h.materials.Dragon_Main}
              skeleton={h.nodes.Cube221.skeleton}
            />
            <skinnedMesh
              name="Cube221_1"
              geometry={h.nodes.Cube221_1.geometry}
              material={h.materials.Dragon_Secondary}
              skeleton={h.nodes.Cube221_1.skeleton}
            />
            <skinnedMesh
              name="Cube221_2"
              geometry={h.nodes.Cube221_2.geometry}
              material={h.materials.Dragon_Horn}
              skeleton={h.nodes.Cube221_2.skeleton}
            />
            <skinnedMesh
              name="Cube221_3"
              geometry={h.nodes.Cube221_3.geometry}
              material={h.materials.Eye_Black}
              skeleton={h.nodes.Cube221_3.skeleton}
            />
            <skinnedMesh
              name="Cube221_4"
              geometry={h.nodes.Cube221_4.geometry}
              material={h.materials.Eye_White}
              skeleton={h.nodes.Cube221_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export { Dragon };

useGLTF.preload("./model/dragon.js");
