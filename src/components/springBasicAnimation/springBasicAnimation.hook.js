import * as R from "react";
import * as S from "@react-spring/three";

const useSpringBasicAnimation = () => {
  const [click, setClick] = R.useState(false);
  const spring = S.useSpring({
    from: { scale: click ? 2 : 1 },
    scale: click ? 1 : 2,
  });
  return { setClick, spring };
};

export { useSpringBasicAnimation };
