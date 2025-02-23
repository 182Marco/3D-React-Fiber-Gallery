import { useMovingItem } from "./movingItem.hook";

const MovingItem = ({ xSpread, speed, children }) => {
  const h = useMovingItem(xSpread, speed);

  return <group ref={h.groupRef}>{children}</group>;
};

export { MovingItem };
