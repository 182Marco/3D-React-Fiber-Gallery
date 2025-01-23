import * as R from "react";
import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";
import * as THREE from "three";

const useHeart = () => {
  const { nodes, materials } = D.useGLTF("/model/heart.glb");
  const allHeart = R.useRef();

  R.useEffect(() => {
    // Create a new Vector3 to hold the world position of the entire heart object
    const allHeartWorldPosition = new THREE.Vector3();

    // Get the world position of the whole heart and store it in allHeartWorldPosition
    allHeart.current.getWorldPosition(allHeartWorldPosition);

    allHeart.current.children?.forEach(e => {
      // Store the original position of the mesh (in case we need it later)
      e.originalPosition = e.position.clone();

      const meshWorldPosition = new THREE.Vector3();
      e.getWorldPosition(meshWorldPosition);

      // Calculate the direction vector from the heart object to this mesh and normalize it
      e.directionVector = meshWorldPosition
        .clone()
        .sub(allHeartWorldPosition)
        .normalize();

      e.targetPosition = e.originalPosition
        .clone()
        .add(e.directionVector.clone().multiplyScalar(3));
    });
  }, []);

  const scrollData = D.useScroll();

  F.useFrame(() => {
    allHeart.current?.children.forEach(e => {
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
    });
  });

  return { allHeart, nodes, materials };
};

export { useHeart };
