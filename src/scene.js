const Scene = () => {
  return (
    <group>
      <mesh position-x={-2}>
        <boxGeometry arg={[8, 3, 10]} />
        <meshBasicMaterial color="turquoise" wireframe />
      </mesh>
      <mesh position-x={2}>
        <boxGeometry arg={[2, 10, 6]} />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
    </group>
  );
};

export { Scene };
