import { createContext } from "react";
import { data } from "../data/homeData";

export const HomeContext = createContext();

export function HomeContextProvider(props) {

  return (
    <HomeContext.Provider
      value={{

      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}
