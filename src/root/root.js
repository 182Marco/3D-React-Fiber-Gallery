import * as L from "leva";
import * as F from "@react-three/fiber";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import { GetComponents } from "./getComponents";

const Root = () => {
  const h = useRoot();
  return (
    <AppProvider>
      <div className={h.getBgClass(h.currentProject)}>
        <L.Leva />
        <F.Canvas shadows>{GetComponents(h.currentProject)}</F.Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
