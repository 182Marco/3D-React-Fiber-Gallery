import * as R from "react";
import * as S from "@react-spring/three";

const useSpringImperativeAnimation = () => {
  // const [click, setClick] = R.useState(false);
  const [spring, api] = S.useSpring(() => ({
    from: { x: 0 },
  }));
  return { api, spring };
};

export { useSpringImperativeAnimation };
