import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";
import * as M from "maath";
import * as R from "react";

const useMonsterStage = (texture, active, name) => {
  const loadedTexture = D.useTexture(texture);

  const portalMaterialRef = R.useRef();

  F.useFrame((_, delta) => {
    const worldOpen = active === name;
    M.easing.damp(
      portalMaterialRef.current,
      "blend",
      worldOpen ? 1 : 0,
      0.2, // animation speed
      delta,
    );
  }, []);

  return {
    loadedTexture,
    portalMaterialRef,
  };
};

export { useMonsterStage };
