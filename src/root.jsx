import { AppProvider } from "./context";
import { Scene } from "./scene";

const Root = () => {
  return (
    <AppProvider>
      <Scene />
    </AppProvider>
  );
};

export { Root };
