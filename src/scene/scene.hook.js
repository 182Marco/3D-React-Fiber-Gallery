import * as R from "react";
import * as U from "./utils";
import { useAppContext } from "../context";

const MIN_DPR = 1;
const MAX_DPR = 1.5;

const useScene = () => {
  const { skipIntro, startedExperience, startExperience } = useAppContext();

  const [currentProject, setCurrentProject] = R.useState(
    () => U.getProjectFromHash() ?? U.defaultProject
  );

  // Progetto → hash. Si usa location.hash e non history.pushState perché
  // <base> è fisso.
  R.useEffect(() => {
    const hash = `#/${currentProject.toLowerCase()}`;
    if (window.location.hash !== hash) window.location.hash = hash;
  }, [currentProject]);

  // Tasto indietro/avanti o hash modificato a mano → progetto.
  R.useEffect(() => {
    const onHashChange = () => {
      const fromHash = U.getProjectFromHash();
      if (fromHash) setCurrentProject(fromHash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const galleryItems = Object.entries(U.registry).map(
    ([name, { title, description, accent, icon }]) => ({
      name,
      icon,
      thumb: `./thumbs/${name}.jpg`,
      title,
      description,
      accent,
    })
  );

  const getBgClass = project => U.registry[project]?.bg ?? "bg light-bg";

  // Risoluzione adattiva: PerformanceMonitor restituisce un fattore 0..1 in
  // base agli FPS; dpr scala tra MIN_DPR (device lento) e MAX_DPR.
  const [dpr, setDpr] = R.useState(MAX_DPR);
  const onPerformanceChange = ({ factor }) =>
    setDpr(Math.round((MIN_DPR + (MAX_DPR - MIN_DPR) * factor) * 10) / 10);

  const fitWidth = U.registry[currentProject]?.fitWidth !== false;

  const isSlideShow = currentProject === U.projects.slideShow;

  return {
    currentProject,
    dpr,
    fitWidth,
    galleryItems,
    selectProject: setCurrentProject,
    skipIntro,
    onPerformanceChange,
    getBgClass,
    isSlideShow,
    startedExperience,
    startExperience,
  };
};

export { useScene };
