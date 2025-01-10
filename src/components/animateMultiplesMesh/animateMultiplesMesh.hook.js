import { useSprings } from "@react-spring/three";

const items = [
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
];

const useAnimateMultiplesMesh = () => {
  const springs = useSprings(items.length, items);

  return { springs };
};

export { useAnimateMultiplesMesh };
