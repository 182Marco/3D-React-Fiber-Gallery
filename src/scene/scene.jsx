import { Gallery } from "../components/gallery";
import { ResponsiveCamera } from "../components/responsiveCamera";
import { ParamsPanel } from "../components/paramsPanel";
import { OverlaySlideShow } from "../components/slideShow/components/overlaySlideShow";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import { useScene } from "./scene.hook";
import { GetComponents } from "./getComponents";

const Scene = () => {
  const h = useScene();
  return (
    <div className={h.getBgClass(h.currentProject)}>
      {/* parametri registrati dalle scene con useParam */}
      <ParamsPanel />
      <Gallery
        items={h.galleryItems}
        current={h.currentProject}
        onSelect={h.selectProject}
      />
      {h.isSlideShow && <OverlaySlideShow />}
      {/* key: a ogni cambio di scena il canvas viene ricreato, così la
              telecamera riparte frontale (posizione di default) e non da dove
              l'aveva lasciata la scena precedente */}
      <F.Canvas key={h.currentProject} shadows dpr={h.dpr} camera={h.camera}>
        <D.PerformanceMonitor onChange={h.onPerformanceChange} />
        <ResponsiveCamera enabled={h.fitWidth} />
        {GetComponents(h.currentProject)}
      </F.Canvas>
    </div>
  );
};

export { Scene };
