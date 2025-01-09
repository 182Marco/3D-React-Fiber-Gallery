import { useSpring } from "@react-spring/three";
import { useState } from "react";

const useConfigInSpring = () => {
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
  return { color, x, y, setClick };
};

export { useConfigInSpring };
