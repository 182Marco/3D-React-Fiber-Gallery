import { Gallery } from "../components/gallery";
import { LoadScreen } from "../components/loadScreen";
import { OverlaySlideShow } from "../components/slideShow/components/overlaySlideShow";
import * as L from "leva";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import { useScene } from "./scene.hook";
import { GetComponents } from "./getComponents";

const Scene = () => {
  const h = useScene();
  return (
    <>
      {h.startedExperience && (
        <div className={h.getBgClass(h.currentProject)}>
          {/* Leva resta solo per i parametri dei singoli progetti */}
          <L.Leva />
          <Gallery
            items={h.galleryItems}
            current={h.currentProject}
            onSelect={h.selectProject}
          />
          {h.isSlideShow && <OverlaySlideShow />}
          {/* key: a ogni cambio di scena il canvas viene ricreato, così la
              telecamera riparte frontale (posizione di default) e non da dove
              l'aveva lasciata la scena precedente */}
          <F.Canvas key={h.currentProject} shadows dpr={h.dpr}>
            <D.PerformanceMonitor onChange={h.onPerformanceChange} />
            {GetComponents(h.currentProject)}
          </F.Canvas>
        </div>
      )}
      <LoadScreen
        started={h.startedExperience}
        onStarted={h.startExperience}
      />
    </>
  );
};

export { Scene };
