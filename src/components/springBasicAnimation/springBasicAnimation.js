import * as S from "@react-spring/three";
import { useSpringBasicAnimation } from "./springBasicAnimation.hook";

const SpringBasicAnimation = () => {
  const u = useSpringBasicAnimation();
  return (
    <S.a.mesh onClick={() => u.setClick(pv => !pv)} scale={u.spring.scale}>
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </S.a.mesh>
  );
};

export { SpringBasicAnimation };
