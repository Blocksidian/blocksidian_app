import { Fade } from "@successtar/react-reveal";
import { useState } from "react";

function Contact() {
  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <Form />
      </article>
    </>
  );
}

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = "Blocksidian Contact";
    const body = `Nombre: ${name}%0D%0D%0AEmail: ${email}%0D%0D%0AMensaje: ${message}%0D%0D`;
    const url = `mailto:mierderthekat@hotmail.com?subject=${title}&body=${body}`;
    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="my-10 flex items-center justify-center w-full">
      <div className="px-4 py-8 w-full max-w-screen-md bg-white dark:bg-DarkMode dark:shadow-DarkBlue shadow-xl rounded-lg">
        <h2 className="text-center text-3xl font-bold mb-3 dark:text-white">
          Contact
        </h2>
        <h3 className="text-md font-normal mb-6 dark:text-white">
          If you have any questions or suggestions, send us a message!
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="sm:flex gap-10">
            <div className="mb-4 flex-1">
              <TextForm
                name="Your Name"
                title="name"
                state={name}
                setState={setName}
              />
            </div>
            <div className="mb-4 flex-1">
              <TextForm
                name="Your Email"
                title="email"
                type="email"
                state={email}
                setState={setEmail}
              />
            </div>
          </div>
          <div className="mb-4">
            <TextAreaForm
              name="Your Message"
              title="message"
              state={message}
              setState={setMessage}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-4 px-4 rounded-full border-2 dark:border dark:border-white text-sm font-medium dark:text-white hover:bg-slate-100 dark:hover:bg-DarkBlue"
            >
              Send Email!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

const TextForm = ({
  name = "name",
  title = "title",
  type = "text",
  state,
  setState,
}) => {
  return (
    <>
      <TextLabel name={name} title={title} />
      <input
        type={type}
        id={title}
        name={title}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="px-4 py-4 w-full rounded-md sm:text-sm border-2 dark:border-gray-800 bg-SoftWhite dark:bg-gray-900 dark:text-white"
        required
      />
    </>
  );
};

const TextAreaForm = ({
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
