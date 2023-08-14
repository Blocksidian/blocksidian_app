import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import {
  Popover,
  EventCard,
  PopularEventCard,
  TextFormLabel,
} from "../../GlobalComponents/GlobalComponents";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const Home = () => {
  const db = getFirestore();
  const currentDate = new Date().toISOString().split("T")[0];

  const [openPopover, setOpenPopover] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [date, setDate] = useState(currentDate);
  const [hour, setHour] = useState("12:00");
  const [place, setPlace] = useState("");
  const [placeURL, setPlaceURL] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [capacity, setCapacity] = useState(10);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Combinar "date" y "hour" en un único objeto Date
    const combinedDateTime = new Date(date + "T" + hour);

    // Crear un objeto con los datos del formulario
    const eventData = {
      name,
      date: Timestamp.fromDate(combinedDateTime),
      place,
      placeURL,
      imageURL,
      capacity,
    };

    try {
      // Agregar los datos a la colección "events"
      const docRef = await addDoc(collection(db, "events"), eventData);
      console.log("Evento guardado con ID:", docRef.id);
      setError(false)
      setMessage("Event saved")

      // Limpiar los campos del formulario
      setName("");
      setDate(currentDate);
      setHour("12:00");
      setPlace("");
      setPlaceURL("");
      setImageURL("");
      setCapacity(10);
    } catch (error) {
      console.error("Error al guardar el evento:", error);
      setError(true)
      setMessage(error)
    }
    setOpenPopover(false)
  };

  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <h1 className="my-6 lg:mt-10 lg:mb-12 text-center text-3xl font-bold dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
            Add a event
          </span>
        </h1>
        <article className="md:flex">
          <section className="flex-auto">
            <div className="mb-10 flex items-center justify-center">
              <div className="px-4 pb-8 w-full max-w-screen-md">
                <form onSubmit={handleSubmit}>
                  <div className="sm:flex lg:flex gap-5">
                    <div className="mb-4 flex-1">
                      <TextFormLabel
                        name="Event Name"
                        title="name"
                        state={name}
                        setState={setName}
                        autocomplete="off"
                      />
                    </div>
                    <div className="sm:flex gap-5">
                      <div className="mb-4 sm:flex-0 md:flex-1 lg:flex-0">
                        <TextFormLabel
                          name="Date of the event"
                          title="date"
                          type="date"
                          state={date}
                          min={currentDate}
                          setState={setDate}
                          autocomplete="off"
                        />
                      </div>
                      <div className="mb-4 sm:flex-0 md:flex-1 lg:flex-0">
                        <TextFormLabel
                          name="Hour of the event"
                          title="hour"
                          type="time"
                          state={hour}
                          setState={setHour}
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex gap-5">
                    <div className="mb-4 flex-1">
                      <TextFormLabel
                        name="Event's place"
                        title="place"
                        state={place}
                        setState={setPlace}
                        autocomplete="off"
                      />
                    </div>
                    <div className="mb-4 flex-1">
                      <TextFormLabel
                        name="Event's place URL"
                        title="placeURL"
                        state={placeURL}
                        setState={setPlaceURL}
                        required={false}
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="sm:flex gap-5">
                    <div className="mb-4 flex-1">
                      <TextFormLabel
                        name="Event image URL"
                        title="place"
                        state={imageURL}
                        setState={setImageURL}
                        required={false}
                        autocomplete="off"
                      />
                    </div>
                    <div className="mb-4">
                      <TextFormLabel
                        name="Event max capacity"
                        title="place"
                        type="number"
                        state={capacity}
                        setState={setCapacity}
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full py-4 px-4 rounded-full border-2 dark:border dark:border-white text-sm font-medium dark:text-white hover:bg-slate-100 dark:hover:bg-DarkBlue"
                    >
                      Add the event!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <aside className="">
            <EventCard
              image={imageURL}
              name={name}
              date={date}
              hour={hour}
              place={place}
              placeURL={placeURL}
              right={true}
            />
            <div className="flex mt-5">
              <PopularEventCard
                image={imageURL}
                name={name}
                date={date}
                place={place}
                placeURL={placeURL}
              />
            </div>
          </aside>
        </article>
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

export default Home;
