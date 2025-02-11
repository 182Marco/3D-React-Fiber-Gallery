import * as D from "@react-three/drei";
import * as R from "react";

const useAnkou = () => {
  const group = R.useRef();
  const { nodes, materials, animations } = D.useGLTF("./model/ankouChart.gltf");
  const { actions } = D.useAnimations(animations, group);

  R.useEffect(() => {
    actions["course_cheval"].play();
    actions["course_charette"].play();
    actions["course_ankou"].play();
  }, []);

  return { group, nodes, materials };
};

export { useAnkou };
