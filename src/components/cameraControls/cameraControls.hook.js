import { useRef } from "react";
import { useParamActions } from "../paramsPanel";
import { MathUtils } from "three";

const useCameraControls = () => {
  const { DEG2RAD } = MathUtils;

  const cameraControlsRef = useRef();
  const cc = () => cameraControlsRef.current;

  useParamActions("horizontal rotation", {
    "45deg": () => cc().rotate(45 * DEG2RAD, 0, true),
    "-90deg": () => cc().rotate(-90 * DEG2RAD, 0, true),
    "360deg": () => cc().rotate(360 * DEG2RAD, 0, true),
  });
  useParamActions("vertical rotation", {
    "20deg": () => cc().rotate(0, 20 * DEG2RAD, true),
    "-40deg": () => cc().rotate(0, -40 * DEG2RAD, true),
  });
  useParamActions("horizontal truck", {
    "1, 0": () => cc().truck(1, 0, true),
    "0, 1": () => cc().truck(0, 1, true),
    "1, 1": () => cc().truck(1, 1, true),
    "-1, 0": () => cc().truck(-1, 0, true),
    "0, -1": () => cc().truck(0, -1, true),
    "-1, -1": () => cc().truck(-1, -1, true),
  });
  useParamActions("zoom", {
    "+0.25": () => cc().zoom(0.25, true),
    "-0.25": () => cc().zoom(-0.25, true),
  });
  useParamActions("camera", {
    "look at box": () => cc().setLookAt(0, 1, 3, 0, 0, 0, true),
  });

  return {
    cameraControlsRef,
  };
};

export { useCameraControls };
