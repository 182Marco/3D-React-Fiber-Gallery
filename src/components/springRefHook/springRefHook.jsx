import { a } from "@react-spring/three";
import { useSpringRefHook } from "./springRefHook.hook";

const SpringRefHook_ = () => {
  const u = useSpringRefHook();
  return (
    <a.mesh
      onClick={u.handleClick}
      scale={2}
      position-x={u.spring.x}
      onPointerEnter={() => u.springRef.pause()}
      onPointerLeave={() => u.springRef.resume()}
    >
      <boxGeometry />
      <a.meshBasicMaterial color="orange" />
    </a.mesh>
  );
};

export { SpringRefHook_ };
