import * as R from "react";
import * as S from "@react-spring/three";

const useSpringBasicAnimation = () => {
  const [click, setClick] = R.useState(false);
  const spring = S.useSpring({
    from: { scale: click ? 2 : 1, color: click ? "orange" : "hotpink" },
    scale: click ? 1 : 2,
    color: click ? "hotpink" : "orange",
  });
  return { setClick, spring };
};

export { useSpringBasicAnimation };
