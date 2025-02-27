import { validateRange } from "./validatePassedArguments";

const getRandomWithin = (min, max) =>
  +(Math.random() * (max - min) + min).toFixed(2);

const isExcluded = (num, excludeRanges) => {
  return excludeRanges.some(
    ([excludeMin, excludeMax]) => num >= excludeMin && num <= excludeMax,
  );
};

const getRandomIntExceptRange = ({ range, excludeRanges }) => {
  validateRange(range, "'range'");

  if (
    !Array.isArray(excludeRanges) ||
    (excludeRanges.length > 0 &&
      !excludeRanges.every(r => Array.isArray(r) && r.length === 2))
  ) {
    throw new Error(
      "'excludeRanges' must be an array of arrays, each containing two numbers when not empty.",
    );
  }

  const [min, max] = range;

  let randomNum = getRandomWithin(min, max);

  if (excludeRanges.length > 0) {
    while (isExcluded(randomNum, excludeRanges)) {
      randomNum = getRandomWithin(min, max);
    }
  }

  return randomNum;
};

export { getRandomWithin, getRandomIntExceptRange };
