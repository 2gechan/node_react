import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const BoardDetail = () => {
  const { id } = useParams();

  const [findBoard, setFindBoard] = useState({});
  useEffect(() => {
    const getBoardOne = async (id) => {
      const res = await fetch(`/findone?id=${id}`);
      const result = await res.json();
      setFindBoard(result);
    };
    getBoardOne(id);
  }, [id]);

  const navigate = useNavigate();
  const updateButton = (e) => {
    const target = e.target;
    // alert(target.tagName);

    navigate(`/update/${target.dataset.id}`);
  };
  const deleteButton = async (e) => {
    if (window.confirm("삭제할까요?")) {
      const target = e.target;
      const id = target.dataset.id;

      const res = await fetch(`/delete?id=${id}`);
      if (res.ok) {
        navigate("/boardlist");
      }
    }
  };
  return (
    <section className="main input">
      <h1>상세페이지</h1>
      <div className="input">
        <label htmlFor="">제목</label>

        <input type="text" name="b_title" value={findBoard.b_title} readOnly />
      </div>
      <div className="input">
        <label htmlFor="">작성자</label>
        <input
          type="text"
          name="b_nickname"
          value={findBoard.b_nickname}
          readOnly
        />
      </div>
      <div className="input">
        <label htmlFor="">작성일자</label>
        <input type="text" name="b_date" value={findBoard.b_date} readOnly />
      </div>
      <div className="input">
        <label htmlFor="">내용</label>
        <textarea
          name="b_content"
          value={findBoard.b_content}
          readOnly
        ></textarea>
      </div>

      <div className="button box">
        <button>
          <NavLink to="/boardlist">리스트로</NavLink>
        </button>
        <button data-id={findBoard.b_seq} onClick={updateButton}>
          수정하기
        </button>
        <button data-id={findBoard.b_seq} onClick={deleteButton}>
          삭제하기
        </button>
      </div>
    </section>
  );
};
export default BoardDetail;
