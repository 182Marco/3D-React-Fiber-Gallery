import * as D from "@react-three/drei";
import * as L from "leva";
import * as R from "react";

const useExplode = () => {
  const bird = "bird";
  const banana = "banana";
  const heart = "heart";
  const componets = { bird, banana, heart };
  const options = Object.keys(componets);

  const { item } = L.useControls({ item: { value: heart, options } });

  const scroll = D.useScroll();

  // Cambiando oggetto riparti dalla posizione compatta, anche se
  // quello precedente era stato esploso scorrendo la pagina.
  R.useLayoutEffect(() => {
    scroll.el.scrollTop = 0;
    scroll.offset = 0;
  }, [item, scroll]);

  const isSelected = name => item === componets[name];

  return { banana, bird, heart, isSelected };
};

export { useExplode };
