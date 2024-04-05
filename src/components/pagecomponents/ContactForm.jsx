import React from "react";
import Paragraphs from "../ShortComponets/Paragraphs";
import ClearBtn from "../ShortComponets/ClearBtn";

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribe: "",
  });
  const [errorName, setErrorName] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorForMessage, setErrorForMessage] = React.useState(false);
  const errorMessage = "Please fill out this field.";
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
setErrorName(false);
setErrorEmail(false);
setErrorForMessage(false);
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (formData.name === "") setErrorName(true);
    else if (formData.email === "") setErrorEmail(true);
    else if (formData.message === "") setErrorForMessage(true);

    console.log(formData);
  }

  return (
    <section className="contact-container container px-3">
      <article className=" text-center flex flex-col  mb-8 gap-y-8 ">
        <h1 className=" text-3xl md:text-5xl mt-8 font-bold">Contact us</h1>
        <h3 className=" text-xl sm:text-2xl  mx-4">
          We would love to hear from you
        </h3>
        <Paragraphs className={`px-6 text-sm sm:px-8 md:w-3/4 md:mx-auto`}>
          Do you have any question on products or workshops? Fill out the form
          and we will get back to you within 48 hours.If you would like to
          Subscripe to be the first informed check the box below before you send
          us a your message.
        </Paragraphs>
      </article>

      <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            {errorName && (
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full    rounded py-3 px-4 leading-tight "
              id="grid-email"
              type="email"
              placeholder="jane@gmail.co.uk"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            {errorEmail && (
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-subject"
            >
              Subject
            </label>
            <input
              className="appearance-none block w-full border  rounded py-3 px-4 mb-3 leading-tight"
              id="grid-subject
      "
              type="subject"
              placeholder="Product"
              onChange={handleChange}
              name="subject"
              value={formData.subject}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-message"
            >
              Message
            </label>
            <textarea
              cols="30"
              rows="6"
              className="appearance-none block w-full   rounded py-3 px-4 mb-3 leading-tight  "
              id="grid-message"
              type="message"
              placeholder="Your message"
              onChange={handleChange}
              name="message"
              value={formData.message}
            ></textarea>
            {errorForMessage && (
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3  sm:flex sm:justify-between text-center align-center">
            <label className=" block text-gray-600 font-bold sm:w-1/7 mb-4 sm:mb-0 ">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                checked={formData.subscribe}
                onChange={handleChange}
                name="subscribe"
              />
              <span className="text-sm">Send me your newsletter as well!</span>
            </label>
            <div className="sm:w-5/7"></div>
            <div className="sm:w-1/7   sm:justify-self-end">
              <ClearBtn className={`ms-6`}>Send</ClearBtn>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
