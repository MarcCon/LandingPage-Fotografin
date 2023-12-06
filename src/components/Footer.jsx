import React from "react";

const Footer = () => {
  return (
    <div>
      <section class=" border-t-2 border-yellow-500 ">
        <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 class="mb-4 text-center font-serif text-4xl tracking-tight   text-green-900">
            So erreichen Sie mich
          </h2>
          <p class="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Schreiben Sie mir gerne eine Nachricht, ich antworte so schnell wie
            möglich.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-white"
              >
                Deine E-Mail
              </label>
              <input
                type="email"
                id="email"
                class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
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
                class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Schreiben sie mir..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="h-12 w-52 rounded-lg border border-white bg-transparent font-serif  text-xl font-semibold text-white transition duration-500 ease-in-out	  hover:border-transparent hover:bg-white hover:text-black "
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
