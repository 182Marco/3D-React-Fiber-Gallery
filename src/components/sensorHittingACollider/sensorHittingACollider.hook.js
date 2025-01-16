import * as R from "react";

const useSensorHittingACollider = () => {
  const sphereRef = R.useRef();
  const [goal, setGoal] = R.useState();

  const sphereHandler = () => {
    sphereRef.current.applyImpulse({ x: 0, y: 2.25, z: -2.25 });
  };
  return { goal, setGoal, sphereHandler, sphereRef };
};

export { useSensorHittingACollider };
