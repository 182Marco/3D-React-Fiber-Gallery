import * as D from "@react-three/drei";
import { useCameraHandler } from "./cameraHandler.hook";

const CameraHandler = ({ slideDistance }) => {
  const { cameraControls } = useCameraHandler(slideDistance);
  return (
    <D.CameraControls
      ref={cameraControls}
      touches={{
        one: 0,
        two: 0,
        three: 0,
      }}
      mouseButtons={{
        left: 0,
        middle: 0,
        right: 0,
      }}
    />
  );
};

export { CameraHandler };
