import React from "react";

const Footer = () => {
  return (
    <div>
      <section class=" w-full h-full border-t-2 bg-[url('/src/assets/FooterPic.jpeg')]  bg-cover bg-center bg-no-repeat">
        <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 class="mb-4 text-center font-serif text-4xl tracking-tight text-white b">
            So erreichen Sie mich
          </h2>
          <p class=" text-center mb-8 font-light text-white sm:text-xl lg:mb-16">
            Schreiben Sie mir gerne eine Nachricht, ich antworte so schnell wie
            möglich.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-white"
              >
                Ihre E-Mail
              </label>
              <input
                type="email"
                id="email"
                class="  focus:ring-white focus:border-white block w-full rounded-lg border border-white bg-footer-input1 p-2.5 text-sm text-white shadow-sm "
                placeholder="E-Mail"
                required
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="mb-2 block text-sm font-medium text-white"
              >
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                rows="6"
                class="  focus:ring-white focus:border-white block w-full rounded-lg border border-white bg-footer-input1 p-2.5 text-sm text-white shadow-sm "
                placeholder="Schreiben sie mir..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="h-12 w-52 rounded-lg border border-white bg-transparent font-serif  text-xl font-semibold text-white transition duration-500 ease-in-out	  hover:border-transparent hover:bg-white hover:text-black "
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
