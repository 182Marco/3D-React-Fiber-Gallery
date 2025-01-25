import * as C from "../../components";
import * as D from "@react-three/drei";
import * as U from "../utils";

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
      return <C.Dog />;
    default:
      console.log("Error: comp not found.", projName);
      return null;
  }
};

export { GetComponents };
