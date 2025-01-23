import * as L from "leva";

const useExplode = () => {
  const { item } = L.useControls({
    item: { value: "heart", options: ["heart", "banana"] },
  });

  return { item };
};

export { useExplode };
