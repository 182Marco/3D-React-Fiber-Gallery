import { useGLTF } from "@react-three/drei";
import { useOffice } from "./office.hook";

const Office = props => {
  const h = useOffice();

  return (
    <group
      {...props}
      rotation={[0, -Math.PI / 4, 0]}
      dispose={null}
      ref={h.allOfficeRef}
    >
      <mesh
        geometry={h.nodes["01_office"].geometry}
        material={h.materials["01"]}
      />
      <group position={[0, 2.114, -2.23]}>
        <group ref={h.libraryRef}>
          <mesh
            geometry={h.nodes["02_library"].geometry}
            material={h.materials["02"]}
          />
        </group>
      </group>
      <group position={[-1.97, 4.227, -2.199]}>
        <group ref={h.atticRef}>
          <mesh
            geometry={h.nodes["03_attic"].geometry}
            material={h.materials["03"]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./model/WawaOffice.glb");

export { Office };
