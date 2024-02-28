import React from "react";
import HeaderStory from "../components/HeaderStory";
import Navbar from "../components/Navbar";

function Impressum() {
  return (
    <>
      <div>
        <HeaderStory />
        <div className="absolute left-0 top-0 w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="py-16 ">
          <h1 className="text-4xl ">Impressum</h1>

          <p>
            Lara-Sophie Kuche
            <br />
            Hedwigstra&szlig;e 13
            <br />
            04315 Leipzig
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 015207840481
            <br />
            E-Mail: kuchelara@gmail.com
          </p>

          <p>
            Quelle:{" "}
            <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Impressum;
