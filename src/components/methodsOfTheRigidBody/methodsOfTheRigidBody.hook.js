import { useRef } from "react";

const useMethodsOfTheRigidBody = () => {
  const firstMesh = useRef();

  const fistMeshClickHandler = () => {
    //  firstMesh.current.addForce({ x: 0, y: 10, z: 0 });
    // firstMesh.current.applyImpulse({ x: -3, y: 5, z: 4.5 });
    // firstMesh.current.applyImpulseAtPoint(
    //   { x: -1, y: 2, z: 1.7 },
    //   { x: 2, y: 0, z: 0 }, // 2nd argument is where to appy the force
    // );
    // firstMesh.current.addTorque({ x: 0, y: 33, z: 0 });
    firstMesh.current.applyTorqueImpulse({ x: 0, y: 4, z: 0 });
  };

  return { firstMesh, fistMeshClickHandler };
};

export { useMethodsOfTheRigidBody };
