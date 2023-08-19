import BoardList from "./comps/BoardList";
import Board_write from "./comps/BoardWrite";

import "./css/list.css";
import "./css/input.css";

import BoardNav from "./layout/BoardNav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>게시판</h1>
        <p>게시판 만들기</p>
      </header>
      <BoardNav />
      <Outlet />
    </div>
  );
}

export default App;
