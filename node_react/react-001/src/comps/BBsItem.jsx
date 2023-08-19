const BBsItem = (props) => {
  const { boardList } = props;

  const boardItemList = boardList.map((item) => {
    return (
      <tr data-id={item.id} key={item.id}>
        <td className="date">{item.date}</td>
        <td className="title">{item.title}</td>
        <td className="content">{item.content}</td>
      </tr>
    );
  });
  return <>{boardItemList}</>;
};
export default BBsItem;
