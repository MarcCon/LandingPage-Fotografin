import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    emailjs.init("4IJZ6aZDzSTGDMYIG");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ufrd9lt",
        "template_5t6yoqy",
        formRef.current,
        "4IJZ6aZDzSTGDMYIG",
        {
          email_from: "kontakt@larakuche-fotografie.de",
        },
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSuccessAlert(true);
        },
        (error) => {
          console.error("Failed to send email. Here's the error:", error);
          alert("Es gab einen Fehler");
        },
      );
  };

  return (
    <div>
      <section className="h-full w-full border-t-2 bg-[url('/BilderHomepage/FooterPic.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2
            id="AnkerKontakt"
            className="mb-4 text-center font-serif text-4xl tracking-tight text-white"
          >
            So erreichst Du mich
          </h2>
          <p className="mb-8 text-center font-serif text-white sm:text-xl">
            Schreibe mir gerne eine Nachricht, ich antworte so schnell wie
            möglich.
          </p>
          <p className="mb-8 text-center font-serif text-white sm:text-xl lg:mb-16">
            kontakt@larakuche-fotografie.de
          </p>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="reply_to"
                className="mb-2 block font-serif text-sm text-white"
              >
                Deine E-Mail Adresse
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                className="block w-full rounded-lg border border-white bg-footer-input1 p-2.5 text-sm text-white shadow-sm focus:border-white focus:ring-white"
                placeholder="E-Mail"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block font-serif text-sm text-white"
              >
                Deine Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block w-full rounded-lg border border-white bg-footer-input1 p-2.5 text-sm text-white shadow-sm focus:border-white focus:ring-white"
                placeholder="Schreibe mir..."
              ></textarea>
            </div>
            <div className="flex items-center gap-16">
              <button
                type="submit"
                className="h-12 w-52 rounded-lg border border-white bg-transparent font-serif text-xl font-semibold text-white transition duration-500 ease-in-out hover:border-transparent hover:bg-white hover:text-black"
              >
                Senden
              </button>
              {successAlert && (
                <div className="rounded-xl bg-green-600 px-4 py-2 text-xl text-white">
                  Email wurde gesendet!
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
