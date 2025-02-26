import * as U from "../../utils";
import { vars } from "./fixedVars";

const getPosition = (i, maxX, number) => -maxX + (2 * maxX * i) / (number - 1);

const getRocks = i => ({
  position: [
    getPosition(i, vars.rockMaxX, vars.rockN),
    0,
    U.getRandomIntExceptRange({
      range: vars.rockRangePosition,
      excludeRanges: [vars.subjectZPositionRange, vars.lampZPositionRange],
    }),
  ],
  scale: U.getRandomWithin(0.06, 0.016),
});

const getTrees = i => ({
  position: [
    getPosition(i, vars.treeMaxX, vars.treeN),
    0,
    U.getRandomWithin(...vars.treesRangePosition),
  ],
  scale: U.getRandomWithin(...vars.treeScaleRange),
});

const getLamps = i => ({
  position: [getPosition(i, vars.lampMaxX, vars.lampN), 0, vars.lampZpoistion],
  scale: vars.lampScale,
});

const lampsProps = {
  getMeshComponentProps: getLamps,
  count: vars.lampN,
  xSpread: vars.lampMaxX,
  speed: vars.lampSpeed,
};

const treeProps = {
  getMeshComponentProps: getTrees,
  count: vars.treeN,
  xSpread: vars.treeMaxX,
  speed: vars.treeSpeed,
};

const rockProps = {
  getMeshComponentProps: getRocks,
  count: vars.rockN,
  xSpread: vars.rockMaxX,
  speed: vars.rockSpeed,
};

export { lampsProps, treeProps, rockProps };
