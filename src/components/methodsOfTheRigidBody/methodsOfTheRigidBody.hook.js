import { useRef } from "react";

const useMethodsOfTheRigidBody = () => {
  const firstMesh = useRef();

  const fistMeshClickHandler = () =>
    firstMesh.current.addForce({ x: 0, y: 10, z: 0 });

  return { firstMesh, fistMeshClickHandler };
};

export { useMethodsOfTheRigidBody };
