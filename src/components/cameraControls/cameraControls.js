import { Grid, CameraControls } from "@react-three/drei";
import { useCameraControls } from "./cameraControls.hook";

const CameraControl = () => {
  const u = useCameraControls();
  return (
    <>
      <CameraControls ref={u.cameraControlsRef} smoothTime={1.125} shadows />
      <Grid
        args={[100, 100]}
        cellSize={0.5}
        cellColor="red"
        sectionSize={5}
        sectionThickness={4}
        sectionColor="turquoise"
        cellThickness={2}
        fadeDistance={20}
        fadeStrength={2}
      />
    </>
  );
};

export { CameraControl };
