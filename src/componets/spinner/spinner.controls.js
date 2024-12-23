import { useControls } from "leva";

const useMyControls = () => {
  const c = useControls({
    position: {
      value: { x: 0, y: 0, z: 0 },
      min: -10,
      max: 10,
      step: 0.01,
    },
    color: "#ffffff",
  });
  return c;
};

export { useMyControls };
