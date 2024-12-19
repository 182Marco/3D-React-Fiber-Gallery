import { Canvas } from "@react-three/fiber";
import { useRoot } from "./root.hook";
import { Scene } from "../scene";

const Root = () => {
  const u = useRoot();
  return (
    <div className="box">
      <button className="show-dog-btn" onClick={u.toggleShowDog}>
        See the dog
      </button>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [0, 2, 3],
        }}
      >
        <Scene IsShowDog={u.IsShowDog} />
      </Canvas>
    </div>
  );
};

export { Root };
