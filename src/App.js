import "./App.css";
import React from "react";
import CleanUp from "./components/CleanUp";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="mt-4">
          <CleanUp />
          <hr />
          <FetchData />
          <hr />
        </div>
      </section>
    </div>
  );
}

export default App;
