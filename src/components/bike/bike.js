import { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useBike } from "./bike.hook";
import { useFrame } from "@react-three/fiber";

const Bike = props => {
  const u = useBike();
  const backTireRef = useRef();
  const backRadiusRef = useRef();
  const frontTireRef = useRef();
  const frontRadiusRef = useRef();

  useFrame((_, deltaT) => {
    backTireRef.current.rotation.y -= deltaT * 2;
    backRadiusRef.current.rotation.z -= deltaT * 2;
    frontTireRef.current.rotation.y -= deltaT * 2;
    frontRadiusRef.current.rotation.z -= deltaT * 2;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={3} />
      <directionalLight />
      <group scale={1.5} {...props} dispose={null}>
        <mesh geometry={u.nodes.Bike.geometry} material={u.materials.Quadro}>
          <group position={[-1.053, -1.178, 0.005]}>
            <mesh
              geometry={u.nodes.Cylinder002_1.geometry}
              material={u.materials.Eixo}
            />
            <mesh
              geometry={u.nodes.Cylinder002_2.geometry}
              material={u.materials.Roda}
            />
          </group>
          <group
            position={[-1.047, -1.181, 0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.792, 0.546, 0.792]}
          >
            <mesh
              geometry={u.nodes.Torus003.geometry}
              material={u.materials.Pneu}
              ref={backTireRef}
            />
            <mesh
              geometry={u.nodes.Torus003_1.geometry}
              material={u.materials.Roda}
            />
            <mesh
              geometry={u.nodes.Torus003_2.geometry}
              material={u.materials.Faixa}
            />
          </group>
          <mesh
            geometry={u.nodes.B_Raios.geometry}
            material={u.materials.Raio}
            position={[-1.053, -1.178, 0.005]}
            ref={backRadiusRef}
          />
          <group
            position={[-0.428, -0.32, 0.011]}
            rotation={[1.571, -1.414, 3.142]}
            scale={[1, 3.023, 1]}
          >
            <mesh
              geometry={u.nodes.Cylinder006.geometry}
              material={u.materials.Roda}
            />
            <mesh
              geometry={u.nodes.Cylinder006_1.geometry}
              material={u.materials.Pneu}
            />
          </group>
          <group
            position={[1.73, -0.423, 0.134]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 3.023, 1]}
          >
            <mesh
              geometry={u.nodes.Cylinder004.geometry}
              material={u.materials.Roda}
            />
            <mesh
              geometry={u.nodes.Cylinder004_1.geometry}
              material={u.materials.Pneu}
            />
          </group>
          <mesh
            geometry={u.nodes.CaboFreioFrente.geometry}
            material={u.materials.Pneu}
            position={[1.676, -0.253, -0.146]}
          />
          <mesh
            geometry={u.nodes.Cube.geometry}
            material={u.materials.Pneu}
            position={[-0.061, 0.319, 0]}
            scale={0.091}
          />
          <group position={[0.272, -1.172, 0.013]}>
            <mesh
              geometry={u.nodes.Cylinder005.geometry}
              material={u.materials.PedalInterno}
            />
            <mesh
              geometry={u.nodes.Cylinder005_1.geometry}
              material={u.materials.PedalExterno}
            />
          </group>
          <mesh
            geometry={u.nodes.Cylinder001.geometry}
            material={u.materials.PedalInterno}
            position={[-1.029, -1.179, 0.165]}
            scale={0.501}
          />
          <group
            position={[0.286, -0.975, 0.155]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.207, 0.127, 0.207]}
          >
            <mesh
              geometry={u.nodes.Cylinder010.geometry}
              material={u.materials.Raio}
            />
            <mesh
              geometry={u.nodes.Cylinder010_1.geometry}
              material={u.materials.Pneu}
            />
          </group>
          <group
            position={[1.308, 0.35, 0.012]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.371}
          >
            <mesh
              geometry={u.nodes.Cylinder011.geometry}
              material={u.materials.Raio}
            />
            <mesh
              geometry={u.nodes.Cylinder011_1.geometry}
              material={u.materials.Pneu}
            />
          </group>
          <group position={[1.899, -1.178, 0.005]}>
            <mesh
              geometry={u.nodes.Cylinder_1.geometry}
              material={u.materials.Eixo}
            />
            <mesh
              geometry={u.nodes.Cylinder_2.geometry}
              material={u.materials.Roda}
            />
          </group>
          <group
            position={[1.905, -1.181, 0.005]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.792, 0.546, 0.792]}
          >
            <mesh
              geometry={u.nodes.Torus002.geometry}
              material={u.materials.Pneu}
              ref={frontTireRef}
            />
            <mesh
              geometry={u.nodes.Torus002_1.geometry}
              material={u.materials.Roda}
            />
            <mesh
              geometry={u.nodes.Torus002_2.geometry}
              material={u.materials.Faixa}
            />
          </group>
          <mesh
            geometry={u.nodes.F_Raios.geometry}
            material={u.materials.Raio}
            position={[1.899, -1.178, 0.005]}
            ref={frontRadiusRef}
          />
          <mesh
            geometry={u.nodes.NurbsCurve.geometry}
            material={u.materials.Pneu}
            position={[0.43, -0.796, 0.092]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <group position={[0.272, -1.527, -0.49]} scale={[3.421, 3.276, 10.4]}>
            <mesh
              geometry={u.nodes.Cylinder007.geometry}
              material={u.materials.Pneu}
            />
            <mesh
              geometry={u.nodes.Cylinder007_1.geometry}
              material={u.materials.Quadro}
            />
          </group>
          <group position={[0.272, -0.814, 0.522]} scale={[3.421, 3.276, 10.4]}>
            <mesh
              geometry={u.nodes.Cylinder008.geometry}
              material={u.materials.Pneu}
            />
            <mesh
              geometry={u.nodes.Cylinder008_1.geometry}
              material={u.materials.Quadro}
            />
          </group>
          <mesh
            geometry={u.nodes.Sphere.geometry}
            material={u.materials.Roda}
            position={[-0.381, -0.26, 0.18]}
            scale={0.009}
          />
          <mesh
            geometry={u.nodes.Sphere002.geometry}
            material={u.materials.Raio}
            position={[1.676, -0.251, -0.192]}
            scale={0.01}
          />
        </mesh>
      </group>
    </>
  );
};

useGLTF.preload("/model/bike.gltf");

export { Bike };
