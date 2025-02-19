import * as R from "react";

const useMovingItem = () => {
  const groupRef = R.useRef();
  return { groupRef };
};

export { useMovingItem };
