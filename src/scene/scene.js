import { a, useSpring } from "@react-spring/three";
import * as C from "../components";
import { useState } from "react";

const Scene = () => {
  const [clicked, setClick] = useState(false);
  let n = 0;
  const { color, x, y } = useSpring({
    from: { color: "pink", y: -2, x: -2 },
    to:
      //  [
      {
        color: "yellow",
        x: 2,
      },
    // {
    //   color: "green",
    //   y: 2,
    // },
    // {
    //   color: "red",
    //   x: -2,
    // },
    // {
    //   color: "violet",
    //   y: -2,
    // },
    // ],
    // loop: () => n++ < 2, // assign fn to assign to loop dynamically, based on other values if needed.
    delay: 3000,
    reverse: clicked,
  });

  return (
    <>
      <a.mesh position-x={x} position-y={y} onClick={() => setClick(pv => !pv)}>
        <boxGeometry />
        <a.meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export { Scene };
