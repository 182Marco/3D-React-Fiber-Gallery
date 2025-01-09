import * as R from "react";
import * as S from "@react-spring/three";

const useSpringRefHook = () => {
  const [spring, api] = S.useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => api.start({ to: { x: spring.x.get() ? 0 : 4 } });

  return { api, handleClick, spring };
};

export { useSpringRefHook };
