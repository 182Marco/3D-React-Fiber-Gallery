import * as R from "react";
import * as F from "@react-three/fiber";

// Le scene sono pensate per uno schermo largo. Sotto questo rapporto
// larghezza/altezza si riduce lo zoom della camera, così l'estensione
// orizzontale visibile resta quella di REF_ASPECT e nulla esce dai lati.
const REF_ASPECT = 1.2;

const useResponsiveCamera = enabled => {
  const camera = F.useThree(state => state.camera);
  const aspect = F.useThree(state => state.size.width / state.size.height);

  R.useEffect(() => {
    camera.zoom = enabled ? Math.min(1, aspect / REF_ASPECT) : 1;
    camera.updateProjectionMatrix();
    return () => {
      camera.zoom = 1;
      camera.updateProjectionMatrix();
    };
  }, [camera, aspect, enabled]);
};

export { REF_ASPECT, useResponsiveCamera };
