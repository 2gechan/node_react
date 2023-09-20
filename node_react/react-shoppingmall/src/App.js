import { Outlet } from "react-router-dom";
import MainNav from "./components/MainNav";
import "./css/App.css";
import "./css/MainNav.css";
import "./css/User.css";
import "./css/MainJoin.css";

import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <MainNav />
        </header>
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
