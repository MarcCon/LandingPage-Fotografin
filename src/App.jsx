import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StorySite from "./pages/StorySite";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/seite1" element={<StorySite />} /> {/* Beispielkomponente */}
          <Route path="/seite2" element={<StorySite />} /> {/* Beispielkomponente */}
        </Routes>
      </Router>

    </div>
  );
};

export default App;
