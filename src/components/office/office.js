import { useGLTF } from "@react-three/drei";
import { useOffice } from "./office.hook";

const Office = props => {
  const h = useOffice();

  return (
    <group {...props} dispose={null} ref={h.groupRef}>
      <mesh
        geometry={h.nodes["01_office"].geometry}
        material={h.materials["01"]}
      />
      <mesh
        geometry={h.nodes["02_library"].geometry}
        material={h.materials["02"]}
        position={[0, 2.114, -2.23]}
      />
      <mesh
        geometry={h.nodes["03_attic"].geometry}
        material={h.materials["03"]}
        position={[-1.97, 4.227, -2.199]}
      />
    </group>
  );
};

useGLTF.preload("./model/WawaOffice.glb");

export { Office };
