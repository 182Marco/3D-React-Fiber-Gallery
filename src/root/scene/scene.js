import { GetComponents } from "../getComponents";
import * as C from "../../components";
import * as F from "@react-three/fiber";
import * as U from "../utils";

const Scene = projName => {
  switch (projName) {
    case U.projects.Home3d:
      return (
        <F.Canvas {...U.getCamera(U.projects.Home3d)}>
          {GetComponents(projName)}
        </F.Canvas>
      );
    case U.projects.Explode:
      return (
        <F.Canvas {...U.getCamera(U.projects.Explode)}>
          {GetComponents(projName)}
        </F.Canvas>
      );
    case U.projects.Dog:
      return (
        <>
          <C.Select />
          <F.Canvas {...U.getCamera(U.projects.Dog)}>
            {GetComponents(projName)}
          </F.Canvas>
        </>
      );
    default:
      console.error("Errore: comp non valido.");
      return null;
  }
};

export { Scene };
