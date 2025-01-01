import { Image } from "@react-three/drei";
import { useImages } from "./images.hook";

const Images = () => {
  const u = useImages();
  return (
    <group ref={u.imagesRef}>
      <Image
        position={[-2, 0, 0]}
        scale={[4, u.height, 1]}
        url="./images/1.jpg"
        //zoom={2}
      />
      <Image
        position={[-2.3, -u.height, 2]}
        scale={[1, 3, 1]}
        url="./images/2.jpg"
      />
      <Image
        scale={[1, 2, 1]}
        position={[-0.6, -u.height, 3]}
        url="./images/3.jpg"
      />
      <Image
        position={[0.75, -u.height, 3.5]}
        scale={1.5}
        url="./images/4.jpg"
      />
      <Image
        position={[0, -u.height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url="./images/5.jpg"
        greyscale={1}
      />
      <Image
        position={[0, -u.height * 2 - u.height / 4, 0]}
        scale={[u.width, u.height / 2, 1]}
        url="./images/6.jpg"
      />
    </group>
  );
};

export { Images };
