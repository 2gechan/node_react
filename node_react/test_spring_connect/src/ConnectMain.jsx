import React from "react";

import { useEffect, useState } from "react";
const ConnectMain = () => {
  const [message, setMessage] = useState([]);
  useEffect =
    (() => {
      const connect = async () => {
        const res = await fetch("/hello");
        const result = res.json();

        setMessage([...result]);
      };
      connect();
    },
    []);

  return (
    <>
      <ul>
        <h1>Hello</h1>
        {message.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default ConnectMain;
