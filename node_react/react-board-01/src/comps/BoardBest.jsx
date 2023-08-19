import { useNavigate } from "react-router-dom";
import BoardItem from "./BoardItem";
import { useState, useEffect } from "react";

const BoardBest = () => {
  const [best, setBest] = useState([]);
  useEffect(() => {
    const getBestBoardList = async () => {
      const res = await fetch("/best");
      const result = await res.json();

      setBest([...result]);
    };
    getBestBoardList();
  }, []);

  const navigate = useNavigate();
  const tableClickHandelr = async (e) => {
    const target = e.target;
    // alert(target.tagName);
    const tr = target.closest("TR");
    // alert(tr.dataset.id);

    navigate(`/detail/${tr.dataset.id}`);
  };
  const boardItemList = best.map((item) => {
    return <BoardItem item={item} key={item.b_seq} />;
  });
  return (
    <>
      <h1>인기글</h1>
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
export default BoardBest;
