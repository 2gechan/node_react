import { useRef, useState } from "react";
import { Board } from "../data/InitBoard";
import { Form } from "react-router-dom";

const AddBoard = () => {
  const [board, setBoard] = useState(Board);
  const [image, setImage] = useState();
  const imgRef = useRef(null);

  const boardInputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBoard({ ...board, [name]: value });
    console.log(board);
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
  };

  const buttonClickHandler = async () => {
    const formData = new FormData();
    formData.append("board", board);
    formData.append("image", imgRef.current.files[0]);
    const res = await fetch("/add", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="add">
      <h1>게시글 추가</h1>
      <div className="input">
        <label htmlFor="">게시글 제목</label>
        <input
          placeholder="제목"
          name="title"
          value={board.title}
          onChange={boardInputChangeHandler}
        />
      </div>
      <div className="input">
        <label htmlFor="">작성자</label>
        <input
          placeholder="작성자"
          name="writer"
          value={board.writer}
          onChange={boardInputChangeHandler}
        />
      </div>

      <div className="input">
        <label htmlFor="">작성 날짜</label>
        <input
          type="date"
          placeholder="작성 날짜"
          name="date"
          value={board.date}
          onChange={boardInputChangeHandler}
          readOnly
        />
      </div>

      <div className="textarea">
        <label htmlFor="">게시글 내용</label>
        <textarea
          placeholder="내용"
          name="content"
          value={board.content}
          onChange={boardInputChangeHandler}
        />
      </div>

      <div className="input">
        <label htmlFor="">첨부 이미지</label>
        <input
          type="file"
          name="image"
          onChange={fileChangeHandler}
          ref={imgRef}
        />
      </div>
      <div className="addBtn">
        <button>게시글 추가</button>
      </div>
    </div>
  );
};

export default AddBoard;
