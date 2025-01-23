import * as D from "@react-three/drei";
import { useHeart } from "./heart.hook";

const Heart = props => {
  const h = useHeart();
  return (
    <>
      <D.Environment preset="sunset" background blur={0.4} />
      <D.OrbitControls enableZoom={false} />
      <D.Float floatIntensity={2} speed={3}>
        <group scale={0.25} {...props} dispose={null} ref={h.allHeart}>
          <mesh
            name="Heart_Full_cell"
            geometry={h.nodes.Heart_Full_cell.geometry}
            material={h.materials.Red}
            position={[-0.378, 1.38, -0.134]}
          />
          <mesh
            name="Heart_Full_cell001"
            geometry={h.nodes.Heart_Full_cell001.geometry}
            material={h.materials.Red}
            position={[-0.97, 1.294, 0.048]}
          />
          <mesh
            name="Heart_Full_cell002"
            geometry={h.nodes.Heart_Full_cell002.geometry}
            material={h.materials.Red}
            position={[0.56, -1.097, -0.527]}
          />
          <mesh
            name="Heart_Full_cell003"
            geometry={h.nodes.Heart_Full_cell003.geometry}
            material={h.materials.Red}
            position={[-1.604, 0.187, 0.577]}
          />
          <mesh
            name="Heart_Full_cell004"
            geometry={h.nodes.Heart_Full_cell004.geometry}
            material={h.materials.Red}
            position={[1.935, 0.809, -0.712]}
          />
          <mesh
            name="Heart_Full_cell006"
            geometry={h.nodes.Heart_Full_cell006.geometry}
            material={h.materials.Red}
            position={[0.664, 1.292, -0.563]}
          />
          <mesh
            name="Heart_Full_cell007"
            geometry={h.nodes.Heart_Full_cell007.geometry}
            material={h.materials.Red}
            position={[-1.994, -0.209, -0.489]}
          />
          <mesh
            name="Heart_Full_cell009"
            geometry={h.nodes.Heart_Full_cell009.geometry}
            material={h.materials.Red}
            position={[1.025, -1.203, 0.783]}
          />
          <mesh
            name="Heart_Full_cell011"
            geometry={h.nodes.Heart_Full_cell011.geometry}
            material={h.materials.Red}
            position={[0.755, 0.098, -1.07]}
          />
          <mesh
            name="Heart_Full_cell012"
            geometry={h.nodes.Heart_Full_cell012.geometry}
            material={h.materials.Red}
            position={[-0.102, 0.836, -0.582]}
          />
          <mesh
            name="Heart_Full_cell013"
            geometry={h.nodes.Heart_Full_cell013.geometry}
            material={h.materials.Red}
            position={[-1.394, 0.944, 1.096]}
          />
          <mesh
            name="Heart_Full_cell014"
            geometry={h.nodes.Heart_Full_cell014.geometry}
            material={h.materials.Red}
            position={[1.462, 0.711, 0.559]}
          />
          <mesh
            name="Heart_Full_cell015"
            geometry={h.nodes.Heart_Full_cell015.geometry}
            material={h.materials.Red}
            position={[1.527, 0.862, -1.101]}
          />
          <mesh
            name="Heart_Full_cell016"
            geometry={h.nodes.Heart_Full_cell016.geometry}
            material={h.materials.Red}
            position={[2.103, 0.027, 0.291]}
          />
          <mesh
            name="Heart_Full_cell017"
            geometry={h.nodes.Heart_Full_cell017.geometry}
            material={h.materials.Red}
            position={[0.037, -1.13, -0.555]}
          />
          <mesh
            name="Heart_Full_cell018"
            geometry={h.nodes.Heart_Full_cell018.geometry}
            material={h.materials.Red}
            position={[-1.661, -0.684, -0.197]}
          />
          <mesh
            name="Heart_Full_cell019"
            geometry={h.nodes.Heart_Full_cell019.geometry}
            material={h.materials.Red}
            position={[-1.37, 0.671, -0.53]}
          />
          <mesh
            name="Heart_Full_cell020"
            geometry={h.nodes.Heart_Full_cell020.geometry}
            material={h.materials.Red}
            position={[-0.147, -1.904, -0.34]}
          />
          <mesh
            name="Heart_Full_cell021"
            geometry={h.nodes.Heart_Full_cell021.geometry}
            material={h.materials.Red}
            position={[1.337, -0.77, 0.073]}
          />
          <mesh
            name="Heart_Full_cell022"
            geometry={h.nodes.Heart_Full_cell022.geometry}
            material={h.materials.Red}
            position={[1.512, -0.508, -1.048]}
          />
          <mesh
            name="Heart_Full_cell023"
            geometry={h.nodes.Heart_Full_cell023.geometry}
            material={h.materials.Red}
            position={[-1.098, 0.375, -1.212]}
          />
          <mesh
            name="Heart_Full_cell024"
            geometry={h.nodes.Heart_Full_cell024.geometry}
            material={h.materials.Red}
            position={[0.652, -0.158, 1.307]}
          />
          <mesh
            name="Heart_Full_cell025"
            geometry={h.nodes.Heart_Full_cell025.geometry}
            material={h.materials.Red}
            position={[-0.341, 0.181, -0.911]}
          />
          <mesh
            name="Heart_Full_cell026"
            geometry={h.nodes.Heart_Full_cell026.geometry}
            material={h.materials.Red}
            position={[0.864, 0.276, 1.016]}
          />
          <mesh
            name="Heart_Full_cell027"
            geometry={h.nodes.Heart_Full_cell027.geometry}
            material={h.materials.Red}
            position={[-0.297, -0.409, -0.57]}
          />
          <mesh
            name="Heart_Full_cell029"
            geometry={h.nodes.Heart_Full_cell029.geometry}
            material={h.materials.Red}
            position={[-1.869, 0.89, -0.101]}
          />
          <mesh
            name="Heart_Full_cell030"
            geometry={h.nodes.Heart_Full_cell030.geometry}
            material={h.materials.Red}
            position={[-1.945, 0.242, -0.776]}
          />
          <mesh
            name="Heart_Full_cell031"
            geometry={h.nodes.Heart_Full_cell031.geometry}
            material={h.materials.Red}
            position={[-0.799, -0.56, 1.044]}
          />
          <mesh
            name="Heart_Full_cell032"
            geometry={h.nodes.Heart_Full_cell032.geometry}
            material={h.materials.Red}
            position={[-1.182, -0.453, -0.871]}
          />
          <mesh
            name="Heart_Full_cell033"
            geometry={h.nodes.Heart_Full_cell033.geometry}
            material={h.materials.Red}
            position={[1.35, 1.484, 0.218]}
          />
          <mesh
            name="Heart_Full_cell034"
            geometry={h.nodes.Heart_Full_cell034.geometry}
            material={h.materials.Red}
            position={[1.458, 0.131, -0.84]}
          />
          <mesh
            name="Heart_Full_cell035"
            geometry={h.nodes.Heart_Full_cell035.geometry}
            material={h.materials.Red}
            position={[0.271, -1.994, -0.406]}
          />
          <mesh
            name="Heart_Full_cell036"
            geometry={h.nodes.Heart_Full_cell036.geometry}
            material={h.materials.Red}
            position={[0.397, -1.607, 0.377]}
          />
          <mesh
            name="Heart_Full_cell037"
            geometry={h.nodes.Heart_Full_cell037.geometry}
            material={h.materials.Red}
            position={[-0.627, -1.287, -0.731]}
          />
          <mesh
            name="Heart_Full_cell038"
            geometry={h.nodes.Heart_Full_cell038.geometry}
            material={h.materials.Red}
            position={[1.877, 0.002, -0.448]}
          />
          <mesh
            name="Heart_Full_cell039"
            geometry={h.nodes.Heart_Full_cell039.geometry}
            material={h.materials.Red}
            position={[-1.833, -0.277, 0.162]}
          />
          <mesh
            name="Heart_Full_cell040"
            geometry={h.nodes.Heart_Full_cell040.geometry}
            material={h.materials.Red}
            position={[-0.881, -1.311, 0.164]}
          />
          <mesh
            name="Heart_Full_cell041"
            geometry={h.nodes.Heart_Full_cell041.geometry}
            material={h.materials.Red}
            position={[-1.738, -0.569, 0.661]}
          />
          <mesh
            name="Heart_Full_cell042"
            geometry={h.nodes.Heart_Full_cell042.geometry}
            material={h.materials.Red}
            position={[-1.252, -0.643, 0.818]}
          />
          <mesh
            name="Heart_Full_cell043"
            geometry={h.nodes.Heart_Full_cell043.geometry}
            material={h.materials.Red}
            position={[-0.279, -0.789, 0.812]}
          />
          <mesh
            name="Heart_Full_cell044"
            geometry={h.nodes.Heart_Full_cell044.geometry}
            material={h.materials.Red}
            position={[-0.999, 0.647, 0.937]}
          />
          <mesh
            name="Heart_Full_cell045"
            geometry={h.nodes.Heart_Full_cell045.geometry}
            material={h.materials.Red}
            position={[1.186, -0.645, -0.566]}
          />
          <mesh
            name="Heart_Full_cell046"
            geometry={h.nodes.Heart_Full_cell046.geometry}
            material={h.materials.Red}
            position={[0.892, 1.389, 0.033]}
          />
          <mesh
            name="Heart_Full_cell047"
            geometry={h.nodes.Heart_Full_cell047.geometry}
            material={h.materials.Red}
            position={[0.36, -0.465, -1.097]}
          />
          <mesh
            name="Heart_Full_cell048"
            geometry={h.nodes.Heart_Full_cell048.geometry}
            material={h.materials.Red}
            position={[2.118, 0.791, -0.167]}
          />
          <mesh
            name="Heart_Full_cell049"
            geometry={h.nodes.Heart_Full_cell049.geometry}
            material={h.materials.Red}
            position={[1.579, 1.102, -0.353]}
          />
          <mesh
            name="Heart_Full_cell050"
            geometry={h.nodes.Heart_Full_cell050.geometry}
            material={h.materials.Red}
            position={[0.076, 0.456, 0.426]}
          />
          <mesh
            name="Heart_Full_cell051"
            geometry={h.nodes.Heart_Full_cell051.geometry}
            material={h.materials.Red}
            position={[-0.802, 0.933, -0.989]}
          />
          <mesh
            name="Heart_Full_cell052"
            geometry={h.nodes.Heart_Full_cell052.geometry}
            material={h.materials.Red}
            position={[0.86, 0.73, -0.705]}
          />
          <mesh
            name="Heart_Full_cell053"
            geometry={h.nodes.Heart_Full_cell053.geometry}
            material={h.materials.Red}
            position={[-0.098, -1.955, 0.437]}
          />
          <mesh
            name="Heart_Full_cell054"
            geometry={h.nodes.Heart_Full_cell054.geometry}
            material={h.materials.Red}
            position={[0.091, 1.215, 0.232]}
          />
          <mesh
            name="Heart_Full_cell055"
            geometry={h.nodes.Heart_Full_cell055.geometry}
            material={h.materials.Red}
            position={[0.682, -0.634, 0.771]}
          />
          <mesh
            name="Heart_Full_cell056"
            geometry={h.nodes.Heart_Full_cell056.geometry}
            material={h.materials.Red}
            position={[0.126, -0.064, 1.148]}
          />
          <mesh
            name="Heart_Full_cell057"
            geometry={h.nodes.Heart_Full_cell057.geometry}
            material={h.materials.Red}
            position={[-1.252, -1.019, -0.68]}
          />
          <mesh
            name="Heart_Full_cell058"
            geometry={h.nodes.Heart_Full_cell058.geometry}
            material={h.materials.Red}
            position={[0.945, 0.816, 1.139]}
          />
          <mesh
            name="Heart_Full_cell059"
            geometry={h.nodes.Heart_Full_cell059.geometry}
            material={h.materials.Red}
            position={[1.589, -0.356, 0.773]}
          />
          <mesh
            name="Heart_Full_cell060"
            geometry={h.nodes.Heart_Full_cell060.geometry}
            material={h.materials.Red}
            position={[1.92, 0.027, 0.91]}
          />
          <mesh
            name="Heart_Full_cell061"
            geometry={h.nodes.Heart_Full_cell061.geometry}
            material={h.materials.Red}
            position={[-2.321, 0.315, -0.099]}
          />
          <mesh
            name="Heart_Full_cell063"
            geometry={h.nodes.Heart_Full_cell063.geometry}
            material={h.materials.Red}
            position={[-1.908, 0.734, 0.484]}
          />
          <mesh
            name="origin"
            geometry={h.nodes.origin.geometry}
            material={h.materials.Red}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </D.Float>
    </>
  );
};

D.useGLTF.preload("/model/heart.glb");

export { Heart };
