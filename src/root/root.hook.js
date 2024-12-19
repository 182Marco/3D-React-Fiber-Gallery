import { useState } from "react";

const useRoot = () => {
  const [isShowDog, setShowDog] = useState(false);

  const toggleShowDog = () => setShowDog((pv) => !pv);

  return { isShowDog, toggleShowDog };
};

export { useRoot };
