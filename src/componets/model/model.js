import { useModel } from "./model.hook";

const Model = () => {
  const u = useModel();
  return <primitive object={u.model.scene} />;
};

export { Model };
