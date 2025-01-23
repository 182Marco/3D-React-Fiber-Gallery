import * as R from "react";
import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";
import * as THREE from "three";

const useHeart = () => {
  // Load the GLTF model using useGLTF hook from @react-three/drei
  const { nodes, materials } = D.useGLTF("/model/heart.glb");

  // Create a ref to hold the 3D object (the heart in this case)
  const allHeart = R.useRef();

  // Run the effect when the component is mounted (on componentDidMount)
  R.useEffect(() => {
    // Check if allHeart.current is defined (i.e., the object is available)
    if (allHeart.current) {
      // Create a new Vector3 to hold the world position of the entire heart object
      const allHeartWorldPosition = new THREE.Vector3();

      // Get the world position of the whole heart and store it in allHeartWorldPosition
      allHeart.current.getWorldPosition(allHeartWorldPosition);

      // Loop through all children of the heart object (each mesh or part)
      allHeart.current.children?.forEach(e => {
        // Store the original position of the mesh (in case we need it later)
        e.originalPosition = e.position.clone();

        // Create a Vector3 to hold the world position of each mesh
        const meshWorldPosition = new THREE.Vector3();

        // Get the world position of the mesh and store it in meshWorldPosition
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
    }
  }, []);

  const scrollData = D.useScroll();

  F.useFrame(() => {
    allHeart.current?.children.forEach(e => {
      e.position.x = THREE.MathUtils.lerp(
        e.originalPosition.x,
        e.targetPosition.x,
        scrollData.offset, // 0 all'inizio e 1 dopo lo scroll
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

  // Return the ref and other model data (nodes and materials)
  return { allHeart, nodes, materials };
};

export { useHeart };
