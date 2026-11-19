import { useResponsiveCamera } from "./responsiveCamera.hook";

// Non disegna nulla: regola solo lo zoom della camera del Canvas.
const ResponsiveCamera = ({ enabled = true }) => {
  useResponsiveCamera(enabled);
  return null;
};

export { ResponsiveCamera };
