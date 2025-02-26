import * as C from "../../components";

const RenderMovingItems = ({
  Component,
  getMeshComponentProps,
  count,
  xSpread,
  speed,
}) => {
  return [...Array(count)].map((_, i) => (
    <C.MovingItem xSpread={xSpread} speed={speed} key={i}>
      <Component {...getMeshComponentProps(i)} />
    </C.MovingItem>
  ));
};

export { RenderMovingItems };
