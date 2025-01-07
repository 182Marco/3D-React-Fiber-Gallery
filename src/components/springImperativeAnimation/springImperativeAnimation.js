import * as S from "@react-spring/three";
import { useSpringImperativeAnimation } from "./springImperativeAnimation.hook";

const SpringImperativeAnimation = () => {
  const u = useSpringImperativeAnimation();
  return (
    <S.a.mesh
      onClick={() => u.api.start({ to: { x: 1 } })}
      scale={3}
      position-x={u.spring.x}
    >
      <boxGeometry />
      <S.a.meshBasicMaterial color="orange" />
    </S.a.mesh>
  );
};

export { SpringImperativeAnimation };
