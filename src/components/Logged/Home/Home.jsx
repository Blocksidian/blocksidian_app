import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Fade } from "@successtar/react-reveal";
import { FaRegCalendar, FaRegClock, FaMapLocationDot } from "react-icons/fa6";

const Home = () => {
  const { globalEvents, myEvents, popularEvents } = useContext(GlobalContext);

  // Obtenemos la fecha actual y el comienzo del día de hoy
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  // Filtrar eventos según si la fecha es menor al día actual
  const currentlyEvents = myEvents.filter((evento) => {
    const [day, month, year] = evento.date.split("/").map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate >= startOfDay;
  });

  const pastEvents = myEvents.filter((evento) => {
    const [day, month, year] = evento.date.split("/").map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate < startOfDay;
  });

  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <h1 className="my-6 lg:mt-10 lg:mb-12 text-center text-3xl font-bold dark:text-white">
          Welcome Back <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
            * Username *
          </span>
        </h1>
        <section className="mb-6 px-0 2xl:px-12 3xl:px-20 lg:flex">
          <article className="flex-auto">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Available Tickets
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              {currentlyEvents.length ? (
                currentlyEvents.map((item, index) => (
                  <EventCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    date={item.date}
                    hour={item.hour}
                    place={item.place}
                    placeURL={item.placeURL}
                    href={item.href}
                    index={index}
                  />
                ))
              ) : (
                <NotFound />
              )}
            </section>
            <h2 className="my-6 lg:mt-10 text-center text-2xl font-bold dark:text-white">
              Inactive Tickets
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              {pastEvents.length ? (
                pastEvents.map((item, index) => (
                  <DisableEventCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    date={item.date}
                    hour={item.hour}
                    place={item.place}
                    href={item.href}
                    index={index}
                  />
                ))
              ) : (
                <NotFound />
              )}
            </section>
          </article>
          <article className="flex-1">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Popular Events
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              {popularEvents.length ? (
                popularEvents.map((item, index) => (
                  <PopularEventCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    date={item.date}
                    place={item.place}
                    placeURL={item.placeURL}
                    href={item.href}
                    index={index}
                  />
                ))
              ) : (
                <NotFound />
              )}
            </section>
          </article>
        </section>
      </article>
    </>
  );
};

export const EventCard = ({
  image,
  name = "Event name",
  hour = "Event hour",
  date = "Event date",
  place = "Event place",
  placeURL,
  enabled = true,
  action,
  index = 0,
}) => {
  return (
    <Fade delay={100 * (index + 1)}>
      <div className="w-72 flex flex-col bg-white dark:bg-DarkBlue rounded-2xl  shadow-md hover:shadow-xl dark:shadow-DarkBlue">
        {image ? (
          <img
            src={image}
            alt={"Image of " + name + " Event"}
            className="h-28 object-cover object-center bg-purple-950 rounded-t-2xl select-none"
          />
        ) : (
          <div className="h-28 p-3 flex bg-purple-950 rounded-t-2xl text-white text-2xl font-extrabold select-none">
            <p className="m-auto">NOT IMAGE</p>
          </div>
        )}
        <BodyCard
          name={name}
          date={date}
          hour={hour}
          place={place}
          placeURL={placeURL}
        />
        {enabled ? (
          <button className="py-3 text-white text-xl font-bold bg-SoftViolet hover:bg-DarkViolet rounded-b-2xl select-none">
            See more
          </button>
        ) : (
          <></>
        )}
      </div>
    </Fade>
  );
};

export const DisableEventCard = ({
  image,
  name = "Event name",
  hour = "Event hour",
  date = "Event date",
  place = "Event place",
  index = 0,
}) => {
  return (
    <Fade>
      <div className="relative select-none">
        <div className="absolute w-72 h-full bg-black opacity-30 rounded-2xl hover:shadow-xl dark:shadow-DarkBlue" />
        <EventCard
          image={image}
          name={name}
          hour={hour}
          date={date}
          place={place}
          enabled={false}
        />
      </div>
    </Fade>
  );
};

export const PopularEventCard = ({
  image,
  name = "Event name",
  date = "Event date",
  place = "Event place",
  placeURL,
  index = 0,
}) => {
  return (
    <Fade right delay={100 * (index + 1)}>
      <button className="w-72 flex bg-white hover:bg-SoftWhite dark:bg-DarkBlue rounded-2xl shadow-md hover:shadow-xl dark:shadow-DarkBlue">
        {image ? (
          <img
            src={image}
            alt={"Image of " + name + " Event"}
            className="w-24 h-full object-fill object-center bg-purple-950 rounded-l-2xl select-none"
          />
        ) : (
          <div className="w-24 h-full p-3 flex items-center bg-purple-950 rounded-l-2xl text-center text-white text-lg font-bold select-none">
            <p className="">NOT IMAGE</p>
          </div>
        )}
        <BodyCard
          name={name}
          date={date}
          hour={false}
          place={place}
          placeURL={placeURL}
        />
      </button>
    </Fade>
  );
};

export const BodyCard = ({ name, date, hour, place, placeURL }) => {
  return (
    <div className="flex-1 flex flex-col gap-3 p-4 break-all">
      <TitleCard name={name} />
      <div className="flex flex-col gap-2 flex-1">
        <TextCard text={date} icon={<FaRegCalendar />} />
        {hour ? <TextCard text={hour} icon={<FaRegClock />} /> : <></>}
        <TextCard
          text={place}
          icon={<FaMapLocationDot />}
          placeURL={placeURL}
        />
      </div>
    </div>
  );
};

export const TitleCard = ({ name }) => {
  return (
    <h2 className="text-black dark:text-white text-xl font-semibold text-center">
      {name}
    </h2>
  );
};

export const TextCard = ({ icon, text, placeURL }) => {
  return (
    <>
      {placeURL ? (
        <a href={placeURL} target="blank">
          <div className="flex items-center dark:text-white hover:text-SoftViolet dark:hover:text-SoftViolet">
            <i className="text-lg">{icon}</i>
            <h3 className="ms-3">{text}</h3>
          </div>
        </a>
      ) : (
        <div className="flex items-center dark:text-white">
          <i className="text-lg">{icon}</i>
          <h3 className="ms-3">{text}</h3>
        </div>
      )}
    </>
  );
};

export const NotFound = () => {
  return (
    <h3 className="w-72 mb-6 text-center text-lg font-bold dark:text-white">
      Not tickets found
    </h3>
  );
};

export default Home;
