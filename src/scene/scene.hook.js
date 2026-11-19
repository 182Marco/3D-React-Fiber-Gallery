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

  // Deep link: l'hash dell'URL (#/bike, case-insensitive) sceglie il progetto.
  // Si usa location.hash e non history.pushState perché <base> è fisso.
  const getProjectFromHash = () => {
    const name = window.location.hash.replace(/^#\/?/, "").toLowerCase();
    return options.find(o => o.toLowerCase() === name);
  };

  const [{ project }, setControls] = L.useControls(() => ({
    project: { value: getProjectFromHash() ?? U.defaultProject, options },
  }));

  const [currentProject, setCurrentProject] = R.useState(project);

  R.useEffect(() => {
    setCurrentProject(project);
    const hash = `#/${project.toLowerCase()}`;
    if (window.location.hash !== hash) window.location.hash = hash;
  }, [project]);

  // Tasto indietro/avanti o hash modificato a mano → aggiorna il selettore.
  R.useEffect(() => {
    const onHashChange = () => {
      const fromHash = getProjectFromHash();
      if (fromHash) setControls({ project: fromHash });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
