import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas position-x={[-4, 0, 0]}>
    <mesh>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
    <mesh position={[4, 0, 0]}>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  </Canvas>
);
