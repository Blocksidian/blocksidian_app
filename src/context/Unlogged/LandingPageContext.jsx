import { createContext } from "react";

export const LandingPageContext = createContext();

export function LandingPageContextProvider(props) {

  return (
    <LandingPageContext.Provider
      value={{

      }}
    >
      {props.children}
    </LandingPageContext.Provider>
  );
}
