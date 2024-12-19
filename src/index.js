import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./scene";
import { Particles } from "./particles/particles";

const createCanvasHandler = (state) => state.gl.setClearColor();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="box">
    <Canvas
      camera={{
        fov: 35,
        near: 0.1,
        far: 100,
        position: [6, 0, -5],
      }}
      onCreated={createCanvasHandler}
      zoom={3}
    >
      <OrbitControls enableZoom={false} />
      <Particles />
    </Canvas>
  </div>
);
