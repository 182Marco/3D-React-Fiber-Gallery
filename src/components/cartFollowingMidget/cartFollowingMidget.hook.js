import { useUpdateCamera } from "./cartFollowingMidget.updateCamera";
import { vars } from "./fixedVars";

const useCartFollowingMidget = () => {
  useUpdateCamera();

  const getPosition = i =>
    -vars.lampMaxX + (2 * vars.lampMaxX * i) / (vars.lampN - 1);

  return { getPosition };
};

export { useCartFollowingMidget };
