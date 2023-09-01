import { Outlet } from "react-router-dom";
import MainNav from "./components/MainNav";
import "./css/App.css";
import "./css/MainNav.css";
import "./css/User.css";

function App() {
  return (
    <div className="App">
      <header>
        <MainNav />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
