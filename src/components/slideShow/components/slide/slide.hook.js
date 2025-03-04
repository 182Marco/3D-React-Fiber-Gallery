import * as R from "react";
import * as D from "@react-three/drei";

const useScene = path => {
  const { nodes, materials, scene } = D.useGLTF(path);
  R.useEffect(() => {
    scene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  const ratioScale = Math.min(1.2, Math.max(0.5, window.innerWidth / 1920));

  return {
    nodes,
    materials,
    scene,
    ratioScale,
  };
};

export { useScene };
