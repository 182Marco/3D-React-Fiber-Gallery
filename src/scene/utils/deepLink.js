import { projects } from "./projects";
import { defaultProject } from "./registry";

const options = Object.keys(projects);

// Deep link: l'hash dell'URL (#/bike, case-insensitive) sceglie il progetto.
const getProjectFromHash = () => {
  const name = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  return options.find(o => o.toLowerCase() === name);
};

// Link diretto a un progetto che non è quello di default: l'intro (LoadScreen
// con il pulsante Start) si salta.
const isDeepLinkToOtherProject = () => {
  const project = getProjectFromHash();
  return Boolean(project) && project !== defaultProject;
};

export { getProjectFromHash, isDeepLinkToOtherProject };
