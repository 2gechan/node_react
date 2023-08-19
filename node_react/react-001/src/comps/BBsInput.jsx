const BBsInput = (props) => {
  const { board, setBoard, addBoard } = props;

  const addClickHandler = () => {
    const title = document.querySelector("input[name = 'b_title']").value;
    const content = document.querySelector("input[name = 'b_content']").value;

    addBoard(title, content);
  };

  return (
    <form>
      <div>
        <label>제목</label>
        <input name="b_title" placeholder="제목을 입력하세요"></input>
      </div>
      <div>
        <label>내용</label>
        <input name="b_content" placeholder="내용을 입력하세요"></input>
      </div>
      <button type="button" onClick={addClickHandler}>
        저장
      </button>
    </form>
  );
};
export default BBsInput;
