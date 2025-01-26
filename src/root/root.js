import { Leva } from "leva";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import { Scene } from "./scene";

const Root = () => {
  const h = useRoot();
  return (
    <AppProvider>
      <div className="box">
        <Leva />
        {Scene(h.project)}
      </div>
    </AppProvider>
  );
};

export { Root };
