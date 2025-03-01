import * as U from "../../../../utils";
import { vars } from "./fixedVars";

const getXPosition = (i, xSpread, number) =>
  -xSpread + (2 * xSpread * i) / (number - 1);

const getZPosition = name => {
  switch (name) {
    case "rocks":
      return U.getRandomIntExceptRange({
        range: vars[name].rangePosition,
        excludeRanges: [vars.subjectZPositionRange, vars.lamps.zPositionRange],
      });
    case "lamps":
      return vars.lamps.zPosition;
    default:
      return U.getRandomWithin(...vars[name].rangePosition);
  }
};

const getSingleMeshProps = (name, i) => ({
  position: [
    getXPosition(i, vars[name].xSpread, vars[name].quantity),
    0,
    getZPosition(name),
  ],
  scale: vars[name]?.scale
    ? vars[name].scale
    : U.getRandomWithin(...vars[name].scaleRange),
});

export { getSingleMeshProps };
