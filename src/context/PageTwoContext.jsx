import { createContext } from "react";

export const PageTwoContext = createContext();

export function PageTwoContextProvider(props) {

  return (
    <PageTwoContext.Provider
      value={{

      }}
    >
      {props.children}
    </PageTwoContext.Provider>
  );
}
