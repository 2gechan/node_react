import { NavLink, Outlet } from "react-router-dom";
import "./css/App.css";
import "./css/AddBoard.css";

function App() {
  return (
    <div>
      <header className="main header">
        <h1>게시판</h1>
      </header>
      <nav className="menu">
        <ul>
          <NavLink to="/">
            <li>홈</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
