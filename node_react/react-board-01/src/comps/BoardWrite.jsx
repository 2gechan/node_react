import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import moment from "moment";

const BoardWrite = () => {
  const [newBoard, setNewBoard] = useState({
    b_uid: "테스트",
    b_nickname: "",
    b_title: "",
    b_content: "",
    b_date: moment().format("YYYY[-]MM[-]DD"),
    b_viewcount: 0,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewBoard({ ...newBoard, [name]: value });
  };

  const boardInsert = async (formData) => {
    const fetchData = {
      method: "POST",
      body: formData,
    };

    const response = await fetch("/insert", fetchData);
    return response;
  };

  const navigate = useNavigate();
  const inputButtonClickHandler = async () => {
    const formData = new FormData();
    const board = JSON.stringify(newBoard);
    formData.append("BOARD", board);

    const res = await boardInsert(formData);
    // console.log(res.ok);
    if (res.ok) {
      navigate("/boardlist");
    }
  };

  return (
    <section className="main input">
      <h1>글쓰기</h1>
      <div className="input">
        <label htmlFor="">제목</label>
        <input
          type="text"
          name="b_title"
          value={newBoard.b_title}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="input">
        <label htmlFor="">작성자</label>
        <input
          type="text"
          name="b_nickname"
          value={newBoard.b_nickname}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="input">
        <label htmlFor="">작성일자</label>
        <input
          type="text"
          name="b_date"
          value={newBoard.b_date}
          onChange={inputChangeHandler}
          readOnly
        />
      </div>
      <div className="input">
        <label htmlFor="">내용</label>
        <textarea
          name="b_content"
          value={newBoard.b_content}
          onChange={inputChangeHandler}
        ></textarea>
      </div>

      <div className="input">
        <NavLink to="/boardlist">
          <button type="button">리스트로</button>
        </NavLink>

        <button onClick={inputButtonClickHandler}>저장</button>
      </div>
    </section>
  );
};
export default BoardWrite;
