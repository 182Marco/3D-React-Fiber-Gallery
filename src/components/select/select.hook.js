import { useAppContext } from "../../context/useAppContext";

const useSelect = () => {
  const u = useAppContext();

  return {
    list: u.state.btns,
    transformString: (str) =>
      str
        .replace(/_/g, "")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase(),
    setCurrentAction: u.setCurrentAction,
  };
};

export { useSelect };
