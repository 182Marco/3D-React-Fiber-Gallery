import * as S from "@react-spring/three";

const useSpringImperativeAnimation = () => {
  const [spring, api] = S.useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => api.start({ to: { x: spring.x.get() ? 0 : 1 } });

  return { handleClick, spring };
};

export { useSpringImperativeAnimation };
