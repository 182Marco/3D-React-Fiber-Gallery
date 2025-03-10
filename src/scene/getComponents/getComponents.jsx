import * as C from "../../components";
import * as U from "../utils";
import {
  WithFallBackSuspense,
  WithSuspense,
  WithScrollControls,
} from "./wrappers";

const GetComponents = projName => {
  switch (projName) {
    case U.projects.Home3d:
      return <C.Home3d />;
    case U.projects.Explode:
      return WithScrollControls(C.Explode);
    case U.projects.Dog:
      return WithFallBackSuspense(C.Dog);
    case U.projects.PortalPass:
      return WithFallBackSuspense(C.PortalPass);
    case U.projects.Bike:
      return WithFallBackSuspense(C.Bike);
    case U.projects.slideShow:
      return WithFallBackSuspense(C.SlideShow);
    case U.projects.Woman:
      return WithSuspense(C.Woman);
    case U.projects.CartFollowingMidget:
      return WithSuspense(C.CartFollowingMidget);
    default:
      console.log("Error: comp not found", projName);
      return null;
  }
};

export { GetComponents };
