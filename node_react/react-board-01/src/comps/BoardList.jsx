import { useNavigate } from "react-router-dom";
import BoardItem from "./BoardItem";
import { useState, useEffect } from "react";

const BoardList = () => {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    const getBoardListAll = async () => {
      const res = await fetch("/board");
      const result = await res.json();

      setBoard([...result]);
    };
    getBoardListAll();
  }, []);

  const navigate = useNavigate();
  const tableClickHandelr = async (e) => {
    const target = e.target;
    // alert(target.tagName);
    const tr = target.closest("TR");
    // alert(tr.dataset.id);

    navigate(`/detail/${tr.dataset.id}`);
  };
  const boardItemList = board.map((item) => {
    return <BoardItem item={item} key={item.b_seq} />;
  });
  return (
    <>
      <h1>전체 게시판</h1>
      <table className="main list">
        <thead>
          <tr>
            <th>SEQ</th>
            <th>제목</th>
            {/* <th>내용</th> */}
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody onClick={tableClickHandelr}>{boardItemList}</tbody>
      </table>
    </>
  );
};
export default BoardList;
