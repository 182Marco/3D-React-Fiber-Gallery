import * as D from "@react-three/drei";
import * as M from "maath";
import * as R from "react";
import * as T from "@react-three/fiber";

const usePortal = () => {
  const model = D.useGLTF("./model/1.glb");
  const texture = D.useTexture("./texture/1.png");
  const portalMaterialRef = R.useRef();
  const CameraControlRef = R.useRef();

  const [active, setActive] = R.useState(false);

  R.useEffect(() => {
    // CameraControlRef.current.setLookAt([0, 0, active ? 3 : 5, 0, 0, 0, true]); // These lines break the functionality, it's unclear why.
  }, [active]);

  T.useFrame((_, delta) => {
    M.easing.damp(
      portalMaterialRef.current,
      "blend",
      active ? 1 : 0,
      0.2,
      delta
    );
  });
  return { CameraControlRef, model, portalMaterialRef, setActive, texture };
};

export { usePortal };
