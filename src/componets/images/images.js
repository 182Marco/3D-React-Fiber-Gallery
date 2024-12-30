import { Image } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Images = () => {
  const { width, height } = useThree(state => state.viewport);

  return (
    <group>
      <Image
        position={[-2, 0, 0]}
        scale={[4, height, 1]}
        url="./images/1.jpg"
      />
      <Image
        position={[-2.3, -height, 2]}
        scale={[1, 3, 1]}
        url="./images/2.jpg"
      />
      <Image
        scale={[1, 2, 1]}
        position={[-0.6, -height, 3]}
        url="./images/3.jpg"
      />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="./images/4.jpg" />
      <Image
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url="./images/5.jpg"
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url="./images/6.jpg"
      />
    </group>
  );
};

export { Images };
