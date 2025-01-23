import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Select } from "../components";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import * as C from "../components";
import * as D from "@react-three/drei";

const Root = () => {
  const h = useRoot();
  return (
    <AppProvider>
      <div className="box">
        <Select />
        <Leva />
        <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
          {/*   <Canvas camera={{ fav: 64, position: [2.3, 1.5, 2.3] }}> */}
          <D.ScrollControls pages={4}>
            <C.Heart />
          </D.ScrollControls>
        </Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
