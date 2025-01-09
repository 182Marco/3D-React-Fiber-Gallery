import * as S from "@react-spring/three";

const useSpringRefHook = () => {
  // const [spring, api] = S.useSpring(() => ({
  //   from: { x: 0 },
  // }));

  const springRef = S.useSpringRef();

  const spring = S.useSpring({
    ref: springRef,
    from: { x: -2 },
  });

  const handleClick = () => {
    springRef.start({ to: { x: 2 }, config: { duration: 5000 } });
  };

  return { handleClick, spring, springRef };
};

export { useSpringRefHook };
