import BBsTable from "./BBsTable";
import BBsInput from "./BBsInput";
import { useState } from "react";
import InitData from "../data/InitData";
import uuid from "react-uuid";

const BBsMain = () => {
  const [board, setBoard] = useState(() => InitData());
  const [boardList, setBoardList] = useState([]);

  const addBoard = (title, content) => {
    const newBoard = { ...board, id: uuid(), title: title, content: content };
    setBoardList([...boardList, newBoard]);
  };
  return (
    <div className="bbs">
      <BBsInput board={board} setBoard={setBoard} addBoard={addBoard} />
      <BBsTable boardList={boardList} />
    </div>
  );
};

export default BBsMain;
