import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { EventCard, PopularEventCard } from "../Home/Home";
import { FaFilter, FaMagnifyingGlass } from "react-icons/fa6";

const Home = () => {
  const { globalEvents, myEvents } = useContext(GlobalContext);

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
            <TextForm
              id="nameFilter"
              name="Filter by name"
              value={searchByName}
              change={setSearchByName}
            />
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
            } dark:text-white transition-all`}
          >
            Filters will be here.
          </div>
        </section>
        <section className="mb-6 px-0 2xl:px-12 3xl:px-20 lg:flex">
          <article className="flex-auto">
            <h2 className="my-6 text-center text-2xl font-bold dark:text-white">
              Available Events
            </h2>
            <section className="flex flex-wrap gap-5 justify-center">
              {filteredResults.length ? (
                filteredResults.map((item, index) => (
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
              ) : globalEvents.length ? (
                globalEvents.map((item, index) => (
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
    </>
  );
};

export const TextForm = ({
  id = "",
  name = "",
  value = "",
  change,
  type = "text",
  required = false,
  disabled = false,
}) => {
  return (
    <>
      <div className="relative w-full me-5">
        <input
          type={type}
          className="w-full rounded-md py-2 px-3 ps-9 border-2 dark:border-gray-800 bg-SoftWhite dark:bg-gray-900 dark:text-white"
          placeholder={name}
          id={id}
          value={value}
          onChange={(e) => {
            change(e.target.value);
          }}
          required={required}
          disabled={disabled}
        />
        <div className="absolute top-3.5 left-3 text-gray-400">
          <FaMagnifyingGlass />
        </div>
      </div>
    </>
  );
};

export default Home;
