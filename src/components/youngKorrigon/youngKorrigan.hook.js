import * as R from "react";

const useYoungKorrigan = () => {
  const group = R.useRef();
  const { nodes, materials, animations } = R.useGLTF(
    "./model/youngKorrigan.gltf",
  );
  const { actions, mixer } = R.useAnimations(animations, group);

  R.useEffect(() => {
    actions["course_jeune"].play();
    mixer.timeScale = 1.8;
  }, []);

  return { group, nodes, materials };
};

export { useYoungKorrigan };
