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

const getSingleMeshProps = name => i => ({
  position: [
    getPosition(i, vars[name].xMax, vars[name].quantity),
    0,
    getZPosition(name)(),
  ],
  scale: vars[name]?.scale
    ? vars[name].scale
    : U.getRandomWithin(...vars[name].scaleRange),
});

const getProps = name => ({
  getMeshComponentProps: getSingleMeshProps(name),
  count: vars[name].quantity,
  xSpread: vars[name].xMax,
  speed: vars[name].speed,
});

export { getProps };
