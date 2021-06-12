import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import AddEventButton from "./components/AddEventButton";
import Navigation from "./components/Navigation";
import Schedule from "./components/Schedule";
import AddEventForm from "./components/AddEventForm";

function App() {
  const toggle = useSelector((state) => state.toggle);

  return (
    <div className="app">
      <Navigation toggle={toggle} />
      <Schedule toggle={toggle} />
      <AddEventButton toggle={toggle} />
      <AddEventForm toggle={toggle} />
    </div>
  );
}

export default App;
