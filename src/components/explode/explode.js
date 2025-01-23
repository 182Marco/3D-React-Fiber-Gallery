import * as D from "@react-three/drei";
import * as C from "../../components";
import { useExplode } from "./explode.hook";

const Explode = () => {
  const h = useExplode();
  return (
    <>
      <D.Environment preset="sunset" background blur={0.4} />
      <D.OrbitControls enableZoom={false} />
      <D.Float floatIntensity={2} speed={3}>
        <C.Heart />
      </D.Float>
    </>
  );
};

export { Explode };
