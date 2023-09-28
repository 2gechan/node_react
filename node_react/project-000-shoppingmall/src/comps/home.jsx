import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const connection = async () => {
      const response = await fetch("/hello", {
        method: "GET",
      });

      const result = await response.text();
      console.log(result);
      setMessage(result);
    };
    connection();
  }, []);
  return (
    <header>
      <h1>안녕하세요</h1>
      <p>{message}</p>
    </header>
  );
};
export default Home;
