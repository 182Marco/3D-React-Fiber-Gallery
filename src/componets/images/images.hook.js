import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

const useImages = () => {
  const { height, width } = useThree(state => state.viewport);
  const imagesRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const images = imagesRef.current?.children;
    if (!imagesRef.current?.children?.length) return;

    images[0].material.zoom = 1 + scroll.range(0, 0.33) / 3;
    images.forEach((e, i) =>
      i > 0 && i < 4 ? (e.material.zoom = 1 + scroll.range(0.33, 0.66)) : null
    );
  });

  return { height, imagesRef, width };
};

export { useImages };
