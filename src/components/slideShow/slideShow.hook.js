import * as F from "@react-three/fiber";
import * as L from "leva";
import * as vars from "./fixedVars";

const useSlideShow = () => {
  const { viewport } = F.useThree();

  const { slideDistance } = L.useControls(vars.slideDistance);

  return { viewport, slideDistance };
};

export { useSlideShow };
