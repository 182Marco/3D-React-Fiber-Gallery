import * as R from "react";
import * as U from "../../utils";

const useLotsOfMashesSameFn = () => {
  const count = 200;

  const positions = R.useMemo(
    () =>
      U.createSeqArray(count).map(() => [
        (Math.random() - 0.5) * 5,
        Math.random() * 20 + 30,
        (Math.random() - 0.5) * 5,
      ]),
    [],
  );

  return { positions };
};

export { useLotsOfMashesSameFn };
