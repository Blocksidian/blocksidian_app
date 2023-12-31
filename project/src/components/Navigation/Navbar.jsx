import { useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";
import { NavLink, useLocation } from "react-router-dom";
import { Fade } from "@successtar/react-reveal";
import DarkModeSwitch from "./DarkMode";
import imageMobile from "../../assets/LogoHexagon.svg";
import imageDesktopW from "../../assets/WhiteLogoXL.svg";
import imageDesktopB from "../../assets/BlackLogoXL.svg";
import {
  FaCartShopping,
  FaUser,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

function Navbar() {
  const { checkedLogin } = useContext(GlobalContext);

  const location = useLocation();
  const urlFirst = location.pathname;
  const urls = [
    "/",
    "/contact",
    "/signup",
    "/login",
    "/privacy",
    "/terms",
    "/other",
  ];

  if (urls.includes(urlFirst)) {
    return <NavbarLandingPage />;
  } else {
    return checkedLogin ? <NavbarLogged /> : <NavbarLandingPage />;
  }
}

const NavbarLogged = () => {
  const auth = getAuth();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Cierre de sesión exitoso");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const navigation = [
    { name: "Dashboard", href: "/home", title: "Dashboard page" },
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
    {
      name: "Log Out",
      title: "Log Out",
      icon: <FaArrowRightFromBracket />,
      logout: handleLogout,
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 px-3 py-2 flex gap-3 place-items-center bg-SoftWhite dark:bg-DarkBlue md:py-3 transition">
        <Fade duration={3000}>
          <NavLink
            to="/home"
            title="Blocksidian page"
            className="flex-initial"
            onClick={handleMobileMenuLogo}
          >
            <img
              src={imageMobile}
              alt="Mobile Logo"
              title="Navbar Mobile Logo of Blocksidian"
              className="md:hidden h-16 hover:drop-shadow"
            />
            <img
              src={imageDesktopW}
              alt="Desktop Logo"
              title="Navbar Desktop Logo of Blocksidian"
              className={`hidden md:dark:inline-block h-14 hover:drop-shadow`}
            />
            <img
              src={imageDesktopB}
              alt="Desktop Logo"
              title="Navbar Desktop Logo of Blocksidian"
              className="hidden md:inline-block md:dark:hidden h-14 hover:drop-shadow"
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
              logout={item.logout}
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
              logout={item.logout}
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
};

const NavbarLandingPage = () => {
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

  const location = useLocation();
  const urlFirst = location.pathname;

  const navigation = [
    { name: "Home", href: "/", title: "Home page" },
    {
      name: "About Us",
      href: "/#aboutus",
      title: "About Us section",
      section: "#aboutus",
    },
    { name: "Contact", href: "/contact", title: "Contact page" },
    {
      name: "Sign Up",
      href: "/signup",
      title: "Sign Up page",
      button: true,
      style: 1,
    },
    {
      name: "Log In",
      href: "/login",
      title: "Log In page",
      button: true,
      style: 2,
    },
  ];

  // Verifica si esta o no esta en el home, para hacer referencias o scrolls
  urlFirst === "/"
    ? (navigation[0].section = "#main")
    : delete navigation[0].section;

  urlFirst != "/"
    ? delete navigation[1].section
    : (navigation[1].section = "#aboutus");

  return (
    <>
      <nav className="sticky top-0 z-50 px-3 py-2 flex gap-3 place-items-center bg-SoftWhite dark:bg-DarkBlue md:py-3 transition">
        {urlFirst === "/" ? (
          <a
            href="#main"
            title="Blocksidian page"
            className="flex-initial"
            onClick={handleMobileMenuLogo}
          >
            <img
              src={imageMobile}
              alt="Mobile Logo"
              title="Navbar Mobile Logo of Blocksidian"
              className="md:hidden h-16 hover:drop-shadow"
            />
            <img
              src={imageDesktopW}
              alt="Desktop Logo"
              title="Navbar Desktop Logo of Blocksidian"
              className={`hidden md:dark:inline-block h-14 hover:drop-shadow`}
            />
            <img
              src={imageDesktopB}
              alt="Desktop Logo"
              title="Navbar Desktop Logo of Blocksidian"
              className="hidden md:inline-block md:dark:hidden h-14 hover:drop-shadow"
            />
          </a>
        ) : (
          <NavLink
            to=""
            title="Blocksidian page"
            className="flex-initial"
            onClick={handleMobileMenuLogo}
          >
            <img
              src={imageMobile}
              alt="Mobile Logo"
              title="Navbar Mobile Logo of Blocksidian"
              className="md:hidden h-16 hover:drop-shadow"
            />
            <img
              src={imageDesktopW}
              alt="Desktop Logo"
              title="Navbar Desktop Logo of Blocksidian"
              className={`hidden md:dark:inline-block h-14 hover:drop-shadow`}
            />
            <img
              src={imageDesktopB}
              alt="Desktop Logo"
              title="Navbar Desktop Logo of Blocksidian"
              className="hidden md:inline-block md:dark:hidden h-14 hover:drop-shadow"
            />
          </NavLink>
        )}
        <div className="flex-auto"></div>
        {/* Desktop Menu */}
        <ul className="hidden text-DarkBlue gap-3 flex-none place-items-center dark:text-SoftWhite sm:flex">
          {navigation.map((item, index) => (
            <NavItemDesktop
              key={index}
              href={item.href}
              section={item.section}
              name={item.name}
              title={item.title}
              icon={item.icon}
              button={item.button}
              style={item.style}
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
              section={item.section}
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
};

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

const NavItemMobile = ({
  href = "",
  section,
  name = "Link",
  title = "",
  click,
  logout,
}) => {
  return (
    <>
      <li className="text-center">
        {logout ? (
          <button
            title={title}
            className="py-1 px-5 hover:font-medium hover:text-DarkViolet dark:hover:text-SoftViolet"
            onClick={() => {
              logout();
            }}
          >
            {name}
          </button>
        ) : section ? (
          <a
            title={title}
            href={section}
            className="py-1 px-5 hover:font-medium hover:text-DarkViolet dark:hover:text-SoftViolet"
            onClick={() => {
              click();
            }}
          >
            {name}
          </a>
        ) : (
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
        )}
      </li>
    </>
  );
};

const NavItemDesktop = ({
  href = "",
  section,
  icon,
  name = "Link",
  title = "",
  button,
  style,
  logout,
}) => {
  return (
    <li className={`${icon ? "px-1" : " flex-initial"}`}>
      {logout ? (
        <button
          title={title}
          onClick={() => {
            logout();
          }}
          className={`${
            icon
              ? "text-xl h-6 flex items-center"
              : "py-1 border-DarkViolet hover:border-b-2"
          } hover:text-DarkViolet dark:hover:text-SoftViolet dark:border-SoftViolet`}
        >
          {icon ? icon : name}
        </button>
      ) : section ? (
        <a
          title={title}
          href={section}
          className="py-1 border-DarkViolet hover:border-b-2 hover:text-DarkViolet dark:hover:text-SoftViolet dark:border-SoftViolet"
        >
          {name}
        </a>
      ) : button ? (
        <NavLink
          to={`${href}`}
          className={`${
            style === 1
              ? "text-purple-400 border-purple-400 hover:bg-purple-800 hover:border-purple-800 hover:text-white dark:text-white px-6 py-1.5"
              : "text-white bg-purple-400 hover:bg-purple-800 px-8 py-2 border-none"
          } text-sm border-2 rounded-full font-medium transition duration-500`}
        >
          {name}
        </NavLink>
      ) : (
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
      )}
    </li>
  );
};

export default Navbar;
