import * as F from "@react-three/fiber";
import { useMovingItem } from "./movingItem.hook";

const MovingItem = props => {
  const h = useMovingItem();

  return <group ref={h.groupRef}>{props.children}</group>;
};

export { MovingItem };
