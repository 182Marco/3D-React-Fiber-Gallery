import * as D from "@react-three/drei";
import * as C from "./components";
import { useExplode } from "./explode.hook";

const Explode = () => {
  const h = useExplode();
  return (
    <>
      <D.Environment preset="sunset" background blur={0.4} />
      <D.OrbitControls enableZoom={false} />
      <D.Float floatIntensity={2} speed={3}>
        <C.Heart visible={h.isSelected(h.heart)} scale={0.7} />
        <C.Banana visible={h.isSelected(h.banana)} scale={0.25} />
        <C.Bird visible={h.isSelected(h.bird)} scale={1.8} />
      </D.Float>
    </>
  );
};

export { Explode };
