import * as R from "react";
import { useContextLogic } from "./useContextLogic.hook";

const AppContext = R.createContext();

const useAppContext = () => R.useContext(AppContext);

const AppProvider = ({ children }) => {
  const contextValue = useContextLogic();

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
