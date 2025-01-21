import * as F from "@react-three/fiber";
import { quat } from "@react-three/rapier";
import * as R from "react";
import * as THREE from "three";

const useGame = () => {
  const [hover, setHover] = R.useState(false);
  const cube = R.useRef();
  const kicker = R.useRef();

  const jump = () => cube.current.applyImpulse({ x: 0, y: 5, z: 0 });

  // F.useFrame((_, delta) => {
  //   const curRotation = quat(kicker.current.rotation());
  //   const incrementRotation = new THREE()
  //     .Quaternion()
  //     .setFromAxisAngle(new THREE.Vector3(0, 1, 0), delta * 2);
  //   curRotation.multiply(incrementRotation);
  //   kicker.current.setNextKinematicRotation(curRotation);
  // });

  return {
    hover,
    setHover,
    cube,
    jump,
    kicker,
  };
};

export { useGame };
