import "./App.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function App() {
  const [boards, setBoards] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const hello = async () => {
      await fetch("/hello");
    };
    hello();
  }, []);

  // 현재 페이지 데이터 가져오기
  useEffect(() => {
    const boardList = async () => {
      const response = await fetch(`/board?page=${currentPage}`);
      const data = await response.json();
      console.log(data);
      setBoards(data);
    };
    boardList();
  }, [currentPage]);

  // 전체 페이지 수를 가져오기
  useEffect(() => {
    const boardCount = async () => {
      const response = await fetch("/count");
      const data = await response.json();
      console.log(data);
      setPageCount(Math.ceil(data / 10)); // 페이지 당 10개씩 보여주기
    };
    boardCount();
  }, []);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>작성자</th>
              <th>작성날짜</th>
              <th>제목</th>
              <th>내용</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {boards.map((item) => (
              <tr key={item.seq}>
                <td>{item.seq}</td>
                <td>{item.writer}</td>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.view_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        pageCount={pageCount} // 전체 페이지 수
        onPageChange={({ selected }) => setCurrentPage(selected)} //onPageChange: 페이지 변경 이벤트 핸들러
        containerClassName={"pagination"} // containerClassName: 페이지 링크를 감싸는 div 요소의 클래스 이름
        activeClassName={"active"} // activeClassName: 현재 선택된 페이지 링크의 클래스 이름
        previousLabel="<" // previousLabel : 이전페이지 버튼의 TEXT 지정
        nextLabel=">" // nextLabel: 다음페이지 버튼의 TEXT 지정
      />
    </>
  );
}

export default App;
