import * as R from "react";
import * as S from "@react-spring/three";

const SpringBasicAnimation = () => {
  const [click, setClick] = R.useState(false);
  const spring = S.useSpring({
    from: { scale: 1 },
    scale: 2,
  });

  return (
    <S.a.mesh onClick={() => setClick(pv => !pv)} scale={spring.scale}>
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </S.a.mesh>
  );
};

export { SpringBasicAnimation };
