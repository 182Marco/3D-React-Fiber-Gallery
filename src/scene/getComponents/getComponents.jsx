import * as R from "react";
import * as U from "../utils";
import {
  WithFallBackSuspense,
  WithSuspense,
  WithScrollControls,
} from "./wrappers";

// Un componente lazy per progetto, creato una volta sola dal registry.
const lazyComponents = Object.fromEntries(
  Object.entries(U.registry).map(([name, { load, exportName }]) => [
    name,
    R.lazy(() => load().then(m => ({ default: m[exportName] }))),
  ])
);

// Progetto di default: import anticipato, vedi commento in registry.js.
// Con un link diretto a un altro progetto l'intro non c'è, quindi non serve.
if (!U.isDeepLinkToOtherProject()) U.registry[U.defaultProject].load();

const GetComponents = projName => {
  const project = U.registry[projName];
  if (!project) {
    console.log("Error: comp not found", projName);
    return null;
  }
  const Component = lazyComponents[projName];
  switch (project.wrapper) {
    case "scroll":
      return WithScrollControls(Component);
    case "fallback":
      return WithFallBackSuspense(Component, project.background);
    default:
      return WithSuspense(Component);
  }
};

export { GetComponents };
