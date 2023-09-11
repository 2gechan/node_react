const ShopMain = (props) => {
  const { useEffect, useState } = props;
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
    <div>
      <h1>쇼핑몰 메인화면</h1>
      <ul>
        {message.map((v, idx) => (
          <li key={`${idx}-${v}`}>{v}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShopMain;
