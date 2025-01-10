import { OrbitControls } from "@react-three/drei";
import * as C from "../components";
import { a, useSprings } from "@react-spring/three";

const items = [
  {
    position: [-1.5, 0, 0],
    key: 1,
  },
  {
    position: [0, 0, 0],
    key: 2,
  },
  {
    position: [1.5, 0, 0],
    key: 3,
  },
];

const Scene = () => {
  const springs = useSprings(items.length, [
    {
      from: { position: [-3.5, 0, 0] },
      to: { position: [-1.5, 0, 0] },
    },
    {
      from: { position: [0, -3.5, 0] },
      to: { position: [0, 0, 0] },
    },
    {
      from: { position: [0, 0, 3.5] },
      to: { position: [1.5, 0, 0] },
    },
  ]);

  return (
    <>
      <OrbitControls />
      {springs.map(e => (
        <a.mesh key={e.key} scale={0.5} position={e.position}>
          <boxGeometry />
          <meshBasicMaterial />
        </a.mesh>
      ))}
    </>
  );
};

export { Scene };
