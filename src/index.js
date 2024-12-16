import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas>
    <mesh position={[-4, 0, 0]} rotation-x={Math.PI * 0.5}>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
    <mesh position={[4, 0, 0]} scale={1.5}>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  </Canvas>
);
