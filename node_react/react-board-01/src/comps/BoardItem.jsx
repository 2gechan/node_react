const BoardItem = (props) => {
  const { item } = props;
  return (
    <tr data-id={item.b_seq}>
      <td>{item.b_seq}</td>
      <td>{item.b_title}</td>
      {/* <td>{item.b_content}</td> */}
      <td>{item.b_nickname}</td>
      <td>{item.b_viewcount}</td>
    </tr>
  );
};
export default BoardItem;
