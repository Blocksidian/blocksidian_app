import { useState, useEffect } from "react";
import {
  FaRegCalendar,
  FaRegClock,
  FaMapLocationDot,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { Fade } from "@successtar/react-reveal";

export const Loading = ({
  xs = "5.5",
  txs = "sm",
  text = true,
  label = "cargando",
}) => {
  return (
    <div
      className={`flex items-center justify-center my-auto loader select-none`}
    >
      <style>
        {`
            .loader {
              width: ${xs}rem;
              height: ${xs}rem;
            }
          `}
      </style>
      <div className="animate-spin rounded-full border-y-4 border-red-500 border-opacity-50 h-full w-full"></div>
      {text && (
        <span className={`absolute text-red-500 font-thin ${"text-" + txs}`}>
          {label}
        </span>
      )}
    </div>
  );
};

export const Popover = ({
  open = false,
  setOpen,
  text = "Contenido del popover",
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsOpen(true);
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
        setOpen(true);
      }, 2000);
      return () => clearTimeout(timeoutId);
    } else {
      setIsOpen(false);
    }
  }, [open]);

  return (
    <>
      {isOpen && (
        <div
          className={`${
            open ? "opacity-0" : "opacity-100"
          } duration-500 transition-all`}
        >
          <Fade bottom duration={500}>
            {error ? (
              <div
                className={
                  "unselectable select-none fixed z-50 bottom-10 right-10 left-10 text-SoftWhite text-center rounded-md py-2 px-3 shadow-lg bg-red-400  xs:right-10 xs:left-auto sm:right-10 dark:bg-red-900 dark:text-white transition duration-500"
                }
              >
                {text}
              </div>
            ) : (
              <div
                className={
                  "unselectable select-none fixed z-50 bottom-10 right-10 left-10 text-SoftWhite text-center rounded-md py-2 px-3 shadow-lg bg-green-600  xs:right-10 xs:left-auto sm:right-10 dark:bg-green-900 dark:text-white transition duration-500"
                }
              >
                {text}
              </div>
            )}
          </Fade>
        </div>
      )}
    </>
  );
};

export const EventCard = ({
  image,
  id,
  joinEvent = () => {},
  name = "Event name",
  hour = "Event hour",
  date = "Event date",
  place = "Event place",
  placeURL,
  enabled = true,
  right,
  action,
  index = 0,
}) => {
  return (
    <Fade right={right} delay={100 * (index + 1)}>
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
          <button
            className="py-3 text-white text-xl font-bold bg-SoftViolet hover:bg-DarkViolet rounded-b-2xl select-none"
            onClick={() => {
              joinEvent(id);
            }}
          >
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
        <div className="absolute w-72 h-full z-10 bg-black opacity-30 rounded-2xl hover:shadow-xl dark:shadow-DarkBlue" />
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

const BodyCard = ({ name, date, hour, place, placeURL }) => {
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

const TitleCard = ({ name }) => {
  return (
    <h2 className="text-black dark:text-white text-xl font-semibold text-center">
      {name}
    </h2>
  );
};

const TextCard = ({ icon, text, placeURL }) => {
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

export const TextFormLabel = ({
  name = "name",
  title = "title",
  type = "text",
  state,
  setState,
  min = 10,
  required = true,
  autocomplete,
}) => {
  return (
    <>
      <TextLabel name={name} title={title} />
      {type === "number" || type === "date" ? (
        <input
          min={min}
          type={type}
          id={title}
          name={title}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="px-4 py-4 w-full rounded-md sm:text-sm border-2 dark:border-gray-800 bg-SoftWhite dark:bg-gray-900 dark:text-white"
          required={required}
          autocomplete={autocomplete}
        />
      ) : (
        <input
          type={type}
          id={title}
          name={title}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="px-4 py-4 w-full rounded-md sm:text-sm border-2 dark:border-gray-800 bg-SoftWhite dark:bg-gray-900 dark:text-white"
          required={required}
          autocomplete={autocomplete}
        />
      )}
    </>
  );
};

export const TextAreaFormLabel = ({
  name = "name",
  title = "title",
  rows = 5,
  state,
  setState,
}) => {
  return (
    <>
      <TextLabel name={name} title={title} />
      <textarea
        id={title}
        name={title}
        value={state}
        rows={rows}
        onChange={(e) => setState(e.target.value)}
        className="px-4 py-4 w-full rounded-md sm:text-sm border-2 dark:border-gray-800 bg-SoftWhite dark:bg-gray-900 dark:text-white"
        required
      ></textarea>
    </>
  );
};

const TextLabel = ({ name = "", title = "" }) => {
  return (
    <>
      <label
        htmlFor={title}
        className="block text-sm mb-2 font-medium text-SoftGray"
      >
        {name}
      </label>
    </>
  );
};

export const TextFormFilter = ({
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

export const TextForm = ({
  name = "name",
  title = "title",
  type = "text",
  minLength = "0",
  state,
  setState,
}) => {
  return (
    <>
      <div className="mb-4">
        <input
          placeholder={name}
          type={type}
          id={title}
          value={state}
          onChange={(e) => setState(e.target.value)}
          minLength={minLength}
          className="px-4 py-4 w-full rounded-md sm:text-sm border-2 dark:border-gray-800 bg-SoftWhite dark:bg-gray-900 dark:text-white"
          required
        />
      </div>
    </>
  );
};

export const ButtonForm = ({ name = "" }) => {
  return (
    <button
      type="submit"
      className="w-full py-3 px-4 rounded-lg text-white text-lg tracking-wider font-bold bg-SoftViolet hover:bg-DarkViolet dark:bg-DarkViolet  dark:hover:bg-SoftViolet"
    >
      {name}
    </button>
  );
};
