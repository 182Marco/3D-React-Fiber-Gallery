import { Leva } from "leva";
import * as C from "../components";
import { AppProvider } from "../context";
import { useRoot } from "./root.hook";
import { Scene } from "./scene";
import * as U from "./utils";

const Root = () => {
  const h = useRoot();
  return (
    <AppProvider>
      <div className="box">
        <Leva />
        {Scene(U.projects.Dog)}
      </div>
    </AppProvider>
  );
};

export { Root };
