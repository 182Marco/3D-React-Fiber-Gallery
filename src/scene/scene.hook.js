import * as L from "leva";
import * as R from "react";
import * as U from "./utils";
import * as UtilityFn from "../utils";
import { useAppContext } from "../context";

const useScene = () => {
  const options = Object.keys(U.projects);
  const { startedExperience, startExperience } = useAppContext();

  const getLeva = async () => {
    await UtilityFn.wait(1);
    const levaHandler = document.getElementById("leva__root");
    if (levaHandler) {
      levaHandler.style.display = startExperience ? "none" : "block";
    }
  };

  R.useLayoutEffect(() => {
    getLeva();
  }, [startExperience]);

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
      case U.projects.slideShow:
        return "bg";
      default:
        return "bg light-bg";
    }
  };

  const isSlideShow = currentProject === U.projects.slideShow;

  return {
    currentProject,
    getBgClass,
    isSlideShow,
    startedExperience,
    startExperience,
  };
};

export { useScene };
