import mainImg from "./mainImg.jpg";
const BoardMain = () => {
  return (
    <>
      <h1>메인화면</h1>
      <div className="img box">
        <img src={mainImg} alt="" />
      </div>
    </>
  );
};

export default BoardMain;
