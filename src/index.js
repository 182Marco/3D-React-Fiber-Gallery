import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";
import { Custom } from "./custom";
import { Particles } from "./particles/particles";

const createCanvasHandler = (state) => state.gl.setClearColor("red", 0.1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="box">
    <Particles />
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [6, 0, -5],
      }}
      onCreated={createCanvasHandler}
    >
      <axesHelper args={[3]} />
      <gridHelper />
      <Scene />
    </Canvas>
  </div>
);
