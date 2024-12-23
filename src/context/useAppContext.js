import React, { createContext, useContext } from "react";
import { useContextLogic } from "./useContextLogic.hook";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const u = useContextLogic();

  return <AppContext.Provider value={u}>{children}</AppContext.Provider>;
};

export { AppProvider, useAppContext };
