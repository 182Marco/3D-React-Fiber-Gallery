import * as D from "@react-three/drei";
import * as R from "react";

const useAnkou = () => {
  const group = R.useRef();
  const { nodes, materials, animations } = D.useGLTF(
    "./model/youngKorrigan.gltf",
  );
  const { actions, mixer } = D.useAnimations(animations, group);

  R.useEffect(() => {
    actions["course_jeune"].play();
    mixer.timeScale = 1.8;
  }, []);

  return { group, nodes, materials };
};

export { useAnkou };
