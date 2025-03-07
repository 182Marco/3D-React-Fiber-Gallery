import * as C from "./components";
import * as D from "@react-three/drei";
import { scenes } from "./fixedVars";
import { useSlideShow } from "./slideShow.hook";

const SlideShow = () => {
  const h = useSlideShow();

  return (
    <>
      <ambientLight intensity={0.2} />
      <D.Environment preset={"city"} />
      <C.CameraHandler slideDistance={h.slideDistance} />
      <group>
        <mesh position-y={h.viewport.height / 2 + 1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <D.MeshDistortMaterial color={scenes[0].mainColor} speed={3} />
        </mesh>
        <mesh
          position-x={h.viewport.width + h.slideDistance}
          position-y={h.viewport.height / 2 + 1.5}
        >
          <boxGeometry />
          <D.MeshDistortMaterial color={scenes[1].mainColor} speed={3} />
        </mesh>
        <D.Dodecahedron
          position-x={2 * (h.viewport.width + h.slideDistance)}
          position-y={h.viewport.height / 2 + 1.5}
        >
          <D.MeshDistortMaterial color={scenes[2].mainColor} speed={3} />
        </D.Dodecahedron>
      </group>

      <D.Grid
        position-y={-h.viewport.height / 2}
        sectionSize={1}
        sectionColor={"purple"}
        sectionThickness={1}
        cellSize={0.5}
        cellColor={"#6f6f6f"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
      {scenes.map((s, index) => (
        <mesh
          key={s.path}
          position={[index * (h.viewport.width + h.slideDistance), 0, 0]}
        >
          <planeGeometry args={[h.viewport.width, h.viewport.height]} />
          <meshBasicMaterial toneMapped={false}>
            <D.RenderTexture attach="map">
              <C.Slide {...s} />
            </D.RenderTexture>
          </meshBasicMaterial>
        </mesh>
      ))}
    </>
  );
};
export { SlideShow };
