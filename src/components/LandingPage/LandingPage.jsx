import imageHexagon from "../../assets/LogoFavicon.svg";
import { Fade } from "@successtar/react-reveal";
import { FaRegCirclePlay } from "react-icons/fa6";

function LandingPage() {
  return (
    <>
      <article className="container mx-auto flex justify-center items-center px-3">
        <Fade left duration={3000}>
          <section className="my-12">
            <p className="uppercase font-semibold text-lg text-purple-800 text-center md:text-left">
              Sign up today
            </p>
            <h1 className="text-center font-bold leading-normal text-4xl dark:text-white md:text-5xl md:text-left lg:text-6xl">
              Discover extraordinary <br />
              events with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
                Blocksidian
              </span>
            </h1>
            <h2 className="mt-4 mb-8 text-center md:text-left dark:text-white">
              Buy, sell and enjoy your tickets with total confidence and
              transparency!
            </h2>
            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-2">
              <button className="p-2 px-4 mx-10 xs:mx-0 bg-purple-500 rounded text-white hover:bg-purple-800">
                More Information
              </button>
              <button className="flex justify-center items-center p-2 px-4 mx-10 xs:mx-0 bg-transparent rounded  hover:text-white dark:text-white">
                <span className="me-2 text-2xl text-purple-500">
                  <FaRegCirclePlay />
                </span>
                Presentation
              </button>
            </div>
          </section>
        </Fade>
        <Fade duration={5000}>
          <aside className="hidden md:flex relative md:flex-1 justify-center">
            <img
              src={imageHexagon}
              alt="Desktop Logo"
              title="Footer Logo of Blocsidian"
              className="z-10 h-40 lg:h-52 xl:h-60 2xl:h-72 hover:drop-shadow"
            />
            <div className="absolute z-0 h-40 bg-purple-800 dark:bg-purple-400 opacity-100 dark:opacity-5 blur-3xl rounded-full animate-pulse bg-gradient-to-br from-primary to-secondary delay-700 duration-2000 aspect-square lg:h-52 xl:h-60 2xl:h-72"></div>
          </aside>
        </Fade>
      </article>
    </>
  );
}

export default LandingPage;
