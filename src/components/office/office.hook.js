import * as R from "react";
import * as RF from "@react-three/fiber";
import * as D from "@react-three/drei";
import * as U from "./utils";
import gsap from "gsap";

const useOffice = () => {
  const allOfficeRef = R.useRef();
  const tl = R.useRef();
  const libraryRef = R.useRef();
  const atticRef = R.useRef();
  const { nodes, materials } = D.useGLTF("./model/WawaOffice.glb");
  const scroll = D.useScroll();

  RF.useFrame(() => {
    tl.current.seek(scroll?.offset * tl.current.duration());
  });

  R.useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      allOfficeRef.current.position,
      {
        duration: 2,
        y: -U.FL_HEIGHT * (U.FL_NUMBER - 1),
      },
      0,
    );
    tl.current.from(
      allOfficeRef.current.rotation,
      {
        duration: 1,
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
      0,
    );
    tl.current.from(
      allOfficeRef.current.rotation,
      {
        duration: 1,
        x: 0,
        y: -Math.PI / 6,
        z: 0,
      },
      1,
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
      0.5,
    );
    tl.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0,
    );
    tl.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      1,
    );
  }, []);

  return { allOfficeRef, atticRef, libraryRef, nodes, materials };
};

export { useOffice };
