import { createContext } from "react";

export const SignUpContext = createContext();

export function SignUpContextProvider(props) {

  return (
    <SignUpContext.Provider 
      value={{

      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
}
