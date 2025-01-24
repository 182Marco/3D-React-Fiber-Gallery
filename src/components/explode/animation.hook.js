import * as L from "leva";
import * as R from "react";
import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";
import * as THREE from "three";

const useExplodeAnimation = (group, options = {}) => {
  const { distance = 3, enableRotation = true } = options;

  R.useEffect(() => {
    // Create a new Vector3 to hold the world position of the entire heart object
    const groupWorldPosition = new THREE.Vector3();

    // Get the world position of the whole heart and store it in groupWorldPosition
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children?.forEach(e => {
      // Store the original position of the mesh (in case we need it later)
      e.originalPosition = e.position.clone();

      const meshWorldPosition = new THREE.Vector3();
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
      if (scrollData.offset < 0.0001) {
        if (e.name === "origin") {
          e.visible = true;
        } else {
          e.visible = false;
        }
      } else {
        if (e.name === "origin") {
          e.visible = false;
        } else {
          e.visible = true;
        }
      }
    });

    group.current?.children.forEach(e => {
      if (e.position) {
        e.position.x = THREE.MathUtils.lerp(
          e.originalPosition.x,
          e.targetPosition.x,
          scrollData.offset, // starts at 0 and get's to 1 after scrolling
        );
        e.position.y = THREE.MathUtils.lerp(
          e.originalPosition.y,
          e.targetPosition.y,
          scrollData.offset,
        );
        e.position.z = THREE.MathUtils.lerp(
          e.originalPosition.z,
          e.targetPosition.z,
          scrollData.offset,
        );
      }
    });
  });
};

export { useExplodeAnimation };
