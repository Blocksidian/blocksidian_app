import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "../DarkMode/DarkMode";
import imageMobile from "../../assets/LogoHexagon.svg";
import imageDesktopW from "../../assets/WhiteLogoXL.svg";
import imageDesktopB from "../../assets/BlackLogoXL.svg";

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

  return (
    <>
      <nav className="sticky top-0 z-50 flex place-items-center px-3 py-2 lg:py-3 bg-SoftWhite dark:bg-DarkBlue transition">
        <NavLink to="" className="flex-initial" onClick={handleMobileMenuLogo}>
          <img src={imageMobile} alt="Mobile Logo" className="lg:hidden h-16" />
          <img
            src={imageDesktop}
            alt="Desktop Logo"
            className="hidden lg:inline-block h-14"
          />
        </NavLink>
        <div className="flex-auto"></div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-none place-items-center dark:text-white">
          <NavItemDesktop refa="" name="Dashboard" />
          <NavItemDesktop refa="profile" name="User profile" />
          <NavItemDesktop refa="events" name="Events" />
          <NavItemDesktop refa="shopping_cart" name="Shopping Cart" />
          <NavItemDesktop refa="exchange_ticket" name="Exchange ticket" />
          <NavItemDesktop refa="create_event" name="Create an Event" />
        </ul>
        <DarkModeSwitch />
        <HamburguerMenu click={handleMobileMenu} state={burgerState} />
        {/* Mobile Menu Toggle */}
        <ul
          className={`${
            isMobileMenuOpen
              ? " top-20 z-50"
              : "top-16 -z-50 opacity-0 invisible"
          } lg:hidden absolute left-0 bg-SoftWhite w-full border-b-2 dark:text-white dark:bg-DarkBlue dark:border-DarkBlue transition-all`}
        >
          <NavItemMobile refa="" name="Dashboard" click={handleMobileMenu} />
          <NavItemMobile
            refa="profile"
            name="User profile"
            click={handleMobileMenu}
          />
          <NavItemMobile refa="events" name="Events" click={handleMobileMenu} />
          <NavItemMobile
            refa="shopping_cart"
            name="Shopping Cart"
            click={handleMobileMenu}
          />
          <NavItemMobile
            refa="exchange_ticket"
            name="Exchange ticket"
            click={handleMobileMenu}
          />
          <NavItemMobile
            refa="create_event"
            name="Create an Event"
            click={handleMobileMenu}
          />
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

const HamburguerMenu = ({ click, state }) => {
  const [isOpen, setIsOpen] = useState(state);

  useEffect(() => {
    setIsOpen(state);
  }, [state]);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="lg:hidden relative w-8 h-6"
      onClick={() => {
        handleMenuClick();
        click();
      }}
    >
      <div
        className={`absolute w-full h-1 bg-DarkViolet dark:bg-SoftViolet left-0 rounded ${
          isOpen ? "rotate-45 top-2.5" : "top-0"
        } transition`}
      ></div>
      <div
        className={`absolute h-1 bg-DarkViolet dark:bg-SoftViolet top-2.5 left-0 rounded ${
          isOpen ? "w-1 left-3.5" : "w-full"
        } transition-all`}
      ></div>
      <div
        className={`absolute w-full h-1 bg-DarkViolet dark:bg-SoftViolet left-0 rounded ${
          isOpen ? "-rotate-45 top-2.5" : "top-5"
        } transition`}
      ></div>
    </div>
  );
};

// Componenete para reutilizar codigo

const NavItemMobile = ({ refa = "", name = "Link", click }) => {
  return (
    <li className="m-4 text-center">
      <NavLink
        to={`/${refa}`}
        className="py-2 px-5"
        onClick={() => {
          click();
        }}
      >
        {name}
      </NavLink>
    </li>
  );
};

const NavItemDesktop = ({ refa = "", name = "Link" }) => {
  return (
    <li className="flex-initial">
      <NavLink
        to={`/${refa}`}
        className="py-1 mx-2 border-DarkViolet hover:text-DarkViolet dark:hover:text-SoftViolet hover:border-b-2 dark:border-SoftViolet"
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Navbar;
