import * as D from "@react-three/drei";
import * as R from "@react-three/rapier";
import { usePhotoWorld } from "./photoWorld.hook";

const WALL = 0.5;
// Arena invisibile: tiene gli oggetti nel campo visivo
const walls = [
  { position: [-3.4, 0, 0], args: [WALL, 2, 5] },
  { position: [3.4, 0, 0], args: [WALL, 2, 5] },
  { position: [0, 0, -4.6], args: [4, 2, WALL] },
  { position: [0, 0, 4.6], args: [4, 2, WALL] },
];

const Shape = ({ shape }) => {
  switch (shape) {
    case "torusKnot":
      return <torusKnotGeometry args={[0.45, 0.16, 160, 24]} />;
    case "icosahedron":
      return <icosahedronGeometry args={[0.75, 0]} />;
    case "dodecahedron":
      return <dodecahedronGeometry args={[0.75, 0]} />;
    case "octahedron":
      return <octahedronGeometry args={[0.85, 0]} />;
    case "cylinder":
      return <cylinderGeometry args={[0.7, 0.7, 0.4, 48]} />;
    default:
      return <sphereGeometry args={[0.85, 96, 96]} />;
  }
};

const PhotoWorld = () => {
  const h = usePhotoWorld();

  return (
    <>
      {/* key: cambiando mondo l'Environment viene ricreato da zero */}
      <D.Environment key={h.name} background {...h.world} />
      <D.OrbitControls makeDefault minDistance={2.5} maxDistance={12} />
      {/* Senza gravità e con le rotazioni libere: oggetti che scivolano come
          palle da biliardo, frenati da un po' di attrito */}
      <R.Physics key={h.name} gravity={[0, 0, 0]}>
        {h.world.objects.map((o, i) => (
          <R.RigidBody
            key={i}
            ref={b => (h.bodies.current[i] = b)}
            position={o.position}
            colliders={o.shape === "sphere" ? "ball" : "hull"}
            enabledTranslations={[true, false, true]}
            linearDamping={0.45}
            angularDamping={0.8}
            restitution={0.9}
            friction={0.2}
          >
            <mesh onClick={e => h.push(i, e)}>
              <Shape shape={o.shape} />
              <meshPhysicalMaterial {...o.material} />
            </mesh>
          </R.RigidBody>
        ))}
        {walls.map((w, i) => (
          <R.RigidBody key={`w${i}`} type="fixed" position={w.position}>
            <R.CuboidCollider args={w.args} restitution={0.9} />
          </R.RigidBody>
        ))}
      </R.Physics>
    </>
  );
};

export { PhotoWorld };
