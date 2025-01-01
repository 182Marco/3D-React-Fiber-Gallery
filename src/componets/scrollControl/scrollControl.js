import { ScrollControls, Scroll } from "@react-three/drei";
import { useScrollControl } from "./scrollControl.hook";
import { Images } from "../../componets";

const ScrollControl = () => {
  const u = useScrollControl();

  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight />
      <ScrollControls pages={3} damping={0.4}>
        <Scroll>
          <Images />
          <primitive object={u.model.scene} position={[2.3, -1.2, 0]} />
        </Scroll>
        <Scroll html>
          <h1 className="to">to</h1>
          <h1 className="be">be</h1>
          <h1 className="home">home</h1>
        </Scroll>
        {/* <mesh>
        <boxGeometry args={[3, 3, 3]} />
        {u.colors.map((c, i) => (
          <meshBasicMaterial
            kei={i}
            attach={`material-${i}`}
            color={c}
          ></meshBasicMaterial>
        ))}
      </mesh> */}
      </ScrollControls>
    </>
  );
};

export { ScrollControl };
