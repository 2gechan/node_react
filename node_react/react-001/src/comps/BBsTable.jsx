import BBsItem from "./BBsItem";

const BBsTable = (props) => {
  const { boardList } = props;

  return (
    <div className="main list">
      <table>
        <thead>
          <tr>
            <th>작성날짜</th>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <BBsItem boardList={boardList} />
        </tbody>
      </table>
    </div>
  );
};

export default BBsTable;
