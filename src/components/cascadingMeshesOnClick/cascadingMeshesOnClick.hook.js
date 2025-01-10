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

const useCascadingMeshesOnClick = () => {
  const [trail, api] = useTrail(items.length, () => ({
    from: { scale: 0.3 },
  }));

  const handleMiss = () => api.start({ to: { scale: 0.6 } });

  return { handleMiss, trail };
};

export { useCascadingMeshesOnClick };
