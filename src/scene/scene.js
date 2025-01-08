import { a, useSpring } from "@react-spring/three";
import * as C from "../components";

const Scene = () => {
  const { color, x, y } = useSpring({
    from: { color: "pink", y: -2, x: -2 },
    to: [
      {
        color: "yellow",
        x: 2,
      },
      {
        color: "green",
        y: 2,
      },
      {
        color: "red",
        x: -2,
      },
      {
        color: "blue",
        y: -2,
      },
    ],
  });

  return (
    <>
      <a.mesh position-x={x} position-y={y}>
        <boxGeometry />
        <meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export { Scene };
