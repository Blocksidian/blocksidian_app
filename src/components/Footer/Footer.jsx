import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { NavLink } from "react-router-dom";
import imageDesktopW from "../../assets/WhiteLogoXL.svg";
import imageDesktopB from "../../assets/BlackLogoXL.svg";
import { FaYoutube, FaGithub } from "react-icons/fa";

function footer() {
  const { darkMode } = useContext(GlobalContext);
  const imageDesktop = darkMode ? imageDesktopW : imageDesktopB;

  const navigation = {
    solutions: [
      { name: "Main Page", href: "/" },
      { name: "Other", href: "/other" },
    ],
    support: [{ name: "Contact", href: "/contact" }],
    company: [{ name: "About", href: "/about" }],
    services: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
    social: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/@BlocksidianInc",
        icon: <FaYoutube />,
        colorW: "slate-300",
        colorD: "slate-300",
      },
      {
        name: "GitHub",
        href: "https://github.com/MierderTheKat/BlocksidianFrontend",
        icon: <FaGithub />,
        colorW: "black",
        colorD: "white",
      },
    ],
  };

  return (
    <footer className="sm:py-10 px-3 dark:bg-gradient-to-b from-transparent sm:via-SoftWhite to-SoftWhite sm:dark:via-DarkBlue dark:to-DarkBlue sm:dark:to-DarkBlue transition">
      <article className="md:flex md:justify-evenly">
        <section className="flex justify-center gap-8 items-center sm:inline">
          <NavLink to="" className="flex justify-center">
            <img src={imageDesktop} alt="Desktop Logo" className="h-10" />
          </NavLink>
          <ul className="flex flex-wrap justify-center gap-3 my-5">
            <FooterItemsSocialNav items={navigation.social} />
          </ul>
        </section>
        <section className="hidden sm:inline">
          <ul className="flex flex-wrap justify-evenly sm:justify-center text-center">
            <li className="dark:text-SoftWhite sm:flex">
              <div>
                <h3 className="hover:font-medium cursor-default">Visit Us</h3>
                <ul>
                  <FooterItemsNav items={navigation.solutions} />
                </ul>
              </div>
              <div>
                <h3 className="hover:font-medium cursor-default">Call Us</h3>
                <ul>
                  <FooterItemsNav items={navigation.support} />
                </ul>
              </div>
            </li>
            <li className="dark:text-SoftWhite sm:flex">
              <div>
                <h3 className="hover:font-medium cursor-default">Company</h3>
                <ul>
                  <FooterItemsNav items={navigation.company} />
                </ul>
              </div>
              <div>
                <h3 className="hover:font-medium cursor-default">Services</h3>
                <ul>
                  <FooterItemsNav items={navigation.services} />
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </article>
      <article className="hidden sm:flex flex-col text-center pt-8 mt-10 mx-4 border-t border-SoftGray cursor-default xs:flex-row xs:justify-center dark:text-SoftWhite">
        <span>© 2023 Blocksidian,</span>
        <span className="xs:ms-1">Inc. All rights reserved.</span>
      </article>
    </footer>
  );
}

const FooterItemsNav = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index} className="w-32 mt-2 last:mb-4 text-SoftGray">
          <NavLink
            to={`${item.href}`}
            className="py-1 mx-2 hover:text-black dark:hover:text-SoftWhite"
          >
            <span className="">{item.name}</span>
          </NavLink>
        </li>
      ))}
    </>
  );
};

const FooterItemsSocialNav = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index} className="text-3xl	h-8 w-8 text-SoftGray">
          <a
            href={`${item.href}`}
            target="blank"
            className={`hover:text-black dark:hover:text-white`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </>
  );
};

export default footer;
