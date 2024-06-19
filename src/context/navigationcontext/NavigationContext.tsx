import { createContext, useState } from "react";
import { ContextProps } from "./NavigationContext.types";

export const NavigationContext = createContext({});

const NavigationProvider: React.FC<ContextProps> = ({ children }) => {
  const [appActualPage, setAppActualPage] = useState<String>("");
  const [appActualSubPage, setAppActualSubPage] = useState<String>("");
  const [appActualCategory, setAppActualCategory] = useState<String>("");
  const [appMenuVisibility, setAppMenuVisibility] = useState<Boolean>(false);

  return (
    <NavigationContext.Provider
      value={{
        appActualPage,
        setAppActualPage,
        appActualSubPage,
        setAppActualSubPage,
        appActualCategory,
        setAppActualCategory,
        appMenuVisibility,
        setAppMenuVisibility,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
