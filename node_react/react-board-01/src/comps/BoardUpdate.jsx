import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";

const BoardUpdate = () => {
  const { id } = useParams();

  const [dto, setDto] = useState({});
  const [update, setUpdate] = useState({ b_seq: id });

  const updateChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });

    setDto({
      b_date: moment().format("YYYY[-]MM[-]DD"),
    });
    // setUpdate({ ...update });
  };

  const boardUpdate = async (formData) => {
    const fetchData = {
      method: "POST",
      body: formData,
    };

    const response = await fetch("/update", fetchData);
    return response;
  };

  const navigate = useNavigate();
  const updateButtonClickHandler = async () => {
    // console.log(update);
    const formData = new FormData();
    const board = JSON.stringify(update);
    formData.append("UPDATE", board);

    const res = await boardUpdate(formData);

    if (res.ok) {
      navigate(`/boardlist`);
    }
  };

  useEffect(() => {
    const getBoardOne = async (id) => {
      const res = await fetch(`/findone?id=${id}`);
      const result = await res.json();

      setDto(result);
    };
    getBoardOne(id);
  }, []);

  return (
    <section className="main input">
      <h1>게시물 수정</h1>
      <div className="input">
        <label htmlFor="">제목</label>
        <input
          type="text"
          name="b_title"
          value={dto.b_title}
          onChange={updateChangeHandler}
        />
      </div>

      <div className="input">
        <label htmlFor="">작성자</label>
        <input
          type="text"
          name="b_nickname"
          value={dto.b_nickname}
          onChange={updateChangeHandler}
        />
      </div>

      <div className="input">
        <label htmlFor="">작성일자</label>
        <input
          type="text"
          name="b_date"
          value={dto.b_date}
          readOnly
          onChange={updateChangeHandler}
        />
      </div>

      <div className="input">
        <label htmlFor="">내용</label>
        <textarea
          name="b_content"
          value={dto.b_content}
          onChange={updateChangeHandler}
        ></textarea>
      </div>

      <div className="button box">
        <button>
          <NavLink to="/boardlist">리스트로</NavLink>
        </button>

        <button onClick={updateButtonClickHandler}>저장하기</button>
      </div>
    </section>
  );
};
export default BoardUpdate;
