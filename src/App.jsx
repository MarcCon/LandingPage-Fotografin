import React from "react";
import Navbar from "./components/Navbar";
import StoryGrid from "./components/Storys";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (

    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/story1">
          <Story1 />
        </Route>
        <Route path="/story2">
          <Story2 />
        </Route>
        {/* ... weitere Story-Routen */}
        <Route path="/">
          {/* Deine Home-Komponente mit den Ankerpunkten */}
          <div id="ueber-mich">Über mich Abschnitt</div>
          {/* ... weitere Abschnitte */}
        </Route>
      </Switch>
    </div>
  </Router>
  );
};

export default App;
