import { Canvas } from "@react-three/fiber";
import { useRoot } from "./root.hook";
import { Scene } from "../scene";
import { Leva } from "leva";

const Root = () => {
  const u = useRoot();
  return (
    <div className="box">
      <button className="show-dog-btn" onClick={u.toggleShowDog}>
        See the {u.isShowDog ? "loader" : "dog"}
      </button>
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
  );
};

export { Root };
