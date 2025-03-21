const scenes = [
  {
    path: "model/cybertruck_scene.glb",
    mainColor: "#f6dafa",
    name: "Cybertruck",
    description:
      "Better utility than a truck with more performance than a sports car",
    price: 72000,
    range: 660,
  },
  {
    path: "model/model3_scene.glb",
    mainColor: "#c0ffe1",
    name: "Model 3",
    description: "The car of the future",
    price: 29740,
    range: 576,
  },
  {
    path: "model/semi_scene.glb",
    mainColor: "#ffdec0",
    name: "Semi",
    description: "The Future of Trucking",
    price: 150000,
    range: 800,
  },
];

const slideDistance = {
  slideDistance: {
    value: 1,
    min: 0,
    max: 10,
  },
};

const dollyOffset = {
  dollyDistance: {
    value: 10,
    min: 0,
    max: 50,
  },
};

export { dollyOffset, scenes, slideDistance };
