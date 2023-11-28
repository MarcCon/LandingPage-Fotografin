import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StorySite from "./pages/StorySite";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/seite/:id" element={<StorySite />} />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
