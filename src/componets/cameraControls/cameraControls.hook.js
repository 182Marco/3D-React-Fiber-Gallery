import { useRef } from "react";
import { useControls, buttonGroup, button } from "leva";
import { MathUtils } from "three";
import { CameraControls } from "@react-three/drei";

const useCameraControls = () => {
  const { DEG2RAD } = MathUtils;

  const cameraControlsRef = useRef();
  useControls("camera controls", {
    horizontalRotation: buttonGroup({
      label: "horizontal R",
      opts: {
        // "45deg": () => cameraControls.current.rotate(45 * 0.0174533, 0, true), // 0.017 to convert into radiants
        "45deg": () => cameraControlsRef.current.rotate(45 * DEG2RAD, 0, true), // 2nd way
        "-90deg": () =>
          cameraControlsRef.current.rotate(-90 * DEG2RAD, 0, true),
        "360deg": () =>
          cameraControlsRef.current.rotate(360 * DEG2RAD, 0, true),
      },
    }),
    verticalRotation: buttonGroup({
      label: "vertical R",
      opts: {
        "20deg": () => cameraControlsRef.current.rotate(0, 20 * DEG2RAD, true), // 2nd way
        "-40deg": () =>
          cameraControlsRef.current.rotate(0, -40 * DEG2RAD, true),
      },
    }),
    horizontalTruck: buttonGroup({
      label: "horizontal T",
      opts: {
        "1, 0": () => cameraControlsRef.current.truck(1, 0, true), // 2nd way
        "0, 1": () => cameraControlsRef.current.truck(0, 1, true),
        "1, 1": () => cameraControlsRef.current.truck(1, 1, true),
        "-1, 0": () => cameraControlsRef.current.truck(-1, 0, true),
        "0, -1": () => cameraControlsRef.current.truck(0, -1, true),
        "-1, -1": () => cameraControlsRef.current.truck(-1, -1, true),
      },
    }),
    zoom: buttonGroup({
      label: "zoom",
      opts: {
        0.025: () => cameraControlsRef.current.zoom(0.25, true),
        "-0.025": () => cameraControlsRef.current.zoom(-0.25, true),
      },
    }),
    lookAtBox: button(() => {
      cameraControlsRef.current.setLookAt(0, 1, 3, 0, 0, 0, true);
    }),
  });

  return {
    cameraControlsRef,
  };
};

export { useCameraControls };
