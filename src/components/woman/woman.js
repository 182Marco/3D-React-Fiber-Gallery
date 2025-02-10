import * as D from "@react-three/drei";
import { useWoman } from "./woman.hook";

const Woman = props => {
  const h = useWoman();
  return (
    <>
      <D.OrbitControls />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
      />
      <group
        ref={h.group}
        {...props}
        dispose={null}
        scale={props.scale || 2.6}
        position-y={-2.3}
      >
        <group name="Scene">
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <primitive object={h.nodes.mixamorigHips} />
            <group name="SM_Chr_Developer_Female_02">
              <skinnedMesh
                castShadow
                name="Mesh019"
                geometry={h.nodes.Mesh019.geometry}
                material={h.materials.Glasses}
                skeleton={h.nodes.Mesh019.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_1"
                geometry={h.nodes.Mesh019_1.geometry}
                material={h.materials.Eyes}
                skeleton={h.nodes.Mesh019_1.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_2"
                geometry={h.nodes.Mesh019_2.geometry}
                material={h.materials.Hair}
                skeleton={h.nodes.Mesh019_2.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_3"
                geometry={h.nodes.Mesh019_3.geometry}
                material={h.materials.Skin}
                skeleton={h.nodes.Mesh019_3.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_4"
                geometry={h.nodes.Mesh019_4.geometry}
                material={h.materials.Mouth}
                skeleton={h.nodes.Mesh019_4.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_5"
                geometry={h.nodes.Mesh019_5.geometry}
                material={h.materials.Shirt}
                skeleton={h.nodes.Mesh019_5.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_6"
                geometry={h.nodes.Mesh019_6.geometry}
                material={h.materials.Pants}
                skeleton={h.nodes.Mesh019_6.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_7"
                geometry={h.nodes.Mesh019_7.geometry}
                material={h.materials.Shoes}
                skeleton={h.nodes.Mesh019_7.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_8"
                geometry={h.nodes.Mesh019_8.geometry}
                material={h.materials.Sole}
                skeleton={h.nodes.Mesh019_8.skeleton}
              />
              <skinnedMesh
                castShadow
                name="Mesh019_9"
                geometry={h.nodes.Mesh019_9.geometry}
                material={h.materials.Laces}
                skeleton={h.nodes.Mesh019_9.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial trasparent opacity={0.2} />
      </mesh>
    </>
  );
};

D.useGLTF.preload("./model/woman.gltf");

export { Woman };
