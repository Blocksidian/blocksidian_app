import { FaRegCalendar, FaRegClock, FaMapLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <h1 className="my-6 lg:mt-10 lg:mb-12 text-center text-3xl font-bold dark:text-white">
          Welcome Back <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
            Blocksidian
          </span>
        </h1>
        <section className="mb-6 lg:flex">
          <article className="flex-1">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Available Tickets
            </h2>
            <section className="flex flex-wrap gap-3 justify-center">
              <EventCard />
              <EventCard />
              <EventCard />
            </section>
            <h2 className="my-6 lg:mt-10 text-center text-2xl font-bold dark:text-white">
              Inactive Tickets
            </h2>
            <section className="flex flex-wrap gap-3 justify-center">
              <DisableEventCard />
            </section>
          </article>
          <article className="">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Popular Events
            </h2>
            <section className="flex flex-wrap gap-3 justify-center">
              <PopularEventCard />
            </section>
          </article>
        </section>
      </article>
    </>
  );
};

export const EventCard = () => {
  return (
    <>
      <div className="w-72 flex flex-col bg-white dark:bg-DarkBlue rounded-2xl shadow">
        {/*<img src="" alt="" className="h-28 bg-purple-950 rounded-t-2xl" />*/}
        <div className="h-28 flex bg-purple-950 rounded-t-2xl text-white text-2xl font-extrabold select-none">
          <p className="m-auto">NOT IMAGE</p>
        </div>
        <div className="flex-1 flex flex-col gap-3 p-4">
          <h2 className="text-black dark:text-white text-2xl font-semibold text-center">
            Event Name
          </h2>
          <div className="flex flex-col gap-3 flex-1 break-all">
            <TextCard text="22 / 08 / 2023" icon={<FaRegCalendar />} />
            <TextCard text="09:00 PM" icon={<FaRegClock />} />
            <TextCard text="Event place" icon={<FaMapLocationDot />} />
          </div>
        </div>
        <button className="py-3 text-white text-xl font-bold bg-SoftViolet hover:bg-DarkViolet rounded-b-2xl select-none">
          See more
        </button>
      </div>
    </>
  );
};

export const DisableEventCard = () => {
  return (
    <>
      <div className="relative select-none">
        <div className="absolute w-72 h-full bg-black opacity-30 rounded-2xl"></div>
        <EventCard />
      </div>
    </>
  );
};

export const PopularEventCard = () => {
  return (
    <>
      <button className="w-72 flex bg-white dark:bg-DarkBlue rounded-2xl shadow">
        {/*         <img
          src=""
          alt=""
          className="w-24 h-full bg-purple-950 rounded-l-2xl select-none"
        /> */}
        <div className="w-24 h-full flex bg-purple-950 rounded-l-2xl text-center text-white text-xl font-extrabold select-none">
          <p className="my-auto">NOT IMAGE</p>
        </div>
        <div className="flex-1 flex flex-col gap-2 px-4 py-3">
          <h2 className="text-black dark:text-white text-2xl font-semibold text-center">
            Event Name
          </h2>
          <div className="flex flex-col gap-2 flex-1 break-all">
            <TextCard text="22 / 08 / 2023" icon={<FaRegCalendar />} />
            <TextCard text="Event place" icon={<FaMapLocationDot />} />
          </div>
        </div>
      </button>
    </>
  );
};

export const TextCard = ({ icon, text = "" }) => {
  return (
    <div className="flex items-center">
      <i className="text-xl dark:text-white">{icon}</i>
      <h3 className="ms-3 dark:text-white">{text}</h3>
    </div>
  );
};

export default Home;
