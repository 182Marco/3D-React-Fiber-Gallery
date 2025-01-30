import { useControls, button } from "leva";

const useMyControls = () => ({
  c: useControls("torus", {
    position: {
      value: { x: 0, y: 0, z: 0 },
      min: -10,
      max: 10,
      step: 0.01,
    },
    color: {
      value: "#00F9FF",
      label: "Color",
    },
    wireframe: false,
    click: button(() => console.log(`marcom ---> clicked: `)),
    scale: { options: [1, 2, 3, 4, 5, 6] },
  }),
});

export { useMyControls };
