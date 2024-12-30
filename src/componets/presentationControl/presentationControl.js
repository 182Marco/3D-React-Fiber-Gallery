import { PresentationControls } from "@react-three/drei";
import { usePresentaionControlos } from "./presentationControl.hook";

const PresentationControl = () => {
  const { colors } = usePresentaionControlos();

  return (
    <PresentationControls
      global
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 3, Math.PI / 3]}
      config={{ mass: 2, tensio: 5000 }}
      snap={{ mass: 2, tensio: 5000 }}
    >
      <mesh>
        <boxGeometry args={[4, 4, 4]} />
        {colors.map((c, i) => (
          <meshBasicMaterial key={i} attach={`material-${i}`} color={c} />
        ))}
      </mesh>
    </PresentationControls>
  );
};

export { PresentationControl };
