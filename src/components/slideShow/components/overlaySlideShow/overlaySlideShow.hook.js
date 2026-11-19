import { atom, useAtom } from "jotai";
import * as R from "react";
import * as fixedVars from "../../fixedVars";

const slideAtom = atom(0);

const useOverlaySlideShow = () => {
  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = R.useState(slide);
  const [visible, setVisible] = R.useState(false);

  R.useEffect(() => {
    const id = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(id);
  }, []);

  R.useEffect(() => {
    setVisible(false);
    const id = setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
    return () => clearTimeout(id);
  }, [slide]);

  const currentSlide = fixedVars.scenes?.[displaySlide];
  const numberOfScenes = fixedVars.scenes?.length;

  return { displaySlide, currentSlide, numberOfScenes, setSlide, visible };
};

export { useOverlaySlideShow, slideAtom };
