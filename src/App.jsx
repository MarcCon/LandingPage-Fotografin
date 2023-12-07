import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StorySite from "./pages/StorySite";
import Homepage from "./pages/Homepage";
import Leistungen from "./pages/Leistungen";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/seite/:id" element={<StorySite />} />
          <Route path="/leistungen" element={<Leistungen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
