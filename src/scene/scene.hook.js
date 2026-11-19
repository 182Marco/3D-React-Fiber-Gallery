import * as L from "leva";
import * as R from "react";
import * as U from "./utils";
import * as UtilityFn from "../utils";
import { useAppContext } from "../context";

const MIN_DPR = 1;
const MAX_DPR = 1.5;

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
    project: { value: U.defaultProject, options },
  });

  const [currentProject, setCurrentProject] = R.useState(project);

  R.useEffect(() => {
    setCurrentProject(project);
  }, [project]);

  const getBgClass = project => U.registry[project]?.bg ?? "bg light-bg";

  // Risoluzione adattiva: PerformanceMonitor restituisce un fattore 0..1 in
  // base agli FPS; dpr scala tra MIN_DPR (device lento) e MAX_DPR.
  const [dpr, setDpr] = R.useState(MAX_DPR);
  const onPerformanceChange = ({ factor }) =>
    setDpr(Math.round((MIN_DPR + (MAX_DPR - MIN_DPR) * factor) * 10) / 10);

  const isSlideShow = currentProject === U.projects.slideShow;

  return {
    currentProject,
    dpr,
    onPerformanceChange,
    getBgClass,
    isSlideShow,
    startedExperience,
    startExperience,
  };
};

export { useScene };
