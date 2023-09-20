import { useState, useEffect } from "react";

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

const DarkModeSwitch = () => {
  const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage("dark-theme");
    const isEnabled = typeof enabled === "undefined" ? enabled : enabled;

    useEffect(() => {
      const className = "dark";
      const bodyClass = window.document.body.classList;

      isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled, isEnabled]);

    return [enabled, setEnabled];
  };

  const [darkTheme, setDarkTheme] = useDarkMode();

  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <div className="w-14 h-8 relative cursor-pointer" onClick={handleMode}>
      <div className="w-14 h-8 left-0 top-0 absolute bg-white rounded-2xl dark:bg-DarkMode transition" />
      <div className="w-6 h-6 left-1 top-1 relative bg-yellow-400 rounded-2xl dark:left-7 dark:bg-zinc-400 transition-all">
        <div className="opacity-0 dark:opacity-100 transition">
          <div className="w-0.5 h-0.5 left-[5px] top-[5px] absolute rounded bg-gray-500" />
          <div className="w-0.5 h-0.5 left-[16px] top-[4px] absolute rounded bg-gray-500" />
          <div className="w-0.5 h-0.5 left-2.5 top-2.5 absolute rounded bg-gray-500" />
          <div className="w-0.5 h-0.5 left-[17px] top-[13px] absolute rounded bg-gray-500" />
          <div className="w-0.5 h-0.5 left-[15px] top-[18px] absolute rounded bg-gray-500" />
          <div className="w-0.5 h-0.5 left-2 top-4 absolute rounded bg-gray-500" />
          <div className="w-0.5 h-0.5 left-0.5 top-3.5 absolute rounded bg-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
