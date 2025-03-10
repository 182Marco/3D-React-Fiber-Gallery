import * as THREE from "three";
import * as D from "@react-three/drei";
import { useMonsterStage } from "./monsterStage.hook";

const MonsterStage = ({
  children,
  active,
  color,
  hover,
  name,
  setActive,
  setIsHover,
  texture,
  ...props
}) => {
  const h = useMonsterStage(texture, active, name);

  return (
    <group {...props}>
      <D.Text
        font="./fonts/Caprasimo-Regular.ttf"
        fontSize={0.3}
        position={[0, -1.3, 0.051]}
        anchorY="bottom"
      >
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </D.Text>
      <D.RoundedBox
        args={[2, 3, 0.1]}
        onPointerEnter={() => setIsHover(name)}
        onPointerLeave={() => setIsHover(null)}
        name={name}
      >
        <D.MeshPortalMaterial side={THREE.DoubleSide} ref={h.portalMaterialRef}>
          <D.Environment preset="sunset" />
          <ambientLight intensity={4} />
          {children}
          <mesh onDoubleClick={() => setActive(active === name ? null : name)}>
            <sphereGeometry args={[10, 64, 64]} />
            <meshStandardMaterial map={h.loadedTexture} side={THREE.BackSide} />
          </mesh>
        </D.MeshPortalMaterial>
      </D.RoundedBox>
    </group>
  );
};

export { MonsterStage };
