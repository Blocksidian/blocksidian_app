import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { NavLink, useLocation } from "react-router-dom";
import { Fade } from "@successtar/react-reveal";
import imageDesktopW from "../../assets/WhiteLogoXL.svg";
import imageDesktopB from "../../assets/BlackLogoXL.svg";
import { FaYoutube, FaGithub } from "react-icons/fa";

function footer() {
  const { darkMode } = useContext(GlobalContext);
  const imageDesktop = darkMode ? imageDesktopW : imageDesktopB;

  const location = useLocation();
  const urlFirst = location.pathname;

  const navigation = {
    solutions: [
      { name: "Main Page", href: "/", title: "Main Page" },
      { name: "Other", href: "/other", title: "Others Page" },
    ],
    support: [{ name: "Contact", href: "/contact", title: "Contact Page" }],
    company: [{ name: "About", href: "/#aboutus", title: "About Page" }],
    services: [
      { name: "Privacy", href: "/privacy", title: "Privacy Page" },
      { name: "Terms", href: "/terms", title: "Terms Page" },
    ],
    social: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/@BlocksidianInc",
        title: "Youtube Page",
        icon: <FaYoutube />,
      },
      {
        name: "GitHub",
        href: "https://github.com/MierderTheKat/BlocksidianFrontend",
        title: "Github Page",
        icon: <FaGithub />,
      },
    ],
  };

  urlFirst === "/"
    ? (navigation.solutions[0].section = "#main")
    : delete navigation.solutions[0].section;

  urlFirst != "/"
    ? delete navigation.company[0].section
    : (navigation.company[0].section = "#aboutus");

  return (
    <footer className="z-10 sm:py-10 px-3 dark:bg-gradient-to-b from-transparent sm:via-SoftWhite to-SoftWhite sm:dark:via-DarkBlue dark:to-DarkBlue sm:dark:to-DarkBlue transition">
      <article className="md:flex md:justify-evenly">
        <section className="flex justify-center gap-8 items-center sm:inline">
          <Fade duration={3000}>
            {urlFirst === "/" ? (
              <a
                href="#main"
                title="Bloksidian page"
                className="flex justify-center"
              >
                <img
                  src={imageDesktop}
                  alt="Desktop Logo"
                  title="Footer Logo of Blocsidian"
                  className="h-10 w-44 hover:drop-shadow"
                />
              </a>
            ) : (
              <NavLink
                to=""
                title="Bloksidian page"
                className="flex w-fit mx-auto"
              >
                <img
                  src={imageDesktop}
                  alt="Desktop Logo"
                  title="Footer Logo of Blocsidian"
                  className="h-10 w-44 hover:drop-shadow"
                />
              </NavLink>
            )}
          </Fade>
          <ul className="flex flex-wrap justify-center gap-3 my-5">
            <FooterItemsSocialNav items={navigation.social} />
          </ul>
        </section>
        <section className="hidden sm:inline">
          <ul className="flex flex-wrap justify-evenly sm:justify-center text-center">
            <li className="dark:text-SoftWhite sm:flex">
              <div>
                <p className="hover:font-medium cursor-default">Visit Us</p>
                <ul>
                  <FooterItemsNav items={navigation.solutions} />
                </ul>
              </div>
              <div>
                <p className="hover:font-medium cursor-default">Call Us</p>
                <ul>
                  <FooterItemsNav items={navigation.support} />
                </ul>
              </div>
            </li>
            <li className="dark:text-SoftWhite sm:flex">
              <div>
                <p className="hover:font-medium cursor-default">Company</p>
                <ul>
                  <FooterItemsNav items={navigation.company} />
                </ul>
              </div>
              <div>
                <p className="hover:font-medium cursor-default">Services</p>
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
          {item.section ? (
            <a
              title={item.title}
              href={item.section}
              className="py-1 mx-2 hover:text-black dark:hover:text-SoftWhite"
            >
              {item.name}
            </a>
          ) : (
            <NavLink
              title={item.title}
              to={`${item.href}`}
              className="py-1 mx-2 hover:text-black dark:hover:text-SoftWhite"
            >
              <span className="">{item.name}</span>
            </NavLink>
          )}
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
            title={item.title}
            href={`${item.href}`}
            target="blank"
            className="hover:text-black dark:hover:text-white"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </>
  );
};

export default footer;
