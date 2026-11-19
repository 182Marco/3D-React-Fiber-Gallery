import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";
import * as R from "react";
import * as THREE from "three";
import * as V from "./environmentVars";

const MIN_DISTANCE = 4;
const FOCUS_DISTANCE = 4.5;

const usePortalPass = () => {
  const [active, setActive] = R.useState(null);
  const [hover, setIsHover] = R.useState(null);
  const cameraRef = R.useRef();
  const scene = F.useThree(state => state.scene);
  const fov = F.useThree(state => state.camera.fov);
  const aspect = F.useThree(state => state.size.width / state.size.height);

  const isPortrait = aspect < 1;
  const layout = isPortrait ? V.portraitLayout : V.landscapeLayout;

  // Distanza a cui tutte le card entrano nello schermo (sia in larghezza
  // sia in altezza), mai più vicina di MIN_DISTANCE.
  const { width, height } = isPortrait ? V.bounds.portrait : V.bounds.landscape;
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(fov) / 2);
  const fitDistance =
    Math.max(
      MIN_DISTANCE,
      height / 2 / tanHalf,
      width / 2 / (tanHalf * aspect),
    ) + 0.3;

  D.useCursor(hover);

  R.useEffect(() => {
    if (!cameraRef.current) return;
    if (active) {
      const target = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(target);
      // In verticale ci si mette di fronte alla card; in orizzontale la vista
      // resta leggermente di lato, come nel design originale.
      const from = isPortrait
        ? [target.x, target.y, target.z + FOCUS_DISTANCE]
        : [0, 0, 5];
      cameraRef.current.setLookAt(...from, target.x, target.y, target.z, true);
    } else {
      cameraRef.current.setLookAt(0, 0, fitDistance, 0, 0, 0, true);
      cameraRef.current.maxDistance = Math.max(6, fitDistance + 1);
    }
  }, [active, isPortrait, fitDistance]);

  return { active, cameraRef, hover, layout, setActive, setIsHover };
};

export { usePortalPass };
