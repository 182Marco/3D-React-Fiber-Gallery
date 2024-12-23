import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Select } from "../componets";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import { Scene } from "../scene";

const Root = () => {
  const u = useRoot();
  return (
    <AppProvider>
      <div className="box" style={{ position: "relative" }}>
        <Select />
        <Leva />
        <Canvas
          camera={{
            fov: 75,
            near: 0.1,
            far: 100,
            position: [0, 5, -10],
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
