import * as R from "react";
import gsap from "gsap";
import * as D from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const FL_HEIGHT = 2.3;
const FL_NUMBER = 3;

const useOffice = () => {
  const allOfficeRef = R.useRef();
  const tl = R.useRef();
  const { nodes, materials } = D.useGLTF("./model/WawaOffice.glb");
  const scroll = D.useScroll();

  useFrame(() => {
    tl.current.seek(scroll?.offset * tl.current.duration());
  });

  R.useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      allOfficeRef.current.position,
      {
        duration: 2,
        y: -FL_HEIGHT * (FL_NUMBER - 1),
      },
      0,
    );
  }, []);

  return { allOfficeRef, nodes, materials };
};

export { useOffice };
