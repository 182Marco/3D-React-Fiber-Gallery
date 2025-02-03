import * as R from "react";

const usePortalPass = () => {
  const [active, setActive] = R.useState();
  const cameraRef = R.useRef();

  return { active, cameraRef, setActive };
};

export { usePortalPass };
