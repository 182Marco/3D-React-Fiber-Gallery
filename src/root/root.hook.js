import * as L from "leva";
import * as R from "react";
import * as U from "./utils";

const useRoot = () => {
  const options = Object.keys(U.projects);

  const { project } = L.useControls({
    project: { value: U.projects.CartFollowingMidget, options },
  });

  const [currentProject, setCurrentProject] = R.useState(project);

  R.useEffect(() => {
    setCurrentProject(project);
  }, [project]);

  const getBgClass = project => {
    switch (project) {
      case U.projects.CartFollowingMidget:
        return "bg green-bg";
      case U.projects.PortalPass:
        return "bg dark-bg";
      case U.projects.Woman:
        return "bg grey-bg";
      default:
        return "bg light-bg";
    }
  };

  return { currentProject, getBgClass, project };
};

export { useRoot };
