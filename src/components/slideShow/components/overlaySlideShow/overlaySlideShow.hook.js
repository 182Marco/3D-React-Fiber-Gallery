import { atom, useAtom } from "jotai";
import * as R from "react";
import * as fixedVars from "../../fixedVars";

const slideAtom = atom(0);

const useOverlaySlideShow = () => {
  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = R.useState(slide);
  const [visible, setVisible] = R.useState(false);

  R.useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  R.useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
  }, [slide]);

  const currentSlide = fixedVars.scenes?.[displaySlide];
  const numberOfScenes = fixedVars.scenes?.length;

  return { displaySlide, currentSlide, numberOfScenes, setSlide, visible };
};

export { useOverlaySlideShow, slideAtom };
