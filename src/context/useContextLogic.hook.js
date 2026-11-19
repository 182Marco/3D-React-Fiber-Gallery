import { useState } from "react";
import { isDeepLinkToOtherProject } from "../scene/utils";

const useContextLogic = () => {
  // Link diretto a un progetto non di default: niente intro, si parte subito.
  const [skipIntro] = useState(isDeepLinkToOtherProject);
  const [startedExperience, setStart] = useState(skipIntro);

  const startExperience = () => setStart(true);

  return { skipIntro, startedExperience, startExperience };
};

export { useContextLogic };
