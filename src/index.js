import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";
import { Particles } from "./particles/particles";

const createCanvasHandler = (state) => state.gl.setClearColor();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="box">
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [6, 0, -5],
      }}
      onCreated={createCanvasHandler}
    >
      <Particles />
      <Scene />
    </Canvas>
  </div>
);
