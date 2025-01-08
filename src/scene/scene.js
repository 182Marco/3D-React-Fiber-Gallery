import { a, useSpring } from "@react-spring/three";
import * as C from "../components";

const Scene = () => {
  const { color, x, y } = useSpring({
    from: { color: "hotpink", y: -2, x: -2 },
    to: {
      color: "yellow",
      x: 0,
    },
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
