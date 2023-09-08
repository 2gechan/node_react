// import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessage(data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ul>
        {message.map((v, idx) => (
          <li key={`${idx}-${v}`}>{v}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
