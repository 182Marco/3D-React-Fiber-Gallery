import * as L from "leva";
import * as U from "./utils";

const useRoot = () => {
  const options = Object.keys(U.projects);

  const { project } = L.useControls({
    project: { value: U.projects.Home3d, options },
  });

  return { project };
};

export { useRoot };
