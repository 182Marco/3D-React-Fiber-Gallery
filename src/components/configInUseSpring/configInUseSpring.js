import { a, useSpring } from "@react-spring/three";
import { useState } from "react";

const ConfigInUseSpring = () => {
  const [clicked, setClick] = useState(false);
  const { color, x, y } = useSpring({
    from: { color: "pink", y: -2, x: -2 },
    to: {
      color: "yellow",
      x: 2,
    },
    delay: 2000,
    pause: clicked,
    config: {
      mass: 20,
      tension: 700,
    },
    onStart: () => console.log("start"),
    onPause: () => console.log("pause"),
    onResume: () => console.log("resume"),
    onRest: () => console.log("rest"),
  });

  return (
    <a.mesh position-x={x} position-y={y} onClick={() => setClick(pv => !pv)}>
      <boxGeometry />
      <a.meshBasicMaterial color={color} />
    </a.mesh>
  );
};

export { ConfigInUseSpring };
