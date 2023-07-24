import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { NavLink } from "react-router-dom";
import { Fade } from "@successtar/react-reveal";
import DarkModeSwitch from "../DarkMode/DarkMode";
import imageMobile from "../../assets/LogoHexagon.svg";
import imageDesktopW from "../../assets/WhiteLogoXL.svg";
import imageDesktopB from "../../assets/BlackLogoXL.svg";
import { FaCartShopping, FaUser } from "react-icons/fa6";

function Navbar() {
  const { darkMode } = useContext(GlobalContext);
  const imageDesktop = darkMode ? imageDesktopW : imageDesktopB;

  // Estado local para el menú desplegable
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [burgerState, setBurgerState] = useState(false);

  // Función para manejar el cambio de estado del menú desplegable
  const handleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setBurgerState(!burgerState);
  };

  const handleMobileMenuLogo = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(!isMobileMenuOpen);
      setBurgerState(!burgerState);
    }
  };

  const navigation = [
    { name: "Dashboard", href: "/", title: "Dashboard page" },
    { name: "Events", href: "/events", title: "Events page" },
    {
      name: "Exchange ticket",
      href: "/exchange_ticket",
      title: "Exchange ticket page",
    },
    { name: "Create Event", href: "/create_event", title: "Create Event page" },
    {
      name: "Shopping cart",
      href: "/shopping_cart",
      title: "Shopping cart page",
      icon: <FaCartShopping />,
    },
    {
      name: "Profile",
      href: "/profile",
      title: "Profile page",
      icon: <FaUser />,
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 px-3 py-2 flex gap-3 place-items-center bg-SoftWhite dark:bg-DarkBlue md:py-3 transition">
        <Fade duration={3000}>
          <NavLink
            to=""
            title="Bloksidian page"
            className="flex-initial"
            onClick={handleMobileMenuLogo}
          >
            <img
              src={imageMobile}
              alt="Mobile Logo"
              title="Navbar Mobile Logo of Blocsidian"
              className="md:hidden h-16 hover:drop-shadow"
            />
            <img
              src={imageDesktop}
              alt="Desktop Logo"
              title="Navbar Desktop Logo of Blocsidian"
              className="hidden md:inline-block h-14 hover:drop-shadow"
            />
          </NavLink>
        </Fade>
        <div className="flex-auto"></div>
        {/* Desktop Menu */}
        <ul className="hidden text-DarkBlue gap-3 flex-none place-items-center dark:text-SoftWhite sm:flex">
          {navigation.map((item, index) => (
            <NavItemDesktop
              key={index}
              href={item.href}
              name={item.name}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
        <DarkModeSwitch />
        <BurguerMenu click={handleMobileMenu} state={burgerState} />
        {/* Mobile Menu Toggle */}
        <ul
          className={`${
            isMobileMenuOpen
              ? " top-20 z-50"
              : "top-16 -z-50 opacity-0 invisible"
          } sm:hidden flex flex-col gap-3 pb-3 absolute left-0 text-DarkBlue bg-SoftWhite w-full border-b-2 dark:text-SoftWhite dark:bg-DarkBlue dark:border-DarkBlue transition-all`}
        >
          {navigation.map((item, index) => (
            <NavItemMobile
              key={index}
              href={item.href}
              name={item.name}
              title={item.title}
              click={handleMobileMenu}
            />
          ))}
        </ul>
      </nav>
      {isMobileMenuOpen ? (
        <div
          className="h-full w-full absolute top-0 left-0 z-40"
          onClick={handleMobileMenu}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}

const BurguerMenu = ({ click, state }) => {
  const [isOpen, setIsOpen] = useState(state);

  useEffect(() => {
    setIsOpen(state);
  }, [state]);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="sm:hidden relative w-8 h-6"
      onClick={() => {
        handleMenuClick();
        click();
      }}
    >
      <div
        className={`absolute w-full h-1 bg-DarkViolet left-0 rounded ${
          isOpen ? "rotate-45 top-2.5" : "top-0"
        } transition`}
      ></div>
      <div
        className={`absolute h-1 bg-DarkViolet top-2.5 left-0 rounded ${
          isOpen ? "w-1 left-3.5" : "w-full"
        } transition-all`}
      ></div>
      <div
        className={`absolute w-full h-1 bg-DarkViolet left-0 rounded ${
          isOpen ? "-rotate-45 top-2.5" : "top-5"
        } transition`}
      ></div>
    </div>
  );
};

// Componente para reutilizar codigo

const NavItemMobile = ({ href = "", name = "Link", title = "", click }) => {
  return (
    <li className="text-center">
      <NavLink
        title={title}
        to={`${href}`}
        className="py-1 px-5 hover:font-medium hover:text-DarkViolet dark:hover:text-SoftViolet"
        onClick={() => {
          click();
        }}
      >
        {name}
      </NavLink>
    </li>
  );
};

const NavItemDesktop = ({ href = "", name = "Link", title = "", icon }) => {
  return (
    <li className={`${icon ? "px-1" : " flex-initial"}`}>
      <NavLink
        title={title}
        to={`${href}`}
        className={`${
          icon
            ? "text-xl h-6 flex items-center"
            : "py-1 border-DarkViolet hover:border-b-2"
        } hover:text-DarkViolet dark:hover:text-SoftViolet dark:border-SoftViolet`}
      >
        {icon ? icon : name}
      </NavLink>
    </li>
  );
};

export default Navbar;
