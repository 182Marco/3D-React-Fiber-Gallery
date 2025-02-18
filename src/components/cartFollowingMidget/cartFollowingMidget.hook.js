import * as R from "react";
import * as T from "@react-three/fiber";
import { useUpdateCamera } from "./cartFollowingMidget.updateCamera";

const useCartFollowingMidget = () => {
  useUpdateCamera();

  return {};
};

export { useCartFollowingMidget };
