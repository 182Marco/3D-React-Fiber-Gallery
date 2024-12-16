import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="box">
    <Canvas>
      <group position={[0, -1, 0]}>
        <Scene />
      </group>
    </Canvas>
  </div>
);
