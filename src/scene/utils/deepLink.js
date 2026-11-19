import { projects } from "./projects";

const options = Object.keys(projects);

// Deep link: l'hash dell'URL (#/bike, case-insensitive) sceglie il progetto.
const getProjectFromHash = () => {
  const name = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  return options.find(o => o.toLowerCase() === name);
};

export { getProjectFromHash };
