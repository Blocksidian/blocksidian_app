import { createContext } from "react";

export const ContactContext = createContext();

export function ContactContextProvider(props) {

  return (
    <ContactContext.Provider 
      value={{

      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}
