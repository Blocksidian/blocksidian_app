import imageHexagon from "../../assets/LogoFavicon.svg";
import arrow from "../../assets/illustrations/arrow.svg";
import bank from "../../assets/illustrations/banks.png";
import buy from "../../assets/illustrations/buy.png";
import deal from "../../assets/illustrations/deal.png";
import signup from "../../assets/illustrations/signup.png";
import { Fade } from "@successtar/react-reveal";
import { FaRegCirclePlay } from "react-icons/fa6";

function LandingPage() {
  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <Hero />
        <AboutUs />
        <VideoPresentation />
        <Steps />
      </article>
    </>
  );
}

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-80px)] pb-20 flex justify-center items-center "
    >
      <Fade left duration={3000}>
        <section className="">
          <p className="uppercase font-semibold text-lg text-purple-800 text-center md:text-left dark:text-purple-400">
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
            <button className="flex justify-center items-center p-2 px-4 mx-10 xs:mx-0 bg-transparent rounded hover:text-purple-500 dark:text-white dark:hover:text-purple-500">
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
  );
};

export const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="xs:px-2 md:px-16 lg:px-16 xl:px-20 mx-auto w-11/12 xs:w-5/6"
    >
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
          revolutionizing the ticketing industry. Our mission is to provide a
          seamless and secure experience for buying and selling event tickets.
          With the power of blockchain technology, we are tackling major
          challenges such as ticket duplication and counterfeit tickets,
          ensuring that every ticket transaction is transparent, traceable, and
          tamper-proof.
          <br />
          <br />
          Our user-friendly interface allows you to browse events, view seating
          arrangements, and choose your preferred seats hassle-free. You can
          also conveniently transfer tickets to friends or sell them securely
          within our platform's ticket exchange section.
          <br />
          <br />
          Join us on our mission to revolutionize the ticketing industry.
          Experience the convenience, transparency, and trust that blockchain
          brings to the world of event ticketing. Say hello to a future where
          attending your favorite events is seamless, secure, and unforgettable.
        </p>
      </Fade>
    </section>
  );
};

export const VideoPresentation = () => {
  return (
    <section
      id="presentation"
      className="-mx-2 xs:mx-auto max-w-4xl my-8 sm:mb-20 sm:mt-16"
    >
      <Fade duration={2000}>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute w-full h-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PaoAiBVGQu8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export const Steps = () => {
  return (
    <section id="steps" className="z-0 py-10 text-center">
      <h2 className="font-bold text-2xl sm:text-4xl mb-12 leading-normal text-black dark:text-white">
        Get started in just a few minutes
      </h2>
      <div className="lg:flex justify-center gap-20">
        <StepsItems
          delay={450}
          src={signup}
          title={"Explore Events"}
          description={
            "Explore our wide selection of events and choose the one you like the most."
          }
        />
        <StepsItems
          delay={550}
          src={buy}
          title={"Buy Tickets"}
          description={
            "Select the number of tickets you want and make a secure transaction with our blockchain technology."
          }
        />
        <StepsItems
          delay={650}
          src={bank}
          title={"Validate Tickets"}
          description={
            "Once the purchase is made, your tickets will be linked to your blockchain identity, which guarantees their authenticity and avoids duplicity."
          }
        />
        <StepsItems
          delay={750}
          src={deal}
          last={true}
          title={"Enjoy your Event"}
          description={
            "Arrive at the event with complete confidence, knowing that your tickets are legitimate and that you have contributed to the fight against counterfeit tickets."
          }
        />
      </div>
    </section>
  );
};

export const StepsItems = ({
  delay = 0,
  src,
  last = false,
  title = "",
  description = "",
}) => {
  return (
    <Fade up delay={delay}>
      <div className="text-center px-4 mt-4 lg:mt-0">
        <div className="relative lg:h-36 xl:h-44">
          <img
            src={src}
            className="w-44 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
            alt=""
          />
          {last ? (
            <></>
          ) : (
            <img
              src={arrow}
              alt=""
              className="w-28 hidden lg:block absolute top-1/2 -right-28"
            />
          )}
        </div>
        <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
          {title}
        </h3>
        <p className="text-justify mx-auto max-w-sm text-black dark:text-white">
          {description}
        </p>
      </div>
    </Fade>
  );
};

export default LandingPage;
