import { useTrail } from "@react-spring/three";

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

const useCascadingMeshes = () => {
  const [trail, api] = useTrail(items.length, () => ({
    from: { scale: 0 },
    to: { scale: 0.6 },
  }));

  return { api, trail };
};

export { useCascadingMeshes };
