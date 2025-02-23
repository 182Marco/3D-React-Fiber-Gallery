import { useUpdateCamera } from "./cartFollowingMidget.updateCamera";
import { vars } from "./fixedVars";

const useCartFollowingMidget = () => {
  useUpdateCamera();

  const getPosition = (i, maxX, number) =>
    -maxX + (2 * maxX * i) / (number - 1);

  return { getPosition };
};

export { useCartFollowingMidget };
