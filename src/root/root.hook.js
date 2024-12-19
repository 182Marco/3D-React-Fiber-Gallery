import { useState } from "react";

const useRoot = () => {
  const [IsShowDog, setShowDog] = useState(false);

  const toggleShowDog = () => setShowDog((pv) => !pv);

  return { IsShowDog, toggleShowDog };
};

export { useRoot };
