import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import {
  Popover,
  EventCard,
  PopularEventCard,
  DisableEventCard,
  NotFound,
} from "../../GlobalComponents/GlobalComponents";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Home = () => {
  const { myEvents, popularEvents } = useContext(GlobalContext);
  const [username, setUsername] = useState("Username");

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUsername(userData.username);
        }
      }
    };

    fetchUserData();

    const handleBeforeUnload = () => {
      fetchUserData();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [auth, db]);

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
            {username ? username : "nombre"}
          </span>
        </h1>
        <section className="mb-6 px-0 2xl:px-12 3xl:px-20 lg:flex">
          <article className="flex-auto w-full">
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

export default Home;
