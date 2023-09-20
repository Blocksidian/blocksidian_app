import { createContext } from "react";

export const CreateEventsContext = createContext();

export function CreateEventsContextProvider(props) {

  return (
    <CreateEventsContext.Provider
      value={{

      }}
    >
      {props.children}
    </CreateEventsContext.Provider>
  );
}
