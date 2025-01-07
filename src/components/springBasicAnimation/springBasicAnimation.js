import * as R from "react";
import * as S from "@react-spring/three";

const SpringBasicAnimation = () => {
  const [click, setClick] = R.useState(false);
  const spring = S.useSpring({
    from: { scale: click ? 2 : 1 },
    scale: click ? 1 : 2,
  });

  return (
    <S.a.mesh onClick={() => setClick(pv => !pv)} scale={spring.scale}>
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </S.a.mesh>
  );
};

export { SpringBasicAnimation };
