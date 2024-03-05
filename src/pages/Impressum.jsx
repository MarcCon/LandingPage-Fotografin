import React from "react";
import HeaderStory from "../components/HeaderStory";
import Navbar from "../components/Navbar";
import LegalFooter from "../components/LegalFooter";

function Impressum() {
  return (
    <div className="flex min-h-screen flex-col">
      {" "}
      {/* Diese Klasse stellt sicher, dass der Container den gesamten Bildschirmhöhe einnimmt */}
      <HeaderStory />
      <Navbar className="absolute left-0 top-0 w-full" />{" "}
      {/* Positioniert die Navbar absolut am oberen Bildschirmrand */}
      {/* Dieser Container zentriert den Inhalt vertikal und horizontal und nimmt den restlichen Platz ein */}
      <div className="flex flex-grow items-center justify-center">
        <div className="py-16">
          <h1 className="text-4xl ">Impressum</h1>

          <p>
            Lara-Sophie Kuche
            <br />
            Hedwigstraße 11
            <br />
            04315 Leipzig
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 015207840481
            <br />
            E-Mail: kontakt@larakuche-fotografie.de
          </p>
        </div>
      </div>
      <LegalFooter />
    </div>
  );
}

export default Impressum;
