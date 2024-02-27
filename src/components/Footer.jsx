import React from "react";
import emailjs from "@emailjs/browser";
const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.log("Failed to send email.", error.text);
        },
      );
  };

  return (
    <div>
      <section className=" h-full w-full border-t-2 bg-[url('/FooterPic.jpg')]  bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2
            id="AnkerKontakt"
            className="b mb-4 text-center font-serif text-4xl tracking-tight text-white"
          >
            So erreichst Du mich
          </h2>
          <p className=" mb-8 text-center font-serif text-white sm:text-xl lg:mb-16">
            Schreibe mir gerne eine Nachricht, ich antworte so schnell wie
            möglich.
          </p>
          <form action="#" onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                for="email"
                className="mb-2 block font-serif text-sm text-white"
              >
                Deine E-Mail Adresse
              </label>
              <input
                type="email"
                id="email_from"
                name="email_from"
                className="  block w-full rounded-lg border border-white bg-footer-input1 p-2.5 text-sm text-white shadow-sm focus:border-white focus:ring-white "
                placeholder="E-Mail"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="message"
                className="mb-2 block font-serif text-sm text-white"
              >
                Deine Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="  block w-full rounded-lg border border-white bg-footer-input1 p-2.5 text-sm text-white shadow-sm focus:border-white focus:ring-white "
                placeholder="Schreiben sie mir..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="h-12 w-52 rounded-lg border border-white bg-transparent font-serif  text-xl font-semibold text-white transition duration-500 ease-in-out	  hover:border-transparent hover:bg-white hover:text-black "
            >
              Senden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
