import * as D from "@react-three/drei";
import { useCameraHandler } from "./cameraHandler.hook";

const touches = { one: 0, two: 0, three: 0 };
const mouseButtons = { left: 0, middle: 0, right: 0 };

const CameraHandler = ({ slideDistance }) => {
  const { cameraControls } = useCameraHandler(slideDistance);
  return (
    <D.CameraControls
      ref={cameraControls}
      touches={touches}
      mouseButtons={mouseButtons}
    />
  );
};

export { CameraHandler };
