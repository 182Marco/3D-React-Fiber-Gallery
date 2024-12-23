import { useState } from "react";

const useContextLogic = () => {
  const [state, setState] = useState({
    btns: [],
    currentAction: "",
  });

  const setBtns = (btns) => {
    setState((pv) => ({
      ...pv,
      btns: [...btns],
    }));
  };

  const setCurrentAction = (action) => {
    setState((pv) => ({
      ...pv,
      currentAction: action,
    }));
  };

  return { setBtns, setCurrentAction, state };
};

export { useContextLogic };
