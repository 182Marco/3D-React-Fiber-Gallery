import * as C from "../../components";
import * as D from "@react-three/drei";
import * as U from "../utils";
import * as R from "react";

const withSuspense = Component => (
  <R.Suspense>
    <Component />
  </R.Suspense>
);

const withFallBackSuspense = Component => (
  <R.Suspense fallback={<C.Spinner speed={10} />}>
    <Component />
  </R.Suspense>
);

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
      return withFallBackSuspense(C.Dog);
    case U.projects.PortalPass:
      return withFallBackSuspense(C.PortalPass);
    case U.projects.Bike:
      return withFallBackSuspense(C.Bike);
    case U.projects.slideShow:
      return withFallBackSuspense(C.SlideShow);
    case U.projects.Woman:
      return <C.Woman />;
    case U.projects.CartFollowingMidget:
      return withSuspense(C.CartFollowingMidget);
    default:
      console.log("Error: comp not found", projName);
      return null;
  }
};

export { GetComponents };
