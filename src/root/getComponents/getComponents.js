import * as C from "../../components";
import * as D from "@react-three/drei";
import * as U from "../utils";
import * as R from "react";

const GetComponents = projName => {
  switch (projName) {
    case U.projects.Home3d:
      return <C.Home3d />;
    case U.projects.Explode:
      return (
        <D.ScrollControls pages={4}>
          <C.Explode />
        </D.ScrollControls>
      );
    case U.projects.Dog:
      return (
        <R.Suspense fallback={<C.Spinner />}>
          <C.Dog />
        </R.Suspense>
      );
    default:
      console.log("Error: comp not found", projName);
      return null;
  }
};

export { GetComponents };
