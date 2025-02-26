import * as U from "../../utils";
import { vars } from "./fixedVars";

const getPosition = (i, xMax, number) => -xMax + (2 * xMax * i) / (number - 1);

const getZPosition = name => {
  switch (name) {
    case "rocks":
      return () =>
        U.getRandomIntExceptRange({
          range: vars[name].rangePosition,
          excludeRanges: [
            vars.subjectZPositionRange,
            vars.lamps.zPositionRange,
          ],
        });
    case "lamps":
      return () => vars.lamps.zPosition;
    default:
      return () => U.getRandomWithin(...vars[name].rangePosition);
  }
};

const getProps = name => i => ({
  position: [
    getPosition(i, vars[name].xMax, vars[name].quantity),
    0,
    getZPosition(name)(),
  ],
  scale: vars[name]?.scale
    ? vars[name].scale
    : U.getRandomWithin(...vars[name].scaleRange),
});

const lampsProps = {
  getMeshComponentProps: getProps("lamps"),
  count: vars.lamps.quantity,
  xSpread: vars.lamps.xMax,
  speed: vars.lamps.speed,
};

const treeProps = {
  getMeshComponentProps: getProps("trees"),
  count: vars.trees.quantity,
  xSpread: vars.trees.xMax,
  speed: vars.trees.speed,
};

const rockProps = {
  getMeshComponentProps: getProps("rocks"),
  count: vars.rocks.quantity,
  xSpread: vars.rocks.xMax,
  speed: vars.rocks.speed,
};

export { lampsProps, treeProps, rockProps };
