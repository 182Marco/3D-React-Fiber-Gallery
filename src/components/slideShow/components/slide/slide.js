import * as D from "@react-three/drei";
import * as THREE from "three";
import { DEG2RAD } from "three/src/math/MathUtils";
import { useScene } from "./slide.hook";

const Scene = ({ mainColor, path, ...props }) => {
  const h = useScene(path);
  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <group {...props} dispose={null}>
        <D.PerspectiveCamera makeDefault position={[3, 3, 8]} near={0.5} />
        <D.OrbitControls
          autoRotate
          enablePan={false}
          maxPolarAngle={DEG2RAD * 75}
          minDistance={6}
          maxDistance={10}
          autoRotateSpeed={0.5}
        />
        <primitive object={h.scene} scale={h.ratioScale} />
        <ambientLight intensity={0.1} color="pink" />
        <D.AccumulativeShadows
          frames={100}
          alphaTest={0.9}
          scale={30}
          position={[0, -0.005, 0]}
          color="pink"
          opacity={0.8}
        >
          <D.RandomizedLight
            amount={4}
            radius={9}
            intensity={0.8}
            ambient={0.25}
            position={[10, 5, 15]}
          />
          <D.RandomizedLight
            amount={4}
            radius={5}
            intensity={0.5}
            position={[-5, 5, 15]}
            bias={0.001}
          />
        </D.AccumulativeShadows>
        <D.Environment blur={0.8} background>
          <D.Sphere scale={15}>
            <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
          </D.Sphere>
          <D.Lightformer
            position={[5, 0, -5]}
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="red" // (optional = white)
            scale={[3, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <D.Lightformer
            position={[-5, 0, 1]}
            form="circle" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="green" // (optional = white)
            scale={[2, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <D.Lightformer
            position={[0, 5, -2]}
            form="ring" // circle | ring | rect (optional, default = rect)
            intensity={0.5} // power level (optional = 1)
            color="orange" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
          <D.Lightformer
            position={[0, 0, 5]}
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="purple" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
        </D.Environment>
      </group>
    </>
  );
};

D.useGLTF.preload("/models/cybertruck_scene.glb");
D.useGLTF.preload("/models/model3_scene.glb");
D.useGLTF.preload("/models/semi_scene.glb");

export { Scene };
