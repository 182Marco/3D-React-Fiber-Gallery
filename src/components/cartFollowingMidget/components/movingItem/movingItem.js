import { useMovingItem } from "./movingItem.hook";

const MovingItem = props => {
  const h = useMovingItem(props.xSpread);

  return <group ref={h.groupRef}>{props.children}</group>;
};

export { MovingItem };
