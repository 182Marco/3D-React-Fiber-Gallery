import * as R from "react";
import * as D from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const FL_HEIGHT = 2.3;
const FL_NUMBER = 3;

const useOffice = () => {
  const allOfficeRef = R.useRef();
  const tl = R.useRef();
  const libraryRef = R.useRef();
  const atticRef = R.useRef();
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
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5,
    );
    tl.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0,
    );
    tl.current.from(
      atticRef.current.position,
      {
        duration: 0.5,
        z: -2,
      },
      1.5,
    );
  }, []);

  return { allOfficeRef, atticRef, libraryRef, nodes, materials };
};

export { useOffice };
