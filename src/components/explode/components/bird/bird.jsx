import { useGLTF } from "@react-three/drei";
import { useBird } from "./bird.hook";

const Bird = props => {
  const h = useBird();
  return (
    <group {...props} dispose={null} ref={h.group}>
      <mesh
        name="origin"
        geometry={h.nodes.origin.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell001"
        geometry={h.nodes.WesternBluebird_Mesh_cell001.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.162, 0.329, 0.301]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell003"
        geometry={h.nodes.WesternBluebird_Mesh_cell003.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.009, -0.397, -0.971]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell004"
        geometry={h.nodes.WesternBluebird_Mesh_cell004.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.058, 0.032, 0.398]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell007"
        geometry={h.nodes.WesternBluebird_Mesh_cell007.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.016, 0.247, 0.411]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell010"
        geometry={h.nodes.WesternBluebird_Mesh_cell010.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.296, 0.022, -0.035]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell011"
        geometry={h.nodes.WesternBluebird_Mesh_cell011.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.087, -0.458, -0.048]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell016"
        geometry={h.nodes.WesternBluebird_Mesh_cell016.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.004, -0.148, -0.591]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell018"
        geometry={h.nodes.WesternBluebird_Mesh_cell018.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.217, 0.203, 0.196]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell019"
        geometry={h.nodes.WesternBluebird_Mesh_cell019.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.008, -0.31, -0.739]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell021"
        geometry={h.nodes.WesternBluebird_Mesh_cell021.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.202, -0.199, -0.308]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell022"
        geometry={h.nodes.WesternBluebird_Mesh_cell022.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.092, -0.438, 0.056]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell023"
        geometry={h.nodes.WesternBluebird_Mesh_cell023.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.219, -0.21, -0.213]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell026"
        geometry={h.nodes.WesternBluebird_Mesh_cell026.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.211, 0.119, -0.02]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell027"
        geometry={h.nodes.WesternBluebird_Mesh_cell027.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.076, -0.285, -0.749]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell028"
        geometry={h.nodes.WesternBluebird_Mesh_cell028.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.085, -0.373, 0.005]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell029"
        geometry={h.nodes.WesternBluebird_Mesh_cell029.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.081, 0.175, -0.097]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell030"
        geometry={h.nodes.WesternBluebird_Mesh_cell030.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.091, -0.278, 0.163]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell031"
        geometry={h.nodes.WesternBluebird_Mesh_cell031.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.07, -0.318, -0.064]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell032"
        geometry={h.nodes.WesternBluebird_Mesh_cell032.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.009, 0.411, 0.421]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell034"
        geometry={h.nodes.WesternBluebird_Mesh_cell034.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.018, -0.28, -0.401]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell036"
        geometry={h.nodes.WesternBluebird_Mesh_cell036.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.197, -0.215, 0.085]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell037"
        geometry={h.nodes.WesternBluebird_Mesh_cell037.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.249, -0.124, 0.044]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell038"
        geometry={h.nodes.WesternBluebird_Mesh_cell038.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.098, -0.074, -0.149]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell040"
        geometry={h.nodes.WesternBluebird_Mesh_cell040.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.057, -0.056, 0.268]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell042"
        geometry={h.nodes.WesternBluebird_Mesh_cell042.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.001, 0.38, 0.603]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell043"
        geometry={h.nodes.WesternBluebird_Mesh_cell043.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.182, -0.287, 0.006]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell044"
        geometry={h.nodes.WesternBluebird_Mesh_cell044.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.321, -0.012, -0.026]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell045"
        geometry={h.nodes.WesternBluebird_Mesh_cell045.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.116, -0.318, -0.137]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell046"
        geometry={h.nodes.WesternBluebird_Mesh_cell046.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.097, -0.309, -0.23]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell048"
        geometry={h.nodes.WesternBluebird_Mesh_cell048.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.126, -0.146, -0.458]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell049"
        geometry={h.nodes.WesternBluebird_Mesh_cell049.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.185, -0.006, -0.256]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell051"
        geometry={h.nodes.WesternBluebird_Mesh_cell051.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.038, 0.361, 0.142]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell052"
        geometry={h.nodes.WesternBluebird_Mesh_cell052.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.03, -0.203, 0.09]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell053"
        geometry={h.nodes.WesternBluebird_Mesh_cell053.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.146, -0.312, 0.028]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell054"
        geometry={h.nodes.WesternBluebird_Mesh_cell054.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.23, 0.239, 0.143]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell055"
        geometry={h.nodes.WesternBluebird_Mesh_cell055.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.108, -0.283, 0.113]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell056"
        geometry={h.nodes.WesternBluebird_Mesh_cell056.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.1, -0.225, -0.543]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell057"
        geometry={h.nodes.WesternBluebird_Mesh_cell057.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.164, 0.102, 0.273]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell059"
        geometry={h.nodes.WesternBluebird_Mesh_cell059.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.069, -0.098, -0.52]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell061"
        geometry={h.nodes.WesternBluebird_Mesh_cell061.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.267, -0.184, -0.124]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell063"
        geometry={h.nodes.WesternBluebird_Mesh_cell063.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.166, 0.055, -0.269]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell064"
        geometry={h.nodes.WesternBluebird_Mesh_cell064.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.253, -0.05, 0.144]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell065"
        geometry={h.nodes.WesternBluebird_Mesh_cell065.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.058, -0.462, 0.106]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell066"
        geometry={h.nodes.WesternBluebird_Mesh_cell066.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.313, -0.132, -0.216]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell067"
        geometry={h.nodes.WesternBluebird_Mesh_cell067.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.101, 0.105, -0.296]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell071"
        geometry={h.nodes.WesternBluebird_Mesh_cell071.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.093, -0.028, -0.41]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell072"
        geometry={h.nodes.WesternBluebird_Mesh_cell072.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.203, -0.199, -0.437]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell073"
        geometry={h.nodes.WesternBluebird_Mesh_cell073.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.295, 0.083, 0.206]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell075"
        geometry={h.nodes.WesternBluebird_Mesh_cell075.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.054, -0.243, -0.276]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell005"
        geometry={h.nodes.WesternBluebird_Mesh_cell005.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.092, -0.457, 0.141]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell006"
        geometry={h.nodes.WesternBluebird_Mesh_cell006.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.058, -0.459, 0.134]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell008"
        geometry={h.nodes.WesternBluebird_Mesh_cell008.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[-0.128, -0.457, 0.147]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell009"
        geometry={h.nodes.WesternBluebird_Mesh_cell009.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.107, -0.455, 0.055]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell012"
        geometry={h.nodes.WesternBluebird_Mesh_cell012.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.087, -0.456, -0.035]}
      />
      <mesh
        name="WesternBluebird_Mesh_cell013"
        geometry={h.nodes.WesternBluebird_Mesh_cell013.geometry}
        material={h.materials["WesternBluebird_Mat.001"]}
        position={[0.09, -0.455, 0.114]}
      />
    </group>
  );
};

useGLTF.preload("/model/Westernbluebird.glb");

export { Bird };
