import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";

const createCanvasHandler = (state) => state.gl.setClearColor("red", 0.1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="box">
    <Canvas
      // gl={{ alpha: true }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [6, 0, -5],
      }}
      onCreated={createCanvasHandler}
    >
      <group position={[0, -1, 2]}>
        <axesHelper args={[3]} />
        <gridHelper />
        <Scene />
      </group>
    </Canvas>
  </div>
);
