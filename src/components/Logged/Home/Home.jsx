import { FaRegCalendar, FaRegClock, FaMapLocationDot } from "react-icons/fa6";

const Home = () => {
  const availableEvents = [
    {
      image: "Angeles Azules",
      name: "Junior H",
      date: "22 / 08 / 2023",
      hour: "09:00 PM",
      place: "Palenque FENADU",
      urlPlace: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "Angeles Azules",
      name: "Angeles Azules",
      date: "22 / 08 / 2023",
      hour: "06:00 PM",
      place: "Palenque FENADU",
      urlPlace: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
  ];

  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <h1 className="my-6 lg:mt-10 lg:mb-12 text-center text-3xl font-bold dark:text-white">
          Welcome Back <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
            * Username *
          </span>
        </h1>
        <section className="mb-6 lg:flex">
          <article className="flex-auto">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Available Tickets
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              <EventCard
                name="Julion Alvarez"
                hour="09:00 PM"
                date="22 / 08 / 2023"
                place="Palenque FENADU"
                placeURL="https://goo.gl/maps/pncs4PF9Ku6aKGm87"
              />
              <EventCard
                name="Junior H"
                hour="11:00 PM"
                date="23 / 08 / 2023"
                place="Palenque FENADU"
                placeURL="https://goo.gl/maps/pncs4PF9Ku6aKGm87"
              />
              <EventCard />
            </section>
            <h2 className="my-6 lg:mt-10 text-center text-2xl font-bold dark:text-white">
              Inactive Tickets
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              <DisableEventCard
                name="Platanito"
                hour="04:00 AM"
                date="22 / 07 / 2023"
                place="Palenque FENADU"
              />
              <DisableEventCard />
            </section>
          </article>
          <article className="flex-1">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Popular Events
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              <PopularEventCard
                name="Julion Alvarez"
                date="22 / 08 / 2023"
                place="Palenque FENADU"
                placeURL="https://goo.gl/maps/pncs4PF9Ku6aKGm87"
              />
              <PopularEventCard />
              <PopularEventCard />
            </section>
          </article>
        </section>
      </article>
    </>
  );
};

export const EventCard = ({
  img,
  name = "Event name",
  hour = "Event hour",
  date = "Event date",
  place = "Event place",
  placeURL,
  enabled = true,
  action,
}) => {
  return (
    <>
      <div className="w-72 flex flex-col bg-white dark:bg-DarkBlue rounded-2xl  shadow-md hover:shadow-xl dark:shadow-DarkBlue">
        {/*<img src="" alt="" className="h-28 object-fit:cover object-position:center bg-purple-950 rounded-t-2xl" />*/}
        <div className="h-28 flex bg-purple-950 rounded-t-2xl text-white text-2xl font-extrabold select-none">
          <p className="m-auto">NOT IMAGE</p>
        </div>
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
    </>
  );
};

export const DisableEventCard = ({
  img,
  name = "Event name",
  hour = "Event hour",
  date = "Event date",
  place = "Event place",
}) => {
  return (
    <>
      <div className="relative select-none">
        <div className="absolute w-72 h-full bg-black opacity-30 rounded-2xl hover:shadow-xl dark:shadow-DarkBlue" />
        <EventCard
          img={img}
          name={name}
          hour={hour}
          date={date}
          place={place}
          enabled={false}
        />
      </div>
    </>
  );
};

export const PopularEventCard = ({
  img,
  name = "Event name",
  date = "Event date",
  place = "Event place",
  placeURL,
}) => {
  return (
    <>
      <button className="w-72 flex bg-white hover:bg-SoftWhite dark:bg-DarkBlue rounded-2xl shadow-md hover:shadow-xl dark:shadow-DarkBlue">
        {/* <img
          src=""
          alt=""
          className="w-24 h-full object-fit:cover object-position:center bg-purple-950 rounded-l-2xl select-none"
        /> */}
        <div className="w-24 h-full flex items-center bg-purple-950 rounded-l-2xl text-center text-white text-lg font-bold select-none">
          <p className="">NOT IMAGE</p>
        </div>
        <PopularBodyCard
          name={name}
          date={date}
          place={place}
          placeURL={placeURL}
        />
      </button>
    </>
  );
};

export const PopularBodyCard = ({ name, date, place, placeURL }) => {
  return (
    <div className="flex-1 flex flex-col gap-3 p-4 break-all">
      <TitleCard name={name} />
      <div className="flex flex-col gap-2 flex-1 break-all">
        <TextCard text={date} icon={<FaRegCalendar />} />
        <TextCard
          text={place}
          icon={<FaMapLocationDot />}
          placeURL={placeURL}
        />
      </div>
    </div>
  );
};

export const BodyCard = ({ name, date, hour, place, placeURL }) => {
  return (
    <div className="flex-1 flex flex-col gap-3 p-4 break-all">
      <TitleCard name={name} />
      <div className="flex flex-col gap-2 flex-1 break-all">
        <TextCard text={date} icon={<FaRegCalendar />} />
        <TextCard text={hour} icon={<FaRegClock />} />
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

export default Home;
