import * as U from "../utils/projects";

const getOptions = comp => {
  switch (true) {
    case comp === U.projects.Explode:
      return { position: [0, 0, 5], fov: 30 };
    case comp === U.projects.Home3d:
      return { position: [2.3, 1.5, 2.3], fav: 64 };
    case comp === U.projects.Dog:
      return { fov: 33, near: 0.1, far: 500, position: [-7, 0, 10] };
    default:
      console.log("Errore: componente non valido.");
      return null;
  }
};

const getCamera = comp => ({
  camera: getOptions(comp),
});

export { getCamera };
