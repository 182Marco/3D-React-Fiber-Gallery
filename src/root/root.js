import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Select } from "../components";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import * as C from "../components";

const Root = () => {
  const u = useRoot();
  return (
    <AppProvider>
      <div className="box">
        <Select />
        <Leva />
        <Canvas>
          <C.Experience />
        </Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
