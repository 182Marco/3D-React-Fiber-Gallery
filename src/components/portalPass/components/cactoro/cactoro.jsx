import { useCactoro } from "./cactoro.hook";
import { useGLTF } from "@react-three/drei";

const Cactoro = ({ hover, ...props }) => {
  const h = useCactoro(hover);
  return (
    <group ref={h.group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={h.nodes.Body} />
          <primitive object={h.nodes.Head} />
          <group name="Cactoro_Blob">
            <skinnedMesh
              name="Cube146"
              geometry={h.nodes.Cube146.geometry}
              material={h.materials.Cactoro_Main}
              skeleton={h.nodes.Cube146.skeleton}
            />
            <skinnedMesh
              name="Cube146_1"
              geometry={h.nodes.Cube146_1.geometry}
              material={h.materials.Cactoro_Secondary}
              skeleton={h.nodes.Cube146_1.skeleton}
            />
          </group>
          <group name="Cactoro_Blob001">
            <skinnedMesh
              name="Cube000"
              geometry={h.nodes.Cube000.geometry}
              material={h.materials.Cactoro_Main}
              skeleton={h.nodes.Cube000.skeleton}
            />
            <skinnedMesh
              name="Cube000_1"
              geometry={h.nodes.Cube000_1.geometry}
              material={h.materials.Cactoro_Secondary}
              skeleton={h.nodes.Cube000_1.skeleton}
            />
            <skinnedMesh
              name="Cube000_2"
              geometry={h.nodes.Cube000_2.geometry}
              material={h.materials.Cactoro_Red}
              skeleton={h.nodes.Cube000_2.skeleton}
            />
            <skinnedMesh
              name="Cube000_3"
              geometry={h.nodes.Cube000_3.geometry}
              material={h.materials.Eye_Black}
              skeleton={h.nodes.Cube000_3.skeleton}
            />
            <skinnedMesh
              name="Cube000_4"
              geometry={h.nodes.Cube000_4.geometry}
              material={h.materials.Eye_White}
              skeleton={h.nodes.Cube000_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./model/cactoro.gltf");

export { Cactoro };
