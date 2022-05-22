import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Edinburgh" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/esraayaz/"
          target="_blank"
          rel="noreferrer"
        >
          Esra Ayaz
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/esraayaz/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
