import { useRef } from "react";

const useMassInRapier = () => {
  const firstMesh = useRef();
  const secondMesh = useRef();

  const fistMeshClickHandler = () => {
    firstMesh.current.applyImpulse({ x: -10, y: 0, z: 0 });
  };

  const secondMeshClickHandler = () => {
    secondMesh.current.applyImpulse({ x: 10, y: 0, z: 0 });
  };

  return {
    firstMesh,
    fistMeshClickHandler,
    secondMesh,
    secondMeshClickHandler,
  };
};

export { useMassInRapier };
