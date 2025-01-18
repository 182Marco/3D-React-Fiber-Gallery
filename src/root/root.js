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
        <Canvas camera={{ fav: 64, position: [2.3, 1.5, 2.3] }}>
          <C.Experience />
        </Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
