import { createContext } from "react";

export const LogInContext = createContext();

export function LogInContextProvider(props) {

  return (
    <LogInContext.Provider 
      value={{

      }}
    >
      {props.children}
    </LogInContext.Provider>
  );
}
