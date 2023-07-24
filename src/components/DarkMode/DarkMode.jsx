import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const DarkModeSwitch = () => {
  const { useDarkMode } = useContext(GlobalContext);
  const [darkTheme, setDarkTheme] = useDarkMode();

  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode} className="mx-3">
      <div className="w-14 h-8 relative cursor-pointer">
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
    </span>
  );
};

export default DarkModeSwitch;
