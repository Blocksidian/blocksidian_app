import {
  TextFormLabel,
  TextAreaFormLabel,
} from "../../GlobalComponents/GlobalComponents";

import { useState } from "react";

function Contact() {
  return (
    <>
      <article className="container my-auto px-2 xs:px-4 sm:px-6">
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
    const url = `mailto:blocksidian.inc@gmail.com?subject=${title}&body=${body}`;
    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="my-10 flex items-center justify-center">
      <div className="px-4 py-8 w-full max-w-screen-md">
        <h2 className="text-center text-3xl font-bold mb-3 dark:text-white">
          Contact
        </h2>
        <h3 className="text-md font-normal mb-6 dark:text-white">
          If you have any questions or suggestions, send us a message!
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="sm:flex gap-10">
            <div className="mb-4 flex-1">
              <TextFormLabel
                name="Your Name"
                title="name"
                state={name}
                setState={setName}
              />
            </div>
            <div className="mb-4 flex-1">
              <TextFormLabel
                name="Your Email"
                title="email"
                type="email"
                state={email}
                setState={setEmail}
              />
            </div>
          </div>
          <div className="mb-4">
            <TextAreaFormLabel
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
