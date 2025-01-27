import * as L from "leva";
import * as F from "@react-three/fiber";
import * as U from "./utils";
import * as C from "../components";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import { GetComponents } from "./getComponents";

const Root = () => {
  const h = useRoot();

  return (
    <AppProvider>
      <div className="bg">
        <L.Leva />
        {h.currentProject === U.projects.Dog && <C.Select />}
        <F.Canvas>{GetComponents(h.currentProject)}</F.Canvas>
      </div>
    </AppProvider>
  );
};

export { Root };
