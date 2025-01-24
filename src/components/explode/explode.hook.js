import * as L from "leva";

const useExplode = () => {
  const banana = "banana";
  const heart = "heart";
  const options = [heart, banana];

  const controlObj = {
    item: { value: heart, options },
  };

  const { item } = L.useControls(controlObj);

  return { banana, heart, item };
};

export { useExplode };
