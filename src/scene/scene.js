import * as C from "../components";
import * as L from "leva";
import * as F from "@react-three/fiber";
import { useScene } from "./scene.hook";
import { GetComponents } from "./getComponents";

const Scene = () => {
  const h = useScene();
  return (
    <>
      {h.startedExperience && (
        <div className={h.getBgClass(h.currentProject)}>
          {h.startedExperience && <L.Leva />}
          <F.Canvas shadows>{GetComponents(h.currentProject)}</F.Canvas>
        </div>
      )}
      <C.LoadScreen
        started={h.startedExperience}
        onStarted={h.startExperience}
      />
    </>
  );
};

export { Scene };
