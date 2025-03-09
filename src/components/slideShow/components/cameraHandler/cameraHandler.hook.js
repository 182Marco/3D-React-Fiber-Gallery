import { useAtom } from "jotai";
import { slideAtom } from "../overlaySlideShow/overlaySlideShow.hook";
import * as L from "leva";
import * as R from "react";
import * as F from "@react-three/fiber";
import { dollyOffset } from "../../fixedVars";

const useCameraHandler = slideDistance => {
  const viewport = F.useThree(state => state.viewport);
  const cameraControls = R.useRef();
  const [slide] = useAtom(slideAtom);
  const lastSlide = R.useRef(0);

  const { dollyDistance } = L.useControls(dollyOffset);

  const moveToSlide = async () => {
    await cameraControls.current.setLookAt(
      lastSlide.current * (viewport.width + slideDistance),
      3,
      dollyDistance,
      lastSlide.current * (viewport.width + slideDistance),
      0,
      0,
      true,
    );
    await cameraControls.current.setLookAt(
      (slide + 1) * (viewport.width + slideDistance),
      1,
      dollyDistance,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true,
    );

    await cameraControls.current.setLookAt(
      slide * (viewport.width + slideDistance),
      0,
      3,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true,
    );
  };

  R.useEffect(() => {
    // Used to reset the camera position when the viewport changes
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
        slide * (viewport.width + slideDistance),
        0,
        5,
        slide * (viewport.width + slideDistance),
        0,
        0,
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [viewport]);

  R.useEffect(() => {
    if (lastSlide.current === slide) {
      return;
    }
    moveToSlide();
    lastSlide.current = slide;
  }, [slide]);

  return { cameraControls };
};

export { useCameraHandler };
