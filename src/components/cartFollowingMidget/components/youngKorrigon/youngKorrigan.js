import * as D from "@react-three/drei";
import { useYoungKorrigan } from "./youngKorrigan.hook";

const YoungKorrigan = props => {
  const h = useYoungKorrigan();

  return (
    <group ref={h.group} {...props} dispose={null}>
      <primitive object={h.nodes.rootankou} />
      <group name="ankou">
        <primitive object={h.nodes.spine004} />
        <skinnedMesh
          geometry={h.nodes.horse.geometry}
          material={h.nodes.horse.material}
          skeleton={h.nodes.horse.skeleton}
        />
        <mesh
          geometry={h.nodes.horse_coth.geometry}
          material={h.nodes.horse_coth.material}
          rotation={[0, 0.01, 0]}
        />
        <mesh
          geometry={h.nodes.horse_strap.geometry}
          material={h.nodes.horse_strap.material}
          rotation={[0, 0.01, 0]}
        />
        <mesh
          geometry={h.nodes.horse_strap001.geometry}
          material={h.nodes.horse_strap001.material}
          rotation={[0, 0.01, 0]}
        />
        <mesh
          geometry={h.nodes.strap_hook.geometry}
          material={h.nodes.strap_hook.material}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
        <mesh
          geometry={h.nodes.strap_hook001.geometry}
          material={h.nodes.strap_hook001.material}
          position={[1.28, 0, -0.01]}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
        <mesh
          geometry={h.nodes.strap_hook002.geometry}
          material={h.nodes.strap_hook002.material}
          position={[0, 0.01, 0.36]}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
        <mesh
          geometry={h.nodes.strap_hook003.geometry}
          material={h.nodes.strap_hook003.material}
          position={[1.28, 0.01, 0.35]}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
      </group>
      <skinnedMesh
        geometry={h.nodes.ankou_sickle.geometry}
        material={h.nodes.ankou_sickle.material}
        skeleton={h.nodes.ankou_sickle.skeleton}
      />
      <skinnedMesh
        geometry={h.nodes.ankou002.geometry}
        material={h.nodes.ankou002.material}
        skeleton={h.nodes.ankou002.skeleton}
      />
      <group position={[-0.08, 0.81, -0.78]}>
        <primitive object={h.nodes.cart} />
        <skinnedMesh
          geometry={h.nodes.accroche_crane.geometry}
          material={h.nodes.accroche_crane.material}
          skeleton={h.nodes.accroche_crane.skeleton}
        />
        <mesh
          geometry={h.nodes.cart_shaft.geometry}
          material={h.nodes.cart_shaft.material}
          position={[0.1, -0.8, 0.78]}
          rotation={[Math.PI / 2, 0, -1.56]}
        />
        <skinnedMesh
          geometry={h.nodes.bloc_wheel_D.geometry}
          material={h.nodes.bloc_wheel_D.material}
          skeleton={h.nodes.bloc_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.bloc_wheel_G.geometry}
          material={h.nodes.bloc_wheel_G.material}
          skeleton={h.nodes.bloc_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_base.geometry}
          material={h.nodes.cart_base.material}
          skeleton={h.nodes.cart_base.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_boad_AB.geometry}
          material={h.nodes.cart_boad_AB.material}
          skeleton={h.nodes.cart_boad_AB.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_boad_AH.geometry}
          material={h.nodes.cart_boad_AH.material}
          skeleton={h.nodes.cart_boad_AH.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_boad_DB.geometry}
          material={h.nodes.cart_boad_DB.material}
          skeleton={h.nodes.cart_boad_DB.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_boad_DH.geometry}
          material={h.nodes.cart_boad_DH.material}
          skeleton={h.nodes.cart_boad_DH.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_boad_GB.geometry}
          material={h.nodes.cart_boad_GB.material}
          skeleton={h.nodes.cart_boad_GB.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_boad_GH.geometry}
          material={h.nodes.cart_boad_GH.material}
          skeleton={h.nodes.cart_boad_GH.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_AD.geometry}
          material={h.nodes.cart_post_AD.material}
          skeleton={h.nodes.cart_post_AD.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_AG.geometry}
          material={h.nodes.cart_post_AG.material}
          skeleton={h.nodes.cart_post_AG.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_AM.geometry}
          material={h.nodes.cart_post_AM.material}
          skeleton={h.nodes.cart_post_AM.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_Ar.geometry}
          material={h.nodes.cart_post_Ar.material}
          skeleton={h.nodes.cart_post_Ar.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_ArD.geometry}
          material={h.nodes.cart_post_ArD.material}
          skeleton={h.nodes.cart_post_ArD.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_ArG.geometry}
          material={h.nodes.cart_post_ArG.material}
          skeleton={h.nodes.cart_post_ArG.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_crane.geometry}
          material={h.nodes.cart_post_crane.material}
          skeleton={h.nodes.cart_post_crane.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_DMA.geometry}
          material={h.nodes.cart_post_DMA.material}
          skeleton={h.nodes.cart_post_DMA.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_DMAr.geometry}
          material={h.nodes.cart_post_DMAr.material}
          skeleton={h.nodes.cart_post_DMAr.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_GMA.geometry}
          material={h.nodes.cart_post_GMA.material}
          skeleton={h.nodes.cart_post_GMA.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_post_GMAr.geometry}
          material={h.nodes.cart_post_GMAr.material}
          skeleton={h.nodes.cart_post_GMAr.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.cart_rope.geometry}
          material={h.nodes.cart_rope.material}
          skeleton={h.nodes.cart_rope.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.hub_wheel_D.geometry}
          material={h.nodes.hub_wheel_D.material}
          skeleton={h.nodes.hub_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.hub_wheel_G.geometry}
          material={h.nodes.hub_wheel_G.material}
          skeleton={h.nodes.hub_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.skull_1.geometry}
          material={h.nodes.skull_1.material}
          skeleton={h.nodes.skull_1.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.spokes_wheel_D.geometry}
          material={h.nodes.spokes_wheel_D.material}
          skeleton={h.nodes.spokes_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.spokes_wheel_G.geometry}
          material={h.nodes.spokes_wheel_G.material}
          skeleton={h.nodes.spokes_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.steel_wheel_D.geometry}
          material={h.nodes.steel_wheel_D.material}
          skeleton={h.nodes.steel_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.steel_wheel_G.geometry}
          material={h.nodes.steel_wheel_G.material}
          skeleton={h.nodes.steel_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.wood_wheel_D.geometry}
          material={h.nodes.wood_wheel_D.material}
          skeleton={h.nodes.wood_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={h.nodes.wood_wheel_G.geometry}
          material={h.nodes.wood_wheel_G.material}
          skeleton={h.nodes.wood_wheel_G.skeleton}
        />
      </group>
    </group>
  );
};

D.useGLTF.preload("./model/youngKorrigan.gltf");

export { YoungKorrigan };
