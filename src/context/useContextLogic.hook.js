import { useState } from "react";

const useContextLogic = () => {
  const [startedExperience, setStart] = useState(false);

  const startExperience = () => setStart(true);

  return { startedExperience, startExperience };
};

export { useContextLogic };
