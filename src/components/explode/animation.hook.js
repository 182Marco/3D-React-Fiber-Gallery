import * as R from "react";
import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";
import * as THREE from "three";

const {
  Vector3,
  MathUtils: { lerp },
} = THREE;

const useExplodeAnimation = (group, options = {}) => {
  const { distance = 3 } = options;

  R.useEffect(() => {
    const groupWorldPosition = new Vector3();

    // Calcola la posizione del gruppo nel mondo
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children?.forEach(e => {
      e.originalPosition = e.position?.clone() || new Vector3();
      const meshWorldPosition = new Vector3();
      e.getWorldPosition(meshWorldPosition);

      e.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
    });
  }, [group]);

  R.useEffect(() => {
    group.current.children?.forEach(e => {
      e.targetPosition =
        e.originalPosition
          ?.clone()
          .add(e.directionVector?.clone().multiplyScalar(distance)) ||
        new Vector3();
    });
  }, [group, distance]);

  const scrollData = D.useScroll();

  F.useFrame(() => {
    group.current.children.forEach(e => {
      e.visible =
        scrollData.offset < 0.0001 ? e.name === "origin" : e.name !== "origin";

      if (
        e.position &&
        e.originalPosition &&
        e.targetPosition &&
        e.targetPosition.x
      ) {
        e.position.x = lerp(
          e.originalPosition.x,
          e.targetPosition.x,
          scrollData.offset,
        );
        e.position.y = lerp(
          e.originalPosition.y,
          e.targetPosition.y,
          scrollData.offset,
        );
        e.position.z = lerp(
          e.originalPosition.z,
          e.targetPosition.z,
          scrollData.offset,
        );
      }
    });
  });
};

export { useExplodeAnimation };
