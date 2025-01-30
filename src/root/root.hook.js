import * as L from "leva";
import * as R from "react";
import * as U from "./utils";

const useRoot = () => {
  const options = Object.keys(U.projects);

  const { project } = L.useControls({
    project: { value: U.projects.Home3d, options },
  });

  const [currentProject, setCurrentProject] = R.useState(project);

  R.useEffect(() => {
    setCurrentProject(project);
  }, [project]);

  return { currentProject, project };
};

export { useRoot };
