import { useFish } from "./fish.hook";
import { useGLTF } from "@react-three/drei";

const Fish = props => {
  const h = useFish();
  return (
    <group ref={h.group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={h.nodes.Root} />
          <group name="Fish">
            <skinnedMesh
              name="Sphere026"
              geometry={h.nodes.Sphere026.geometry}
              material={h.materials.Fish_Main}
              skeleton={h.nodes.Sphere026.skeleton}
            />
            <skinnedMesh
              name="Sphere026_1"
              geometry={h.nodes.Sphere026_1.geometry}
              material={h.materials.Fish_Secondary}
              skeleton={h.nodes.Sphere026_1.skeleton}
            />
            <skinnedMesh
              name="Sphere026_2"
              geometry={h.nodes.Sphere026_2.geometry}
              material={h.materials.Eye_Black}
              skeleton={h.nodes.Sphere026_2.skeleton}
            />
            <skinnedMesh
              name="Sphere026_3"
              geometry={h.nodes.Sphere026_3.geometry}
              material={h.materials.Eye_White}
              skeleton={h.nodes.Sphere026_3.skeleton}
            />
            <skinnedMesh
              name="Sphere026_4"
              geometry={h.nodes.Sphere026_4.geometry}
              material={h.materials.Mouth}
              skeleton={h.nodes.Sphere026_4.skeleton}
            />
            <skinnedMesh
              name="Sphere026_5"
              geometry={h.nodes.Sphere026_5.geometry}
              material={h.materials.Fish_Flaps}
              skeleton={h.nodes.Sphere026_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./model/fish.gltf");

export { Fish };
