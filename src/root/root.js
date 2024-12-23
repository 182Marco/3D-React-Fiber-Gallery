import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { BtnsBox } from "../componets";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import { Scene } from "../scene";

const Root = () => {
  const u = useRoot();
  return (
    <AppProvider>
      <div className="box" style={{ position: "relative" }}>
        <button className="show-dog-btn" onClick={u.toggleShowDog}>
          See the {u.isShowDog ? "loader" : "dog"}
        </button>
        <BtnsBox />
        {/*  */}
        <Leva />
        <Canvas
          camera={{
            fov: 75,
            near: 0.1,
            far: 100,
            position: [0, 1, 3],
          }}
        >
          <Scene IsShowDog={u.isShowDog} />
        </Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
