import { createContext } from "react";

export const EventsContext = createContext();

export function EventsContextProvider(props) {

  return (
    <EventsContext.Provider
      value={{

      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
}
