import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [footer, setFooter] = useState(false);

  const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage("dark-theme");
    const isEnabled = typeof enabled === "undefined" ? enabled : enabled;

    useEffect(() => {
      const className = "dark";
      const bodyClass = window.document.body.classList;

      isEnabled ? bodyClass.add(className) : bodyClass.remove(className);

      setDarkMode(enabled);
    }, [enabled, isEnabled]);

    return [enabled, setEnabled];
  };

  const globalEvents = [
    {
      image: "https://placehold.jp/1200x720.png",
      name: "Burnout Syndromes",
      date: "30/08/2023",
      hour: "09:00 PM",
      place: "Estadio akron",
      placeURL: "https://goo.gl/maps/NZmy5AqvYz7aBEVH8",
      href: "/home",
      availability: true,
    },
    {
      image: "",
      name: "BTS",
      date: "10/09/2023",
      hour: "09:00 PM",
      place: "Auditorio Nacional",
      placeURL: "https://goo.gl/maps/BBmemcZsnKztkXTY7",
      href: "/home",
      availability: false,
    },
    {
      image: "",
      name: "The Weeknd",
      date: "14/12/2023",
      hour: "05:00 PM",
      place: "Auditorio Telmex",
      placeURL: "https://goo.gl/maps/5DjN4iirdye7nTLS6",
      href: "/home",
      availability: true,
    },
  ];

  const myEvents = [
    {
      image: "https://placehold.jp/1200x720.png",
      name: "Junior H",
      date: "22/08/2023",
      hour: "09:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Angeles Azules",
      date: "22/08/2023",
      hour: "06:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Julion Alvarez",
      date: "29/07/2023",
      hour: "02:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
  ];

  const popularEvents = [
    {
      image: "https://placehold.jp/1200x720.png",
      name: "Julion Alvarez",
      date: "22/08/2023",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Angeles Azules",
      date: "22/08/2023",
      hour: "06:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Angeles Azules",
      date: "30/07/2023",
      hour: "06:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
  ];

  return (
    <GlobalContext.Provider
      value={{
        useDarkMode,
        darkMode,
        setNavbar,
        navbar,
        setFooter,
        footer,
        globalEvents,
        myEvents,
        popularEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

function useLocalStorage(key, initialValue) {
  // Guardamos el valor de una llave en el localstorage
  // Si existe hace todo esto
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Si no existe la agrega al localstorage

  const setValue = (value) => {
    try {
      const ValueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(ValueToStore);

      window.localStorage.setItem(key, JSON.stringify(ValueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
