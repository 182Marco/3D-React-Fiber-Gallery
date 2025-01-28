import * as L from "leva";

const useExplode = () => {
  const bird = "bird";
  const banana = "banana";
  const heart = "heart";
  const componets = { bird, banana, heart };
  const options = Object.keys(componets);

  const { item } = L.useControls({ item: { value: heart, options } });

  const isSelected = name => item === componets[name];

  return { banana, bird, heart, isSelected };
};

export { useExplode };
