import { useExplode } from "./explode.hook";
import * as C from "../../components";

const Explode = () => {
  const h = useExplode();
  return (
    <>
      <C.Heart />
    </>
  );
};

export { Explode };
