import * as U from "../../utils";
import { vars } from "./fixedVars";

const getPosition = (i, xMax, number) => -xMax + (2 * xMax * i) / (number - 1);

const getRocks = i => ({
  position: [
    getPosition(i, vars.rocks.xMax, vars.rocks.quantity),
    0,
    U.getRandomIntExceptRange({
      range: vars.rocks.rangePosition,
      excludeRanges: [vars.subjectZPositionRange, vars.lamps.zPositionRange],
    }),
  ],
  scale: U.getRandomWithin(...vars.rocks.scaleRange),
});

const getTrees = i => ({
  position: [
    getPosition(i, vars.trees.xMax, vars.trees.quantity),
    0,
    U.getRandomWithin(...vars.trees.rangePosition),
  ],
  scale: U.getRandomWithin(...vars.trees.scaleRange),
});

const getLamps = i => ({
  position: [
    getPosition(i, vars.lamps.xMax, vars.lamps.quantity),
    0,
    vars.lamps.zPosition,
  ],
  scale: vars.lamps.scale,
});

const lampsProps = {
  getMeshComponentProps: getLamps,
  count: vars.lamps.quantity,
  xSpread: vars.lamps.xMax,
  speed: vars.lamps.speed,
};

const treeProps = {
  getMeshComponentProps: getTrees,
  count: vars.trees.quantity,
  xSpread: vars.trees.xMax,
  speed: vars.trees.speed,
};

const rockProps = {
  getMeshComponentProps: getRocks,
  count: vars.rocks.quantity,
  xSpread: vars.rocks.xMax,
  speed: vars.rocks.speed,
};

export { lampsProps, treeProps, rockProps };
