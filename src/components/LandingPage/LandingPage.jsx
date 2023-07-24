import imageHexagon from "../../assets/LogoFavicon.svg";
import { Fade } from "@successtar/react-reveal";
import { FaRegCirclePlay } from "react-icons/fa6";

function LandingPage() {
  return (
    <>
      <article className="container mx-auto px-3">
        <section className="flex justify-center items-center mt-10 mb-32 lg:mt-16">
          <Fade left duration={3000}>
            <section className="">
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
                <button className="flex justify-center items-center p-2 px-4 mx-10 xs:mx-0 bg-transparent rounded  hover:text-purple-500 dark:text-white">
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
        </section>
        <section className="py-2 xs:p-2 md:p-12 md:py-16 lg:px-16 lg:py-32 mx-auto w-5/6">
          <Fade duration={2500}>
            <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white md:text-4xl">
              About
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
                Blocksidian
              </span>
            </h2>
          </Fade>
          <Fade duration={2500}>
            <p className="text-justify text-base mt-4 md:text-lg md:mt-4 md:block text-gray-600 dark:text-gray-300">
              We are a revolutionary blockchain-based platform dedicated to
              revolutionizing the ticketing industry. Our mission is to provide
              a seamless and secure experience for buying and selling event
              tickets. With the power of blockchain technology, we are tackling
              major challenges such as ticket duplication and counterfeit
              tickets, ensuring that every ticket transaction is transparent,
              traceable, and tamper-proof.
              <br />
              <br />
              Our user-friendly interface allows you to browse events, view
              seating arrangements, and choose your preferred seats hassle-free.
              You can also conveniently transfer tickets to friends or sell them
              securely within our platform's ticket exchange section.
              <br />
              <br />
              Join us on our mission to revolutionize the ticketing industry.
              Experience the convenience, transparency, and trust that
              blockchain brings to the world of event ticketing. Say hello to a
              future where attending your favorite events is seamless, secure,
              and unforgettable.
            </p>
          </Fade>
        </section>
      </article>
    </>
  );
}

export default LandingPage;
