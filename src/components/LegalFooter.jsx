import React from "react";
import { Link } from "react-router-dom";

function LegalFooter() {
  return (
    <div className="flex h-[50px] items-center justify-center bg-black">
      <div className="flex justify-center gap-36 text-xl text-white">
        <Link to={"/datenschutz"}>
          <p>Datenschutz</p>
        </Link>
        <Link to={"/impressum"}>
          <p>Impressum</p>
        </Link>
      </div>
    </div>
  );
}

export default LegalFooter;
