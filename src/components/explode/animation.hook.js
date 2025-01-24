import * as L from "leva";
import * as R from "react";
import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";
import * as THREE from "three";

const {
  Vector3,
  MathUtils: { lerp },
} = THREE;

const useExplodeAnimation = (group, options = {}) => {
  const { distance = 3, enableRotation = true } = options;

  R.useEffect(() => {
    // Create a new Vector3 to hold the world position of the entire heart object
    const groupWorldPosition = new Vector3();

    // Get the world position of the whole heart and store it in groupWorldPosition
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children?.forEach(e => {
      // Store the original position of the mesh (in case we need it later)
      e.originalPosition = e.position.clone();

      const meshWorldPosition = new Vector3();
      e.getWorldPosition(meshWorldPosition);

      // Calculate the direction vector from the heart object to this mesh and normalize it
      e.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
    });
  }, []);

  R.useEffect(() => {
    group.current.children?.forEach(e => {
      e.targetPosition = e.originalPosition
        .clone()
        .add(e.directionVector.clone().multiplyScalar(options.distance));
    });
  }, [options.distance]);

  const scrollData = D.useScroll();

  F.useFrame(() => {
    group.current.children.forEach(e => {
      e.visible =
        scrollData.offset < 0.0001 ? e.name === "origin" : e.name !== "origin";
    });

    group.current?.children.forEach(e => {
      const getLerpArgs = axe => [
        e.originalPosition[axe],
        e.targetPosition[axe],
        scrollData.offset, // starts at 0 and get's to 1 after scrolling
      ];

      if (e.position) {
        e.position.x = lerp(...getLerpArgs("x"));
        e.position.y = lerp(...getLerpArgs("y"));
        e.position.z = lerp(...getLerpArgs("z"));
      }
    });
  });
};

export { useExplodeAnimation };
