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
          {h.isSlideShow && <C.OverlaySlideShow />}
          {/* key: a ogni cambio di scena il canvas viene ricreato, così la
              telecamera riparte frontale (posizione di default) e non da dove
              l'aveva lasciata la scena precedente */}
          <F.Canvas key={h.currentProject} shadows dpr={[1, 1.5]}>
            {GetComponents(h.currentProject)}
          </F.Canvas>
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
