import * as R from "react";
import * as F from "@react-three/fiber";
import * as L from "leva";
import { useAtom } from "jotai";
import { slideAtom } from "./components/overlaySlideShow/overlaySlideShow.hook";
import * as vars from "./fixedVars";

// tempo durante cui la slide precedente resta animata (transizione camera)
const TRANSITION_MS = 3000;

const useSlideShow = () => {
  const viewport = F.useThree(state => state.viewport);
  const [slide] = useAtom(slideAtom);
  const [activeSlides, setActiveSlides] = R.useState([slide]);
  const lastSlide = R.useRef(slide);

  const { slideDistance } = L.useControls(vars.slideDistance);

  // Solo le slide visibili (attiva + precedente durante la transizione)
  // vengono renderizzate ogni frame; le altre restano sull'ultimo frame.
  R.useEffect(() => {
    if (lastSlide.current === slide) return;
    setActiveSlides([lastSlide.current, slide]);
    lastSlide.current = slide;
    const t = setTimeout(() => setActiveSlides([slide]), TRANSITION_MS);
    return () => clearTimeout(t);
  }, [slide]);

  return { viewport, slideDistance, activeSlides };
};

export { useSlideShow };
