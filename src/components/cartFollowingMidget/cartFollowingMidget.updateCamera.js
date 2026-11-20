import * as R from "react";
import * as T from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { galleryOpenAtom } from "../gallery";

const useUpdateCamera = () => {
  const { camera } = T.useThree();
  const galleryOpen = useAtomValue(galleryOpenAtom);
  const audioRef = R.useRef(null);

  R.useEffect(() => {
    // creato qui (non a livello di modulo) così il file audio viene
    // scaricato solo quando questa scena viene davvero usata
    const audio = new Audio("./audios/Song Of Unity.mp3");
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  // Musica in pausa mentre la galleria (modale) è aperta; riparte da dove era
  // se la si chiude restando su questa scena. Se la scena si apre a galleria
  // aperta (avvio dell'app) parte solo alla chiusura, cioè dopo un gesto
  // dell'utente, quindi senza il blocco dell'autoplay dei browser.
  R.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (galleryOpen) audio.pause();
    else audio.play().catch(() => {});
  }, [galleryOpen]);

  R.useEffect(() => {
    const originalPosition = camera.position.clone();
    const originalFov = camera.fov;

    camera.position.set(0, 2, 8);
    camera.fov = 25;
    camera.updateProjectionMatrix();

    return () => {
      camera.position.copy(originalPosition);
      camera.fov = originalFov;
      camera.updateProjectionMatrix();
    };
  }, [camera]);
};

export { useUpdateCamera };
