import * as R from "react";
import * as U from "../utils";
import {
  WithFallBackSuspense,
  WithSuspense,
  WithScrollControls,
} from "./wrappers";

// Ogni progetto è caricato solo quando viene selezionato (code splitting).
const lazyNamed = (load, name) =>
  R.lazy(() => load().then(m => ({ default: m[name] })));

const Bike = lazyNamed(() => import("../../components/bike"), "Bike");
const loadCartFollowingMidget = () =>
  import("../../components/cartFollowingMidget");
const CartFollowingMidget = lazyNamed(
  loadCartFollowingMidget,
  "CartFollowingMidget"
);
// Progetto di default (Leva): lo importiamo subito all'avvio così i suoi
// useGLTF.preload partono mentre si vede la LoadScreen. Senza, il progresso di
// useProgress resta a 0 e il pulsante Start non si abilita mai.
loadCartFollowingMidget();
const Dog = lazyNamed(() => import("../../components/dog"), "Dog");
const Explode = lazyNamed(
  () => import("../../components/explode"),
  "Explode"
);
const Home3d = lazyNamed(() => import("../../components/home3d"), "Home3d");
const PortalPass = lazyNamed(
  () => import("../../components/portalPass"),
  "PortalPass"
);
const SlideShow = lazyNamed(
  () => import("../../components/slideShow"),
  "SlideShow"
);
const Woman = lazyNamed(() => import("../../components/woman"), "Woman");

const GetComponents = projName => {
  switch (projName) {
    case U.projects.Home3d:
      return WithSuspense(Home3d);
    case U.projects.Explode:
      return WithScrollControls(Explode);
    case U.projects.Dog:
      return WithFallBackSuspense(Dog);
    case U.projects.PortalPass:
      return WithFallBackSuspense(PortalPass);
    case U.projects.Bike:
      return WithFallBackSuspense(Bike);
    case U.projects.slideShow:
      return WithFallBackSuspense(SlideShow, "#ececec");
    case U.projects.Woman:
      return WithSuspense(Woman);
    case U.projects.CartFollowingMidget:
      return WithSuspense(CartFollowingMidget);
    default:
      console.log("Error: comp not found", projName);
      return null;
  }
};

export { GetComponents };
