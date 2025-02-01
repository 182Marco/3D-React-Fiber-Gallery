import * as D from "@react-three/drei";

const usePortalPass = () => {
  const map = D.useTexture("textures/waterEnviron.jpg");
  return { map };
};

export { usePortalPass };
