import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Select } from "../components";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import * as C from "../components";

const Root = () => {
  const h = useRoot();
  return (
    <AppProvider>
      <div className="box">
        <Select />
        <Leva />
        <Canvas camera={{ position: [10, 10, 10], fov: 30 }}>
          {/*   <Canvas camera={{ fav: 64, position: [2.3, 1.5, 2.3] }}> */}
          <C.Heart />
        </Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
