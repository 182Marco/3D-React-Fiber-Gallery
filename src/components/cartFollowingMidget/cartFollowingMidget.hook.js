import { useUpdateCamera } from "./cartFollowingMidget.updateCamera";
import { vars } from "./fixedVars";

const useCartFollowingMidget = () => {
  useUpdateCamera();

  const getPosition = i =>
    -vars.lampPost_max_offset_X +
    (2 * vars.lampPost_max_offset_X * i) / (vars.lampPost_N - 1);

  return { getPosition };
};

export { useCartFollowingMidget };
