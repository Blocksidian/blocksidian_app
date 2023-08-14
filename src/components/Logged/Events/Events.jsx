import { useContext, useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { GlobalContext } from "../../../context/GlobalContext";
import { getAuth } from "firebase/auth";

import {
  Popover,
  EventCard,
  PopularEventCard,
  NotFound,
  TextFormFilter,
} from "../../GlobalComponents/GlobalComponents";
import { FaFilter } from "react-icons/fa6";

const Events = () => {
  const { globalEvents, myEvents, db } = useContext(GlobalContext);

  const [userId, setUserId] = useState("");
  const auth = getAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        setUserId(user.uid);
      }
    };

    fetchUserData();
  }, [auth, db]);

  const [openPopover, setOpenPopover] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const joinEvent = async (eventId) => {
    try {
      const docRef = doc(db, "events_users", `${userId}_${eventId}`);
      await setDoc(docRef, {
        userId,
        eventId,
        rate: 0,
      });
      setError(false);
      setMessage("User linked to the event");
    } catch (error) {
      setError(false);
      setMessage("Error linking user and event");
      console.error("Error linking user and event: ", error);
    }
    setOpenPopover(false);
  };

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

  // Datos filtrados
  const [filteredResults, setFilteredResults] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const handleFilterOpen = (value) => setFilterOpen(!filterOpen);

  // Definir estado de los filtros
  const [searchByName, setSearchByName] = useState("");
  const [searchByAvailability, setSearchByAvailability] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const [searchByPlace, setSearchByPlace] = useState("");

  const handleSearchByName = (value) => setSearchByName(value);
  const handleSearchByAvailability = (value) => setSearchByAvailability(value);
  const handleSortByDate = (value) => setSortByDate(value);
  const handleSearchByPlace = (value) => setSearchByPlace(value);

  // Filtro de datos dependiendo de los filtros
  const filterResults = () => {
    if (searchByName || searchByAvailability || sortByDate || searchByPlace) {
      const filtered = globalEvents.filter((item) => {
        const eventName = item.name;
        const nameMatch = eventName
          .toLowerCase()
          .startsWith(searchByName.toLowerCase());
        // Validacion para cada situacion de uso del filtro
        if (searchByName) {
          return nameMatch;
        }
      });
      setFilteredResults(filtered);
    } else {
      clearFilterResults();
    }
  };

  useEffect(() => {
    if (searchByName || searchByAvailability || sortByDate || searchByPlace) {
      const filtered = globalEvents.filter((item) => {
        const nameMatch = item.name
          .toLowerCase()
          .startsWith(searchByName.toLowerCase());
        // Validacion para cada situacion de uso del filtro
        return nameMatch;
      });
      setFilteredResults(filtered);
    } else {
      clearFilterResults();
    }
  }, [searchByName]);

  // Limpiar los filtros y resultados
  const clearFilterResults = () => {
    setFilteredResults([]);
    setSearchByName("");
    setSearchByAvailability("");
    setSortByDate("");
    setSearchByPlace("");
  };

  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <h1 className="my-6 lg:mt-10 lg:mb-12 text-center text-3xl font-bold dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
            Explore the events
          </span>
        </h1>
        <section className="px-2">
          <div className="flex justify-between mb-3">
            <TextFormFilter
              id="nameFilter"
              name="Filter by name"
              value={searchByName}
              change={setSearchByName}
            />
            <div
              className={`${
                filterOpen
                  ? "md:h-auto md:w-auto md:opacity-100"
                  : "select-none h-0 w-0 opacity-0 -z-10"
              } dark:text-white invisible select-none w-0 h-0 md:visible md:select-all`}
            >
              Filters will be here.
            </div>
            <button
              onClick={handleFilterOpen}
              className="px-2 hover:ps-1 text-xl hover:text-2xl hover:text-DarkViolet dark:text-white dark:hover:text-SoftViolet"
            >
              <FaFilter />
            </button>
          </div>
          <div
            className={`${
              filterOpen ? "h-auto opacity-100" : "select-none h-0 opacity-0"
            } dark:text-white transition-all md:invisible md:select-none md:h-0`}
          >
            Filters will be here.
          </div>
        </section>
        <section className="mb-6 px-0 2xl:px-12 3xl:px-20 lg:flex">
          <article className="flex-auto w-full">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Available Events
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              {filteredResults.length ? (
                filteredResults.map((item, index) => (
                  <EventCard
                    key={index}
                    id={item.id}
                    joinEvent={joinEvent}
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
              ) : searchByName.length ? (
                <NotFound />
              ) : globalEvents.length ? (
                globalEvents.map((item, index) => (
                  <EventCard
                    key={index}
                    id={item.id}
                    joinEvent={joinEvent}
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
          </article>
          <article className="flex-1">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Your Events
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              {currentlyEvents.length ? (
                currentlyEvents.map((item, index) => (
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
      <Popover
        open={openPopover}
        setOpen={setOpenPopover}
        text={message}
        error={error}
      />
    </>
  );
};

export default Events;
