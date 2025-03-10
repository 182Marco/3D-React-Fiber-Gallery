import { useGLTF } from "@react-three/drei";
import { useRock } from "./rock.hook";

const Rock = props => {
  const h = useRock();
  return (
    <group ref={h.group} {...props} dispose={null}>
      <mesh
        geometry={h.nodes.menhir_mini.geometry}
        material={h.materials["color_main.001"]}
      />
    </group>
  );
};

export { Rock };

useGLTF.preload("./model/rock.gltf");
